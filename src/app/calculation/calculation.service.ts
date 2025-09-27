import {CalculatorModel} from '../calculator/calculator.model';
import {ResultModel} from './result.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  calculateInvestmentResult(inputs: CalculatorModel): ResultModel[] {
    return [
      { year: 1, investmentValue: 1000, totalInterest: 50, investedCapital: 1000 },
      { year: 2, investmentValue: 2100, totalInterest: 105, investedCapital: 2000 },
      { year: 3, investmentValue: 3315, totalInterest: 157.5, investedCapital: 3000 },
      { year: 4, investmentValue: 4645.75, totalInterest: 207.75, investedCapital: 4000 },
      { year: 5, investmentValue: 6107.04, totalInterest: 256.25, investedCapital: 5000 }
    ];
  }
}
