import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-subscribe',
  templateUrl: './how-to-subscribe.component.html',
  styleUrls: ['./how-to-subscribe.component.scss'],
})
export class HowToSubscribeComponent implements OnInit {
  showBackgroundImage = true;
  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showBackgroundImage = !(window.innerWidth < 768 && window.innerHeight < 1020);
  }

}

