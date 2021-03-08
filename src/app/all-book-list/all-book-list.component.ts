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
  public smallBookList = [];
  public bigBookList = [];
  public list = []

  constructor(private router:Router, private _LibraryService: LibraryService) { }


  
  ngOnInit(): void {
    this.list = this._LibraryService.bookDetail
    this.smallBookList = this.list.filter(book => book.category == 'small')
    this.bigBookList = this.list.filter(book => book.category == 'big') 
  }
  selectBook(book){
    this.router.navigate(['/read/',book])
  }

}
