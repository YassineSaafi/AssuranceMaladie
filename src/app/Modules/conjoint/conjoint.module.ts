import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConjointComponent } from './conjoint/conjoint.component';




@NgModule({
  declarations: [
    
    ConjointComponent
    
  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule
  ]
})
export class ConjointModule { }
