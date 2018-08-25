import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private gameOver: Boolean;

  constructor() {
    this.gameOver = false;
  }

  ngOnInit() {}

  openEndModal() {
    console.log('open')
    this.gameOver = true;
  }



}
