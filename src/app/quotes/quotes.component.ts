import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotesArr : Quotes [] = [
    new Quotes (1,' Winston Churchill','Denis','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',new Date(2019,5,10),0,0),
    new Quotes (2,' Walt Disney','Christine','The Way Get Started Is To Quit Talking And Begin Doing.',new Date(2019,5,15),0,0),
    new Quotes (3,' Theodore Roosevelt','Malcom','Do What You Can With All You Have, Wherever You Are.',new Date(2019,5,20),0,0),
    new Quotes (4,' Nelson Mandela','Washu Code','It always seems impossible until it’s done.',new Date(2019,5,23),0,0),
    new Quotes (5,' Albert Einstein','Hillary','Creativity Is Intelligence Having Fun.',new Date(2019,5,25),0,0),
    new Quotes (6,' Steve Jobs','Mercy','If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',new Date(2019,5,30),0,0),
    new Quotes (7,' Brian Tracy','Brian','Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.',new Date(2019,6,1),0,0),
    new Quotes (8,' Steve Jobs','Jayrene','The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.',new Date(2019,6,10),0,0),
    new Quotes (9,' Walt Disney','Genson','All our dreams can come true, if we have the courage to pursue them.',new Date(2019,6,15),0,0),
    new Quotes (10,' Aristotle','Steve','We are what we repeatedly do. Excellence, then, is not an act, but a habit.',new Date(2019,6,19),0,0),

  ]

  move(index){
    this.quotesArr[index].show = !this.quotesArr[index].show;
  }


  likeAdd(willAdd,index){
    if( willAdd ){
      let likeNum = this.quotesArr[index].like;
      this.quotesArr[index].like = likeNum + 1;



    }
  }

  likeDisAdd(willDlike,index){
    if( willDlike ){
      let disLikeNum = this.quotesArr[index].disLike;
      this.quotesArr[index].disLike = disLikeNum + 1;


    }
  }

  removeDiary(willDelete,index){
    if(willDelete){
      let confirmation = confirm(`Are you sure you want to delete QUOTE?`);
      if(confirmation){
        this.quotesArr.splice(index,1);
      }
    }
  }

  updateForm (quote){
    let newId = this.quotesArr.length;
    quote.id = newId + 1;
    quote.postDate = new Date ;
    this.quotesArr.push(quote);
  }




  constructor() { }

  ngOnInit() {
  }



}
