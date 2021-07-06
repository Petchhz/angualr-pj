import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const pokemons = [
            { 
                id: 1, 
                name: 'Bulbasaur', 
                type: 'Grass', 
                attack: 'Growl', 
                evolution: 'Bulbasaur -> Ivysaur -> Venusaur'
            },
            { 
                id: 2, 
                name: 'Charmander', 
                type: 'Fire', 
                attack: 'Growl', 
                evolution: 'Charmander -> Charmeleon -> Charizard'
            },
            { 
                id: 3, 
                name: 'Squirtle ', 
                type: 'Water', 
                attack: 'Tackle', 
                evolution: 'Squirtle -> Wartortle -> Blastoise'
            },
        ];
        return {pokemons};
    };
    genId(pokemons: Pokemon[]): number{
        return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 11;
    }
};