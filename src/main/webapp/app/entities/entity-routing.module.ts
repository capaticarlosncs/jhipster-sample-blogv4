import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'car',
        data: { pageTitle: 'Cars' },
        loadChildren: () => import('./car/car.module').then(m => m.CarModule),
      },
      {
        path: 'document',
        data: { pageTitle: 'Documents' },
        loadChildren: () => import('./document/document.module').then(m => m.DocumentModule),
      },
      {
        path: 'content',
        data: { pageTitle: 'Contents' },
        loadChildren: () => import('./content/content.module').then(m => m.ContentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
