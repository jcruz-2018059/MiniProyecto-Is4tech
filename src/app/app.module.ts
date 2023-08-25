// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Third Parties
import { authGuard } from './security/service/auth.guard';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';

// Project
import { AppComponent } from './app.component';
import { DogsComponent } from './admin/components/dogs/dogs.component';
import { WhitespaceDirective } from './shared/directives/whitespace.directive';
import { LoginComponent } from './security/login/login.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [
    DogsComponent,
    AppComponent,
    WhitespaceDirective,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    AdminModule,
    SecurityModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '597278095619-dj6a35b1uk5ol8b52d480r2ulc6r7ip6.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
