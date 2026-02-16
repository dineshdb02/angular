import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile';
import { AllCourse } from './all-course/all-course';
//import { Home } from './home/home';
import { Blogs } from './blogs/blogs';

export const routes: Routes = [
  {path:'', redirectTo: '/profile', pathMatch:'full'},
  { path: '\profile', component: ProfileComponent },
  {path: '\all-course', component:AllCourse},
  {path: '\blogs',component:Blogs},


  {path: '**', redirectTo:'/profile'}
  
];
