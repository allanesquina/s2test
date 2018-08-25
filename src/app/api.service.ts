import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private http: HttpClient) { }
  
  getPeople(url = null) {
    return this.http.get( url || 'https://swapi.co/api/people/');
  }

  getImages(data) {
    return forkJoin(data.map((p) => this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=nltUbZBciaeDyElvQXPLB8k3ZTyiDHDX&q=star wars ${p.name}&limit=1&offset=0&rating=G&lang=en`)));
  }

  getPerson(person) {
    let forks = [];

    let movies = forkJoin(person.films.map((url) => this.http.get(url)));
    let vehicles = forkJoin(person.vehicles.map((url) => this.http.get(url)));
    let species = this.http.get(person.species[0]);
    let homeworld = this.http.get(person.homeworld);

    person.films.length > 0 && forks.push(movies);
    person.vehicles.length > 0 && forks.push(vehicles);
    forks.push(homeworld);
    forks.push(species);

    return forkJoin(forks);
  }


  
}
