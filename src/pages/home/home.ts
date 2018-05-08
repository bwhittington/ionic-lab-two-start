import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LabOnePage } from '../lab-one/lab-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateTo(){
    this.navCtrl.push(LabOnePage)
  }
}
