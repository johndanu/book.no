import { Component, OnInit } from '@angular/core';

import { NgWhiteboardService } from 'ng-whiteboard';
import { AlphabetsService } from '../alphabets.service'

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.component.html',
  styleUrls: ['./write-letter.component.css']
})
export class WriteLetterComponent implements OnInit {
  
  public isPlaying =false;
  public image;
  public Nouns;
  public Consonents;
  public audio ;
  public brushSize;
  constructor(private whiteboardService: NgWhiteboardService, 
    public alphabetsService:AlphabetsService
    ) { }


  ngOnInit(): void {
    this.Clear()
    this.audio = <HTMLAudioElement>document.getElementById('player');
    this.image = this.alphabetsService.image;
    this.Nouns = this.alphabetsService.listOfNouns;
    this.Consonents = this.alphabetsService.listOfConsonents;
    this.brushSize = "5px";
  }

  Image(img){
    this.image = img;
    this.whiteboardService.erase();
    this.whiteboardService.addImage(img);
  }
  Audio(aud){

    this.audio.src = aud ;
  }

  SetFiles(image,audio){

    this.Image(image);
    this.Audio(audio)
  }

  ChangeColor(setcolor){
    this.alphabetsService.SetBrushColor(setcolor)
  }

  Undo(){
    this.whiteboardService.undo()
    this.alphabetsService.image = "clicked image"
 
  }

  Play(){

    if (this.isPlaying) {
      this.audio.pause()
    } else {
      this.audio.load();
      this.audio.play()
    }
    this.isPlaying = !this.isPlaying;
  }

  Redo(){
    this.whiteboardService.redo()
  }

  SetBrushSize(size){
    this.brushSize = size
  }

  Clear(){
    this.whiteboardService.erase();
    this.Image(this.image)
  }
}
