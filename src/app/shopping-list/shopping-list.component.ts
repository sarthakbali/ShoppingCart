import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private ingservice:shoppingService) { }

  ngOnInit() {
    this.ingredients = this.ingservice.getIngredients();
    this.ingservice.ingredientschanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }

  onedit(index:number){
    this.ingservice.startedEditing.next(index);
  }
 
}
