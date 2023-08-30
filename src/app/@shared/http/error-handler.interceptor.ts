import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger } from '../logger.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  private log: Logger;

  constructor() {
    this.log = new Logger('ErrorHandlerInterceptor');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        this.errorHandler(error);
        return throwError(error);
      })
    );
  }

  private errorHandler(error: any): void {
    if (!environment.production) {
      this.log.error('Request error', error);
    }
  }
}
