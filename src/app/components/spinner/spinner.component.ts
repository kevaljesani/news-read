import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  isLoading$: Observable<boolean> | undefined;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.isLoading$ = this.spinnerService.spinnerState$;
  }
}
