import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { recipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editmode = false;
  recipeForm:FormGroup;
  @ViewChild('img') image:ElementRef;
  constructor(private route:ActivatedRoute,private ingservice:recipeService,private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this.editmode = params['id']!= null;
      console.log(this.editmode);
      this.initform();
    })
  }

  oningredientsadded(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]+$/)]),
      })
    )
  }
  private initform(){
    let recipeName:any = '';
    let img_url:any = '';
    let description:any = ''
    let ingredients = new FormArray([]);
    if(this.editmode){
      const recipe = this.ingservice.getRecipe(this.id);
      recipeName = recipe.name;
      img_url = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let recipees of recipe.ingredients){
          ingredients.push(
            new FormGroup({
            'name':new FormControl(recipees.name,Validators.required),
            'amount':new FormControl(recipees.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]+$/)]),
          })
          )
        }
      }
      
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(img_url,Validators.required),
      'description':new FormControl(description,Validators.required),
      'ingredients': ingredients
    })
  }
  onsubmit(){
    // const recipesss = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // )
    if(this.editmode){
      this.ingservice.updateRecipe(this.id, this.recipeForm.value)
    }
    else{
      this.ingservice.addRecipe(this.recipeForm.value);
    }
    this.oncancel();
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  oncancel(){
    this.router.navigate(['../'],{ relativeTo:this.route });
  }

  ondeleteIng(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
