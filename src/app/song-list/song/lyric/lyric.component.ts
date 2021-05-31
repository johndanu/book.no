import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.css']
})
export class LyricComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play() {
    let audio = <HTMLAudioElement>document.getElementById('player');
    audio.play();
    console.log(audio);


  }

}
