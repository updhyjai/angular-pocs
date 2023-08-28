import { Component } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients : Ingredient[] =[
  new Ingredient('Banana',5),
  new Ingredient('Tomatoes',2)
]

  handleAddingIngredient(ingredient){
    this.ingredients.push(ingredient)
  }
}
