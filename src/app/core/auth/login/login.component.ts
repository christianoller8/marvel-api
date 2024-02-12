/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { md5 } from "src/app/core/utils/utils";

import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      publicKey: ["0a96d4363b0c58d41704bcd4aa21e4c1", Validators.required],
      privateKey: ["c997b623f2582a0b4c34f1c8153c13e8f82664d0", Validators.required],
    });
  }

  verify() {
    const ts = "1";
    const publicKey = this.loginForm.get("publicKey")?.value;
    const privateKey = this.loginForm.get("privateKey")?.value ;

    //Hacer hash
    const hash = md5(ts + privateKey + publicKey);
    if (this.loginForm.valid) {
      this.authService.getCharacters(ts, publicKey, hash);
    }

  }


}

