import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HomePageComponent, CarouselComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, HomeRoutingModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
