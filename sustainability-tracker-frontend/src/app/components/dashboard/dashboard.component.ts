import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatsCardComponent } from './stats-card.component';
import { ActionsListComponent } from '../actions-list.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, StatsCardComponent, ActionsListComponent],
  styles: [`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    /* Style for the root container */
    .root-container {
      min-height: 100vh;
      margin: 0;
      padding: 0;
      background: #121212;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
    }

    .dashboard {
      padding: 32px;
      color: white;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 32px;
    }

    .header h1 {
      font-size: 32px;
      color: #4CAF50;
      margin-bottom: 8px;
      font-weight: 600;
    }

    .header p {
      color: #888;
      font-size: 16px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .actions-section {
      background: #1e1e1e;
      border-radius: 12px;
      padding: 24px;
      border: 1px solid #333;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 32px;
    }

    .actions-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #333;
    }

    .actions-header h2 {
      font-size: 24px;
      color: #4CAF50;
      margin: 0;
    }

    .add-button {
      background: #4CAF50;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }

    .add-button:hover {
      background: #45a049;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
    }
  `],
  template: `
    <div class="root-container">
      <div class="dashboard">
        <!-- Header Section -->
        <div class="header">
          <h1>Sustainability Tracker</h1>
          <p>Track your environmental impact and earn points for sustainable actions</p>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid">
          <app-stats-card 
            title="Total Points" 
            [value]="totalPoints" 
            color="green">
          </app-stats-card>
          
          <app-stats-card 
            title="Actions Completed" 
            [value]="actions.length" 
            color="blue">
          </app-stats-card>
          
        </div>

        <!-- Actions List -->
        <div class="actions-section">
          <div class="actions-header">
            <h2>Recent Actions</h2>
            <button class="add-button" routerLink="/add-action">
              <span>Add New Action</span>
            </button>
          </div>
          <app-actions-list></app-actions-list>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  actions: any[] = [];
  totalPoints: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchActions();
  }

  fetchActions(): void {
    this.apiService.getActions().subscribe({
      next: (data) => {
        this.actions = data;
        this.totalPoints = this.actions.reduce((sum, action) => sum + action.points, 0);
      },
      error: (err) => console.error("Failed to fetch actions:", err)
    });
  }
}