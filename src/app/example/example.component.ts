import { Component } from '@angular/core';

@Component({
  //metadata properties
  selector: 'app-example', //this is the name of the component, used in other components, 
  //to change the prefix, change the prefix in angular.json, currently it is 'bot'
  templateUrl: './example.component.html', //this is the html file that will be used to render the component
  //template: '<p>example works!</p>', //this is an alternative to using a file, but it is not recommended
  styleUrls: ['./example.component.css'] //this is the css file that will be used to style the component
  //styles: ['p { color: blue; }'] //this is an alternative to using a file, but it is not recommended for large components
  //meant for one line of css
})
export class ExampleComponent {
  //class properties, fucntions, etc. go here, like this:
  // title = 'example'; //this is a class property
  // constructor() { } //this is a class constructor
  // ngOnInit() { } //this is a lifecycle hook
  // myFunction() { } //this is a class method

}
