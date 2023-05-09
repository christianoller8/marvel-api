/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { LocalStorageService } from "./localstorage.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private router: Router,
    private http : HttpClient,
    private localStorage: LocalStorageService) {
  }

    getCharacters(ts: string, publicKey: string, hash: string) {
      const reqParams = new HttpParams()
        .set("ts", ts)
        .set("apikey", publicKey)
        .set("hash", hash);
      const res = this.http.get(environment.url + "v1/public/characters", {params : reqParams});

      let code: unknown;
      res.subscribe((data) => {
        const reqInfo : any = data as any;
        code = reqInfo.code;

        //Si code == 200 guardar en local
        if(this.verifyCode(code)){
          this.localStorage.setHash(hash);
          this.router.navigate(["/home"]);
        }
        else{
          this.router.navigate(["/login"]);
        }
      });

    }

    isLoggedIn(): boolean {
      const hash = this.localStorage.getHash();
      return hash ? true : false;
    }

    verifyCode(code:unknown) : boolean{
      return code === 200;
    }
}
