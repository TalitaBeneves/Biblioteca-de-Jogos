import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

// COLOCANDO A KEY (CASO N FUNCIONE TENTE COLOCAR A URL DELE NO SITE DA KEY PARA OBTER UMMA NOVA CHAVE)

  intercept(

    req: HttpRequest<any>, next: HttpHandler
    ): Observable<HttpEvent<any>> {
    req = req.clone({

      setHeaders: {
        'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams:{
        key: 'b3f20767881a46d68ddf8dcf4bc1631d',
      }
    });
    return next.handle(req);
  }
}
