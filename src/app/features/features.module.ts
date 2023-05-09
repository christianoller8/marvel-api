import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { CharactersModule } from "./characters/characters.module";
import { ErrorViewComponent } from "./error-view/error-view.component";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ErrorViewComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    CharactersModule,
    ReactiveFormsModule,
  ],
  exports: [ErrorViewComponent, HomeModule, CharactersModule],
})
export class FeaturesModule {}
