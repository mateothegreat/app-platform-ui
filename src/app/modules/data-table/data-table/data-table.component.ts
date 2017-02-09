import {
  Component, Input, Output, SimpleChange, EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges {

  @Input() source: any;
  @Input() settings: Object = {};

  @Output() public rowSelect: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    console.log(changes);
    
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
