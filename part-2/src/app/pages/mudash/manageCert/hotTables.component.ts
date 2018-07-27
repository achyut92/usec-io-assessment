import { style } from '@angular/core/core';
import { Component } from '@angular/core';

@Component({
  selector: 'hot-tables',
  styleUrls: ['./hotTables.scss'],
  template: `
    <div class="container">
      <handsontable-section-cert class="col-md-12"></handsontable-section-cert>
    </div>
  `
})
export class ManageCertComponent {
  
}
