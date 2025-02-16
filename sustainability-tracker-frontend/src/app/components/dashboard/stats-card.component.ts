// src/app/components/dashboard/stats-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .stats-card {
      background: #1e1e1e;
      border-radius: 8px;
      padding: 16px;
      margin: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .card-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .card-value {
      font-size: 24px;
      font-weight: bold;
      color: white;
    }
    .green { color: #4CAF50; border: 1px solid #4CAF50; }
    .blue { color: #2196F3; border: 1px solid #2196F3; }
    .purple { color: #9C27B0; border: 1px solid #9C27B0; }
  `],
  template: `
    <div class="stats-card {{color}}">
      <h3 class="card-title">{{title}}</h3>
      <div class="card-value">{{value}}</div>
    </div>
  `
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() color: string = 'green';
}