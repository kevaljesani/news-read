export interface Http {
}
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   console.log("show spinner")
    this.spinnerService.show();
    return next.handle(request).pipe(
      finalize(() => {this.spinnerService.hide()
        console.log('Hiding spinner');
      }),
      catchError((error: HttpErrorResponse) => {
        this.spinnerService.hide();
        // Handle error if needed
        throw error;
      })
    );
  }
}
