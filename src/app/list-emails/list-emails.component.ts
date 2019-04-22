import { Component, OnInit, Input } from '@angular/core';
import { EmailsService } from '../emails.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';

@Component({
  selector: 'app-list-emails',
  templateUrl: './list-emails.component.html',
  styleUrls: ['./list-emails.component.css']
})


export class ListEmailsComponent implements OnInit {
  users: any;
  listToDelete: Array<any> = [];
  listToExport:  Array<any> = [];
  page: number = 1;
  usersToShow:  Array<any>;

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
        console.log(err.message);
      })
  }

  open(user) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.user = user;
  }

  delete(itemsId) {
    let filteredUsers = this.users.filter((value, index, arr) => {
      return !itemsId.includes(value.id);
    });
    this.users = filteredUsers;
    this.listToExport = [];
    this.listToDelete = [];
  }

  addToList(user, userId, event) {
    if(event.target.checked) {
      this.listToExport.push(user);
      this.listToDelete.push(userId)
    } else {
        this.listToExport = this.listToExport.filter( (usr) => usr.id !== userId );
        this.listToDelete = this.listToDelete.filter( (usr) => usr !== userId);
    }
  }

  downloadCSV(args) {  
    let data, filename, link;
    let csv = this.convertArrayOfObjectsToCSV({
        data: this.listToExport
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}

  private convertArrayOfObjectsToCSV(args) {  
    let data, result, ctr, keys, columnDelimiter, lineDelimiter;
    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = ',';
    lineDelimiter = '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

}
