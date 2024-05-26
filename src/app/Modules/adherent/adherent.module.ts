import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdherentComponent } from './adherent/adherent.component';
import { AddAdherentComponent } from './add-adherent/add-adherent.component';
import { GetAdherentComponent } from './get-adherent/get-adherent.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdherentComponent, AddAdherentComponent, GetAdherentComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AdherentModule { }
