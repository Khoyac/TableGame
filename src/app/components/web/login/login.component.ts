import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = { name: '', room: '' };

  constructor(private http: HttpClient) {}


  onSubmit(form: NgForm) {
    const url = '/lobby';
    const data = { name: this.model.name, room: this.model.room };

    this.http.post(url, data).subscribe(response => {
      console.log('Response:', response);
      // Aquí puedes hacer lo que necesites con la respuesta
    });
  }

}
