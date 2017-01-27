import { Component,OnInit } from '@angular/core';
import { json } from './json';
import { JsonService } from './app.service';

@Component({
    moduleId: "module.id",
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

    export class AppComponent implements OnInit {
        title = 'Le Json de jeu';
        JSONS: json[];
        selectedHero: json;
          constructor(private JsonService: JsonService) { }
        getJson(): void {
            this.JsonService.getJson().then(JSONS => this.JSONS = JSONS);
          }
        
        ngOnInit(): void {
            this.getJson();
          }
        onSelect(json: json): void {
        this.selectedHero = json;
      }
    }