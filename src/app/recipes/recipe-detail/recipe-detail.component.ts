import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe:Recipe;
   id:number;
   ingredientspass = new EventEmitter<void>();
  constructor(private recipeservice:recipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeservice.getRecipe(this.id);
      console.log(this.recipe)
    })
  }
  onAddToShoppingList() {
    this.recipeservice.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  oningredientsadded(){
   this.recipeservice.addingredients(this.recipe.ingredients);
  }
  edit_recipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  ondelete(){
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  
}
