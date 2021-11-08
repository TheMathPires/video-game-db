import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptors implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': '4394663d6bmsh97e9c6c4d653570p1d8534jsn76fb8a7b702c',
      },
      setParams: {
        key: '553c078af88b4f7782b9e3f841be8840',
      }
    });
    return next.handle(req);
  }

}
