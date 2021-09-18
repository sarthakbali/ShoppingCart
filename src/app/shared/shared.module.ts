import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinner } from './loading-spinner/loading-spinner.component';


@NgModule({
    declarations:[
       AlertComponent,
       LoadingSpinner
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinner,
        CommonModule
    ]
})
export class SharedModule{

}