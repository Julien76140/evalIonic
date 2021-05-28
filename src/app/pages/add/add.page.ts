import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OeuvreModel } from 'src/app/model/oeuvre.model';
import { OeuvreService } from 'src/app/services/oeuvre.service';
import { Router } from '@angular/router';
//import { Geolocation } from '@ionic-native/geolocation/ngx'; //casse l'appli ?

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private oeuvreGroup: FormGroup;
  private loader: boolean = false;
  private latitude: number ;
  private longitude: number ;


  constructor(public formBuilder: FormBuilder,public oeuvreService: OeuvreService,public router: Router,/*private geolocation: Geolocation*/) { }

  ngOnInit() {
    this.buildForm();

  }

   buildForm() {
    this.oeuvreGroup=this.formBuilder.group({
      name:['',[Validators.required]],
      image:[''],
      note:['',[Validators.required]]
  },

  {validator:this.validImage('image')

});

  }

  sendData(){//fonctionne resultat dans server json

    if(this.oeuvreGroup.valid){
      
      /*this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude=resp.coords.latitude
        this.longitude= resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
       });*/

      this.latitude=1.3;
      this.longitude=46.5;

      let value= this.oeuvreGroup.value;
      let oeuvre= new OeuvreModel(value['name'],value['image'],this.latitude,this.longitude,value['note']);

      this.oeuvreService.add(oeuvre).subscribe(oeuvre=>{
        this.router.navigate(['/list']);
      }).add(() => {
        this.loader = false;
    });

    }

  }
  getForm(){
    return this.oeuvreGroup.controls;
  }

 validImage(form: string){
    return (formGroup: FormGroup) => {
      let image = formGroup.controls[form];

      let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
      if(image.value && regex.test(image.value)){
          return image.setErrors(null);
      }

      return image.setErrors({noImage: true});
  };
  }

}
