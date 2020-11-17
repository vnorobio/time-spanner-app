import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';



const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'home', component: NavigationComponent },
  { path: 'clasification', loadChildren: () => import('./modules/clasification/clasification.module').then(m => m.ClasificationModule) },  
  //{ path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }