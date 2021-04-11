import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-all-book-list',
  templateUrl: './all-book-list.component.html',
  styleUrls: ['./all-book-list.component.css']
})
export class AllBookListComponent implements OnInit {
  public BookStage01 = [];
  public BookStage02 = [];
  public BookStage03 = [];
  public list = []

  constructor(private router:Router, private _LibraryService: LibraryService) { }


  
  ngOnInit(): void {
    this.list = this._LibraryService.bookDetail
    this.BookStage01 = this.list.filter(book => book.category == 'stage1')
    this.BookStage02 = this.list.filter(book => book.category == 'stage2') 
    this.BookStage03 = this.list.filter(book => book.category == 'stage3')
  }
  selectBook(book){
    this.router.navigate(['/read/',book])
  }

}
