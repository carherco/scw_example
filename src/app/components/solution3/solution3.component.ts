import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-solution3',
  template: `<h2>Solution 3</h2>
             <label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
             <label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
             <button type="button" (click)="apply()">Apply</button>

             <div>{{message}}</div>

             <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `,
  styleUrls: ['./solution3.component.css']
})
export class Solution3Component implements OnInit {

  searchText = 'ipsum';
  replaceText = '<a href="#" onclick="alert(\'Hacked!!!\')">Click Me!</a>';
  message = '';

  constructor() { }

  ngOnInit() {

  }

  replace() {
    let str = $('#text').html();
    $('#text').html(str.replace(this.searchText, this.replaceText));
    this.message = 'Replacement done!';
  }

  apply() {
    this.replace();
  }

}

