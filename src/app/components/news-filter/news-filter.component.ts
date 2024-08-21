import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './news-filter.component.html',
  styleUrl: './news-filter.component.css'
})
export class NewsFilterComponent {
  selectedCountry = '';
  fromDate = '';
  toDate = '';
  public maxDate: any = new Date();

  constructor() {
    this.setMaxDate();
  }

  setMaxDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); 
    const day = ('0' + today.getDate()).slice(-2); 

    this.maxDate = `${year}-${month}-${day}`;
  }

  @Output() filterChange = new EventEmitter<any>();

  getCountryLabel(countryCode: string): string {
    const countryLabels: { [key: string]: string } = {
      'in': 'India',
      'us': 'United States',
      'gb': 'United Kingdom'
    };
    return countryLabels[countryCode as keyof typeof countryLabels] || 'Select Country';
  }
  applyFilter() {
    this.filterChange.emit({
      country: this.selectedCountry,
      from: this.fromDate,
      to: this.toDate,
    });
  }
}
