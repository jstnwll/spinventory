import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CollectionComponent } from './collection/collection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'spinventory';
}
