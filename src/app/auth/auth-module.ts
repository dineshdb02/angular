import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeDemo } from '../life-demo/life-demo';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StandaloneDemo } from '../components/standalone-demo/standalone-demo';



@NgModule({
  declarations: [
    StandaloneDemo
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
       
  ],
  exports:[StandaloneDemo]
})
export class AuthModule { }
