import { Component, Directive, Input, Output, HostBinding, EventEmitter, ElementRef, HostListener, AfterContentInit, ContentChild, Renderer } from '@angular/core';

@Component({
    
    selector: 'data-table-option-limits',
    template: `
    
        <sm-select [model]="model" class="fluid search" (onChange)="onChange($event)" style="width: 100px">

            <option *ngFor="let option of options" value="{{ option }}">{{ option }} per page</option>
        
        </sm-select>
    
    `
    
})
export class DataTableOptionLimitsComponent implements AfterContentInit {

    @Input() model: Number = 10;
    @Input() options: Array<Number> = [10, 25, 50, 100];
    
    onChange(data: {}) {
     
        console.log(data);
        
    }
    public constructor(public el:ElementRef, public renderer:Renderer) {
        
        // this._service = new SuiDropdownService();
        // this._service.dropdownElement = el;
    }

    public ngAfterContentInit():void {

        this.model = 10;

    }

    @HostListener('click', ['$event'])
    public click(event:MouseEvent):boolean {
        
        // console.log(event);
        // event.stopPropagation();

        // if (!this._service.menuElement.nativeElement.contains(event.target)) {
        //     this._service.toggle();
        // }
        
        return false;
        
    }
    
}
