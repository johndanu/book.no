import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
public myaudio = new Audio();
  constructor() { }
  ngOnInit(): void {
  }
  Play(){
    this.myaudio.src = "assets/audio/Song-for-childrens/song01.mp3"
    this.myaudio.play()
  }
}
