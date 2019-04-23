import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { ModalUserDetailsComponent } from '../modal-user-details/modal-user-details.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModalModule
  ],
  declarations: [ModalUserDetailsComponent],
  entryComponents: [ModalUserDetailsComponent],
  exports: [RouterModule, FormsModule]
})
export class UserDetailsRoutingModule { }
