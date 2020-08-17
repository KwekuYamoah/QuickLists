import { Component, ViewChild } from '@angular/core';
/*Alert Controller helps to create alert components to display to the user*/
import { AlertController, IonList } from "@ionic/angular";
/*Importing CheckList Data Service to make it available throughout the clas*/
import { ChecklistDataService } from "../services/checklist-data.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable-next-line: max-line-length
  /*ViewChild helps us to grab a reference to an element in the template. Specific purpose is to look for IonLis and assign it to a member variable slidingList*/
  @ViewChild(IonList, { static: false}) slidingList: IonList;
  constructor(public dataService: ChecklistDataService, private alertCtrl: AlertController) {}
  // tslint:disable-next-line: max-line-length
  /*Goal of function is to display an alert to the user that enabled them to enter some text, and the send data the enter off to our checklist service*/
  addChecklist(): void {
    this.alertCtrl.create({
      header: 'New Checklist',
      message: 'Enter the name of your new checklist  below:',
      inputs: [
        {
        type: 'text',
        name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.dataService.createChecklist(data);
          }

        }
      ]
    }).then((prompt) => {
      prompt.present(); // display promise to the user
    });

  }
  /*Function renames a checklist and the data is sent to the renameChecklist service*/
  renameChecklist(checklist): void {

    this.alertCtrl.create({
      header: 'Rename Checklist',
      message: 'Enter the new name of this checklist below',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.dataService.renameChecklist(checklist, data);
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

  /*Function removes checklist with no stress*/
  removeChecklist(checklist): void {
    this.slidingList.closeSlidingItems().then(() => {
      this.dataService.removeChecklist(checklist);
    });
  }

}
