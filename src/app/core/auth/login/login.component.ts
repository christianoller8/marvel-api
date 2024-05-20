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
      publicKey: ["ebe435710d107a3a1fc3115018320a9c", Validators.required],
      privateKey: ["731731ac3c6604612f67b344c7ecdff50e66b8d7", Validators.required],
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

