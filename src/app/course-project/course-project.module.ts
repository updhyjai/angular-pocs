import { NgModule } from "@angular/core";
import { CourseProjectComponent } from "./course-project.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { BrowserModule } from "@angular/platform-browser";
import { DropdownDirective } from "./shared/dropdown.directive";

@NgModule({
    declarations:[
        CourseProjectComponent,
        HeaderComponent,  
        RecipesComponent,
        ShoppingListComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        ShoppingEditComponent,
        DropdownDirective
    ],
    exports:[CourseProjectComponent],
    imports: [BrowserModule]
})
export class CourseProjectModule{}