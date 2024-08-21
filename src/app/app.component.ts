import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NewsSearchComponent } from "./components/news-search/news-search.component";
import { NewsFilterComponent } from "./components/news-filter/news-filter.component";
import { NewsCardComponent } from "./components/news-card/news-card.component";
import { CommonModule } from '@angular/common';
// import { NewsListingComponent } from "./components/news-list/news-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, SpinnerComponent, NewsSearchComponent, NewsFilterComponent, NewsCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-update';
}
