import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.scss'],
})
export class PaymentTypesComponent implements OnInit {
  CompanyId = 1
  StoreId: any
  loginfo: any
  groups: any = []
  show = true
  submitted: boolean = false
  group: any = {
    id: 0,
    description: ''
  }
  userdata: any = {
    Id: 0,
    Description: '',
    CompanyId: ''
  }
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.group = {
      id: 0,
      description: ''
    }
    this.getpaymentTypes()
  }
  payment: any
  getpaymentTypes() {
    this.auth.GetpaymentTypes(this.CompanyId).subscribe(data => {
      this.payment = data 
      console.log(this.payment)
    })
  }
  back() {
    console.log('Bact to TaxGrp Screen!')
    this.show = !this.show
    this.group = {
      id: 0,
      description: ''
    }
  }
  editTaxgroup(group) {
    console.log(group)
    this.group = group
    this.show = !this.show
  }
  plandata: any
  Addpaymenttype(){
    if(this.group.id == 0){
      this,this.userdata.Id = this.group.id
      this.userdata.Description = this.group.description
      this.userdata.CompanyId = this.CompanyId
      // this.userdata.IsActive = this.group.IsActive
      console.log(this.userdata)
      this.auth.addpaymentTypes(this.userdata).subscribe(data=>{
        this.plandata = data
        console.log("Data Added Successfully")
        this.getpaymentTypes()
        this.group = {
          id: 0,
          description: ''
        }
      }) 
      this.show = !this.show
    }
    else{
      this,this.userdata.Id = this.group.id
      this.userdata.Description = this.group.description
      this.userdata.CompanyId = this.CompanyId
      // this.userdata.IsActive = this.group.IsActive
      console.log(this.userdata)
      this.auth.updatepayment(this.userdata).subscribe(data=>{
        this.plandata = data
        console.log("Data Added Successfully")
        this.getpaymentTypes()
        this.group = {
          id: 0,
          description: ''
        }
      })
      this.show = !this.show
    }
  }
}
