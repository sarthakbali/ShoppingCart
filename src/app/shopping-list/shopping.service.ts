import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class shoppingService{

    startedEditing = new Subject<number>();
    ingredientschanged = new EventEmitter<Ingredient[]>();
   private  ingredients: Ingredient[]= [
        new Ingredient('Banana',20),
        new Ingredient('Apple',10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      getEditedItems(index:number){
          return this.ingredients[index];
      }
      ingredientadded(ingredient:Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientschanged.emit(this.ingredients.slice());
      }

      addingredientsToshoppinglist(ingredients:Ingredient[]){
       this.ingredients.push(...ingredients);
       this.ingredientschanged.emit(ingredients.slice());
      }

      update_ingredients(new_Ingredients:Ingredient,index:number){
          this.ingredients[index]= new_Ingredients;
          this.ingredientschanged.next(this.ingredients.slice());
      }
      delete_ingredients(index:number){
          this.ingredients.splice(index,1);
          this.ingredientschanged.next(this.ingredients.slice());
      }
}