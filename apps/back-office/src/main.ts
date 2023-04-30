import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import   {APP_ROUTE} from '@nx-auth-demo/back-office/shell/feature'
bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTE, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
