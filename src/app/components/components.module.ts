import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

//Modulo instalado no propio de Angular
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
