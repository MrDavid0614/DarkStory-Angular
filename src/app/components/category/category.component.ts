import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images-service.service';
import { category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: category;
  images_path: string;

  constructor(imagesService: ImagesService) { 

    this.images_path = imagesService.images_path;

  }

  ngOnInit(): void {
  }

}
