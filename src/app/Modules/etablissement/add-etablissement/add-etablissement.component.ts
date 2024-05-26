import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etablissement } from '../etablissement-interface';
import { EtablissementService } from '../etablissement.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-etablissement',
  templateUrl: './add-etablissement.component.html',
  styleUrls: ['./add-etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  etablissements: Etablissement[] = [];
  etablissementForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private etablissementService: EtablissementService
  ) {}

  ngOnInit(): void {
    this.getAllEtablissements();
    this.initEtablissementForm();
  }

  initEtablissementForm() {
    this.etablissementForm = this.formBuilder.group({
      dateEntree: ['', Validators.required],
      dateSortie: ['', Validators.required],
      montant: ['', Validators.required],
      matricule: ['', Validators.required]
    });
  }

  get formControls() {
    return this.etablissementForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.etablissementForm.invalid) {
      return;
    }
    this.addEtablissement();
  }

  getAllEtablissements() {
    this.etablissementService.getAllEtablissements()
      .subscribe(etablissements => {
        this.etablissements = etablissements;
      });
  }

  addEtablissement() {
    this.etablissementService.addEtablissement(this.etablissementForm.value)
      .subscribe(() => {
        this.etablissementForm.reset();
        this.submitted = false;
        this.getAllEtablissements();
      });
  }

  deleteEtablissement(matricule: string) {
    this.etablissementService.deleteEtablissement(matricule)
      .subscribe(() => {
        this.getAllEtablissements();
      });
  }

  modifierEtablissement(matricule: string) {
    const etablissementToUpdate = this.etablissements.find(etablissement => etablissement.matricule === matricule);
    if (!etablissementToUpdate) {
      console.error('Etablissement non trouvé.');
      return;
    }
    
    this.etablissementForm.patchValue({
      dateEntree: etablissementToUpdate.dateEntree,
      dateSortie: etablissementToUpdate.dateSortie,
      montant: etablissementToUpdate.montant,
      matricule: etablissementToUpdate.matricule
    });

    // Écoutez le soumission du formulaire de modification et appelez updateEtablissement
    this.etablissementForm.valueChanges.subscribe(() => {
      this.updateEtablissement(matricule, this.etablissementForm.value);
    });
  }

  updateEtablissement(matricule: string, etablissement: Etablissement) {
    this.etablissementService.updateEtablissement(matricule, etablissement)
      .subscribe(updatedEtablissement => {
        console.log('Etablissement mis à jour avec succès :', updatedEtablissement);
        this.getAllEtablissements();
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'établissement :', error);
      });
  }
  
  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal')!);
    myModal.show();
  }
  
}
