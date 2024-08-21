import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsStoreService {
  private news: any;

  setNews(news: any) {
    this.news = news;
  }

  getNews() {
    return this.news;
  }
}
