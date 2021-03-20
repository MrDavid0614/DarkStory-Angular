import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesList: Category[] = [
    {
      id: 1,
      categoryName: "Items",
      title: "Recipes",
      image: "",
      desc: "Game food crafting recipes",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 2,
      categoryName: "Monsters",
      title: "Enemies",
      image: "",
      desc: "Game enemies and information...",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 3,
      categoryName: "Items",
      title: "Equipment",
      image: "",
      desc: "This is a card description",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 4,
      categoryName: "World",
      title: "Locations",
      image: "",
      desc: "This is a card description",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 5,
      categoryName: "World",
      title: "Quests",
      image: "",
      desc: "Game food crafting recipes",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 6,
      categoryName: "Skills",
      title: "Skills",
      image: "",
      desc: "Game characters skills",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 7,
      categoryName: "Character",
      title: "Classes",
      image: "",
      desc: "This is a card description...",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
    {
      id: 8,
      categoryName: "Character",
      title: "Builds",
      image: "",
      desc: "This is a card description...",
      authors: ['Author 1', 'Author 2', 'Author 3']
    },
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categoriesList;
  }

  getCategoryById(id:number): Category {
    const category = this.categoriesList.find(category => category.id === id);
    return category;
  }
  
}
