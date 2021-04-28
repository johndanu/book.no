import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { from } from 'rxjs';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-all-book-list',
  templateUrl: './all-book-list.component.html',
  styleUrls: ['./all-book-list.component.css']
})
export class AllBookListComponent implements OnInit {
  public bookListByStage=[];
  public stage:string;
  public list = []
  public stageNumber : string;

  constructor(private router:Router, private _LibraryService: LibraryService, private route : ActivatedRoute) { }


  
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.stage = params['stage']
      this.ReloadBooks()
    })
    
    
  }
  selectBook(book){
    this.router.navigate(['/read/',book])
  }
  ReloadBooks(){
    this.list = this._LibraryService.bookDetail
    this.bookListByStage = this.list.filter(book => book.category == this.stage)
    this.stageNumber=this.stage.substring(this.stage.length-1,this.stage.length)
  }
}
