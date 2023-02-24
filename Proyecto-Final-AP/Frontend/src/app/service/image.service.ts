import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  i=1;

  constructor(private storage: Storage) { 


  }


  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `profile_pictures/` + name)
    uploadBytes (imgRef,file)
    .then (response => {this.getImages()})
    .catch (error => console.log(error));
}

getImages() {
  const imagesRef = ref(this.storage, 'profile_pictures');
    list(imagesRef)
    .then(async response => {
      console.log(response);
      for (let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: "+ this.url);
      }
    })
      
    .catch(error => console.log(error));
  
  }




}
