import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conjoint } from '../conjoint-interface';
import { ConjointService } from '../conjoint-service.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-conjoint',
  templateUrl: './conjoint.component.html',
  styleUrls: ['./conjoint.component.css']
})
export class ConjointComponent implements OnInit {
  conjoints: Conjoint[] = [];
  conjointForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private conjointService: ConjointService
  ) {}

  ngOnInit(): void {
    this.getAllConjoints();
    this.initConjointForm();
  }

  initConjointForm() {
    this.conjointForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      profession: ['', Validators.required],
      taille: ['', Validators.required],
      poids: ['', Validators.required],
      maladie: [false],
      infirmite: [false],
      maladiePsychiatrique: [false],
      maladiesCancereuses: [false],
      operations: [false],
      epoqueOperations: [''],
      descriptionInfirmite: [''],
      descriptionMaladiesPsychiatrique: [''],
      descriptionMaladiesCancereuses: [''],
      descriptionOperation: ['']
    });
  }

  get formControls() {
    return this.conjointForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.conjointForm.invalid) {
      return;
    }
    this.addConjoint();
  }

  getAllConjoints() {
    this.conjointService.getAllConjoints()
      .subscribe(conjoints => {
        this.conjoints = conjoints;
      });
  }

  addConjoint() {
    this.conjointService.addConjoint(this.conjointForm.value)
      .subscribe(() => {
        this.conjointForm.reset();
        this.submitted = false;
        this.getAllConjoints();
      });
  }

  deleteConjoint(id: number) {
    this.conjointService.deleteConjoint(id)
      .subscribe(() => {
        this.getAllConjoints();
      });
  }

  modifierConjoint(id: number) {
    const conjointToUpdate = this.conjoints.find(conjoint => conjoint.id === id);
    if (!conjointToUpdate) {
      console.error('Conjoint non trouvé.');
      return;
    }
    
    this.conjointForm.patchValue({
      nom: conjointToUpdate.nom,
      prenom: conjointToUpdate.prenom,
      profession: conjointToUpdate.profession,
      taille: conjointToUpdate.taille,
      poids: conjointToUpdate.poids,
      maladie: conjointToUpdate.maladie,
      infirmite: conjointToUpdate.infirmite,
      maladiePsychiatrique: conjointToUpdate.maladiePsychiatrique,
      maladiesCancereuses: conjointToUpdate.maladiesCancereuses,
      operations: conjointToUpdate.operations,
      epoqueOperations: conjointToUpdate.epoqueOperations,
      descriptionInfirmite: conjointToUpdate.descriptionInfirmite,
      descriptionMaladiesPsychiatrique: conjointToUpdate.descriptionMaladiesPsychiatrique,
      descriptionMaladiesCancereuses: conjointToUpdate.descriptionMaladiesCancereuses,
      descriptionOperation: conjointToUpdate.descriptionOperation
    });

    // Écoutez le soumission du formulaire de modification et appelez updateConjoint
    this.conjointForm.valueChanges.subscribe(() => {
      this.updateConjoint(id, this.conjointForm.value);
    });
  }

  updateConjoint(id: number, conjoint: Conjoint) {
    this.conjointService.updateConjoint(id, conjoint)
      .subscribe(updatedConjoint => {
        console.log('Conjoint mis à jour avec succès :', updatedConjoint);
        this.getAllConjoints();
      }, error => {
        console.error('Erreur lors de la mise à jour du conjoint :', error);
      });
  }

  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal')!);
    myModal.show();
  }
}
