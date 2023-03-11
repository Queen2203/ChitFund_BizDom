import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  CompanyId= 1
  StoreId: any
  loginfo: any
  groups: any = []
  show = true
  submitted: boolean = false
  group: any = {
    id: 0,
    Name: ''
  }
  userdata: any = {
    Id: 0,
    Name: '',
    GroupName: null,
    Address: null,
    PhoneNumber: null,
    CompanyId: 0
  }
 
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.group = {
      id: 0,
      Name: ''
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
      Name: ''
    }
  } 
  contact: any
  getgroup() {
    this.auth.Getparentcontact().subscribe(data => {
      this.contact = data
      console.log(this.contact)
    })
  }
  parentcon: any
  addgroup(){
    if(this.group.id == 0){
      this.userdata.Id = this.group.id
      this.userdata.Name = this.group.name
      this.userdata.GroupName = this.group.name
      this.userdata.Address = this.group.name
      this.userdata.PhoneNumber = this.group.name
      this.userdata.CompanyId = this.CompanyId
      console.log(this.userdata)
      this.auth.addparentcontact(this.userdata).subscribe(data=>{
        this.parentcon = data
        console.log("Data Added Successfully")
        this.getgroup()
        this.group = {
          id: 0,
          name: ''
        }
      })
      this.show = !this.show
    }
    else{
      this.userdata.Id = this.group.id
      this.userdata.Name = this.group.name
      this.userdata.GroupName = this.group.name
      this.userdata.Address = this.group.name
      this.userdata.PhoneNumber = this.group.name
      this.userdata.CompanyId = this.CompanyId
      console.log(this.userdata)
      this.auth.updateparentcontact(this.userdata).subscribe(data=>{
        this.parentcon = data
        console.log("Data Added Successfully")
        this.getgroup()
        this.group = {
          id: 0,
          name: ''
        }
      })
      this.show = !this.show
    }

  }
}
