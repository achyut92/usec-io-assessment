import { Component } from '@angular/core';
import { getCertStats } from './handsontable/data';

@Component({
  selector: 'handsontable-section-cert',
  template: `
               <div class="widgets">
                  <div class="row">
                    <div class="col-md-12">
                      <ba-card cardTitle="Certificate Management">
                         <div class="row">
                          <div class="col-md-2"><span class="stat">{{certStats.open}}</span> Open</div>
                          <div class="col-md-2"><span class="stat">{{certStats.critical}}</span> Critical</div>
                          <div class="col-md-2"><span class="stat">{{certStats.failed}}</span> Failed</div>
                          <div class="col-md-2"><span class="stat">{{certStats.total}}</span> Total</div>
                          <div class="col-md-2"><span class="stat">{{certStats.authenticated}}</span> Authenticated</div>
                         </div>
                         <section id="handsontable">
                           <div class="row">
                                <div class="col-md-4">
                                    <nav>
                                      <a href="#">Alarms</a>
                                      <a href="#">Job Status</a>
                                    </nav>
                                </div>
                                <div class="col-md-4 offset-md-8">
                                  Last Refreshed:{{lastRefreshed | date:'medium'}}
                                </div>
                              </div>
                            <div class="row">
                              <div class="col-md-12">
                                <basic-demo-cert></basic-demo-cert>
                              </div>
                           </div>
                         </section>
                       </ba-card>
                    </div>
                  </div>
               </div>
             `
})
export class MngCertHandsontableSectionComponent {
  currentHeading: string = 'Basic';
  lastRefreshed: Date = new Date();
  certStats = getCertStats();

  select(e) {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}

function escape(text: string): string {
  return text.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}
