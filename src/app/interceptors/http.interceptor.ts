import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>> => {
  let headers = req.headers;

  if (!headers.has('Content-Type') && !(req.body instanceof FormData)) {
    headers = headers.set('Content-Type', 'application/json');
  }

  const clonedRequest = req.clone({
    headers,
    withCredentials: true,
  });

  return next(clonedRequest).pipe(
    catchError((error) => {
      if ([404].includes(error.status)) {
        console.log('Page not found');
      }
      console.error('Error:', error);
      return throwError(() => new Error('Error: ', error.message || 'Unknown error'));
    }),
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event = event.clone({ body: event.body });
      }
      return event;
    })
  );
};
