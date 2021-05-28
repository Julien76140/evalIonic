import { Component, OnInit } from '@angular/core';
import { OeuvreService } from 'src/app/services/oeuvre.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private loaded: boolean = false;
  private oeuvres: Object;
  private data:any;

  constructor(/*public oeuvreService: OeuvreService*/) {

    this.data={
      "oeuvre": [
        {
          "id": 1,
          "nom": "Joconde",
          "image": "https://images.radio-canada.ca/q_auto,w_960/v1/ici-premiere/16x9/mlarge-joconde-vinci.jpg",
          "latitude": 48.8587741,
          "longitude": 2.2069771,
          "note": 4
        },
        {
          "id": 2,
          "nom": "Guernica",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/0b/GUERNICA.jpg",
          "latitude": 43.6047088,
          "longitude": 1.4091038,
          "note": 5
        },
        {
          "id": 3,
          "nom": "Le cri",
          "image": "https://media.timeout.com/images/102364321/630/472/image.jpg",
          "latitude": 43.2805546,
          "longitude": 5.2400702,
          "note": 3
        }
      ]
    };

   }//instancie le servie pour recupere les données

  ngOnInit() {

    this.data;

    console.log(this.data.oeuvre[0].nom);
   // this.data();

  }
  /*data(){ cette method recupere les données du json pour qu'on puisse les afficher dans la page html
    this.loaded = false;
    this.oeuvreService.getAll().subscribe( oeuvres => {
        this.oeuvres = oeuvres;//stock les données dans cette objet
    }).add( () => {
        this.loaded = true;
    });
}*/

}
