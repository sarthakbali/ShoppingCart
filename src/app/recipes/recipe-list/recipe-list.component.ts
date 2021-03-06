import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes : Recipe[]

  constructor(private recipeservice: recipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    this.recipeservice.recipechanged.subscribe((recipes:Recipe[])=>{
      this.recipes = recipes;
    })
    this.recipes = this.recipeservice.getvalue();
  }

  onselectrecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
