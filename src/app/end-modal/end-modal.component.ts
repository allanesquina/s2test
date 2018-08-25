import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'end-modal',
  templateUrl: './end-modal.component.html',
  styleUrls: ['./end-modal.component.scss']
})
export class EndModalComponent implements OnInit {

  private score: Number;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit() {
    this.score = this.scoreService.getScore();
  }

}
