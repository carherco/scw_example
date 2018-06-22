import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-solution1',
  template: `<h2>Solution 1</h2>
             <label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
             <label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
             <button type="button" (click)="apply()">Apply</button>

             <div>{{message}}</div>

             <p id="text" #text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `,
  styleUrls: ['./solution1.component.css']
})
export class Solution1Component implements OnInit {

  searchText = 'ipsum';
  replaceText = '<a href="#" onclick="alert(\'Hacked!!!\')">Click Me!</a>';
  message = '';
  @ViewChild('text') el: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  replace() {
    let element = this.el.nativeElement;
    let str = element.innerHTML;
    element.innerHTML = str.replace(this.searchText, this.replaceText);
    this.message = 'Replacement done!';
  }

  apply() {
    this.replace();
  }

}
