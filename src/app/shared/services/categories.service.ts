import { Injectable } from '@angular/core';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesList: category[] = [
    {
      categoryName: "Items",
      title: "Recipes",
      desc: "Game food crafting recipes"
    },
    {
      categoryName: "Monsters",
      title: "Enemies",
      desc: "Game enemies and information..."
    },
    {
      categoryName: "Items",
      title: "Equipment",
      desc: "This is a card description"
    },
    {
      categoryName: "World",
      title: "Locations",
      desc: "This is a card description"
    },
    {
      categoryName: "World",
      title: "Quests",
      desc: "Game food crafting recipes"
    },
    {
      categoryName: "Skills",
      title: "Skills",
      desc: "Game characters skills"
    },
    {
      categoryName: "Character",
      title: "Classes",
      desc: "This is a card description..."
    },
    {
      categoryName: "Character",
      title: "Builds",
      desc: "This is a card description..."
    },
  ];

  constructor() { }

  getcategories(): category[] {
    return this.categoriesList;
  }
  
}
