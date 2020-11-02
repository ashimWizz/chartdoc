import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientBalanceComponent } from './patient-balance.component'
import {PatientBalanceRoutingModule} from './patient-balance-routing.module'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PatientBalanceComponent],
  imports: [
    CommonModule,
    PatientBalanceRoutingModule,
    ReactiveFormsModule
  ]
})
export class PatientBalanceModule { }