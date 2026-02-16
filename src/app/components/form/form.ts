import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {

  user={
  First_Name:'',
  Last_Name:'',
  Address:'',
  Pincode:'',
  Email:'',
  Phone:'',
  Gender:'',
  Dob:''



};

submit(){
 
  

  const storageKey = 'userData';
  const existingUsers= JSON.parse(localStorage.getItem(storageKey) || '[]');
  existingUsers.push({...this.user });
  localStorage.setItem('userData', JSON.stringify(existingUsers));
  console.log('save to localstorage',existingUsers);






}
}




