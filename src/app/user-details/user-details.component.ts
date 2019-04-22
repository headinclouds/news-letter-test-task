import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailsService } from '../emails.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetailsId: any;
  userDetails: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private emailsService: EmailsService) { }

  ngOnInit() {
    this.userDetailsId = this.route.snapshot.paramMap.get('id');
    this.emailsService.getEmails().subscribe((res) => {
      res.filter((item) => {
        if (this.userDetailsId == item.id) {
          this.userDetails = item;
        }

      })
    },
      (err) => {
        console.log(err.message);
      })

  }

}
