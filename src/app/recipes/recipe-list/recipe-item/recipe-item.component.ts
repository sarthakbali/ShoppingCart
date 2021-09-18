import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  
  @Input() recipe: Recipe;
  @Input() index:number;
  constructor(private recipeservice:recipeService) { }

  ngOnInit(): void {
    console.log(this.recipe)
  }
 
}
