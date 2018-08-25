import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  private users: Array<any>;

  constructor(private StorageService: StorageService) { }

  ngOnInit() {
    this.users = this.StorageService.getRank()
    this.users.sort(function(a, b) {
      return parseInt(b.score) - parseInt(a.score);
    });
  }

}
