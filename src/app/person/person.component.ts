import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { StorageService } from '../storage.service';

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
  private isCorrect: Boolean;

  @Input() data: any;
  @ViewChild('personName') private elementRef: ElementRef;

  constructor(private StorageService: StorageService) {
    this.score = 10;
    this.hasPlayed = false;
  }

  ngOnInit() {
    let person = this.StorageService.getPerson(this.data);
    if(person) {
      this.data = person;
      this.hasPlayed = person.hasPlayed;
    }
  }

  toggleInput(e) {
    e.preventDefault();
    this.showInput = !this.showInput;
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    }, 100);
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
    if(this.data.hasPlayed) return;

    if(this.compareName(name)) {
      this.StorageService.setScore(this.score);
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }

    this.data.personName = name;
    this.data.hasPlayed = true;
    this.StorageService.setPerson(this.data);

    this.hasPlayed = true;
  }
}
