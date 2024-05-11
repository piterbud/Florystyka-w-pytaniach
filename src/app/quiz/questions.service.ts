import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({providedIn: 'root'})
export class QuestionsService {
  #questions: Question[] = [
    {
      title: "Który środek techniczny jest przeznaczony do zamocowania gąbki florystycznej w płaskim pojemniku?",
      answers: ["Kenzan", "Pinholder", "Candleholder", "Siatka miedziana"],
      correctAnswer: 1,
      image: "",
      id: 1
    },
    {
      title: "Przedstawiona na rysunku roślina to...",
      answers: ["Lilium", "Hippeastrum", "Alstroemeria", "Ornithogalum"],
      correctAnswer: 2,
      image: "q2.png",
      id: 2
    },
    {
      title: "Które rodzaje wyrobów florystycznych wykonywane są jako dekoracje pogrzebowe?",
      answers: ["Pnącze i wianek.", "Naręcze i wodospad.", "Korsarz i wiązanka angielska.", "Poduszka i wieniec warszawski."],
      correctAnswer: 3,
      image: "",
      id: 3
    },
    {
      title: "Bukiet spiralny charakteryzuje...",
      answers: ["promienisty układ łodyg i wiązanie pojedyncze.", "równoległy układ łodyg i wiązanie pojedyncze.", "promienisty układ łodyg i wiązanie podwójne.", "równoległy układ łodyg i wiązanie podwójne."],
      correctAnswer: 0,
      image: "",
      id: 4
    },
    {
      title: "Na którym rysunku przedstawiono liść fatsji japońskiej?",
      answers: ["Rysunek 1", "Rysunek 2", "Rysunek 3", "Rysunek 4"],
      correctAnswer: 3,
      image: "q5.png",
      id: 5
    },
    {
      title: "Który zestaw roślin należy wybrać do kompozycji florystycznej w stylu wegetatywnym?",
      answers: ["Anturia, maki, floksy.", "Gerbery, róże, stokrotki.", "Lewkonie, róże, strelicje.", "Rudbekie, nawłocie, floksy."],
      correctAnswer: 3,
      image: "",
      id: 6
    },
    {
      title: "Na rysunku przedstawiono kompozycję wykonaną zgodnie z zasadą złotego podziału. Ile wynosi jej wysokość (c), jeśli a = 30 cm?",
      answers: ["50cm", "60cm", "80cm", "110cm"],
      correctAnswer: 2,
      image: "q7.png",
      id: 7
    },
    {
      title: "Przenawożenie azotem w trakcie uprawy skutkuje...",
      answers: ["chlorozą międzyżyłkową na starszych liściach.", "zahamowaniem wzrostu rośliny i jasnozielonym zabarwieniem liści.", "zasychaniem brzegów liści i obniżeniem odporności na niekorzystne warunki.", "wybujałym wzrostem rośliny, opóźnieniem kwitnienia i skróceniem trwałości pozbiorczej."],
      correctAnswer: 3,
      image: "",
      id: 8
    },
    {
      title: "W kompozycji o kolorach komplementarnych, kwiaty żółte należy połączyć...",
      answers: ["z czerwonymi w stosunku ¼ do ¾.", "z fioletowymi w stosunku ¼ do ¾.", "z czerwonymi w stosunku ½ do ½.", "z fioletowymi w stosunku ½ do ½."],
      correctAnswer: 1,
      image: "",
      id: 9
    },
  ];

  get questions() {
    return this.#questions;
  }
}
