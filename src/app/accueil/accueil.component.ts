import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { json } from '../json';
import { JsonService } from '../app.service';

@Component({
    moduleId: "module.id",
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: ['accueil.component.css']
})
export class AccueilComponent implements OnInit {
title = 'Accueuil';
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

