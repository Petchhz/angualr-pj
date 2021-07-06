import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonsComponent } from "./pokemons/pokemons.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'homepage', component: HomepageComponent},
    {path: 'detail/:id', component: PokemonDetailComponent},
    {path: 'pokemons', component: PokemonsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}