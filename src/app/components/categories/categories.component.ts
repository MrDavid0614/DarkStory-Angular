import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category';
import { Contributor } from 'src/app/shared/models/contributor';
import { ContributorsService } from 'src/app/shared/services/contributors.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  images_path: string;
  categoriesList: Category[];
  contributorsList: Contributor[];

  constructor(protected categoriesService: CategoriesService, 
              protected contributorsService: ContributorsService
              ) {
    this.getCategories();
    this.getContributors();
  }

  ngOnInit(): void {
  }

  getCategories(){
    this.categoriesList = this.categoriesService.getCategories();
  }

  getContributors(){
    this.contributorsList = this.contributorsService.getContributors();
  }

}
