import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'nx-auth-demo-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'back-office';
}
