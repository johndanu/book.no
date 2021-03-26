import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {


  public bookDetail = [
    {
      id: "book1",
      name: "Veedu",
      category: "small",
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
        }
      ]
    },
    
    {
      id: "book3",
      name: "Kadatkarai",
      category: "small",
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
        }
      ]
    },
    {
      id: "book4",
      name: "Pannaimaram",
      category: "small",
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
        }
      ]
    },

    {
      id: "book5",
      name: "Pommai",
      category: "small",
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
        }
      ]
    },

    {
      id: "book6",
      name: "Vilaakal",
      category: "small",
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
        }
      ]
    },

    {
      id: "book7",
      name: "Vanathipoochi",
      category: "small",
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
        }
      ]
    },
    {
      id: "book8",
      name: "Palangal",
      category: "small",
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
        }
      ]
    },
    {
      id: "book9",
      name: "Thennai",
      category: "small",
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
        }
      ]
    },
    {
      id: "book10",
      name: "Amma",
      category: "small",
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
        }
      ]
    },
    {
      id: "book11",
      name: "Pookal",
      category: "small",
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
        }
      ]
    },
    {
      id: "book12",
      name: "Paruvakaalangal",
      category: "small",
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
        }
      ]
    }
    , 
    {
      id: "book111",
      name: "Penguin",
      category: "big",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/111.jpg",
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
        }
      ]
    }, 
    {
      id: "book14",
      name: "Thozil",
      category: "big",
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
        }
      ]
    }, 
    {
      id: "book15",
      name: "Kaaya",
      category: "big",
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
        }
      ]
    }, 
    {
      id: "book16",
      name: "Aadukudi",
      category: "big",
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
        }
      ]
    }, 
    {
      id: "book17",
      name: "Soolan",
      category: "big",
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
        } 
      ]
    },
    {
      id: "book18",
      name: "Siruvanum Thaaniyangiyum",
      category: "big",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/18.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/siruvan-thaniyangi-18/01.JPG",
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
        }
      ]
    },
    {
      id: "book19",
      name: "Irandu Nanbargal",
      category: "big",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/19.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Irandu-Nanbarkal-book-19/01.JPG",
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
        }
      ]
    }, 
    {
      id: "book20",
      name: "Irandu Nanbargal",
      category: "big",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/20.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Kaadu-payanam-book-20/01.JPG",
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
        }
      ]
    }, 
    {
      id: "book21",
      name: "Ethirikal",
      category: "big",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/21.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Ethirikal-book-21/01.JPG",
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
        }
      ]
    }, 
    {
      id: "book22",
      name: "Enakku Ungalin Mel Evalavu Paasam Irukkirathu Theriuma? ",
      category: "big",
      publishers: "Annai Poopathi",
      subHeading: "",
      coverPage: "assets/img/Book_cover_page/22.JPG",
      bookPage: [
        {
          pageImg: "assets/img/Book-pages/Paasam-theriuma-book-22/01.JPG",
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
        }
      ]
    }
  ]
  constructor() { }
  getbook(id) {
    return this.bookDetail.find(data => data.id === id);
    
  }
}
