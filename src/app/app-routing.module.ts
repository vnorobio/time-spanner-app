import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo:'modules', pathMatch: 'full' },
  { path: 'modules', 
    component: NavigationComponent,
    children: [
      { path: '', redirectTo:'clasification', pathMatch: 'full' },
      { path: 'clasification', loadChildren: () => import('./modules/clasification/clasification.module').then(m => m.ClasificationModule) },
      { path: '**', component: PageNotFoundComponent },
    ]
  },
  
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }