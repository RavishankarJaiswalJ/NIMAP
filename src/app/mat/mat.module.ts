import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

const matarial =[MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSliderModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, 
  MatSelectModule,
  MatSliderModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  CommonModule,
  MatMenuModule,
  MatTableModule
  
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matarial,
    
  ],
  exports:[matarial],
})
export class MatModule { }
