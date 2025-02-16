import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000/api/actions'; // ✅ Ensure backend is running on this port

  constructor(private http: HttpClient) {}

  // Fetch all sustainability actions
  getActions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      catchError((error) => {
        console.error('Error fetching actions:', error);
        return throwError(() => new Error('Failed to fetch actions.'));
      })
    );
  }

  // Add a new action
  addAction(actionData: { action: string; date: string; points: number }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.baseUrl, actionData, { headers }).pipe(
      catchError((error) => {
        console.error('Error adding action:', error);
        return throwError(() => new Error('Failed to add action.'));
      })
    );
  }
}
