import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { FooterComponent } from "./components/footer/footer.component";

import { LoginComponent } from "./auth/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

@NgModule({
  declarations: [
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  exports: [FooterComponent, LoginComponent, HeaderComponent, SpinnerComponent],
})
export class CoreModule {}
