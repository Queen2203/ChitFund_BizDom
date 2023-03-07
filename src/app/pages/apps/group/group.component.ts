import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  CompanyId: any
  StoreId: any
  loginfo: any
  groups: any = []
  show = true
  submitted: boolean = false
  group: any = {
    id: 0,
    groupname: '',
    name: '',
    address: '',
    city: '',
    phoneNumber: 0,
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.group = {
      id: 0,
      groupname: '',
      Name: '',
      Address: '',
      City: '',
      PhoneNumber: 0,
    }
    this.getgroup()
  }

  editTaxgroup(group) {
    this.group = group
    this.show = !this.show
  }

  back() {
    console.log('Bact to TaxGrp Screen!')
    this.show = !this.show
    this.group = {
      id: 0,
      description: '',
      tax1: 0,
      tax2: 0,
      tax3: 0,
      companyId: this.CompanyId,
      isInclusive: false,
    }
  }
  contact: any
  getgroup() {
    this.auth.Getparentcontact().subscribe(data => {
      this.contact = data
      console.log(this.contact)
    })
  }
}
