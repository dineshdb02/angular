import { Component } from '@angular/core';
import { Home } from "../home/home";
import { AllCourse } from "../all-course/all-course";
import { Blogs } from "../blogs/blogs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class ProfileComponent {
  name = 'Dinesh';
  age = 24;

  showMessage = false;

  toggle() {
    this.showMessage = !this.showMessage;
  }
  }


