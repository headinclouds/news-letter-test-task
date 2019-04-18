import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModalModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { EmailsService } from './emails.service';

import { AppComponent } from './app.component';
import { EmailRowDirective } from './email-row.directive';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListEmailsComponent } from './list-emails/list-emails.component';
import { NgbdModalContent } from './modal/modal.component';

const appRoutes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: ListEmailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmailRowDirective,
    UserDetailsComponent,
    ListEmailsComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModalModule,
    NgbPaginationModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [EmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
