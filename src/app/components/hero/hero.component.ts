import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface StockTransaction {
  date: string;
  stockName: string;
  quantity: number;
  ltp: number;
  amount: number;
  brokerage: number;
  tax: number;
  buySell: string;
  profit: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  transactions: StockTransaction[] = [];
  newTransaction: StockTransaction = this.createEmptyTransaction();

  addTransaction() {
    this.transactions.push({ ...this.newTransaction });
    this.newTransaction = this.createEmptyTransaction();
  }

  createEmptyTransaction(): StockTransaction {
    return {
      date: '',
      stockName: '',
      quantity: 0,
      ltp: 0,
      amount: 0,
      brokerage: 0,
      tax: 0,
      buySell: '',
      profit: 0,
    };
  }

  trackByTransaction(index: number, item: StockTransaction): any {
    return index;
  }
}
