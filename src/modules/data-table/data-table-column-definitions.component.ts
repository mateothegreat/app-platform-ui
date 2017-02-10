import { Component, OnInit, Input } from '@angular/core';

@Component({
    
    selector: 'data-table-column-definitions',
    template: `
        
            <ng-content></ng-content>

    `,
    styles: []
    
})
export class DataTableColumnDefinitionsComponent implements OnInit {

    
    constructor() { }
    
    ngOnInit() {
    }

}
