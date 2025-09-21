import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Header } from './header/header';
import { Calculator} from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [Header, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
