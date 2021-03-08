import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  images_path: string = '../assets/';

  constructor() { }
}
