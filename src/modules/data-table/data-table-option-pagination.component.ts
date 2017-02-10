import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-table-option-pagination',
  template: `
  
    <div class="ui pagination menu">

    <div class="paginate_button item previous disabled" id="example_previous" href="#" aria-controls="example" data-dt-idx="0" tabindex="0">Previous</div>

    <a class="paginate_button item active" href="#" aria-controls="example" data-dt-idx="1" tabindex="0">1</a>
    <a class="paginate_button item " href="#" aria-controls="example" data-dt-idx="2" tabindex="0">2</a>
    <a class="paginate_button item " href="#" aria-controls="example" data-dt-idx="3" tabindex="0">3</a>
    <a class="paginate_button item " href="#" aria-controls="example" data-dt-idx="4" tabindex="0">4</a>
    <a class="paginate_button item " href="#" aria-controls="example" data-dt-idx="5" tabindex="0">5</a>
    <a class="paginate_button item " href="#" aria-controls="example" data-dt-idx="6" tabindex="0">6</a>

    <a class="paginate_button item next" id="example_next" href="#" aria-controls="example" data-dt-idx="7" tabindex="0">Next</a>

</div>
                    
  `
  
})
export class DataTableOptionPaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
