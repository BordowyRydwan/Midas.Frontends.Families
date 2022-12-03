import { Component } from '@angular/core';
import ComponentState from "../enums/component-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = ComponentState.LOADED
  states = ComponentState;
}
