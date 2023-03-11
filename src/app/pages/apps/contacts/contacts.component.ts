import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'
import { merge, Observable, Subject } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  isIndex = true
  isAdd = false
  issearch = false
  isEdit = false
  groupId = null
  CompanyId = 1

  group: any ={
    id: 0,
    name: '',
    address: '',
    city: '',
    phoneNumber: '',
    country: '',
    postalCode: '',
    email: '',
    parentcontactId: null
  }

  Condata: any ={
    Id: 0,
    ParentcontactId: 0,
    Name: '',
    Address: '',
    City: '',
    PhoneNumber: '',
    Country: '',
    PostalCode: '',
    Email: ''

  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getcontact()
    this.getgroup()
  }

  clickpay() { 
    this.isAdd = !this.isAdd
    this.isIndex = !this.isIndex
  }
  clickrepay() {
    this.issearch = !this.issearch
    this.isIndex = !this.isIndex
  }
  clickedit(group){
    this.isAdd = this.isAdd
    this.isEdit = !this.isEdit
    this.isIndex = this.isIndex
    this.issearch = !this.issearch
    console.log(group)
    this.group = group
  }
  contact: any
  getcontact() {
    this.auth.GetContact(this.CompanyId).subscribe(data => {
      this.contact = data
      console.log(this.contact)
    })
  }
  groupdata: any
  getgroup() {
    this.auth.Getparentcontact().subscribe(data => {
      this.groupdata = data
      console.log(this.groupdata)
    })
  }
  parentid=0
  getcontactid(){
    console.log('ContactId', this.group.parentcontactId)
    // this.parentid = this.group.parentcontactId
  }
  saveddata: any
  addcontact(){
    this.Condata.Name = this.group.name
    this.Condata.Address = this.group.address
    this.Condata.City = this.group.city
    this.Condata.PhoneNumber = this.group.phoneNumber
    this.Condata.ParentcontactId = this.group.parentcontactId
    this.Condata.Email = this.group.email
    this.Condata.PostalCode = this.group.postalCode
    this.Condata.Country = this.group.country
    this.Condata.CompanyId = this.CompanyId
    console.log(this.Condata)
    this.auth.addcontact(this.Condata).subscribe(data=>{
      this.saveddata = data
      console.log("Data Saved Successfully")
    })  
  }
  editcontact(){
    this.Condata.Id = this.group.id
    this.Condata.Name = this.group.name
    this.Condata.Address = this.group.address
    this.Condata.City = this.group.city
    this.Condata.PhoneNumber = this.group.phoneNumber
    this.Condata.ParentcontactId = this.group.parentcontactId
    this.Condata.Email = this.group.email
    this.Condata.PostalCode = this.group.postalCode
    this.Condata.Country = this.group.country
    this.Condata.CompanyId = this.CompanyId
    console.log(this.Condata)
    this.auth.updatecontact(this.Condata).subscribe(data=>{
      this.saveddata = data
      console.log("Data Saved Successfully")
    })  
  }
} 
