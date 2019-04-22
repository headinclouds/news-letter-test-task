import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {NgbModalModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { EmailsService } from './emails.service';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListEmailsComponent } from './list-emails/list-emails.component';
import { NgbdModalContent } from './modal/modal.component';

const appRoutes: Routes = [
  {
    path: 'users/:id',
    loadChildren: './users/users.module#UsersModule'
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
    ListEmailsComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModalModule,
    NgbPaginationModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [EmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
