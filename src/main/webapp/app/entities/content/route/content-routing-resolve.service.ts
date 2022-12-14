import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IContent } from '../content.model';
import { ContentService } from '../service/content.service';

@Injectable({ providedIn: 'root' })
export class ContentRoutingResolveService implements Resolve<IContent | null> {
  constructor(protected service: ContentService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IContent | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((content: HttpResponse<IContent>) => {
          if (content.body) {
            return of(content.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}
