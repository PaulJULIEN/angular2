import { Component, OnInit } from '@angular/core';
import { json } from '../json';
import { JsonService } from '../app.service';

@Component({
        moduleId: "module.id",
          selector: 'app-bliblio',
          templateUrl: 'bliblio.component.html',
          styleUrls: ['bliblio.component.css']
})
export class BliblioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
