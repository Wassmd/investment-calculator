import { Component } from '@angular/core';
import {CalculationComponent} from './dummyCal';

@Component({
  selector: 'app-calculation',
  imports: [],
  templateUrl: './calculation.html',
  styleUrl: './calculation.css'
})
export class Calculation {
  dummyList = new CalculationComponent().data;
}
