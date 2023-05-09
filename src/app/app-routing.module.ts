import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./core/auth/login/login.component";
import { ErrorViewComponent } from "./features/error-view/error-view.component";
import { authGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
    canActivate: [authGuard],
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./features/characters/characters.module").then(
        (m) => m.CharactersModule
      ),
    canActivate: [authGuard],
  },
  {
    path: "**",
    component: ErrorViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
