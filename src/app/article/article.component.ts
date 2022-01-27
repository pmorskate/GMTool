import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../shared/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  artikeltje = {
    "id": 1,
    "title": "Crater Bay",
    "header1": "Governance",
    "content1":     "The city is directly ruled by the Hierarch, who reigns from the [Palace of Cyrth] at the heart of the city. He came to Ansmath when the Hierarchy couldn't eradicate the [Ansmath Cults|Cults] from the city and saw themselves forced to send one of their own to keep charge. The Hierarch rules with an iron fist. The Fifteenth Batallion has checks throughout the city and every basement needs a proper permit and regular inspection, and the Hierarch brought a team of agents with him from [Great Murdriath]. The city also rules over fertile lands around the river, and incorporates the mayoral voices into the Hierarchical council.",
    "header2": "Natural Resources",
    "content2": "To the east of the city there's a fortress [Cyrth's Ward], where a strictly controlled and protected mining operation is taking place to exploit a Garium deposit. The outlying farms and villages are well equipped to deal with the river [Eldast] and the frequent and heavy flooding that it brings, making the lands famously fertile and productive. The natural harbor that Ansmath was built on is sheltered from most heavy oceanic turbulence, but the waters further out are rife with fish. The fishing industry of Ansmath is productive and resilient, and is a major exporter to the rest of the Murdrian Empire. This, combined with the vast farmlands, makes Ansmath luxuriously self-sufficient in their food production."
  }
  constructor() {}

  ngOnInit() {}
}
