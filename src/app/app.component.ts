import { Component } from '@angular/core';
import { User } from './model/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Tableau de bord';
  user = new User();

}
