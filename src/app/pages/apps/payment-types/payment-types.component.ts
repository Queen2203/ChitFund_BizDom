import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.scss'],
})
export class PaymentTypesComponent implements OnInit {
  CompanyId = 1

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getpaymentTypes()
  }
  payment: any
  getpaymentTypes() {
    this.auth.GetpaymentTypes(this.CompanyId).subscribe(data => {
      this.payment = data 
      console.log(this.payment)
    })
  }
}
