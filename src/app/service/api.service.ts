import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000'; // Changez ceci en fonction de l'URL de votre API Flask

  constructor(private http: HttpClient) { }

  runMedicalCrew(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.apiUrl}/run_medical_crew`, data, { headers });
  }

  
}
