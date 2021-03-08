import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {
  public pageNo = 0;
  public isPlaying = false;
  public book;
  public bookName;
  public readingPercentage: number = this.pageNo;
  public readPages = 1;
  public imgLoading= true;



  constructor(private _LibraryService: LibraryService, private route: ActivatedRoute) { }

  ngOnInit() {
    let bookName = this.route.snapshot.paramMap.get('book');
    this.bookName = bookName;
    this.book = this._LibraryService.getbook(bookName);
    this.findPercentage();
  }

  findPercentage() {
    this.readingPercentage = ((this.readPages) / this.book.bookPage.length) * 100;
  }

  nextPage() {
    let audio = <HTMLAudioElement>document.getElementById('player');
    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = !this.isPlaying;
    }

    if (this.pageNo == (this.readPages - 1)) {

      this.readPages = this.readPages + 1
    }
    this.pageNo = this.pageNo + 1;
    this.findPercentage();
  }
  prevPage() {
    let audio = <HTMLAudioElement>document.getElementById('player');
    if (this.isPlaying) {

      audio.pause();
      this.isPlaying = !this.isPlaying;

    }
    this.pageNo = this.pageNo - 1;
  }
  play() {
    let audio = <HTMLAudioElement>document.getElementById('player');
    audio.src = this.book.bookPage[this.pageNo].pageAud;
    if (this.isPlaying) {
      audio.pause()
    } else {
      audio.load();
      audio.play()
    }
    this.isPlaying = !this.isPlaying;
  }
  onLoad() {
    this.imgLoading = false;
}

}
