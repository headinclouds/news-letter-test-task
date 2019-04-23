import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-user-details',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">User Saving</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss(false)">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to return to list of users?</strong></p>
    <p>Your changes are not saved.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss(false)">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close(true)">Ok</button>
  </div>
  `,
})
export class ModalUserDetailsComponent implements OnInit {

  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {
  }

}
