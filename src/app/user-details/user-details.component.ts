import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailsService } from '../emails.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUserDetailsComponent } from '../modal-user-details/modal-user-details.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetailsId: any;
  userDetails: any;
  edit: boolean = true;
  userDetailsCopy: Object;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private emailsService: EmailsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.userDetailsId = this.route.snapshot.paramMap.get('id');
    this.emailsService.getEmails().subscribe((res) => {
      res.filter((item) => {
        if (this.userDetailsId == item.id) {
          this.userDetails = Object.assign({}, item);
          this.userDetailsCopy = Object.assign({}, this.userDetails);
        }

      })
    },
      (err) => {
        console.log(err.message);
      })
  }
  sendUser() {
    this.edit = false;
    this.userDetailsCopy = Object.assign({}, this.userDetails);
    //TODO: write post request etc
  }

  cancel() {
    this.edit = true;
    if (JSON.stringify(this.userDetailsCopy) === JSON.stringify(this.userDetails)) {
      this.router.navigate(['/users']);
    }
    else {
      this.modalService.open(ModalUserDetailsComponent).result.then((result)=>{
        if (result) {
          this.userDetails = this.userDetailsCopy;
         this.router.navigate(['/users']);
        }
      }).catch((res) => {});
    }
  }

}
