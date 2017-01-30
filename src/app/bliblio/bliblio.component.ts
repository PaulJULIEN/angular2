import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { json } from '../json';
import { JsonService } from '../app.service';

@Component({
        moduleId: "module.id",
          selector: 'app-bliblio',
          templateUrl: 'bliblio.component.html',
          styleUrls: ['bliblio.component.css']
})
export class BliblioComponent implements OnInit {
title = 'La bibliothèque';
JSONS: json[];
selectedHero: json;
constructor(private JsonService: JsonService) { }
    
getJson(): void {
    this.JsonService.getJson().then(JSONS => this.JSONS = JSONS)
}
ngOnInit(): void {
this.getJson();
}
onSelect(json: json): void {
    this.selectedHero = json;
  }
}

