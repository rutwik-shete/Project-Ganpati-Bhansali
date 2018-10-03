import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  data: Observable <BuildingWargani[]>;

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

  /** Gets the total Amount of all buildingWargani. */
  getTotalCost() {
    return this.buildingWargani.map(t => t.Amount).reduce((acc, value) => acc + value, 0);

  }

  selectBuilding() {
    this.dataCollection = this.angfirestore.collection('BHANSALI CAMPUS/WARGANI/' + this.selectedValue);
    this.data = this.dataCollection.valueChanges();
  }

  constructor(private angfirestore: AngularFirestore) { }

  ngOnInit() {

  }

}
