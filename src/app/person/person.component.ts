import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  private showInput: Boolean;
  private showModal: Boolean;
  private score: Number;
  private hasPlayed: Boolean;
  private personName: String;

  @Input() data: Object;

  constructor(private scoreService: ScoreService) {
    this.score = 10;
    this.hasPlayed = false;
    this.personName = '';
  }

  ngOnInit() {
    console.log(this)
  }

  toggleInput(e) {
    e.preventDefault();
    this.showInput = !this.showInput;
  }

  toggleModal(e) {
    if(e) {
      e.preventDefault();
    }
    this.showModal = !this.showModal;
    this.score = 5;
  }

  compareName(name) {
    return this.data.name.toLowerCase().trim() === name.toLowerCase().trim();
  }

  play(name) {
    if(this.hasPlayed) return;

    if(this.compareName(name)) {
      this.scoreService.setScore(this.score);
    }

    this.personName = name;
    this.hasPlayed = true;
  }
}
