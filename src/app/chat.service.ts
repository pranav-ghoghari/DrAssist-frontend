import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatGPTApiEndpoint = environment.backendUrl;


  constructor(private http: HttpClient) {}

  // Modify the function to return symptom information
  sendPrompt(prompt: string): Observable<string> {
    return this.http.post<any>(this.chatGPTApiEndpoint, { prompt: prompt })
      .pipe(
        map(response => {
          if (response.content) {
            // Extracted symptom information is in the 'content' field
            const symptomInfo = response.content;
            return symptomInfo;
          } else {
            throw new Error('No symptom information found in response');
          }
        }),
        catchError(this.handleError) // Error handling
      );
  }

  // Basic error handling function
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Server error: ${error.status}, message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Updated error creation
  }
}
