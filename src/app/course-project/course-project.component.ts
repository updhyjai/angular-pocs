import { Component } from '@angular/core';

export const FeatureType = {
  recipes : 'Recipes',
  shoppingList: 'Shopping List'
}


@Component({
  selector: 'app-course-project',
  templateUrl: './course-project.component.html',
  styleUrls: ['./course-project.component.css']
})
export class CourseProjectComponent {

  selectedFeatureType = FeatureType.recipes;

  handleFeatureSelected(featureType){
    this.selectedFeatureType = featureType;
  }

  isRecipeFeatureSelected =()=> this.selectedFeatureType === FeatureType.recipes
  isShoppingListFeatureSelected =()=> this.selectedFeatureType === FeatureType.shoppingList
}
