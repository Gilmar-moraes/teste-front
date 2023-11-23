// album-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-album-list',
  template: `
    <div *ngFor="let album of albums">
      <img [src]="getAlbumThumbnail(album.id)" alt="{{ album.title }}" (click)="showAlbumPhotos(album.id)" />
    </div>
  `,
  styles: [],
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumService: AlbumService, private photoService: PhotoService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  getAlbumThumbnail(albumId: number): string {
    let thumbnailUrl = '';

    // Obter a URL da primeira foto do álbum
    this.photoService.getFirstPhotoByAlbumId(albumId).subscribe((photo) => {
      thumbnailUrl = photo[0].url;
    });

    return thumbnailUrl;
  }

  showAlbumPhotos(albumId: number): void {
    // Obter as 10 primeiras fotos do álbum
    this.photoService.getFirstTenPhotosByAlbumId(albumId).subscribe((photos) => {
      // Agora, você pode trabalhar com as 10 primeiras fotos, por exemplo, exibi-las em algum lugar
      console.log('Primeiras 10 fotos do álbum:', photos);
    });
  }
}
