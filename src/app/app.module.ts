import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgWhiteboardModule }from'ng-whiteboard';
import { LazyLoadImageModule } from 'ng-lazyload-image';

 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Common/nav-bar/nav-bar.component';
import { AllBookListComponent } from './all-book-list/all-book-list.component';
import { ReadBookComponent } from './read-book/read-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import{LibraryService} from './library.service';
import { ImageComponent } from './read-book/image/image.component';
//import { LearnLettersComponent } from './feature/learn-letters/learn-letters.component';
import { WriteLetterComponent } from './Alphabets/write-letter/write-letter.component';
import { LetterListComponent } from './Alphabets/letter-list/letter-list.component';
import { LettersComponent } from './Alphabets/write-letter/letters/letters.component';
import { FooterComponent } from './Common/footer/footer.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongComponent } from './song-list/song/song.component';
import { VideoComponent } from './song-list/song/video/video.component';
import { LyricComponent } from './song-list/song/lyric/lyric.component';
import { AudioComponent } from './song-list/song/audio/audio.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllBookListComponent,
    ReadBookComponent,
    HomePageComponent,
    HelpPageComponent,
    ImageComponent,
    WriteLetterComponent,
    LetterListComponent,
    LettersComponent,
    FooterComponent,
    SongListComponent,
    SongComponent,
    VideoComponent,
    LyricComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
    NgWhiteboardModule
    
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
