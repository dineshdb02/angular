import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface GameState {
  board: string[];
  currentPlayer: 'X' | 'O';
  winner: string | null;
  draw: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Dummyservice {

  private initialState: GameState = {
    board: Array(9).fill(''),
    currentPlayer: 'X',
    winner: null,
    draw: false
  };

  private stateSubject = new BehaviorSubject<GameState>(this.initialState);
  state$ = this.stateSubject.asObservable();

  makeMove(index: number) {
    const state = this.stateSubject.value;

    
    if (state.board[index] || state.winner || state.draw) return;

    const newBoard = [...state.board];
    newBoard[index] = state.currentPlayer;

    const winner = this.checkWinner(newBoard);
    const draw = !winner && newBoard.every(cell => cell !== '');

    const nextPlayer: 'X' | 'O' =
      state.currentPlayer === 'X' ? 'O' : 'X';

    this.stateSubject.next({
      board: newBoard,
      currentPlayer: nextPlayer,
      winner,
      draw
    });
  }

  reset() {
    this.stateSubject.next(this.initialState);
  }

  private checkWinner(board: string[]): string | null {
    const wins = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (const [a,b,c] of wins) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }
}
