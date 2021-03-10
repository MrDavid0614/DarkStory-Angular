import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesList: Categorie[] = [
    {
      categorie: "Items",
      title: "Recipes",
      desc: "Game food crafting recipes"
    },
    {
      categorie: "Monsters",
      title: "Enemies",
      desc: "Game enemies and information..."
    },
    {
      categorie: "Items",
      title: "Equipment",
      desc: "This is a card description"
    },
    {
      categorie: "World",
      title: "Locations",
      desc: "This is a card description"
    },
    {
      categorie: "World",
      title: "Quests",
      desc: "Game food crafting recipes"
    },
    {
      categorie: "Skills",
      title: "Skills",
      desc: "Game characters skills"
    },
    {
      categorie: "Character",
      title: "Classes",
      desc: "This is a card description..."
    },
    {
      categorie: "Character",
      title: "Builds",
      desc: "This is a card description..."
    },
  ];

  constructor() { }

  getCategories(): Categorie[] {
    return this.categoriesList;
  }
  
}
