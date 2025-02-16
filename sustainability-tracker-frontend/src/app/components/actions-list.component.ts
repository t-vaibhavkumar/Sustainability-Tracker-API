import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css'],
  imports: [CommonModule]
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
