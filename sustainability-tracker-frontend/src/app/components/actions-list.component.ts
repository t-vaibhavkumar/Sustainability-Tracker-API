import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-actions-list',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .actions-table {
      width: 100%;
      border-collapse: collapse;
    }
    .actions-table th, 
    .actions-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #333;
    }
    .actions-table th {
      color: #888;
      font-weight: 500;
    }
    .points-badge {
      background: rgba(76, 175, 80, 0.2);
      color: #4CAF50;
      padding: 4px 8px;
      border-radius: 12px;
      display: inline-block;
    }
  `],
  template: `
    <table class="actions-table">
      <thead>
        <tr>
          <th>Action</th>
          <th>Date</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let action of actions">
          <td>{{action.action}}</td>
          <td>{{action.date | date}}</td>
          <td>
            <span class="points-badge">
              {{action.points}} pts
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class ActionsListComponent implements OnInit {
  actions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchActions();
  }

  fetchActions(): void {
    this.apiService.getActions().subscribe({
      next: (data) => this.actions = data,
      error: (err) => console.error("Failed to fetch actions:", err)
    });
  }
}