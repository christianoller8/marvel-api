import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharactersComponent } from "./characters/components/characters/characters.component";

import { DetailComponent } from "./detail/detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: CharactersComponent,
  },
  {
    path: ":id",
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
