import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnfantInterface } from '../enfant-interface'; // Assurez-vous d'importer l'interface Enfant
import { EnfantService } from '../enfant.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  enfants: EnfantInterface [] = [];
  enfantForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private enfantService: EnfantService // Assurez-vous d'importer le service EnfantService
  ) {}

  ngOnInit(): void {
    this.getAllEnfants();
    this.initEnfantForm();
  }

  initEnfantForm() {
    this.enfantForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      taille: ['', Validators.required],
      poids: ['', Validators.required],
      maladie: [''],
      infirmite: [''],
      maladiesPsychiatrique: [''],
      maladiesCancereuses: [''],
      operations: [''],
      descriptionMaladies: [''],
      descriptionInfirmite: [''],
      descriptionMaladiesPsychiatrique: [''],
      descriptionMaladiesCancereuses: [''],
      descriptionOperations: ['']
    });
  }

  get formControls() {
    return this.enfantForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.enfantForm.invalid) {
      return;
    }
    this.addEnfant();
  }

  getAllEnfants() {
    this.enfantService.getAllEnfants()
      .subscribe(enfants => {
        this.enfants = enfants;
      });
  }

  addEnfant() {
    this.enfantService.addEnfant(this.enfantForm.value)
      .subscribe(() => {
        this.enfantForm.reset();
        this.submitted = false;
        this.getAllEnfants();
      });
  }

  deleteEnfant(id: number) {
    this.enfantService.deleteEnfant(id)
      .subscribe(() => {
        this.getAllEnfants();
      });
  }

  modifierEnfant(id: number) {
    const enfantToUpdate = this.enfants.find(enfant => enfant.id === id);
    if (!enfantToUpdate) {
      console.error('Enfant non trouvé.');
      return;
    }
    
    this.enfantForm.patchValue({
      nom: enfantToUpdate.nom,
      prenom: enfantToUpdate.prenom,
      dateNaissance: enfantToUpdate.dateNaissance,
      taille: enfantToUpdate.taille,
      poids: enfantToUpdate.poids,
      maladie: enfantToUpdate.maladie,
      infirmite: enfantToUpdate.infirmite,
      maladiesPsychiatrique: enfantToUpdate.maladiesPsychiatrique,
      maladiesCancereuses: enfantToUpdate.maladiesCancereuses,
      operations: enfantToUpdate.operations,
      descriptionMaladies: enfantToUpdate.descriptionMaladies,
      descriptionInfirmite: enfantToUpdate.descriptionInfirmite,
      descriptionMaladiesPsychiatrique: enfantToUpdate.descriptionMaladiesPsychiatrique,
      descriptionMaladiesCancereuses: enfantToUpdate.descriptionMaladiesCancereuses,
      descriptionOperations: enfantToUpdate.descriptionOperations
    });

    // Écoutez le soumission du formulaire de modification et appelez updateEnfant
    this.enfantForm.valueChanges.subscribe(() => {
      this.updateEnfant(id, this.enfantForm.value);
    });
  }

  updateEnfant(id: number, enfant: EnfantInterface) {
    this.enfantService.updateEnfant(id, enfant)
      .subscribe(updatedEnfant => {
        console.log('Enfant mis à jour avec succès :', updatedEnfant);
        this.getAllEnfants();
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'enfant :', error);
      });
  }

  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal')!);
    myModal.show();
  }
}
