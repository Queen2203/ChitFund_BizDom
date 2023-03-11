import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  CompanyId = 1
  StoreId: any
  loginfo: any
  groups: any = []
  show = true
  submitted: boolean = false
  group: any = {
    id: 0,
    name: '',
    amount: '',
    invoice: ''
  }
  userdata: any = {
    Id: 0,
    Name: '',
    Amount: '',
    Invoice: '',
    CompanyId: ''
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.group = {
      id: 0,
      name: '',
      amount: '',
      invoice: ''
    }
    this.getplans()
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
      Id: 0,
      name: '',
      amount: '',
      invoice: ''
    }
  }
  plans: any
  getplans() {
    this.auth.Getplans(this.CompanyId).subscribe(data => {
      this.plans = data
      console.log(this.plans)
    })
  }
  plandata: any
  Addplan(){
    if(this.group.id == 0){
      this.userdata.Id = this.group.id
      this.userdata.Name = this.group.name
      this.userdata.Amount = this.group.amount
      this.userdata.Invoice = "test"
      this.userdata.CompanyId = this.CompanyId
      // this.userdata.IsActive = this.group.IsActive
      console.log(this.userdata)
      this.auth.addplans(this.userdata).subscribe(data=>{
        this.plandata = data
        console.log("Data Added Successfully")
        this.getplans()
        this.group = {
          Id: 0,
          Name: '',
          Amount: '',
          invoice: ''
        }
      })
      this.show = !this.show
    }
    else{
      this.userdata.Id = this.group.id
      this.userdata.Name = this.group.name
      this.userdata.Amount = this.group.amount
      this.userdata.Invoice = "test"
      this.userdata.CompanyId = this.CompanyId
      // this.userdata.IsActive = this.group.IsActive
      console.log(this.userdata)
      this.auth.updateplan(this.userdata).subscribe(data=>{
        this.plandata = data
        console.log("Data Updated Successfully")
        this.getplans()
        this.group = {
          id: 0,
          name: '',
          amount: '',
          invoice: ''
        }
      })
      this.show = !this.show
    }
  }
}
