import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadBookComponent } from './read-book/read-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AllBookListComponent } from './all-book-list/all-book-list.component';
//import { LearnLettersComponent } from './feature/learn-letters/learn-letters.component';
import { LetterListComponent } from './Alphabets/letter-list/letter-list.component';
import { WriteLetterComponent } from './Alphabets/write-letter/write-letter.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongComponent } from './song-list/song/song.component';
import { VideoComponent } from './song-list/song/video/video.component';
import { LyricComponent } from './song-list/song/lyric/lyric.component';
import { AudioComponent } from './song-list/song/audio/audio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/book-list/stage1',
    pathMatch: 'full'
  },
  { path: 'home', component: HomePageComponent },
  {
    path: 'help',
    component: HelpPageComponent,
  },
  {
    path: 'book-list/:stage',
    component: AllBookListComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'read/:book',
    component: ReadBookComponent,
  },
  {
    path: 'letters',
    component: LetterListComponent,
  },
  {
    path: 'song-list',
    component: SongListComponent
  },
  {
    path: 'my-song',
    component: SongComponent,
    children: [
      {
        path: 'video',
        component: VideoComponent
      },
      {
        path: 'lyric',
        component: LyricComponent
      },
      {
        path: 'audio',
        component: AudioComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
