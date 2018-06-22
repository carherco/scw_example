import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<h2>Example</h2>
             <label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
             <label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
             <button type="button" (click)="apply()">Apply</button>

             <div>{{message}}</div>

             <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `,
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  searchText = 'ipsum';
  replaceText = '<a href="#" onclick="alert(\'Hacked!!!\')">Click Me!</a>';
  message = '';

  constructor() { }

  ngOnInit() {

  }

  replace() {
    let element = document.getElementById('text');
    let str = element.innerHTML;
    element.innerHTML = str.replace(this.searchText, this.replaceText);
    this.message = 'Replacement done!';
  }

  apply() {
    this.replace();
  }

}
