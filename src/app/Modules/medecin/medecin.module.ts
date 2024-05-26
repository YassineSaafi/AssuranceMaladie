import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedecinComponent } from './medecin/medecin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedecinComponent],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ]
})
export class MedecinModule { }
