import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'Simple test recipe description',
      'http://media.indiatimes.in/media/content/2015/Jun/letsbecomefooddiiee-7_1434615821.jpg'),
    new Recipe('A Test Recipe',
      'Simple test recipe description',
      'http://media.indiatimes.in/media/content/2015/Jun/letsbecomefooddiiee-7_1434615821.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
