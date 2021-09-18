import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';
@Injectable()
export class recipeService{
    recipechanged = new Subject<Recipe[]>();
    // recipes : Recipe[] = [
    //     new Recipe('Recipe','A Demo', 'https://www.ruchiskitchen.com/wp-content/uploads/2015/01/khaman_1.jpg',[
    //         new Ingredient('bread',11),
    //         new Ingredient('chocolate',20)
    //     ]),
    //     new Recipe('Another Recipe','A Demo', 'https://www.ruchiskitchen.com/wp-content/uploads/2015/01/khaman_1.jpg',[
    //         new Ingredient('Pasta',1),
    //         new Ingredient('French Fries',20)
    //     ])
    //   ];
      private recipes:Recipe[]=[];
      constructor(private slservice:shoppingService){}
      setRecipe(recipes:Recipe[]){
         this.recipes = recipes;
         this.recipechanged.next(this.recipes.slice());
      }
      getvalue(){
          return this.recipes.slice();
      }
     
      getRecipe(index:number){
          return this.recipes[index];
      }
      addingredients(ingredient:Ingredient[]){
       this.slservice.addingredientsToshoppinglist(ingredient);
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slservice.addingredientsToshoppinglist(ingredients);
      }
      addRecipe(recipe:Recipe){
       this.recipes.push(recipe);
       this.recipechanged.next(this.recipes.slice());
      }
      updateRecipe(index:number, newRecipe:Recipe){
       this.recipes[index] = newRecipe;
       this.recipechanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipechanged.next(this.recipes.slice());
      }
}