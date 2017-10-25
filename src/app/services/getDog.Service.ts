import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDogService {

  constructor( private http:Http) { }

  getRandomDog(){
    return this.http.get("https://dog.ceo/api/breeds/image/random")
    .map((res) => res.json());
  }


}