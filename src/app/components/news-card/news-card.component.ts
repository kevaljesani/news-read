import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() news: any;

  constructor(private routes:Router) {}

  // Method to handle click event for viewing details
  viewDetails(news:any) {
    console.log(news)
  
    // This could be handled directly in the parent component
  }
}
