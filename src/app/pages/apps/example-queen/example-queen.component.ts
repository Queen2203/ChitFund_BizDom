import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-example-queen',
  templateUrl: './example-queen.component.html',
  styleUrls: ['./example-queen.component.scss']
})
export class ExampleQueenComponent implements OnInit {
  closeResult: string

  constructor(private modalService: NgbModal) { }


  open(content) {
    this.modalService.open(content)
  } 

  openCustomClass(content) {
    this.modalService.open(content, { centered: true })
  }

  ngOnInit(): void {
  }

}
