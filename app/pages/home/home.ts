import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

@Component({
	templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

	}

	showPrompt() {
		let prompt = this.alertCtrl.create({
			title: 'Quick Record',
			message: "Promptly add your income or expense for today, " + new Date().toLocaleDateString(),
			inputs: [
				{
					name: 'type',
					placeholder: 'Small description'
				},
				{
					name: 'amount',
					placeholder: 'Amount'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Save',
					handler: data => {
						console.log('Saved clicked');
					}
				}
			]
		});
		prompt.present();
	}
}
