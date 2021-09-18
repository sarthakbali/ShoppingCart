import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') frm:NgForm;
  subscription:Subscription;
  public edit_mode = false;
  public current_index;
  edited_item:any;
  constructor(private ingservice:shoppingService) { }

  ngOnInit(): void {
    this.subscription = this.ingservice.startedEditing.subscribe((index:number)=>{
       this.edit_mode = true;
       this.current_index = index;
       this.edited_item = this.ingservice.getEditedItems(index);
       this.frm.setValue({
         name:this.edited_item.name,
         amount:this.edited_item.amount
       });
    });
  }

  onitemAdded(form:NgForm){
   const form_value =  form.value;
   const ingredient_data = new Ingredient(form_value.name,form_value.amount);
   if(this.edit_mode){
     this.ingservice.update_ingredients(ingredient_data,this.current_index)
   }
   else{
   this.ingservice.ingredientadded(ingredient_data);
  }
  this.edit_mode = false;
  this.frm.reset();
}
  onreset(){
    this.frm.reset();
  }
  ondelete(){
    this.ingservice.delete_ingredients(this.current_index);
  }
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
}
