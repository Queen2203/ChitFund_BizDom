import { Component, OnInit } from '@angular/core'
import { NgbModal, ModalDismissReasons, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
})
export class ReceiveComponent implements OnInit {
  isReceive = true
  isReceivetable = false
  isTable = false
  isPopup = false
  CompanyId = 1

  constructor(private modalService: NgbModal, private auth: AuthService) {}

  ngOnInit(): void {}
  clickrepaytable() {
    this.isReceive = this.isReceive
    this.isTable = this.isTable
    this.isReceivetable = !this.isReceivetable
    this.getplans()
  }
  clickplanTable() {
    this.isReceive = !this.isReceive
    this.isReceivetable = !this.isReceivetable
    this.isTable = !this.isTable
  }
  back() {
    this.isReceive = !this.isReceive
    this.isReceivetable = !this.isReceivetable
    this.isTable = !this.isTable
  }
  // addamount(){
  //   this.isReceive = !this.isReceive
  //   this.isReceivetable = !this.isReceivetable
  //   this.isTable = this.isTable
  //   this.isPopup = !this.isPopup
  // }
  openDetailpopup(contentdetail) {
    const modalRef = this.modalService
      .open(contentdetail, {
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
      })
      .result.then(
        result => {},
        reason => {},
      )
  }
  getorderid(modalRef) {
    this.openDetailpopup(modalRef)
  }
  contactId = 1
  conplans: any
  getplans() {
    this.auth.Getcontactplans(this.contactId).subscribe(data => {
      this.conplans = data
      console.log(this.conplans)
    })
  }
} 
