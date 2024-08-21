import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsCardComponent } from "../news-card/news-card.component";
import { NewsSearchComponent } from "../news-search/news-search.component";
import { NewsFilterComponent } from "../news-filter/news-filter.component";
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { NewsStoreService } from '../../services/news-store.service';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule,NewsCardComponent, NewsSearchComponent, NewsFilterComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})

export class NewsListingComponent implements OnInit {
  newsList: any[] = [];
  searchQuery: string = "bitcoin"; // Default search query
  filterParams = { country: '', from: '', to: '', query: this.searchQuery };

  constructor(private newsApi: NewsService, private router: Router, private setNewsData: NewsStoreService) {}

  ngOnInit(): void {
    this.fetchNews(); // Fetch news on initialization
  }

  fetchNews() {
    const hasQuery = !!this.filterParams.query;
    const hasCountry = !!this.filterParams.country;
    const hasFromOrTo = !!(this.filterParams.from || this.filterParams.to);
  
    if (hasQuery && hasCountry) {
      // Case 5 & 6: Both query and country are present
      this.newsApi.getSources(
        this.filterParams.query,
        this.filterParams.from,
        this.filterParams.to,
        this.filterParams.country
      ).subscribe((data) => {
        this.newsList = data.sources;
      });
    } else if (hasQuery) {
      // Case 1 & 2: Query is present (with or without from/to)
      this.newsApi.getNews(
        this.filterParams.query,
        this.filterParams.from,
        this.filterParams.to
      ).subscribe((data) => {
        this.newsList = data.articles;
      });
    } else if (hasCountry) {
      // Case 3 & 4: Country is present (with or without from/to)
      this.newsApi.getTopHeadlines(
        this.filterParams.country,
        this.filterParams.from,
        this.filterParams.to
      ).subscribe((data) => {
        this.newsList = data.articles;
      });
    } else {
      // Handle the case when no filters or query are present
      // Possibly show an error or default message
    }
  }
  
  

  applyFilter(event: any) {
    this.filterParams = { ...this.filterParams, ...event };

    // If search query is empty, ensure it doesn't persist
    if (!this.filterParams.query) {
      this.filterParams.query = '';
    }

    this.fetchNews();
  }

  applySearch(searchText: string) {
    this.filterParams.query = searchText;

    // If search query is empty after the search, reset filters
    if (!this.filterParams.query) {
      this.filterParams.country = '';
      this.filterParams.from = '';
      this.filterParams.to = '';
    }

    this.fetchNews();
  }

  viewDetails(news: any) {
    this.setNewsData.setNews(news);
    this.router.navigate(['news-deatils']);
  }
}
