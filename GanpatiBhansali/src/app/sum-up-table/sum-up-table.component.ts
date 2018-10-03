import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

export interface BuildingNameInterface {
  value: string;
  viewValue: string;
}


export interface BuildingWargani {
  Name: string;
  Amount: number;
}

@Component({
  selector: 'app-sum-up-table',
  templateUrl: './sum-up-table.component.html',
  styleUrls: ['./sum-up-table.component.css']
})
export class SumUpTableComponent implements OnInit {

  selectedValue: string;
  dataCollection: AngularFirestoreCollection<BuildingWargani>;
  datas: Observable <BuildingWargani[]>;
  amountArray: number[];
  totalAmount: number ;
  dataLength: number ;
  inc: number ;

  Buildings: BuildingNameInterface[] = [
    {value: ' A BUILDING ', viewValue: 'A'},
    {value: ' B BUILDING ', viewValue: 'B'},
    {value: ' C BUILDING ', viewValue: 'C'},
    {value: ' D BUILDING ', viewValue: 'D'}
  ];

  displayedColumns: string[] = ['Name', 'Wargani'];
  buildingWargani: BuildingWargani[] = [
    {Name: 'Beach ball', Amount: 4},
    {Name: 'Towel', Amount: 5},
    {Name: 'Frisbee', Amount: 2},
    {Name: 'Sunscreen', Amount: 4},
    {Name: 'Cooler', Amount: 25},
    {Name: 'Swim suit', Amount: 15},
  ];

  selectBuilding() {
    this.dataCollection = this.angfirestore.collection('BHANSALI CAMPUS/WARGANI/' + this.selectedValue);
    this.datas = this.dataCollection.valueChanges();

    this.totalAmount = 0;

    this.getTotal();

  }

  getTotal() {

    this.datas.pipe(tap(data => {console.log(data.length); this.dataLength = data.length ; })).pipe(
      map((data: BuildingWargani[]) => data.map(p => p.Amount * 1))
    ).subscribe(product => {
      this.amountArray = product;
      for ( this.inc = 0 ; this.inc < this.dataLength ; this.inc++) {
        this.totalAmount = this.totalAmount + this.amountArray[ this.inc ] ;
        console.log(this.totalAmount);
     }
      console.log('New: ' + JSON.stringify(this.amountArray)); });

  }

  constructor(private angfirestore: AngularFirestore) { }

  ngOnInit() {

  }

}
