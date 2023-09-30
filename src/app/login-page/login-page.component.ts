import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const backendUrl = `${environment.backendUrl}/api/login`;
    // Send a POST request to your Node.js server for authentication
    this.http.post(backendUrl, { username: this.username, password: this.password }, { withCredentials: true })
    .subscribe((response: any) => {
        // Handle the authentication response here
        // You can redirect to the main page if authentication is successful
        if (response.message === 'Authentication successful') {
          this.router.navigate(['/main']); // Redirect to the 'main' route on successful authentication
        } else {
          // Handle authentication failure (e.g., show an error message)
        }
      });
  }

}