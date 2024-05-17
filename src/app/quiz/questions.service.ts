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
      id: 1,
      questionName: "question1"
    },
    {
      title: "Przedstawiona na rysunku roślina to...",
      answers: ["Lilium", "Hippeastrum", "Alstroemeria", "Ornithogalum"],
      correctAnswer: 2,
      image: "q2.png",
      id: 2,
      questionName: "question2"
    },
    {
      title: "Które rodzaje wyrobów florystycznych wykonywane są jako dekoracje pogrzebowe?",
      answers: ["Pnącze i wianek.", "Naręcze i wodospad.", "Korsarz i wiązanka angielska.", "Poduszka i wieniec warszawski."],
      correctAnswer: 3,
      image: "",
      id: 3,
      questionName: "question3"
    },
    {
      title: "Bukiet spiralny charakteryzuje...",
      answers: ["promienisty układ łodyg i wiązanie pojedyncze.", "równoległy układ łodyg i wiązanie pojedyncze.", "promienisty układ łodyg i wiązanie podwójne.", "równoległy układ łodyg i wiązanie podwójne."],
      correctAnswer: 0,
      image: "",
      id: 4,
      questionName: "question4"
    },
    {
      title: "Na którym rysunku przedstawiono liść fatsji japońskiej?",
      answers: ["Rysunek 1", "Rysunek 2", "Rysunek 3", "Rysunek 4"],
      correctAnswer: 3,
      image: "q5.png",
      id: 5,
      questionName: "question5"
    },
    {
      title: "Który zestaw roślin należy wybrać do kompozycji florystycznej w stylu wegetatywnym?",
      answers: ["Anturia, maki, floksy.", "Gerbery, róże, stokrotki.", "Lewkonie, róże, strelicje.", "Rudbekie, nawłocie, floksy."],
      correctAnswer: 3,
      image: "",
      id: 6,
      questionName: "question6"
    },
    {
      title: "Na rysunku przedstawiono kompozycję wykonaną zgodnie z zasadą złotego podziału. Ile wynosi jej wysokość (c), jeśli a = 30 cm?",
      answers: ["50cm", "60cm", "80cm", "110cm"],
      correctAnswer: 2,
      image: "q7.png",
      id: 7,
      questionName: "question7"
    },
    {
      title: "Przenawożenie azotem w trakcie uprawy skutkuje...",
      answers: ["chlorozą międzyżyłkową na starszych liściach.", "zahamowaniem wzrostu rośliny i jasnozielonym zabarwieniem liści.", "zasychaniem brzegów liści i obniżeniem odporności na niekorzystne warunki.", "wybujałym wzrostem rośliny, opóźnieniem kwitnienia i skróceniem trwałości pozbiorczej."],
      correctAnswer: 3,
      image: "",
      id: 8,
      questionName: "question8"
    },
    {
      title: "W kompozycji o kolorach komplementarnych, kwiaty żółte należy połączyć...",
      answers: ["z czerwonymi w stosunku ¼ do ¾.", "z fioletowymi w stosunku ¼ do ¾.", "z czerwonymi w stosunku ½ do ½.", "z fioletowymi w stosunku ½ do ½."],
      correctAnswer: 1,
      image: "",
      id: 9,
      questionName: "question9"
    },
    {
      title: "Do wykonania przedstawionego na rysunku bukietu ślubnego typu kamelia, florysta powinien wybrać...",
      answers: ["kwiaty storczyka.", "płatki bławatka.", "pędy kamelii.", "płatki róży."],
      correctAnswer: 3,
      image: "q10.png",
      id: 10,
      questionName: "question10"
    },
    {
      title: "Jakie wymiary na rzucie z góry wykonanym w skali 1:10 ma stoisko targowe, którego długość rzeczywista wynosi 4 m, a szerokość 2 m?",
      answers: ["2 cm x 1 cm", "4 cm x 2 cm", "20 cm x 10 cm", "40 cm x 20 cm"],
      correctAnswer: 3,
      image: "",
      id: 11,
      questionName: "question11"
    },
    {
      title: "Który zestaw środków technicznych nadaje się do wykonania wieńca rzymskiego ze stroiszu?",
      answers: ["Wianek ze słomy i drut na kołku.", "Wianek z wikliny i haftki rzymskie.", "Ring ze styropianu i plastelina florystyczna.", "Ring z gąbki do żywych roślin i drut wyrobowy."],
      correctAnswer: 0,
      image: "",
      id: 12,
      questionName: "question12"
    },
    {
      title: "Na rysunku przedstawiono wieniec, którym w starożytności nagradzano zwycięzców igrzysk. Do jego wykonania zastosowano...",
      answers: ["rozmaryn.", "oliwkę.", "mirt.", "laur."],
      correctAnswer: 3,
      image: "q13.png",
      id: 13,
      questionName: "question13"
    },
    {
      title: "Który zestaw roślin najlepiej wybrać do wykonania dekoracji florystycznej w okresie Bożego Narodzenia?",
      answers: ["Róża, lewkonia, mak.", "Świerk, wilczomlecz, jemioła.", "Chryzantema, nefrolepis, świerk.", "Pierwiosnek, przebiśnieg, jemioła."],
      correctAnswer: 1,
      image: "",
      id: 14,
      questionName: "question14"
    },
    {
      title: "	Do wykonania bukietu w formie odwróconej kropli nie nadaje się...",
      answers: ["Rhipsalis.", "Soleirolia.", "Ceropegia.", "Asparagus."],
      correctAnswer: 1,
      image: "",
      id: 15,
      questionName: "question15"
    },
  ];

  get questions() {
    return this.#questions;
  }
}
