import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoinDentaire } from '../soin-dentaire-interface'; // Assurez-vous d'importer l'interface SoinDentaire
import { SoinDentaireService } from '../soin-dentaire.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-soin-dentaire',
  templateUrl: './soin-dentaire.component.html',
  styleUrls: ['./soin-dentaire.component.css']
})
export class SoinDentaireComponent implements OnInit {
  soinsDentaires: SoinDentaire[] = [];
  soinDentaireForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private soinDentaireService: SoinDentaireService
  ) {}

  ngOnInit(): void {
    this.getAllSoinsDentaires();
    this.initSoinDentaireForm();
  }

  initSoinDentaireForm() {
    this.soinDentaireForm = this.formBuilder.group({
      date: ['', Validators.required],
      dents: ['', Validators.required],
      acte: ['', Validators.required],
      horaire: ['', Validators.required],
      matriculeF: ['', Validators.required],
      prothese: ['', Validators.required]
    });
  }

  get formControls() {
    return this.soinDentaireForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.soinDentaireForm.invalid) {
      return;
    }
    this.addSoinDentaire();
  }

  getAllSoinsDentaires() {
    this.soinDentaireService.getAllSoinsDentaires()
      .subscribe(soinsDentaires => {
        this.soinsDentaires = soinsDentaires;
      });
  }

  addSoinDentaire() {
    this.soinDentaireService.addSoinDentaire(this.soinDentaireForm.value)
      .subscribe(() => {
        this.soinDentaireForm.reset();
        this.submitted = false;
        this.getAllSoinsDentaires();
      });
  }

  deleteSoinDentaire(date: Date) {
    this.soinDentaireService.deleteSoinDentaire(date)
      .subscribe(() => {
        this.getAllSoinsDentaires();
      });
  }

  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal')!);
    myModal.show();
  }
  updateSoinDentaire(date: Date, soinDentaire: SoinDentaire) {
    this.soinDentaireService.updateSoinDentaire(date, soinDentaire)
      .subscribe(updatedSoinDentaire => {
        console.log('Soin dentaire mis à jour avec succès :', updatedSoinDentaire);
        this.getAllSoinsDentaires();
      }, error => {
        console.error('Erreur lors de la mise à jour du soin dentaire :', error);
      });
}

}
