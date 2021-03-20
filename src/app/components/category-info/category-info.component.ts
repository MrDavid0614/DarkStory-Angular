import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ImagesService } from 'src/app/shared/services/images-service.service';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.scss']
})
export class CategoryInfoComponent implements OnInit {
  category: Category;
  images_path: string;

  constructor(private activatedRoute: ActivatedRoute,
              private categoriesService: CategoriesService,
              private imagesService: ImagesService) { 
                this.images_path = this.imagesService.images_path;
              }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.category = this.categoriesService.getCategoryById(id);
  }
}
