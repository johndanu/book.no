import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadBookComponent } from './read-book/read-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AllBookListComponent } from './all-book-list/all-book-list.component';
//import { LearnLettersComponent } from './feature/learn-letters/learn-letters.component';
import { LetterListComponent } from './Alphabets/letter-list/letter-list.component';
import { WriteLetterComponent } from './Alphabets/write-letter/write-letter.component';


const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  }, 
  {
    path: "help",
    component: HelpPageComponent
  },
  {
    path:"book-list",
    component: AllBookListComponent
  },
  {
    path : "read/:book",
    component: ReadBookComponent
  },
  {
    path : "letters",
    component:LetterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
