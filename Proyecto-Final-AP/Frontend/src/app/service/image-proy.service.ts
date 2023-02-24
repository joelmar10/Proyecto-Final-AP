import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageProyService {
  url: string = "";
  i=1;

  constructor(private storage: Storage) { 


  }


  public uploadImage($event: any, name: string, id: string) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage,  `proyecto/`+ id + name + `/` + name + id)
    uploadBytes (imgRef,file)
    .then (response => console.log(response))
    .catch (error => console.log(error));
    const imagesRef = ref(this.storage,  ('proyecto/' + id + name + '/'))
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