import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'end-modal',
  templateUrl: './end-modal.component.html',
  styleUrls: ['./end-modal.component.scss']
})
export class EndModalComponent implements OnInit {

  private score: Number;
  private seeRank: Boolean;
  private validationError: Boolean;

  constructor(private StorageService: StorageService) {}

  ngOnInit() {
    this.score = this.StorageService.getScore();
  }

  check(name, email) {
    if(!name || !email) {
      this.validationError = true;
      return false;
    } 

    this.validationError = false;
    return true;
  }


  handleClickSaveRank(name, email) {
    if(this.check(name, email)) {
      let score = this.score;
      this.StorageService.setRank({ name, email, score})
      this.seeRank = true;
    }
  }

}
