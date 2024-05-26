import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtablissementComponent} from './add-etablissement/add-etablissement.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtablissementComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class EtablissementModule { }
