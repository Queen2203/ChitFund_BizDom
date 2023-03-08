import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  CompanyId = 1

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getplans()
  } 
  plans: any
  getplans() {
    this.auth.Getplans(this.CompanyId).subscribe(data => {
      this.plans = data
      console.log(this.plans)
    })
  }
}
