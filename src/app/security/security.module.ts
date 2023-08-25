// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Parties
import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SecurityRoutingModule]
})
export class SecurityModule {}
