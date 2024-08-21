import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CONSTANCE} from '../utils/Constances'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  // getNews(country: string, query: string, from: string, to: string): Observable<any> {
  //   // const url = `${CONSTANCE.API_URL}?q=${query}&from=${from}&to=${to}&country=${country}&apiKey=${CONSTANCE.API_KEY}`;
  //   const url = `${CONSTANCE.API_URL}?q=${query}&from=${from}&to=${to}&apiKey=${CONSTANCE.API_KEY}`;
  //   return this.http.get(url);
  // }


  getNews(query: string, from: string = '', to: string = ''): Observable<any> {
    const url = `${CONSTANCE.API_URL}everything`;
    let params = new HttpParams()
      .set('q', query)
      .set('from', from)
      .set('to', to)
      .set('apiKey', CONSTANCE.API_KEY);
    return this.http.get(url, { params });
  }

  getTopHeadlines(country: string = '', from: string = '', to: string = ''): Observable<any> {
    const url = `${CONSTANCE.API_URL}top-headlines`;
    let params = new HttpParams().set('apiKey', CONSTANCE.API_KEY);

    if (country) {
      params = params.set('country', country);
    }

    if (from) {
      params = params.set('from', from);
    }

    if (to) {
      params = params.set('to', to);
    }

    return this.http.get(url, { params });
  }

  /**
   * Fetch all sources (if needed, but not used in your case).
   * 
   * @param query Optional search query for sources
   * @returns Observable with the list of sources
   */
  getSources(query: string, from: string = '', to: string = '',country: string = ''): Observable<any> {
    const url = `${CONSTANCE.API_URL}top-headlines/sources`;
    let params = new HttpParams().set('apiKey', CONSTANCE.API_KEY);

    if (query) {
      params = params.set('q', query);
    }
    if (country) {
      params = params.set('country', country);
    }

    if (from) {
      params = params.set('from', from);
    }

    if (to) {
      params = params.set('to', to);
    }

    return this.http.get(url, { params });
  }

}
