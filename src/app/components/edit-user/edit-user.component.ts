import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent  implements OnInit {

  user_id = this.route.snapshot.params['user_id'];
  userData: any = {};


  constructor(
    public service: UserService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.service.getUser(this.user_id).subscribe((data: {}) => {
      this.userData = data;
    });
  }

  // Update employee data
  updateUser() {
    if (window.confirm('Etes-vous sur de bien vouloir modifier cette fiche abonné ?')) {
      this.service
        .updateUser(this.user_id, this.userData)
        .subscribe((data) => {
          this.router.navigate(['/dashboard']);
        });
    }
  }

}
