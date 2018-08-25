import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  people: any;

  constructor(private api: ApiService) { 
    this.prepareData = this.prepareData.bind(this);
  }

  prepareData(data) {
    this.people = data;
      this.api.getImages(data.results).subscribe((r) => {
        r.map((img, i) => {
          this.people.results[i].image = img;
        })
      })
  }

  ngOnInit() {
    this.api.getPeople().subscribe(this.prepareData);
  }

  nextPage(e) {
    e.preventDefault();
    this.api.getPeople(this.people.next).subscribe(this.prepareData)
  }

  previousPage(e) {
    e.preventDefault();
    this.api.getPeople(this.people.previous).subscribe(this.prepareData)
  }

}
