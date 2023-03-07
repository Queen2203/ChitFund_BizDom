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
}
