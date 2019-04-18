import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class NgbdModalContent implements OnInit {
  @Input() user;
  age: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    let dateOfBirth = new Date(this.user.dateOfBirth);
    var ageDifMs = Date.now() - dateOfBirth.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}