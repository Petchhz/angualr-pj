import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 3);
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
    }

}
