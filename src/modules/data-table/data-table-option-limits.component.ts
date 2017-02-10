import { Component, Input } from '@angular/core';

@Component({
    
    selector: 'data-table-option-limits',
    template: `
    
        <sm-select [model]="options" class="fluid search" (onChange)="onChange($event)">

            <option *ngFor="let option of options" value="{{ option }}">{{ option }} per page</option>
        
        </sm-select>
    
    `
    
})
export class DataTableOptionLimitsComponent {

    options: Array<Number> = [10, 25, 50, 100];
    
    constructor() { }
    
    onChange(data: {}) {
     
        console.log(data);
    
        
    }

}
