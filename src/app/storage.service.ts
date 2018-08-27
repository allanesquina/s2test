import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Object;

  constructor() { 
    this.storage = {};
  }

  private saveInLocal(id, item) {
    if(localStorage) {
      localStorage.setItem(id, JSON.stringify(item));
    } else {
      this.storage[id] = item;
    }
  }

  private saveInMemory(id, item) {
    return this.storage[id] = item;
  }

  private getMemoryItem(id) {
    return this.storage[id];
  }

  private getLocalItem(id) {
    let tmp = localStorage.getItem(id);
    let rank = tmp ? JSON.parse(tmp) : null;
    return rank;
  }

  setScore(val) {
    let score = this.getMemoryItem('score') || 0;
    this.saveInMemory('score', (score + val));
  }

  getScore() {
    return this.getMemoryItem('score') || 0;
  }

  setPerson(person) {
    return this.saveInMemory(person.url, person);
  }

  getPerson(person) {
    return this.getMemoryItem(person.url);
  }

  setRank(score) {
    let rank = this.getRank() || [];
    rank.push(score);
    return this.saveInLocal('rank', rank);
  }

  getRank() {
    return this.getLocalItem('rank');
  }

}
