import { Component } from '@angular/core';
import { getDeviceData } from './data';

@Component({
  selector: 'basic-demo',
  templateUrl: './basic-demo.html'
})
export class BasicDemoComponent {
   data: Array<any> = getDeviceData();
   
    colHeaders: Array<string> = ['Select', 'Device Name', 'Communication Type', 'Location',
    'Firmware', 'Status', 'Last Connection', 'Authentication Status'];
   
  columns: Array<any> = [
    {
      data: 'select',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    },
    {
      data: 'deviceName',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'communicationType',
      readOnly: true
    },
    {
      data: 'location'
    },
    {
      data: 'telemetry',
    },
    {
      data: 'status',
      
    },
    {
      data: 'lastConnection',
      
    },
    {
      data: 'authenticationStatus',
      
    }
  ];
  colWidths: Array<number> = [30, null, null, 30, 30, 30, null, null ];
  options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  afterChange(e: any) {
    console.log(e);
  }

  afterOnCellMouseDown(e: any) {
    console.log(e);
  }

  constructor(){
  }
}
