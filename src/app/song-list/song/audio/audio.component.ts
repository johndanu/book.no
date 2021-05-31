import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  // public myaudio = new Audio();
  // public cuttentTime = (this.myaudio.currentTime).subscribe({
  //   next(tym){

  //   }
  // });
  // public playBool: boolean = true;

  constructor() { }
  ngOnInit(): void {
  }


  // Play() {
  //   this.myaudio.src = "assets/audio/Song-for-childrens/song01.mp3"
  //   this.myaudio.play()
  //   this.playBool = !this.playBool
  // }

  // Pause() {
  //   this.myaudio.pause()
  //   this.playBool = !this.playBool
  // }
  // CurrentTime() {
  //   alert(this.myaudio.currentTime)
  // }
}
