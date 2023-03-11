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
    name: '',
    role: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  }
  userdata: any = {
    Id: 0,
    Name: '',
    Role: '',
    PhoneNumber: '',
    Email: '',
    Address: '',
    City: '',
    PostalCode: '',
    Country: '',
    CompanyId: 0
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.group = {
      id: 0,
      name: '',
      role: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      country: ''
    }
    this.getuser() 
    // this.Adduser()
  }
  editTaxgroup(group) {
    console.log(group)
    this.group = group
    this.show = !this.show
  }

  back() {
    console.log('Bact to TaxGrp Screen!')
    this.show = !this.show
    this.group = {
      id: 0,
      name: '',
      role: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      country: ''
    }
  }

  user: any
  getuser() {
    this.auth.Getusers(this.CompanyId).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }
  userss: any
  Adduser(){
      if (this.group.id == 0) {
        this.userdata.Id = this.group.id
        this.userdata.Name = this.group.name
        this.userdata.Role = this.group.role
        this.userdata.PhoneNumber = this.group.phoneNumber
        this.userdata.Email = this.group.email
        this.userdata.Address = this.group.address
        this.userdata.City = this.group.city
        this.userdata.PostalCode =this.group.postalCode
        this.userdata.Country = this.group.country
        this.userdata.CompanyId = this.CompanyId
        console.log(this.userdata)
        this.auth.addusers(this.userdata).subscribe(data =>{
          this.userss = data
          console.log("Data Added Successfully")
          this.getuser()
        this.group = {
          id: 0,
          name: '',
          role: '',
          phoneNumber: '',
          email: '',
          address: '',
          city: '',
          postalCode: '',
          country: ''
        }
        })       
        this.show = !this.show
      }
      else{
        this.userdata.Id = this.group.id
        this.userdata.Name = this.group.name
        this.userdata.Role = this.group.role
        this.userdata.PhoneNumber = this.group.phoneNumber
        this.userdata.Email = this.group.email
        this.userdata.Address = this.group.address
        this.userdata.City = this.group.city
        this.userdata.PostalCode =this.group.postalCode
        this.userdata.Country = this.group.country
        this.userdata.CompanyId = this.CompanyId
        console.log(this.userdata)
        this.auth.updateusers(this.userdata).subscribe(data =>{
          this.userss = data
          console.log("Data Updated Successfully")
          this.getuser()
          this.group = {
            id: 0,
            name: '',
            role: '',
            phoneNumber: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            country: ''
          }
        })
        this.show = !this.show
      }
    } 
}
 