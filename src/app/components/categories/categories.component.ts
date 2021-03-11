import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ImagesService } from 'src/app/shared/services/images-service.service';
import { category } from 'src/app/shared/models/category';
import { Contributor } from 'src/app/shared/models/contributor';
import { ContributorsService } from 'src/app/shared/services/contributors.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  images_path: string;
  categoriesList: category[];
  contributorsList: Contributor[];

  constructor(imagesService: ImagesService, 
              protected categoriesService: CategoriesService, 
              protected contributorsService: ContributorsService
              ) { 

    this.images_path = imagesService.images_path;
    this.getcategories();
    this.getContributors();
  }

  ngOnInit(): void {
  }

  getcategories(){
    this.categoriesList = this.categoriesService.getcategories();
  }

  getContributors(){
    this.contributorsList = this.contributorsService.getContributors();
  }

}
