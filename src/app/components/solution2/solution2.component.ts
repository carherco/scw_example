import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-solution2',
  template: `<h2>Solution 2</h2>
             <label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
             <label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
             <button type="button" (click)="element = document.getElementById('text');str = element.innerHTML;element.innerHTML = str.replace(searchText, replaceText);message = 'Replacement done!';">Apply</button>

             <div>{{message}}</div>

             <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `,
  styleUrls: ['./solution2.component.css']
})
export class Solution2Component implements OnInit {

  searchText = 'ipsum';
  replaceText = '<a href="#" onclick="alert(\'Hacked!!!\')">Click Me!</a>';
  message = '';

  document = document;
  element: any;
  str: any;

  constructor() { }

  ngOnInit() {

  }

}
