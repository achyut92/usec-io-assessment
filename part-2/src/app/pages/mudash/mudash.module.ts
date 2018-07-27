import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { Dashboard } from './mudash.component';
import { routing }       from './mudash.routing';

import { HotTable, HotTableModule } from 'ng2-handsontable';
import { HotTablesComponent } from './device/hotTables.component';
import { HandsontableSectionComponent } from './device/handsontable-section';
import { BasicDemoComponent } from './device/handsontable/basic-demo';

import { ManageCertComponent } from './manageCert/hotTables.component';
import { MngCertHandsontableSectionComponent } from './manageCert/handsontable-section';
import { MngCertBasicDemoComponent } from './manageCert/handsontable/basic-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    NgbDropdownModule,
    HotTableModule,
    NgbModalModule
  ],
  declarations: [
    Dashboard,
    HotTablesComponent,
    HandsontableSectionComponent,
    BasicDemoComponent,
    ManageCertComponent,
    MngCertHandsontableSectionComponent,
    MngCertBasicDemoComponent
  ],
  providers: [
  ]
})
export class DashboardModule {}
