import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule
    ,MatInputModule
    ,MatDatepickerModule
    ,MatDialogModule
    ,MatSelectModule
    ,MatRadioModule
    ,MatSidenavModule
    ,MatToolbarModule
    ,MatIconModule
    ,MatCardModule
    ,MatBottomSheetModule
    ,MatFormFieldModule
    ,MatTabsModule
        
  ], 
  exports: [
    MatButtonModule
    ,MatInputModule
    ,MatDatepickerModule
    ,MatDialogModule
    ,MatSelectModule
    ,MatRadioModule
    ,MatSidenavModule
    ,MatToolbarModule
    ,MatIconModule
    ,MatCardModule
    ,MatBottomSheetModule
    ,MatFormFieldModule
    ,MatTabsModule

  ]
})
export class MaterialModule { }
