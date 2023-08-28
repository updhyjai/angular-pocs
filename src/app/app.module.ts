import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
// import {ServerComponent} from './server/server.component';
// import { BasicAssignment1Component } from './basic-assignment1/basic-assignment1.component';
// // import { BasicAssignment1Module } from './basic-assignment1/basic-assignment1.module';
// import { SuccessAlertComponent } from './alerts/success/success-alert.component';
// import { WarningAlertComponent } from './alerts/warning/warning-alert.component';
// import { BasicAssignment1Module } from './basic-assignment1/basic-assignment1.module';
// import { Assignment2Component } from './assignment2/assignment2.component';
// import { Assignment3Component } from './assignment3/assignment3.component';
// import { CourseProjectComponent } from './course-project/course-project.component';
// import { RecipeListComponent } from './course-project/recipes/recipe-list/recipe-list.component';
// import { HeaderComponent } from './course-project/header/header.component';
// import { RecipeItemComponent } from './course-project/recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipesComponent } from './course-project/recipes/recipes.component';
// import { RecipeDetailComponent } from './course-project/recipes/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { GameComponentComponent } from './assignment4/game-component/game-component.component';
// import { OddComponentComponent } from './assignment4/odd-component/odd-component.component';
// import { EvenComponentComponent } from './assignment4/even-component/even-component.component';
// import { Assignment4Component } from './assignment4/assignment4.component';
import { CourseProjectModule } from './course-project/course-project.module';
import { CourseProjectComponent } from './course-project/course-project.component';
import { Assignment5Module } from './assignment5/assignment5.module';


@NgModule({
  declarations: [
    AppComponent,
    // ServerComponent,
    // Assignment2Component,
    // Assignment3Component,
    // CourseProjectComponent,
    // RecipeListComponent,
    // HeaderComponent,
    // RecipeItemComponent,
    // RecipesComponent,
    // RecipeDetailComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // GameComponentComponent,
    // OddComponentComponent,
    // EvenComponentComponent,
    // Assignment4Component,
    // CourseProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BasicAssignment1Module,
    CourseProjectModule,
    Assignment5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
