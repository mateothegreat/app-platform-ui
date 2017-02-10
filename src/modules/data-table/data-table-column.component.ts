import { Component, OnInit, Input } from '@angular/core';

@Component({
    
    selector: 'data-table-column',
    template: `
    
        <th     class="ascending"
                tabindex="0" 
                aria-controls="example" 
                rowspan="1" 
                colspan="1" 
                aria-sort="ascending" 
                aria-label="Name: activate to sort column descending" 
                style="width: 86px;">
        
            {{ label }}
        
        </th>

    `,
    styles: []
    
})
export class DataTableColumnComponent implements OnInit {

    @Input() label: String;
    @Input() propertyName: String;
    
    constructor() { }
    
    ngOnInit() {
    }

}
