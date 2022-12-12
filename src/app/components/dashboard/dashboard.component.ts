import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { User } from 'src/app/model/user';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    user?: User[];


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
      this.userService.getAll().subscribe(data => {
        this.user = data;
        console.log(this.user);
      })
  }

  getDetailPage() {
    this.router.navigate(['user-detail']);
  }

}
