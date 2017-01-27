import { Injectable } from '@angular/core';
import { json } from './json';
import { JSONS } from './data_json';

    @Injectable()
    export class JsonService {
      getJson(): Promise<json[]> {
        return Promise.resolve(JSONS);
      }
    }