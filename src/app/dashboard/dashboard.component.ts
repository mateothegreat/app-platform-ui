import { Component, OnInit } from '@angular/core';
import { StatsComponent } from './stats/stats.component';

@Component({
    
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
    // directives: [StatsComponent]
    
})

export class DashboardComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit() {
    
    }

}
