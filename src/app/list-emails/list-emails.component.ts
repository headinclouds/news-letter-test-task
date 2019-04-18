import { Component, OnInit, Input } from '@angular/core';
import { EmailsService } from '../emails.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';
@Component({
  selector: 'app-list-emails',
  templateUrl: './list-emails.component.html',
  styleUrls: ['./list-emails.component.css']
})
export class ListEmailsComponent implements OnInit {
  users: Array<any>;
  constructor(private emailsService: EmailsService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getEmails();
  }

  getEmails() {
    this.emailsService.getEmails().subscribe((res) => {
      this.users = res;
    }, 
    (err) => {
      console.log(err);
    })
  }

  open(user) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.user = user;
  }

}
