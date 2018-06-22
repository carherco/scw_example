import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-solution4',
  template: `<h2>Solution 4</h2>
             <label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
             <label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
             <button type="button" (click)="apply()">Apply</button>

             <div>{{message}}</div>

             <p id="text">{{text}}</p>
  `,
  styleUrls: ['./solution4.component.css']
})
export class Solution4Component implements OnInit {

  text: string;
  searchText = 'ipsum';
  replaceText = '<a href="#" onclick="alert(\'Hacked!!!\')">Click Me!</a>';
  message = '';

  constructor() {
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }

  ngOnInit() {

  }

  replace() {
    this.text = this.text.replace(this.searchText, this.replaceText);
    this.message = 'Replacement done!';
  }

  apply() {
    this.replace();
  }

}
