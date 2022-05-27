import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  c1:string='Fresh And Tasty Fruits'
  c2:string='Fresh Fruits....'
  c3:string='Make Your Day Feel Fresh'
  src1="assets/c1.jpg"
  src2="assets/c2.jpg"
  src3="assets/c8.jpg"
  src4="assets/c6.jpg"
  src5="assets/c7.jpg"
  src6="assets/c4.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
