import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Adherent } from '../adherent';
import { AdherentService } from '../adherent.service';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {

  adherentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private adherentService: AdherentService) { }

  ngOnInit(): void {
    this.adherentForm = this.formBuilder.group({
      nonFamille: ['', Validators.required],
      prenom: ['', Validators.required],
      datenaissance: ['', Validators.required],
      lieu: ['', Validators.required],
      sexe: ['', Validators.required],
      situationFamillle: ['', Validators.required],
      dateadherentAssurance: ['', Validators.required],
      cin: ['', Validators.required],
      matriculeCnam: ['', Validators.required],
      telephone: ['', Validators.required],
      rib: ['', Validators.required],
      adresseAdherent: ['', Validators.required],
      gouvernement: ['', Validators.required],
      profession: ['', Validators.required],
      montantSalaire: ['', Validators.required],
      taille: ['', Validators.required],
      poids: ['', Validators.required],
      maladie: [false],
      infirmite: [false],
      maladiesPsychiatrique: [false],
      maladiesCancerceuses: [false],
      operation: [false],
      epoqueOperations: [''],
      discriptionMaladiesPsychiatrique: [''],
      discriptionMaladiesCancereuses: [''],
      descriptionOperations: [''],
      beneficaire: [''],
      description: ['']
    });
  }

  onSubmit() {
    if (this.adherentForm.invalid) {
      return;
    }

    const newAdherent: Adherent = this.adherentForm.value;
    this.adherentService.addAdherent(newAdherent).subscribe(
      () => {
        console.log('Adherent ajouté avec succès');
        
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'adhérent:', error);
        
      }
    );
  }
}
