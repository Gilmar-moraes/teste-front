// photo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getFirstPhotoByAlbumId(albumId: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?albumId=${albumId}&_limit=1`);
  }

  getFirstTenPhotosByAlbumId(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?albumId=${albumId}&_limit=10`);
  }
}
