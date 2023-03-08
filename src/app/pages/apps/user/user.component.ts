import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  CompanyId = 1
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
    this.getuser() 
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

  user: any
  getuser() {
    this.auth.Getusers(this.CompanyId).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }
}
