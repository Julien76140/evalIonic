import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';//Retourne null et je ne comprend pas pourquoi je suis bloqué
import { Observable } from 'rxjs';
import { OeuvreModel } from 'src/app/model/oeuvre.model';

const { Storage } = Plugins;
const { Network } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class OeuvreService {
    private url: string = "http://localhost:3000/oeuvre";

    constructor(public http: HttpClient){}

   /* getAll(){ //cette fonction devrait envoyer les données du json dans le locale storage
        return new Observable(observer => {
            Network.getStatus().then(status => {
                if( status.connected ){
                    let observable = this.http.get(this.url);
                    observable.subscribe(data => {
                        Storage.set({
                            key: 'data',
                            value: JSON.stringify(data),
                        });

                        observer.next(data);
                        observer.complete();
                    });
                    
                }else{
                    Storage.get({ key: 'data' }).then(data => {
                        observer.next(data);
                        observer.complete();
                    });
                }
            });
        });
    }*/

    add(oeuvre: OeuvreModel){
        return this.http.post<OeuvreModel>(this.url, oeuvre);
    }

    async getNetwork(){
        let status = await Network.getStatus();
        return status;
    }
}
