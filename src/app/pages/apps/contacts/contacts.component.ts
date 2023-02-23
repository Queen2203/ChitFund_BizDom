import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  isIndex= true
  isAdd = false
  issearch = false
  constructor() { }

  ngOnInit(): void {
  }

  clickpay() {
    this.isAdd = !this.isAdd
    this.isIndex = !this.isIndex
  }
  clickrepay() {
    this.issearch = !this.issearch
    this.isIndex = !this.isIndex
  } 
 
} 
