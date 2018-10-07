import { Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as jsPDF from 'jspdf' ;
import * as html2canvas from 'html2canvas';

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

  showProgress: boolean ;

  Buildings: BuildingNameInterface[] = [
    {value: ' A BUILDING ', viewValue: 'A'},
    {value: ' B BUILDING ', viewValue: 'B'},
    {value: ' C BUILDING ', viewValue: 'C'},
    {value: ' D BUILDING ', viewValue: 'D'}
  ];

  displayedColumns: string[] = ['Name', 'Wargani'];

  selectBuilding() {
    this.showProgress = true ;
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
        this.showProgress = false;
        console.log(this.totalAmount);
     }
      console.log('New: ' + JSON.stringify(this.amountArray)); });

  }

  DownPdf() {

    html2canvas(document.getElementById('PeopleTable')).then(function(canvas) {
    const imgData = canvas.toDataURL('image/png');

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const doc = new jsPDF('p', 'mm');
      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save( 'file.pdf');
        });
    }

  constructor(private angfirestore: AngularFirestore) { }

  ngOnInit() {

  }

}
