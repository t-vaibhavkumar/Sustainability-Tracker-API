import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  imports: [FormsModule],
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {
  action = '';
  date = '';
  points: number | null = null;

  constructor(private apiService: ApiService) {}

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
        alert("Action added successfully!");
        this.action = '';
        this.date = '';
        this.points = null;
      },
      error: (err) => console.error("Failed to add action:", err) 
    });
  }
}
