import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserDetailService } from 'src/app/services/user-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = 'Fiche abonné';
  user: any;
  errorMessage = '';
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserDetailService) {
    
   }

   ngOnInit(): void {
    const user_id = Number(this.route.snapshot.paramMap.get('user_id'));
    if (user_id) {
      this.getUserById(user_id);
    }
   }

   getUserById(user_id: number): void {
    this.service.getUserById(user_id).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });
  }
   gotoUsers() {
    this.router.navigate(['/dashboard']);
  }
}

