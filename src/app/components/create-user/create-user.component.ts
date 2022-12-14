import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Input() userDetails = { lastname: '', firstname: '', username: '', password: '' };


  constructor(public service: UserService, public router: Router) {}

  ngOnInit() {}

  addUser(dataUser: any) {
    this.service.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
