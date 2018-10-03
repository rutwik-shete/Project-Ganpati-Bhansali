import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { WarganiCollectionComponent } from './wargani-collection/wargani-collection.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../../environments/environment';
export const firebaseConfig = environment.firebaseConfig ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  declarations: [WarganiCollectionComponent],
  exports: [
    WarganiCollectionComponent
  ]
})
export class DataEntryModule { }
