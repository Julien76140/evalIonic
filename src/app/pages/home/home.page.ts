import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private name:String="";
  constructor() {}
  ngOnInit() {
    
     this.name="ArtSpot";


  }
}
