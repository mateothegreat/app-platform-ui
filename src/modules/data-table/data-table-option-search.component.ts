import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-table-option-search',
  template: `
  
    <div id="example_filter" class="dataTables_filter ui input"><label>Search:<input type="search" class="" placeholder="" aria-controls="example"></label></div>
            
  `
  
})
export class DataTableOptionSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
