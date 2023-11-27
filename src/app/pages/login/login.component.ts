import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    //   BrowserModule,
    //    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public usuario: any = {};
}
