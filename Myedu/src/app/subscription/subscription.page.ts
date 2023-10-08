import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  years: number[] = [];
  width90 = false;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width90 = (window.innerWidth < 950 && window.innerHeight < 1020);
  }
}
