import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  images_path: string;

  constructor(imagesService: ImagesService) { 

    this.images_path = imagesService.images_path;

  }

  ngOnInit(): void {
  }

}
