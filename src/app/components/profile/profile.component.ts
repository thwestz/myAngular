import { Component, OnInit } from '@angular/core';
import { GetDogService } from '../../services/getDog.Service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private getDogService : GetDogService) { }
  myDog : {
    image : string
  };
  ngOnInit() {
    this.myDog = {
      image : ""
    }
  }

  getDogAPI(){
   this.getDogService.getRandomDog().subscribe(res => {
     this.myDog.image = res.message;
   });
  }
}
