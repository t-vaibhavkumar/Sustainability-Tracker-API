import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsListComponent } from './components/actions-list.component';
import { AddActionComponent } from './components/add-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ActionsListComponent, AddActionComponent], // ✅ Added CommonModule for proper rendering
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sustainability-frontend';
}
