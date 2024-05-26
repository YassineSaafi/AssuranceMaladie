import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BulletinSions } from '../bulletin-sions';
import { BulletinSionsService } from '../bulletin-sions.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-bulletin-soins',
  templateUrl: './add-bulletin-sions.component.html',
  styleUrls: ['./add-bulletin-sions.component.css']
})
export class BulletinSoinsComponent implements OnInit {
  bulletinsSions: BulletinSions[] = [];
  bulletinSionsForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private bulletinSionsService: BulletinSionsService
  ) {}

  ngOnInit(): void {
    this.getAllBulletinsSions();
    this.initBulletinSionsForm();
  }

  initBulletinSionsForm() {
    this.bulletinSionsForm = this.formBuilder.group({
      matricule: ['', Validators.required],
      codePrestataire: ['', Validators.required]
    });
  }

  get formControls() {
    return this.bulletinSionsForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.bulletinSionsForm.invalid) {
      return;
    }
    this.addBulletinSions();
  }

  getAllBulletinsSions() {
    this.bulletinSionsService.getAllBulletinsSions()
      .subscribe(bulletinsSions => {
        this.bulletinsSions = bulletinsSions;
      });
  }

  addBulletinSions() {
    this.bulletinSionsService.addBulletinSions(this.bulletinSionsForm.value)
      .subscribe(() => {
        this.bulletinSionsForm.reset();
        this.submitted = false;
        this.getAllBulletinsSions();
      });
  }

  deleteBulletinSions(id: number) {
    this.bulletinSionsService.deleteBulletinSions(id)
      .subscribe(() => {
        this.getAllBulletinsSions();
      });
  }

  modifierBulletinSions(id: number) {
    const bulletinToUpdate = this.bulletinsSions.find(bulletin => bulletin.id === id);
    if (!bulletinToUpdate) {
      console.error('Bulletin de soins non trouvé.');
      return;
    }
    
    this.bulletinSionsForm.patchValue({
      matricule: bulletinToUpdate.matricule,
      codePrestataire: bulletinToUpdate.codePrestataire
    });

    // Écoutez le soumission du formulaire de modification et appelez updateBulletinSions
    this.bulletinSionsForm.valueChanges.subscribe(() => {
      this.updateBulletinSions(id, this.bulletinSionsForm.value);
    });
  }

  updateBulletinSions(id: number, bulletinSions: BulletinSions) {
    this.bulletinSionsService.updateBulletinSions(id, bulletinSions)
      .subscribe(updatedBulletinSions => {
        console.log('Bulletin de soins mis à jour avec succès :', updatedBulletinSions);
        this.getAllBulletinsSions();
      }, error => {
        console.error('Erreur lors de la mise à jour du bulletin de soins :', error);
      });
  }
  
  openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal')!);
    myModal.show();
  }
  
}
