import { Routes } from '@angular/router';
import { NewsListingComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

export const routes: Routes = [
    { path: '', component: NewsListingComponent },
    { path: 'news-deatils', component: NewsDetailComponent },
];
