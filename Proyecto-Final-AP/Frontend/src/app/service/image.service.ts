import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);
}
}
