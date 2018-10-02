import { Component, OnInit } from '@angular/core';

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


  Buildings: BuildingNameInterface[] = [
    {value: ' A Building ', viewValue: 'A'},
    {value: ' B Building ', viewValue: 'B'},
    {value: ' C Building ', viewValue: 'C'},
    {value: ' D Building ', viewValue: 'D'}
  ];

  Enteries: NameAmount[] = [

  ];

  addClicked() {

    this.Entery = {'Name' : this.nameField , 'Amount': this.amountField} ;

    this.Enteries.push(this.Entery);

    this.clearText() ;

  }

  clearText() {
    this.nameField = '';
    this.amountField = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
