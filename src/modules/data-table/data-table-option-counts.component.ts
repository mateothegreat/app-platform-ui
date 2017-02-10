import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-table-option-counts',
  template: `
  
    <div class="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                
  
  `
  
})
export class DataTableOptionCountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
