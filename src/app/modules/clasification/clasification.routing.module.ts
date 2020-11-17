import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificationCreateComponent } from './clasification-create/clasification-create.component';
import { ClasificationDetailComponent } from './clasification-detail/clasification-detail.component';
import { ClasificationListComponent } from './clasification-list/clasification-list.component';

export const routes: Routes = [
    {
      path: '',
      component: ClasificationListComponent,
      children: [
        {
          path: 'list',
          component: ClasificationListComponent,
        },
        {
            path: 'create',
            component: ClasificationCreateComponent,
        },
        {
            path: 'detail/{id}',
            component: ClasificationDetailComponent,
        },    
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ClasificationRoutingModule {
  }