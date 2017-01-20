import { Component, ViewChild, OnInit } from '@angular/core';
import { SemanticModalComponent } from 'ng-semantic/ng-semantic';

@Component({
    
    selector: 'app-ibaccount',
    templateUrl: './ibaccount.component.html',
    styleUrls: ['./ibaccount.component.css']
    
})

export class IBAccountComponent {

    @ViewChild(SemanticModalComponent) m: SemanticModalComponent;

    
    showModal() {
console.log(this.m);
        this.m.show({ });
        
    }
    

}
