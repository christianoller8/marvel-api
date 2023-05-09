import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "src/app/shared/material/material.module";

import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters/components/characters/characters.component";
import { SearchComponent } from "./characters/components/search/search.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DetailComponent } from "./detail/detail/detail.component";

@NgModule({
  declarations: [CharactersComponent, SearchComponent, DetailComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CharactersModule {}
