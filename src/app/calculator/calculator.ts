import {Component, output, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CalculatorModel} from './calculator.model';

@Component({
  selector: 'app-calculator',
    imports: [
        FormsModule
    ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  initialInvestment = "";
  annualInvestment = "";
  expectedReturn = "";
  duration = "";

 showCalculation = output<boolean>();
 calculateResult = output<CalculatorModel>();

  onSubmit() {
    console.log("Initial Investment: " + this.initialInvestment);
    console.log("Annual Investment: " + this.annualInvestment);
    console.log("Expected Return: " + this.expectedReturn);
    console.log("Duration: " + this.duration);
    this.showCalculation.emit(true);
    this.calculateResult.emit({
      initialInvestment: parseFloat(this.initialInvestment),
      annualInvestment: parseFloat(this.annualInvestment),
      expectedReturn: parseFloat(this.expectedReturn),
      duration: parseInt(this.duration)
    });
  }
}
