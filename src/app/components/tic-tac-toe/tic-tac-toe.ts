import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dummyservice } from '../../services/dummyservice';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.scss',
})
export class TicTacToe {

  state$;

  constructor(private game: Dummyservice) {
    this.state$ = this.game.state$;
  }

  move(i: number) {
    this.game.makeMove(i);
  }

  reset() {
    this.game.reset();
  }
}
