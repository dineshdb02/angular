import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-standalone-demo',
  standalone:false,  
  templateUrl: './standalone-demo.html',
  styleUrl: './standalone-demo.scss',
})
export class StandaloneDemo {
   profileform= new FormGroup({

    name:new FormControl(""),
    address:new FormControl(''),
    pincode:new FormControl(''),
    email:new FormControl(''),
    phone: new FormControl(''),
    gender:new FormControl(''),
    DOB: new FormControl(''),

  });

}
