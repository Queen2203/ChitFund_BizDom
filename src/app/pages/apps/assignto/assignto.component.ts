import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-assignto',
  templateUrl: './assignto.component.html',
  styleUrls: ['./assignto.component.scss'],
})
export class AssigntoComponent implements OnInit {
  CompanyId = 1

  constructor(private fb: FormBuilder, private auth: AuthService) {}

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
