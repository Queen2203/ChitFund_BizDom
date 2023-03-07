import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  isIndex = true
  isAdd = false
  issearch = false
  groupId = null
  CompanyId = 1

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getcontact()
  }

  clickpay() {
    this.isAdd = !this.isAdd
    this.isIndex = !this.isIndex
  }
  clickrepay() {
    this.issearch = !this.issearch
    this.isIndex = !this.isIndex
  }
  contact: any
  getcontact() {
    this.auth.GetContact(this.CompanyId).subscribe(data => {
      this.contact = data
      console.log(this.contact)
    })
  }
}
