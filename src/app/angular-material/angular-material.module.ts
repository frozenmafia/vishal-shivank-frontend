import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule, MatListIconCssMatStyler} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule, MatDateRangePicker} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {MatChipsModule} from '@angular/material/chips';
const MaterialComponenets = [ 
  MatButtonModule,
  MatPasswordStrengthModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatRadioModule,
  MatChipsModule,
  MatInputModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatMenuModule,
  MatCardModule,
  MatDatepickerModule,
  MatGridListModule
];

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets],
})
export class AngularMaterialModule { }
