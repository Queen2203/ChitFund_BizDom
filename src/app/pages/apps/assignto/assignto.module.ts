import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { ɵSafeHtml } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'

export class planAssignModule { 
 ContactId: number
 PlanId: number
 CreatedDate: string
 CompanyId: number
 Transactions: transmodule

 constructor(){
  this.ContactId = 0
  this.PlanId = 0
  this.CreatedDate = moment().format('YYYY-MM-DD HH:MM A')
  this.CompanyId = 0
  this.Transactions = new transmodule()
 }
}

export class transmodule{
  Amount: string
  PlanId: number
  PlanDetailId: number
  TransTypeId: number
  ContactId: number
  CompanyId: number
  ReferedBy: string
  CreatedDate: string
  ModifiedDate: string
  IsPaid: boolean

  constructor(contId = 0){
    this.Amount= ''
    this.PlanId = 0
    this.PlanDetailId = 0
    this.TransTypeId = 0
    this.ContactId =contId
    this.CompanyId = 0
    this.ReferedBy = ''
    this.CreatedDate = moment().format('YYYY-MM-DD HH:MM A')
    this.ModifiedDate = moment().format('YYYY-MM-DD HH:MM A')
    this.IsPaid = false
  }
}
