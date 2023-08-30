import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * The `ApiPrefixInterceptor` class is an Angular HTTP interceptor that adds a prefix to the URL of outgoing HTTP requests
 * if the URL does not already start with "http://" or "https://". This prefix is obtained from the `environment.serverUrl` variable.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  /**
   * Intercepts outgoing HTTP requests and modifies the URL if necessary.
   * @param request The outgoing HTTP request.
   * @param next The next HTTP handler.
   * @returns An observable of the HTTP event.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url)) {
      const modifiedRequest = request.clone({ url: environment.serverUrl + request.url });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
