import { Component, Input } from '@angular/core';
import { NgIf,NgFor, CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../invstment.service';

@Component({
  selector: 'app-investment-results',
  
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  /**
  @Input() results?: {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number}[] ;
  */

  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultData;
  }

}
