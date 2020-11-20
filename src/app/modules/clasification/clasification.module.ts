import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasificationListComponent } from './clasification-list/clasification-list.component';
import { ClasificationDetailComponent } from './clasification-detail/clasification-detail.component';
import { ClasificationCreateComponent } from './clasification-create/clasification-create.component';
import { ClasificationRoutingModule } from './clasification.routing.module';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    ClasificationListComponent, 
    ClasificationDetailComponent, 
    ClasificationCreateComponent
  ],
  imports: [
    CommonModule,
    ClasificationRoutingModule,
    MaterialModule
  ]
})
export class ClasificationModule { }
