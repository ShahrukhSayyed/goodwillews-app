import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CounterComponent } from './counter/counter.component';
import { VounteerContactComponent } from './vounteer-contact/vounteer-contact.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    CounterComponent,
    VounteerContactComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
