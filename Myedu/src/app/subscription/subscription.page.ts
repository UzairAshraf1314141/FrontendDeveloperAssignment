import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  years: number[] = [];

  constructor() { }

  ngOnInit() {
    const startYear = new Date(1900).getFullYear();
    const currentYear = new Date().getFullYear();
    for (let i = startYear; i <= currentYear; i++) {
      this.years.push(i);
    }
  }

  range(start: number, end: number) {
    return Array.from({ length: end - start }, (_, i) => start + i);
  }
}
