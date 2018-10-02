import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

export interface BuildingNameInterface {
  value: string;
  viewValue: string;
}

export interface NameAmount {
  Name: string;
  Amount: number;
}

@Component({
  selector: 'app-wargani-collection',
  templateUrl: './wargani-collection.component.html',
  styleUrls: ['./wargani-collection.component.css']
})
export class WarganiCollectionComponent implements OnInit {

  selectedValue: string;
  nameField: string ;
  amountField: number ;
  Entery: NameAmount;
  EnteryDoc: AngularFirestoreCollection<NameAmount> ;


  Buildings: BuildingNameInterface[] = [
    {value: ' A BUILDING ', viewValue: 'A'},
    {value: ' B BUILDING ', viewValue: 'B'},
    {value: ' C BUILDING ', viewValue: 'C'},
    {value: ' D BUILDING ', viewValue: 'D'}
  ];

  addClicked() {

    this.Entery = {'Name' : this.nameField , 'Amount': this.amountField} ;

    this.writeEntery(this.Entery);

    this.clearText() ;


  }

  clearText() {
    this.nameField = '';
    this.amountField = null;
  }

  constructor(private angFirestore: AngularFirestore) {
  }

  ngOnInit() {

  }

  writeEntery(Entery: NameAmount ) {
    this.EnteryDoc = this.angFirestore.collection('BHANSALI CAMPUS').doc('WARGANI').collection(this.selectedValue);

    this.EnteryDoc.doc(this.angFirestore.createId()).set(Entery).then(window.alert('Wargani Added'));

  }

}
