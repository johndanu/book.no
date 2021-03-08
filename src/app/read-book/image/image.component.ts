import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }
@Input('imageSource') imgSrc: String;
  ngOnInit(): void {
  }
  image = 'assets/img/imgSpinner.gif';
}
