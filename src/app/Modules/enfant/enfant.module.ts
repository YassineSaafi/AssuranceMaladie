import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnfantComponent } from './enfant/enfant.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnfantComponent],
  imports: [
    CommonModule ,
    ReactiveFormsModule
  ]
})
export class EnfantModule { }
