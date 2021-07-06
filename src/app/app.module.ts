import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonDetailComponent,
    HomepageComponent,
    PokemonsComponent,
    TopBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
