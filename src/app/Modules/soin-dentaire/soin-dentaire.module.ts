import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoinDentaireComponent } from './soin-dentaire/soin-dentaire.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    SoinDentaireComponent,
   
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule ,
    CommonModule
  ],
  exports: [SoinDentaireComponent] 
})
export class SoinDentaireModule { }
