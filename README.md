# Basic code injection because of not validating user input

## Example

This is a basic example of a page with a text and two input fields. The user can replace some custom part of the text with a custom string. 

```html
<h2>Example</h2>
<label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
<label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
<button type="button" (click)="apply()">Apply</button>

<div>{{message}}</div>

<p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

By clicking the button, the systems search inside the paragraph text for the string in the first input and replaces it for the text in the second input. When the replacement is done, a message appears informing about it.

The code in the component is very simple. It just responds to the click button making a call to the function *replace()*.

That function gets de text of de paragraph element and makes the replacement.

```ts
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

  searchText = '';
  replaceText = '';
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
```

A user could inject some malicious code inside the paragraph. For example replacing some word of the text with a link with some javascript code

```html
<a href="#" onclick="alert(\'Hacked!!!\')">Click Me!</a>
```


## Solution 1: Use a Template Reference Variable.


```html
<p id="text" #text>Lorem ipsum...
```

```ts
export class Solution1Component implements OnInit {

  (...)
  @ViewChild('text') el: ElementRef;

  constructor() { }

  (...)

  replace() {
    let element = this.el.nativeElement;
    let str = element.innerHTML;
    element.innerHTML = str.replace(this.searchText, this.replaceText);
    this.message = 'Replacement done!';
  }

  (...)
```

Using a template reference variable to access de DOM Element does not solves the security problem as we are still manipulating directly the DOM without validating user input.

## Solution 2: Manipulate DOM in HTML

In this approach, the component does nothing

```ts
export class Solution2Component implements OnInit {

  searchText: string = '';
  replaceText: string = '';
  message = '';

  document = document;
  element: any;
  str: any;

  constructor() { }

  ngOnInit() {

  }

}
```

And the text replacement is done in the html

```html
<h2>Solution 2</h2>
<label>Searh text: </label><input type="text" [(ngModel)]="searchText" />
<label>Replace with: </label><input type="text" [(ngModel)]="replaceText" />
<button type="button" (click)="
element = document.getElementById('text');str = element.innerHTML;
element.innerHTML = str.replace(searchText, replaceText);
message = 'Replacement done!';
">Apply</button>

<div>{{message}}</div>

<p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

This approach does not solve the problem as we are still manipulating directly the DOM without validating user input.


## Solution 3: Use JQuery

Include JQuery in your index.html

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
```

Import in your component and use it

```ts
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({

(...)

  replace() {
    let str = $('#text').html();
    $('#text').html(str.replace(this.searchText, this.replaceText));
    this.message = 'Replacement done!';
  }

(...)
```

This approache does not solve the problem as we are still manipulating the DOM without validating user input.


## Solution 4: Use Angular Binding (The correct solution)

Using Angular binding ensures us that variables are safely sanitized.

Text in the paragraph is dynamic so we can manage it with a component variable 

```ts
export class Solution4Component implements OnInit {

  (...)
  text: string;

  constructor() { 
    this.text = 'Initial text'
  }

  (...)
```

and bind it to the html with interpolation, for example

```html
<p id="text">{{text}}</p>
```

The text replacement function is even easier now

```ts
  (...)

  replace() {
    this.text = this.text.replace(this.searchText, this.replaceText);
    this.message = 'Replacement done!';
  }

  (...)
```

As text is binded, Angular sanitizes it before updating the view.


