import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule
    ,MatInputModule
    ,MatDatepickerModule
    ,MatDialogModule
    ,MatSelectModule
    ,MatRadioModule
    
  ], 
  exports: [
    MatButtonModule
    ,MatInputModule
    ,MatDatepickerModule
    ,MatDialogModule
    ,MatSelectModule
    ,MatRadioModule

  ]
})
export class MaterialModule { }
