import { Component } from '@angular/core';
 
@Component({
   selector: 'handsontable-section',
   template: `
               <div class="widgets">
                  <div class="row">
                    <div class="col-md-12">
                      <ba-card>
                         <section id="handsontable">
                           <div class="row">
                                <div class="col-md-4 offset-md-8">
                                  Last Refreshed:{{lastRefreshed | date:'medium'}}
                                </div>
                                <div class="col-md-12">
                                    <basic-demo></basic-demo>
                                </div>
                           </div>
                         </section>
                       </ba-card>
                    </div>
                  </div>
               </div>
             `
})
export class HandsontableSectionComponent {
    currentHeading:string = 'Basic';
    lastRefreshed:Date = new Date();

select(e) {
    if (e.heading) {
     this.currentHeading = e.heading;
    }
 }
}
 
function escape(text: string): string {
  return text.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}
