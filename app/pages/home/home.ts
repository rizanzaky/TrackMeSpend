import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import {PromptPopUp} from './PromptPopUp';

@Component({
	templateUrl: 'build/pages/home/home.html'
})
	
export class HomePage {
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {	}

	showPrompt() {
		this.navCtrl.push(PromptPopUp);
	}
}
