import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserDetailService } from 'src/app/services/user-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = 'Fiche abonné';
  userDetail: any = {};
  
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserDetailService) {
   }

   ngOnInit(): void {
    const userId = this.route.snapshot.params['user_id'];
   this.service.getUser(userId).subscribe((data: {}) => {
    this.userDetail = data;
   })
  }
 
   gotoUsers() {
    this.router.navigate(['/dashboard']);
  }

}
