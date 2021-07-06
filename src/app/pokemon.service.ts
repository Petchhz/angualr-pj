import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {

    /*private pokemonsUrl = 'api/pokemons';*/

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient){}
        
    pokemonsUrl = 'api/pokemons';    

    getPokemons(): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonsUrl)
    }

    getPokemon(id: number){
        return this.http.get<Pokemon>(this.pokemonsUrl + "/" + id);
    }

    searchPokemon(term: string): Observable<Pokemon[]>{
        if(!term.trim()){
            return of([]);
        }
        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`)
    }
}