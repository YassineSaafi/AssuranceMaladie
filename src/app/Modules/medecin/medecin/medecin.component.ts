import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medecin } from '../medecin-interface'; // Assurez-vous d'importer l'interface Medecin
import { MedecinService } from '../medecin-service.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
  medecins: Medecin[] = [];
  medecinForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private medecinService: MedecinService
  ) {}

  ngOnInit(): void {
    this.getMedecins();
    this.initMedecinForm();
  }

  initMedecinForm() {
    this.medecinForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date: ['', Validators.required],
      honoraires: ['', Validators.required],
      visa: ['', Validators.required],
      matricule: ['', Validators.required]
    });
  }

  get formControls() {
    return this.medecinForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.medecinForm.invalid) {
      return;
    }
    this.ajouterMedecin();
  }

  getMedecins() {
    this.medecinService.getMedecins()
      .subscribe(medecins => {
        this.medecins = medecins;
      });
  }

  ajouterMedecin() {
    this.medecinService.ajouterMedecin(this.medecinForm.value)
      .subscribe(() => {
        this.medecinForm.reset();
        this.submitted = false;
        this.getMedecins();
      });
  }

  supprimerMedecin(matricule: string) {
    this.medecinService.supprimerMedecin(matricule)
      .subscribe(() => {
        this.getMedecins();
      });
  }

  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal')!);
    myModal.show();
  }
}
