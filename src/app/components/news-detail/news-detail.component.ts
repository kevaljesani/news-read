import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsStoreService } from '../../services/news-store.service';
import { BackButtonComponent } from "../custome/back-button/back-button.component";

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})

export class NewsDetailComponent implements OnInit {
  news: any;

  constructor(private router: Router,private newsServiceStore:NewsStoreService) {}

  ngOnInit(): void {
    this.news = this.newsServiceStore.getNews();
    if (this.news) {
    
      if (!this.news) {
        console.error('No news data found in router state.');
      }
    } else {
      console.error('No router state found.');
    }
  }
}
