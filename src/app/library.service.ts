import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {


  public bookDetail = [
    {
      id: "book1",
      name: "Veedu",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/01.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/01.jpg",
          pageAud: "assets/audio/Veedu-book-1/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/03.jpg",
          pageAud: "assets/audio/Veedu-book-1/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/04.jpg",
          pageAud: "assets/audio/Veedu-book-1/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/05.jpg",
          pageAud: "assets/audio/Veedu-book-1/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/06.jpg",
          pageAud: "assets/audio/Veedu-book-1/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/07.jpg",
          pageAud: "assets/audio/Veedu-book-1/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/08.jpg",
          pageAud: "assets/audio/Veedu-book-1/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/09.jpg",
          pageAud: "assets/audio/Veedu-book-1/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/10.jpg",
          pageAud: "assets/audio/Veedu-book-1/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/11.jpg",
          pageAud: "assets/audio/Veedu-book-1/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/12.jpg",
          pageAud: "assets/audio/Veedu-book-1/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/13.jpg",
          pageAud: "assets/audio/Veedu-book-1/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/14.jpg",
          pageAud: "assets/audio/Veedu-book-1/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/15.jpg",
          pageAud: "assets/audio/Veedu-book-1/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Veedu-book-1/16.jpg",
          pageAud: "assets/audio/Veedu-book-1/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },

    {
      id: "book3",
      name: "Kadatkarai",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/03.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/01.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/03.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/04.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/05.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/06.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/07.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/08.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/09.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/10.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/11.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/12.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/13.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/14.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/15.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kadatkarai-book-3/16.jpg",
          pageAud: "assets/audio/Kadatkarai-book-3/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book4",
      name: "Pannaimaram",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/04.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/01.jpg",
          pageAud: "assets/audio/Pannai-book-4/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/03.jpg",
          pageAud: "assets/audio/Pannai-book-4/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/04.jpg",
          pageAud: "assets/audio/Pannai-book-4/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/05.jpg",
          pageAud: "assets/audio/Pannai-book-4/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/06.jpg",
          pageAud: "assets/audio/Pannai-book-4/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/07.jpg",
          pageAud: "assets/audio/Pannai-book-4/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/08.jpg",
          pageAud: "assets/audio/Pannai-book-4/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/09.jpg",
          pageAud: "assets/audio/Pannai-book-4/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/10.jpg",
          pageAud: "assets/audio/Pannai-book-4/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/11.jpg",
          pageAud: "assets/audio/Pannai-book-4/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/12.jpg",
          pageAud: "assets/audio/Pannai-book-4/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/13.jpg",
          pageAud: "assets/audio/Pannai-book-4/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/14.jpg",
          pageAud: "assets/audio/Pannai-book-4/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/15.jpg",
          pageAud: "assets/audio/Pannai-book-4/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pannai-book-4/16.jpg",
          pageAud: "assets/audio/Pannai-book-4/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },

    {
      id: "book5",
      name: "Pommai",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/05.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/01.jpg",
          pageAud: "assets/audio/Pommai-book-5/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/03.jpg",
          pageAud: "assets/audio/Pommai-book-5/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/04.jpg",
          pageAud: "assets/audio/Pommai-book-5/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/05.jpg",
          pageAud: "assets/audio/Pommai-book-5/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/06.jpg",
          pageAud: "assets/audio/Pommai-book-5/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/07.jpg",
          pageAud: "assets/audio/Pommai-book-5/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/08.jpg",
          pageAud: "assets/audio/Pommai-book-5/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/09.jpg",
          pageAud: "assets/audio/Pommai-book-5/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/10.jpg",
          pageAud: "assets/audio/Pommai-book-5/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/11.jpg",
          pageAud: "assets/audio/Pommai-book-5/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/12.jpg",
          pageAud: "assets/audio/Pommai-book-5/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/13.jpg",
          pageAud: "assets/audio/Pommai-book-5/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/14.jpg",
          pageAud: "assets/audio/Pommai-book-5/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/15.jpg",
          pageAud: "assets/audio/Pommai-book-5/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pommai-book-5/16.jpg",
          pageAud: "assets/audio/Pommai-book-5/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },

    {
      id: "book6",
      name: "Vilaakal",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/06.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/01.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/03.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/04.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/05.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/06.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/07.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/08.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/09.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/10.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/11.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/12.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/13.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/14.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/15.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vilaakal-book-6/16.jpg",
          pageAud: "assets/audio/Vilaakal-book-6/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },

    {
      id: "book7",
      name: "Vanathipoochi",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/07.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/01.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/03.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/04.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/05.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/06.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/07.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/08.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/09.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/10.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/11.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/12.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/13.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/14.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/15.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vanathipoochi-book-7/16.jpg",
          pageAud: "assets/audio/Vanathipoochi-book-7/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book8",
      name: "Palangal",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/08.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/01.jpg",
          pageAud: "assets/audio/Palangal-book-8/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/03.jpg",
          pageAud: "assets/audio/Palangal-book-8/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/04.jpg",
          pageAud: "assets/audio/Palangal-book-8/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/05.jpg",
          pageAud: "assets/audio/Palangal-book-8/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/06.jpg",
          pageAud: "assets/audio/Palangal-book-8/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/07.jpg",
          pageAud: "assets/audio/Palangal-book-8/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/08.jpg",
          pageAud: "assets/audio/Palangal-book-8/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/09.jpg",
          pageAud: "assets/audio/Palangal-book-8/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/10.jpg",
          pageAud: "assets/audio/Palangal-book-8/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/11.jpg",
          pageAud: "assets/audio/Palangal-book-8/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/12.jpg",
          pageAud: "assets/audio/Palangal-book-8/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/13.jpg",
          pageAud: "assets/audio/Palangal-book-8/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/14.jpg",
          pageAud: "assets/audio/Palangal-book-8/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/15.jpg",
          pageAud: "assets/audio/Palangal-book-8/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Palangal-book-8/16.jpg",
          pageAud: "assets/audio/Palangal-book-8/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book9",
      name: "Thennai",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/09.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/01.jpg",
          pageAud: "assets/audio/Thenai-book-9/01.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/03.jpg",
          pageAud: "assets/audio/Thenai-book-9/02.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/04.jpg",
          pageAud: "assets/audio/Thenai-book-9/03.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/05.jpg",
          pageAud: "assets/audio/Thenai-book-9/04.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/06.jpg",
          pageAud: "assets/audio/Thenai-book-9/05.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/07.jpg",
          pageAud: "assets/audio/Thenai-book-9/06.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/08.jpg",
          pageAud: "assets/audio/Thenai-book-9/07.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/09.jpg",
          pageAud: "assets/audio/Thenai-book-9/08.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/10.jpg",
          pageAud: "assets/audio/Thenai-book-9/09.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/11.jpg",
          pageAud: "assets/audio/Thenai-book-9/10.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/12.jpg",
          pageAud: "assets/audio/Thenai-book-9/11.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/13.jpg",
          pageAud: "assets/audio/Thenai-book-9/12.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/14.jpg",
          pageAud: "assets/audio/Thenai-book-9/13.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/15.jpg",
          pageAud: "assets/audio/Thenai-book-9/14.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/16.jpg",
          pageAud: "assets/audio/Thenai-book-9/15.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Thenai-book-9/17.jpg",
          pageAud: "assets/audio/Thenai-book-9/16.ogg"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book10",
      name: "Amma",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/10.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/01.jpg",
          pageAud: "assets/audio/Amma-book-10/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/03.jpg",
          pageAud: "assets/audio/Amma-book-10/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/04.jpg",
          pageAud: "assets/audio/Amma-book-10/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/05.jpg",
          pageAud: "assets/audio/Amma-book-10/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/06.jpg",
          pageAud: "assets/audio/Amma-book-10/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/07.jpg",
          pageAud: "assets/audio/Amma-book-10/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/08.jpg",
          pageAud: "assets/audio/Amma-book-10/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/09.jpg",
          pageAud: "assets/audio/Amma-book-10/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/10.jpg",
          pageAud: "assets/audio/Amma-book-10/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/11.jpg",
          pageAud: "assets/audio/Amma-book-10/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/12.jpg",
          pageAud: "assets/audio/Amma-book-10/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/13.jpg",
          pageAud: "assets/audio/Amma-book-10/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/14.jpg",
          pageAud: "assets/audio/Amma-book-10/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/15.jpg",
          pageAud: "assets/audio/Amma-book-10/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Amma-book-10/16.jpg",
          pageAud: "assets/audio/Amma-book-10/15.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book11",
      name: "Pookal",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/11.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/01.jpg",
          pageAud: "assets/audio/Pookal-book-11/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/03.jpg",
          pageAud: "assets/audio/Pookal-book-11/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/04.jpg",
          pageAud: "assets/audio/Pookal-book-11/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/05.jpg",
          pageAud: "assets/audio/Pookal-book-11/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/06.jpg",
          pageAud: "assets/audio/Pookal-book-11/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/07.jpg",
          pageAud: "assets/audio/Pookal-book-11/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/08.jpg",
          pageAud: "assets/audio/Pookal-book-11/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/09.jpg",
          pageAud: "assets/audio/Pookal-book-11/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/10.jpg",
          pageAud: "assets/audio/Pookal-book-11/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/11.jpg",
          pageAud: "assets/audio/Pookal-book-11/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/12.jpg",
          pageAud: "assets/audio/Pookal-book-11/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/13.jpg",
          pageAud: "assets/audio/Pookal-book-11/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/14.jpg",
          pageAud: "assets/audio/Pookal-book-11/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/15.jpg",
          pageAud: "assets/audio/Pookal-book-11/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/16.jpg",
          pageAud: "assets/audio/Pookal-book-11/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Pookal-book-11/17.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book12",
      name: "Paruvakaalangal",
      category: "stage1",
      publishers: "Annai Poopathi",
      subHeading: "Maanavar vaasithal Kaieadu",
      coverPage: "assets/img/Book_cover_page/12.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/01.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/01.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/03.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/02.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/04.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/03.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/05.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/04.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/06.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/05.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/07.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/06.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/08.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/07.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/09.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/08.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/10.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/09.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/11.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/10.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/12.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/11.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/13.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/12.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/14.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/13.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/15.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/14.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/16.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/15.ogg"
        },
        {
          pageImg: "assets/img/Book-pages/Paruvakaalam-book-12/17.jpg",
          pageAud: "assets/audio/Paruvakaalam-book-12/16.ogg"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    }
    ,
    {
      id: "book13",
      name: "Penguin",
      category: "stage2",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/13.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/01.jpg",
          pageAud: "assets/audio/Penguin-book-10/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/edited.jpg",
          pageAud: ""
        },

        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/02.jpg",
          pageAud: "assets/audio/Penguin-book-10/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/03.jpg",
          pageAud: "assets/audio/Penguin-book-10/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/04.jpg",
          pageAud: "assets/audio/Penguin-book-10/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/05.jpg",
          pageAud: "assets/audio/Penguin-book-10/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/06.jpg",
          pageAud: "assets/audio/Penguin-book-10/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/07.jpg",
          pageAud: "assets/audio/Penguin-book-10/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/08.jpg",
          pageAud: "assets/audio/Penguin-book-10/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/09.jpg",
          pageAud: "assets/audio/Penguin-book-10/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/10.jpg",
          pageAud: "assets/audio/Penguin-book-10/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/11.jpg",
          pageAud: "assets/audio/Penguin-book-10/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Penguin-book-10/12.jpg",
          pageAud: "assets/audio/Penguin-book-10/12.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book14",
      name: "Thozil",
      category: "stage2",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/14.jpg",
      bookPage: [

        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/01.jpg",
          pageAud: "assets/audio/Thozhil-book-14/01.mp3"
        }
        ,
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/edited.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/02.jpg",
          pageAud: "assets/audio/Thozhil-book-14/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/03.jpg",
          pageAud: "assets/audio/Thozhil-book-14/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/04.jpg",
          pageAud: "assets/audio/Thozhil-book-14/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/05.jpg",
          pageAud: "assets/audio/Thozhil-book-14/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/06.jpg",
          pageAud: "assets/audio/Thozhil-book-14/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/07.jpg",
          pageAud: "assets/audio/Thozhil-book-14/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Thozhil-book-14/08.jpg",
          pageAud: "assets/audio/Thozhil-book-14/08.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book15",
      name: "Kaaya",
      category: "stage2",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/15.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/01.jpg",
          pageAud: "assets/audio/Kaaya-book-15/01.mp3"
        }
        ,
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/edited.jpg",
          pageAud: ""
        }
        ,
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/02.jpg",
          pageAud: "assets/audio/Kaaya-book-15/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/03.jpg",
          pageAud: "assets/audio/Kaaya-book-15/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/04.jpg",
          pageAud: "assets/audio/Kaaya-book-15/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/05.jpg",
          pageAud: "assets/audio/Kaaya-book-15/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/06.jpg",
          pageAud: "assets/audio/Kaaya-book-15/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/07.jpg",
          pageAud: "assets/audio/Kaaya-book-15/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/08.jpg",
          pageAud: "assets/audio/Kaaya-book-15/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/09.jpg",
          pageAud: "assets/audio/Kaaya-book-15/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/10.jpg",
          pageAud: "assets/audio/Kaaya-book-15/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/11.jpg",
          pageAud: "assets/audio/Kaaya-book-15/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/12.jpg",
          pageAud: "assets/audio/Kaaya-book-15/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaaya-book-15/13.jpg",
          pageAud: "assets/audio/Kaaya-book-15/13.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book16",
      name: "Aadukudi",
      category: "stage2",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/02.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/01.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/02.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/03.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/04.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/05.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/06.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/07.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/08.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/09.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/10.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/11.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/12.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/13.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/14.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/15.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Aadukudi-book-2/16.jpg",
          pageAud: "assets/audio/Aadukudi-book-2/16.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book17",
      name: "Soolan",
      category: "stage2",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/16.jpg",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/01.jpg",
          pageAud: "assets/audio/Soolan-book-16/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/edited.jpg",
          pageAud: ""
        }
        ,
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/02.jpg",
          pageAud: "assets/audio/Soolan-book-16/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/03.jpg",
          pageAud: "assets/audio/Soolan-book-16/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/04.jpg",
          pageAud: "assets/audio/Soolan-book-16/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/05.jpg",
          pageAud: "assets/audio/Soolan-book-16/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/06.jpg",
          pageAud: "assets/audio/Soolan-book-16/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/07.jpg",
          pageAud: "assets/audio/Soolan-book-16/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/08.jpg",
          pageAud: "assets/audio/Soolan-book-16/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/09.jpg",
          pageAud: "assets/audio/Soolan-book-16/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/10.jpg",
          pageAud: "assets/audio/Soolan-book-16/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/11.jpg",
          pageAud: "assets/audio/Soolan-book-16/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/12.jpg",
          pageAud: "assets/audio/Soolan-book-16/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/13.jpg",
          pageAud: "assets/audio/Soolan-book-16/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/14.jpg",
          pageAud: "assets/audio/Soolan-book-16/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/15.jpg",
          pageAud: "assets/audio/Soolan-book-16/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/16.jpg",
          pageAud: "assets/audio/Soolan-book-16/16.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Soolan-book-16/17.jpg",
          pageAud: "assets/audio/Soolan-book-16/17.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book18",
      name: "Siruvanum Thaaniyangiyum",
      category: "stage3",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/18.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Nanbargal-Credits.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/02.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/03.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/04.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/05.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/06.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/07.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/08.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/09.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/10.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/11.JPG",
          pageAud: "assets/audio/siruvan-thaniyangi-18/10.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book19",
      name: "Irandu Nanbargal",
      category: "stage3",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/19.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Nanbargal-Credits.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/02.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/03.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/04.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/05.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/06.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/07.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/08.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/09.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/10.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/11.JPG",
          pageAud: "assets/audio/Irandu-Nanbarkal-book-19/10.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book20",
      name: "Irandu Nanbargal",
      category: "stage3",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/20.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Nanbargal-Credits.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/02.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/03.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/04.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/05.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/06.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/07.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/08.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/09.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/10.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/11.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/12.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/13.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/14.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/15.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/16.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/17.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/16.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/18.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/17.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/19.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/18.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/20.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/19.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/21.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/20.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/22.JPG",
          pageAud: "assets/audio/Kaadu-payanam-book-20/21.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book21",
      name: "Ethirikal",
      category: "stage3",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/21.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Nanbargal-Credits.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/02.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/03.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/04.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/05.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/06.jpg",
          pageAud: "assets/audio/Ethirikal-book-21/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/07.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/08.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/09.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/10.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/11.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/12.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/13.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/14.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/15.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/16.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/17.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/16.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/18.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/17.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/19.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/18.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/20.JPG",
          pageAud: "assets/audio/Ethirikal-book-21/19.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book22",
      name: "Enakku Ungalin Mel Evalavu Paasam Irukkirathu Theriuma? ",
      category: "stage3",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/22.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Nanbargal-Credits.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/02.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/03.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/04.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/05.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/06.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/07.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/08.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/09.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/10.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/11.JPG",
          pageAud: "assets/audio/Paasam-theriuma-book-22/10.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book23",
      name: "Vasanthavum Maranum",
      category: "stage4",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/23.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/credits.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/02.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/03.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/04.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/05.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/06.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/07.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/08.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/09.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/10.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/11.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/12.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/13.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/14.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/15.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/16.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/17.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/16.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/18.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/17.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/19.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/18.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/20.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/19.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/21.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/20.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/22.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/21.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/23.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/22.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/24.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/23.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/25.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/24.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/26.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/25.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/27.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/26.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/28.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/27.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/29.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/28.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/30.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/29.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/31.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/30.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/32.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/31.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/33.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/32.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/34.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/33.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/35.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/34.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/36.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/35.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/37.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/36.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/38.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/37.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/39.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/38.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/40.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/39.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/41.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/40.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/42.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/41.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/43.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/42.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/44.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/43.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/45.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/44.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/46.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/45.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/47.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/46.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/48.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/47.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/49.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/48.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/50.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/49.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/51.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/50.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/52.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/51.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/53.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/52.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/54.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/53.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/55.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/54.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/56.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/55.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/57.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/56.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/58.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/57.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/59.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/58.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/60.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/59.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/61.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/60.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/62.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/61.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/63.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/62.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/64.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/63.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/65.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/64.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/66.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/65.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/67.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/66.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/68.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/67.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/69.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/68.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/70.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/69.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/71.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/70.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/72.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/71.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/73.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/72.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/74.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/73.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/75.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/74.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/76.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/75.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/77.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/76.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/78.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/77.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/79.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/78.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vasanthavum-Maranum-book-23/80.JPG",
          pageAud: "assets/audio/Vasanthavum-Maranum-book-23/79.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book24",
      name: "Vaanillavin Meedpu Pani",
      category: "stage3",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/24.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/credits-avanthika.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/02.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/03.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/04.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/05.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/06.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/07.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/08.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/09.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/10.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/11.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/12.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Vaanillavin-book-24/13.JPG",
          pageAud: "assets/audio/Vaanillavin-book-24/12.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book25",
      name: "Avanthikavin Palli Naal",
      category: "stage4",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/25.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/credits-avanthika.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/02.JPG",
          pageAud: "assets/audio/Avanthika-book-25/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/03.JPG",
          pageAud: "assets/audio/Avanthika-book-25/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/04.JPG",
          pageAud: "assets/audio/Avanthika-book-25/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/05.JPG",
          pageAud: "assets/audio/Avanthika-book-25/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/06.JPG",
          pageAud: "assets/audio/Avanthika-book-25/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/07.JPG",
          pageAud: "assets/audio/Avanthika-book-25/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/08.JPG",
          pageAud: "assets/audio/Avanthika-book-25/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/09.JPG",
          pageAud: "assets/audio/Avanthika-book-25/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/10.JPG",
          pageAud: "assets/audio/Avanthika-book-25/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/11.JPG",
          pageAud: "assets/audio/Avanthika-book-25/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/12.JPG",
          pageAud: "assets/audio/Avanthika-book-25/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/13.JPG",
          pageAud: "assets/audio/Avanthika-book-25/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/14.JPG",
          pageAud: "assets/audio/Avanthika-book-25/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/15.JPG",
          pageAud: "assets/audio/Avanthika-book-25/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/16.JPG",
          pageAud: "assets/audio/Avanthika-book-25/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/17.JPG",
          pageAud: "assets/audio/Avanthika-book-25/16.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/18.JPG",
          pageAud: "assets/audio/Avanthika-book-25/17.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/19.JPG",
          pageAud: "assets/audio/Avanthika-book-25/18.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/20.JPG",
          pageAud: "assets/audio/Avanthika-book-25/19.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/21.JPG",
          pageAud: "assets/audio/Avanthika-book-25/20.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/22.JPG",
          pageAud: "assets/audio/Avanthika-book-25/21.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/23.JPG",
          pageAud: "assets/audio/Avanthika-book-25/22.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/24.JPG",
          pageAud: "assets/audio/Avanthika-book-25/23.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/25.JPG",
          pageAud: "assets/audio/Avanthika-book-25/24.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/26.JPG",
          pageAud: "assets/audio/Avanthika-book-25/25.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/27.JPG",
          pageAud: "assets/audio/Avanthika-book-25/26.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/28.JPG",
          pageAud: "assets/audio/Avanthika-book-25/27.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/29.JPG",
          pageAud: "assets/audio/Avanthika-book-25/28.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Avanthika-book-25/30.JPG",
          pageAud: "assets/audio/Avanthika-book-25/29.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "book26",
      name: "Uthavi",
      category: "stage4",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/26.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/01.JPG",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/credits-avanthika.jpg",
          pageAud: ""
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/02.JPG",
          pageAud: "assets/audio/Uthavi-book-26/01.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/03.JPG",
          pageAud: "assets/audio/Uthavi-book-26/02.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/04.JPG",
          pageAud: "assets/audio/Uthavi-book-26/03.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/05.JPG",
          pageAud: "assets/audio/Uthavi-book-26/04.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/06.JPG",
          pageAud: "assets/audio/Uthavi-book-26/05.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/07.JPG",
          pageAud: "assets/audio/Uthavi-book-26/06.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/08.JPG",
          pageAud: "assets/audio/Uthavi-book-26/07.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/09.JPG",
          pageAud: "assets/audio/Uthavi-book-26/08.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/10.JPG",
          pageAud: "assets/audio/Uthavi-book-26/09.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/11.JPG",
          pageAud: "assets/audio/Uthavi-book-26/10.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/12.JPG",
          pageAud: "assets/audio/Uthavi-book-26/11.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/13.JPG",
          pageAud: "assets/audio/Uthavi-book-26/12.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/14.JPG",
          pageAud: "assets/audio/Uthavi-book-26/13.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/15.JPG",
          pageAud: "assets/audio/Uthavi-book-26/14.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/16.JPG",
          pageAud: "assets/audio/Uthavi-book-26/15.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/17.JPG",
          pageAud: "assets/audio/Uthavi-book-26/16.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/18.JPG",
          pageAud: "assets/audio/Uthavi-book-26/17.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/19.JPG",
          pageAud: "assets/audio/Uthavi-book-26/18.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/20.JPG",
          pageAud: "assets/audio/Uthavi-book-26/19.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/21.JPG",
          pageAud: "assets/audio/Uthavi-book-26/20.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/22.JPG",
          pageAud: "assets/audio/Uthavi-book-26/21.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/23.JPG",
          pageAud: "assets/audio/Uthavi-book-26/22.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/24.JPG",
          pageAud: "assets/audio/Uthavi-book-26/23.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/25.JPG",
          pageAud: "assets/audio/Uthavi-book-26/24.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/26.JPG",
          pageAud: "assets/audio/Uthavi-book-26/25.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/27.JPG",
          pageAud: "assets/audio/Uthavi-book-26/26.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/28.JPG",
          pageAud: "assets/audio/Uthavi-book-26/27.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/29.JPG",
          pageAud: "assets/audio/Uthavi-book-26/28.mp3"
        },
        {
          pageImg: "assets/img/Book-pages/Uthavi-book-26/30.JPG",
          pageAud: "assets/audio/Uthavi-book-26/29.mp3"
        },
        {
          pageImg: "assets/img/Book_cover_page/last-img.jpg",
          pageAud: ""
        }
      ]
    },
    {
      id: "comming-soon",
      name: "Siruvanum Thaaniyangiyum",
      category: "coming",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/18.JPG",
      bookPage: [
        {
          pageImg: "assets/img/comming_soon.jpg",
          pageAud: ""
        }
      ]
    },
  ]
  constructor() { }
  getbook(id) {
    return this.bookDetail.find(data => data.id === id);

  }
}
