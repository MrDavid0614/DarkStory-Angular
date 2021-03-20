import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images-service.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;
  images_path: string;

  constructor(imagesService: ImagesService) { 
    this.images_path = imagesService.images_path;
  }

  ngOnInit(): void {
  }

}
