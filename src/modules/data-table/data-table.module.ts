import { NgModule }                                 from '@angular/core';
import { CommonModule }                             from '@angular/common';
import { NgSemanticModule }                         from "ng-semantic/ng-semantic"
import { DATA_TABLE_DIRECTIVES }                    from './data-table.directives';
import { DATA_TABLE_COMPONENTS }                    from './data-table.components';

@NgModule({
    
    imports: [
    
        CommonModule,
        NgSemanticModule
    
    ],
    
    declarations: [
    
        ...DATA_TABLE_DIRECTIVES,
        ...DATA_TABLE_COMPONENTS,
        
    ],
    
    exports: [
    
        ...DATA_TABLE_DIRECTIVES,
        ...DATA_TABLE_COMPONENTS,
    
    ]

})
export class DataTableModule { }
