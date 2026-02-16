import { Component, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Dum } from "./components/dum/dum";
import { AuthModule } from "./auth/auth-module";
import { Form } from "./components/form/form";
import { DirectiveDemo } from "./components/directive-demo/directive-demo";
import { TicTacToe } from "./components/tic-tac-toe/tic-tac-toe";
//import { Childcomponent } from "./child/child.component";



@Component({
  selector: 'app-root',
  imports: [CommonModule, AuthModule,  TicTacToe],
  standalone:true,
  templateUrl: './app.html',
  // template:'.app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('my-angular-app');
   count = 0;
  show = true;

  changeCt(data : any){
    console.log(data);
    
    // this.count = ++ this.count;
  }
}
