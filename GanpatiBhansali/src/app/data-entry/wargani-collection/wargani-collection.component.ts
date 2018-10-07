import { Component, OnInit, Query } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  dataCollection: AngularFirestoreCollection<NameAmount>;
  datas: Observable <NameAmount[]>;
  amountArray: number[];
  totalAmount: number ;
  dataLength: number ;
  inc: number ;

  showProgress: boolean ;


  Buildings: BuildingNameInterface[] = [
    {value: ' A BUILDING ', viewValue: 'A'},
    {value: ' B BUILDING ', viewValue: 'B'},
    {value: ' C BUILDING ', viewValue: 'C'},
    {value: ' D BUILDING ', viewValue: 'D'}
  ];

  displayedColumns: string[] = ['Name', 'Wargani'];

  addClicked() {

    this.showProgress = true;

    this.Entery = {'Name' : this.nameField , 'Amount': this.amountField} ;

    this.writeEntery(this.Entery);

    this.clearText() ;


  }

  clearText() {
    this.nameField = '';
    this.amountField = null;
    this.selectBuilding();
  }

  constructor(private angfirestore: AngularFirestore) {
  }

  selectBuilding() {
    this.showProgress = true ;
    this.dataCollection = this.angfirestore.collection('BHANSALI CAMPUS/WARGANI/' + this.selectedValue);
    this.datas = this.dataCollection.valueChanges();

    this.totalAmount = 0;

    this.getTotal();

  }

  getTotal() {

    this.datas.pipe(tap(data => {console.log(data.length); this.dataLength = data.length ; })).pipe(
      map((data: NameAmount[]) => data.map(p => p.Amount * 1))
    ).subscribe(product => {
      this.amountArray = product;
      for ( this.inc = 0 ; this.inc < this.dataLength ; this.inc++) {
        this.totalAmount = this.totalAmount + this.amountArray[ this.inc ] ;
        console.log(this.totalAmount);
     }
     this.showProgress = false ;
      console.log('New: ' + JSON.stringify(this.amountArray)); });

  }

  ngOnInit() {

  }

  writeEntery(Entery: NameAmount ) {
    this.EnteryDoc = this.angfirestore.collection('BHANSALI CAMPUS').doc('WARGANI').collection(this.selectedValue);

    this.EnteryDoc.doc(this.angfirestore.createId()).set(Entery).then(window.alert);

  }

}
