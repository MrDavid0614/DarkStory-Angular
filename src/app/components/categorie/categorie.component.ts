import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images-service.service';
import { Categorie } from 'src/app/shared/models/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  @Input() categorie: Categorie;
  images_path: string;

  constructor(imagesService: ImagesService) { 

    this.images_path = imagesService.images_path;

  }

  ngOnInit(): void {
  }

}
