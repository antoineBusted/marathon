import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html'
})
export class GoalPage {

  speed: number;
  distance: number;
  timeDisplay: string;
  timeMinutes : number;
  validGoal: boolean;
  displayForm: boolean;

  constructor(private storage: Storage) {
    this.speed=0;
    this.distance=0;
    this.timeMinutes=0;
    this.timeDisplay="";
    this.validGoal = false;
    this.displayForm = true;

    storage.get('goal').then((val) => {
      console.log('Your goal is', val);
    });
  }

  submitGoal(){
      this.displayForm = false;
      this.validGoal = true;
      this.timeMinutes =  this.distance / this.speed * 60;

      if( this.timeMinutes % 60 > 0) {
      this.timeDisplay = Math.floor((this.timeMinutes / 60)) + " h "+ Math.round(this.timeMinutes%60) +" min";
      }
      else {
        this.timeDisplay = this.timeMinutes / 60 +" h";
      }
  }


}
