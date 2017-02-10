import {
  Component, Input, Output, SimpleChange, EventEmitter,
  OnChanges, ViewChild, ViewChildren, QueryList, Directive, AfterViewInit
} from '@angular/core';
import { DataTableColumnComponent } from '../data-table.components';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges {

  @Input() datasource:Array<any> = [];
  @Input() settings: Object = {};

  @ViewChildren(DataTableColumnComponent) columns: QueryList<DataTableColumnComponent>;

  @Output() public rowSelect: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngAfterViewInit() {

    console.log(this.columns);
    
  }
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    // console.log(changes);
    
    // if (this.grid) {
    //   if (changes['settings']) {
    //     this.grid.setSettings(this.prepareSettings());
    //   }
    //   if (changes['source']) {
    //     this.grid.setSource(this.source);
    //   }
    // } else {
    //   this.initGrid();
    // }
  }
}
