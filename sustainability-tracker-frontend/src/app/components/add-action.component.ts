import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-action',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    /* Reset default body margin */
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    /* Root container styles */
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

    .page-container {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 32px;
      background: #1e1e1e;
      color: white;
      border-radius: 12px;
      border: 1px solid #333;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #4CAF50;
      margin-bottom: 24px;
      font-size: 28px;
      font-weight: 600;
    }

    .form-group {
      margin-bottom: 24px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #888;
      font-size: 16px;
    }

    .form-control {
      width: 100%;
      padding: 12px;
      border: 1px solid #333;
      background: #121212;
      color: white;
      border-radius: 8px;
      transition: all 0.3s ease;
      font-size: 16px;
      box-sizing: border-box;
    }

    .form-control:focus {
      border-color: #4CAF50;
      outline: none;
      box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }

    .form-control::placeholder {
      color: #666;
    }

    .button-group {
      display: flex;
      gap: 16px;
      margin-top: 32px;
    }

    .submit-button, .cancel-button {
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease;
      flex: 1;
    }

    .submit-button {
      background: #4CAF50;
      color: white;
      border: none;
    }

    .submit-button:hover {
      background: #45a049;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
    }

    .cancel-button {
      background: transparent;
      color: #888;
      border: 1px solid #333;
    }

    .cancel-button:hover {
      background: rgba(255, 255, 255, 0.05);
      color: white;
    }

    .error-message {
      color: #ff5252;
      font-size: 14px;
      margin-top: 8px;
    }
  `],
  template: `
    <div class="root-container">
      <div class="page-container">
        <div class="form-container">
          <h2>Add Sustainability Action</h2>
          
          <form (ngSubmit)="addAction()" #actionForm="ngForm">
            <div class="form-group">
              <label for="action">What sustainable action did you take?</label>
              <input 
                type="text" 
                id="action"
                name="action"
                [(ngModel)]="action"
                required
                class="form-control"
                placeholder="e.g., Used public transport, Recycled materials">
            </div>

            <div class="form-group">
              <label for="date">When did you do this?</label>
              <input 
                type="date" 
                id="date"
                name="date"
                [(ngModel)]="date"
                required
                class="form-control">
            </div>

            <div class="form-group">
              <label for="points">How many points would you assign?</label>
              <input 
                type="number" 
                id="points"
                name="points"
                [(ngModel)]="points"
                required
                min="0"
                max="100"
                class="form-control"
                placeholder="Enter points (0-100)">
            </div>

            <div class="button-group">
              <button type="button" class="cancel-button" (click)="goBack()">Cancel</button>
              <button type="submit" class="submit-button">Save Action</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class AddActionComponent {
  action = '';
  date = '';
  points: number | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  addAction(): void {
    if (!this.action || !this.date || this.points === null) {
      alert("Please fill in all fields.");
      return;
    }

    const newAction = {
      action: this.action,
      date: this.date,
      points: this.points
    };

    this.apiService.addAction(newAction).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error("Failed to add action:", err) 
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}