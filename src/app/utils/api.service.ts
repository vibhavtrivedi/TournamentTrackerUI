import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http
      .get(path)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body, { responseType: 'json' }).pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    return throwError(error);
  }
}
