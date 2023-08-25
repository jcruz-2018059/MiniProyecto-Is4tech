// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project
import { DogsComponent } from './components/dogs/dogs.component';
import { authGuard } from '../security/service/auth.guard';

const routes: Routes = [
  { path: 'dogs', component: DogsComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
