import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './mudash.component';
import { ModuleWithProviders } from '@angular/core';
import { ManageCertComponent} from './manageCert/hotTables.component';
import { HotTablesComponent} from './device/hotTables.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'devices', pathMatch: 'full'},
      { path: 'devices', component: HotTablesComponent },
      { path: 'manage-certs', component: ManageCertComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
