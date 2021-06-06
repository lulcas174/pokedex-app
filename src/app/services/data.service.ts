import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService { 
  

  constructor(private http: HttpClient) { }

  getPokemons(limit:number, offset:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  //pegar mais pokémons data
  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

