import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../Auth/auth/auth.service';
import { ModalControlService } from '../modal-control.service';
import { PwaService } from '../services/pwa.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  datass:any;
  constructor(private authservice:AuthService,private sw: UpdateService,private pwas:PwaService,private viewContainerRef: ViewContainerRef,private modalControlService:ModalControlService){
    //this.sw.checkForUpdates();
    this.datass = this.pwas.initPwaPrompt();
     console.log("hhhhjjkl",this.datass);

   }
  ngOnInit(): void {
  }
  closeatab(){
    this.modalControlService.close();
  }

}
