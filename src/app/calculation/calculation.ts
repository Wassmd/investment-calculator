import {Component, inject, input, signal} from '@angular/core';
import { CalculationComponent } from './dummyCal';
import { CalculatorModel } from '../calculator/calculator.model';
import {CalculationService} from './calculation.service';
import {ResultModel} from './result.model';

@Component({
  selector: 'app-calculation',
  imports: [],
  templateUrl: './calculation.html',
  styleUrl: './calculation.css'
})
export class Calculation {
  calculatorData = input<CalculatorModel | null>();
  calculatedResult = signal<ResultModel[]>([])
  calculatorService = inject(CalculationService)

  ngOnInit() {
    if (this.calculatorData) {
      this.calculatedResult.set(this.calculatorService.calculateInvestmentResult(this.calculatorData()!))
    }
  }
}
