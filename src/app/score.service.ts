import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: Number;

  constructor() { 
    this.score = 0;
  }

  setScore(val) {
    this.score += val;
  }

  getScore() {
    return this.score;
  }
}
