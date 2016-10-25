import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'build/pages/home/promptPopUp.html'
})

export class PromptPopUp {
	constructor(public nav: NavController) { }

	closePopUp() {
		this.nav.pop();
	}

	quickSave() {
		
	}
}