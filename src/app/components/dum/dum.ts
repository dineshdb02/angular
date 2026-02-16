import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@Component({
  selector: 'app-dum',
  imports:[CommonModule,FormsModule,ReactiveFormsModule,NgxPaginationModule],
  standalone:true,
  templateUrl: './dum.html',
  styleUrl: './dum.scss',
})
export class Dum  {

  userdatalist:any[]=[];
  page=1;
  searchText: any;
 
  profileform= new FormGroup({

    name:new FormControl(""),
    address:new FormControl(''),
    pincode:new FormControl(''),
    email:new FormControl(''),
    phone: new FormControl(''),
    gender:new FormControl(''),
    DOB: new FormControl(''),

  });
  
// noData: TemplateRef<NgIfContext<boolean>>|null;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}



  preview(){
     if (isPlatformBrowser(this.platformId)) {
      this.userdatalist = JSON.parse(localStorage.getItem('userData') || '[]');
  
      // this.page=1;
  // this.userdatalist = JSON.parse(localStorage.getItem('dummy') || '[]');
   }

  }


  submit(){
 
  const storageKey = 'userData';
  const existingUsers= JSON.parse(localStorage.getItem(storageKey) || '[]');
  existingUsers.push({...this.profileform.value});
  localStorage.setItem('userData', JSON.stringify(existingUsers));
  console.log('save to localstorage',existingUsers);
  this.page=1;

}

get filteredData() {
    if (!this.searchText) {
      return this.userdatalist;
    }
    return this.userdatalist.filter(user => 
      user.name?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}