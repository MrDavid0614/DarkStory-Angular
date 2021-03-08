import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/images-service.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  images_path: string;

  constructor(imagesService: ImagesService) { 

    this.images_path = imagesService.images_path;

  }

  ngOnInit(): void {
  }

}
