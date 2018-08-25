import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Input() person: any;

  private isLoaded: Boolean;

  constructor(private api: ApiService) { 
    this.isLoaded = true;
  }

  ngOnInit() {
    if(this.person.isLoaded) return;
    this.isLoaded = false;

    this.api.getPerson(this.person).subscribe((result) => {
      const {films, vehicles} = this.person;
      let pos = 0;
      
      if(films.length > 0) {
        this.person.films = result[pos].map(data => data.title);
        pos++;
      }

      if(vehicles.length > 0) {
        this.person.vehicles = result[pos].map(data => data.name);
        pos++;
      }

      this.person.homeworld = result[pos].name;
      pos++;
      this.person.specie = result[pos].name;
      pos++;

      this.person.isLoaded = true;
      this.isLoaded = true;
    });
  }

  close() {
    this.closeModal.emit();
  }

}
