import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  login(uname: string, pword: string) {
    if (uname === 'BaHieu' && pword === '1234') {
      return 200;
    }
    if (uname === 'Admin' && pword === '1234') {
      return 101;
    } else {
      return 403;
    }
  }
}
