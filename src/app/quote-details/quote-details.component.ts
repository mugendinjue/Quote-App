import { Component, OnInit , Input ,Output , EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input () showDetails : Quotes; 
  @Output () willDelete = new EventEmitter<boolean>();

  deleteDiary(done : boolean){
    this.willDelete.emit(done);
  }

  constructor() { }

  ngOnInit() {
  }

}
