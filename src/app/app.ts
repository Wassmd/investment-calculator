import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Calculator} from './calculator/calculator';
import {Calculation} from './calculation/calculation';
import {CalculatorModel} from './calculator/calculator.model';

@Component({
  selector: 'app-root',
  imports: [Header, Calculator, Calculation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showCalculation = false
  inputData = signal<CalculatorModel | null>(null);

  onShowCalculation(value: boolean) {
    this.showCalculation = value;
  }

  onCalculationParameters($event: CalculatorModel) {
    this.inputData.set($event);
  }
}
