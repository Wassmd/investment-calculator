import {Component, output, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

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

  onSubmit() {
    console.log("Initial Investment: " + this.initialInvestment);
    console.log("Annual Investment: " + this.annualInvestment);
    console.log("Expected Return: " + this.expectedReturn);
    console.log("Duration: " + this.duration);
    this.showCalculation.emit(true)  ;
  }
}
