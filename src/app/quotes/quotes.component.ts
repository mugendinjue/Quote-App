import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotesArr : Quotes [] = [
    new Quotes (1,'denis','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',new Date(2019,5,10),10,15),
    new Quotes (2,'denis','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',new Date(2019,5,10),15,30)
  ]

  constructor() { }

  ngOnInit() {
  }

}
