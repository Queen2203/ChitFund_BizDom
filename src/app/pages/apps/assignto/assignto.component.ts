import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as moment from 'moment'
import { NzModalService } from 'ng-zorro-antd/modal'
import { NgbModal, ModalDismissReasons, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from 'src/app/auth.service'
import { NzNotificationService } from 'ng-zorro-antd'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import {
  NzPlacementType,
  NzContextMenuService,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown'
import { id } from 'date-fns/locale'
import { min } from 'date-fns'

//Module
import { planAssignModule } from './assignto.module'
import { transmodule } from './assignto.module'

@Component({
  selector: 'app-assignto',
  templateUrl: './assignto.component.html',
  styleUrls: ['./assignto.component.scss'],
})
export class AssigntoComponent implements OnInit {
  planmodule: planAssignModule
  transmodule: Array<transmodule> = null
  isIndex= true
  isTable = false
  CompanyId = 1 
 
  // plan = {
  //   id: 0,
  //   name: '',
  //   invoice: '',
  //   amount: ''
  // }
  contactId: number
  test: any ={
    contactId: 0,
    pcontactId: 0,
    referedby: ''
  }
  assign: any ={
    ContactId: 0,
    PlanId: 0,
    CreatedDate: '',
    CompanyId: 0,
    Amount: '',
    PlanDetailId: 0,
    TransTypeId: 0,
    ReferedBy: '',
    IsPaid: false
  }
 

  constructor(        private modalService: NgbModal,
    private notification: NzNotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public location: Location,
    private nzContextMenuService: NzContextMenuService,
    private fb: FormBuilder, 
    private auth: AuthService) {}

  marks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
    100: '100',
  }
  validateForm1: FormGroup
  validateForm2: FormGroup
  submitForm1(): void {
    for (const i in this.validateForm1.controls) {
      if (this.validateForm1.controls.hasOwnProperty(i)) {
        this.validateForm1.controls[i].markAsDirty()
        this.validateForm1.controls[i].updateValueAndValidity()
      }
    }
  }
  ngOnInit(): void {
    this.validateForm1 = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      budget: [30],
    })
    this.validateForm2 = this.fb.group({
      amount: [null, [Validators.required]],
      pin: [null, [Validators.required]],
    })
    // console.log(this.planmodule.CompanyId)
    // this.CompanyId = this.planmodule.CompanyId
    this.getplans()
    this.getcontact()
    this.getgroup()
    this.getuser()
  }  

  plans: any
  getplans() {
    this.auth.Getplans(this.CompanyId).subscribe(data => {
      this.plans = data
      console.log(this.plans)
    })
  }
  contact: any
  getcontact() {
    this.auth.GetContact(this.CompanyId).subscribe(data => {
      this.contact = data
      console.log(this.contact)
    })
  }
  pcontact: any
  getgroup() {
    this.auth.Getparentcontact().subscribe(data => {
      this.pcontact = data
      console.log(this.pcontact)
    })
  }
  user: any
  getuser() {
    this.auth.Getusers(this.CompanyId).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }
  contid: number
  getlocationid(){
    console.log('contactId', this.contactId)
    // this.contid = this.test.contactId
    // console.log(this.contid)
  }
  getpcontactid(){
    console.log('pcontactId', this.test.pcontactId)
  }
  getcdate(){
    console.log('createdDate', this.test.createdDate)
  }
  getrefer(){
    console.log('referedby', this.test.referedby)
  }


  plan: any
  clickassign(plan){
    this.isIndex = !this.isIndex
    this.isTable = !this.isTable
    this.plan = plan
    console.log(plan)
  }
  // reset(){
  // }

trans: transmodule
  submit(){
    console.log(this.plan)
    console.log(this.CompanyId)
    this.assign.CompanyId = this.CompanyId
    this.assign.ContactId = this.contactId
    this.assign.PlanId = this.plan.id
    this.assign.Amount = this.plan.amount
    this.assign.PlanDetailsId = 1
    this.assign.TransTypeId = 1
    this.assign.ReferedBy = this.test.referedby
    this.assign.IsPaid = false
    console.log(this.assign)
  }
} 
