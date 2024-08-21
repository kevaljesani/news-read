import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './news-search.component.html',
  styleUrl: './news-search.component.css'
})
export class NewsSearchComponent {

  searchText = 'bitcoin';

  @Output() search = new EventEmitter<string>();

  applySearch() {
    this.search.emit(this.searchText);
  }
}
