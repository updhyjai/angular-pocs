import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() onRecipeSelection = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
     new Recipe('Banana', 'A banana recipe','https://www.jquery-az.com/html/images/banana.jpg'),
     new Recipe('Apple', 'A apple recipe with banana','https://www.jquery-az.com/html/images/banana.jpg'),
    ]

    onSelectRecipe(recipe){
      this.onRecipeSelection.emit(recipe)
    }
}
