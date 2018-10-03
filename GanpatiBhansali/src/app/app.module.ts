import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DataEntryModule } from './data-entry/data-entry.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { WarganiCollectionComponent } from './data-entry/wargani-collection/wargani-collection.component';
import { SumUpTableComponent } from './sum-up-table/sum-up-table.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig ;


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SumUpTableComponent
  ],
  imports: [
    BrowserModule,
    DataEntryModule,
    FormsModule,

    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSelectModule,
    MatTableModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: 'Welcome', component: DashboardComponent },
      { path: 'WarganiCollection' , component: WarganiCollectionComponent},
      { path: 'SumUpTable', component: SumUpTableComponent },
      { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
