import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsStateComponent } from './components/smartComponents/items-state/items-state.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shopingitems',
    pathMatch: 'full'
  },
  {
    path:'shopingitems',
    component:ItemsStateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
