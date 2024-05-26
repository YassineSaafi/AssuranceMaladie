import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinSoinsComponent} from './add-bulletin-sions/add-bulletin-sions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BulletinSoinsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class BulletinSionsModule { }
