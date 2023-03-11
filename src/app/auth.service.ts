import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url1 = 'https://localhost:7190/api/'
  base_url = 'https://chitfund.azurewebsites.net/api/'
  server_ip = 'http://localhost'
  dburl = 'http://localhost:8081/'

  constructor(private http: HttpClient) {}

  Getparentcontact() {
    return this.http.get(this.base_url1 + `Contact/Getparentcontact`)
  }
  GetContact(companyId) {
    return this.http.get(this.base_url1 + 'Contact/Getcontact?CompanyId=' + companyId)
  }
  Getusers(companyId) {
    return this.http.get(this.base_url1 + 'Admin/Getusers?CompanyId=' + companyId)
  }
  Getplans(companyId) {
    return this.http.get(this.base_url1 + 'Admin/Getplans?CompanyId=' + companyId)
  }
  GetpaymentTypes(companyId) {
    return this.http.get(this.base_url1 + 'Admin/GetpaymentTypes?CompanyId=' + companyId)
  }
  Getcontactplans(ContactId) {
    return this.http.get(this.base_url1 + 'Contact/Getcontactplandata?ContactId=' + ContactId)
  }
  addusers(users){
    return this.http.post(this.base_url1 + 'Admin/Adduser', users)
  }
  addplans(plans){
    return this.http.post(this.base_url1 + 'Admin/Addplan', plans)
  }
  addpaymentTypes(payments){
    return this.http.post(this.base_url1 + 'Admin/AddpaymentTypes', payments)
  }
  addparentcontact(parentcon){
    return this.http.post(this.base_url1 + 'Contact/Addparentcontact', parentcon)
  }
  addcontact(con){
    return this.http.post(this.base_url1 + 'Contact/Addcontact', con)
  }
  updateusers(user){
    return this.http.post(this.base_url1 + 'Admin/Updateuser', user)
  }
  updateplan(plan){
    return this.http.post(this.base_url1 + 'Admin/Updateplan', plan)
  }
  updatepayment(pay){
    return this.http.post(this.base_url1 + 'Admin/updatepaymentType', pay)
  }
  updateparentcontact(parentcon){
    return this.http.post(this.base_url1 + 'Contact/UpdateParentContact', parentcon)
  }
  updatecontact(cont){
    return this.http.post(this.base_url1 + 'Contact/UpdateContact', cont)
  }
}
