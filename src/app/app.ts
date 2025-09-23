import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Header } from './header/header';
import { Calculator} from './calculator/calculator';
import {Calculation} from './calculation/calculation';

@Component({
  selector: 'app-root',
  imports: [Header, Calculator, Calculation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showCalculation = false

  onShowCalculation(value: boolean) {
    this.showCalculation = value;
  }
}
