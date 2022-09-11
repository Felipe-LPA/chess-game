import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chess-game';
  graveyard:[string[]] = [[]]
  board:[string[]] = [[]];

  createGraveyard(){
    const letters = ['gb', 'gt']
    for (const letter of letters) {
      const graveyardTemp = []
      for (let i = 1; i < 9; i++) {
        graveyardTemp.push(letter + i.toString())
      }
      this.graveyard.push(graveyardTemp)
    }
  }
  createBoard(){
    for (let i = 1; i < 9; i++) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const boardTemp = []
      for (const letter of letters) {
        boardTemp.push(`b${letter+i}`)
      }
      this.board.push(boardTemp);
    }
  }

  ngOnInit(): void {
    this.createGraveyard()
    this.createBoard()
  }
}
