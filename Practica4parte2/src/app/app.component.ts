import { Component } from '@angular/core';
import { iif } from 'rxjs';

interface diaFiesta {

  dia:number;
  idFiesta:string;
  mes?:string;
}
interface mes {

  nombre:string;
  nDias:number;
  inicio:number[];
  fDias : diaFiesta[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  //css
  colores : string[] = ["rgb(71, 74, 248)","rgb(246, 111, 216)","rgb(19, 255, 19)","rgb(208, 255, 0)"];
  fiestasCss : any[] =  ["solid", "0.5rem", "0.3rem", "inline-block", "12rem"];

  //varibales
  semana : any = ["L","M","X","J","V","S","D"];
  
  //objetos
  meses : Array <mes> = [

    {nombre : "Septiembre", nDias : 30 + 1, inicio : Array.from({length: 2}, (v, k) => k + 1), fDias : []},
    {nombre : "Octubre", nDias : 31 + 1, inicio : Array.from({length: 4}, (v, k) => k + 1), fDias : []},

  ]
  septiembre : Array <diaFiesta> = [

    {dia : 11, idFiesta : "l", mes:'Septiembre'},
    {dia : 29, idFiesta : "r", mes:'Septiembre'}

  ]
  octubre : Array <diaFiesta> = [

    {dia : 12, idFiesta : "n", mes:'Octubre'},
    {dia : 31, idFiesta : "c", mes:'Octubre'}

  ]

  fiestas : Array <diaFiesta[]> = [this.septiembre, this.octubre]


 public constructor(){

  this.rellenarMes(this.meses, this.fiestas)

 }

  rellenarMes(meses:mes[],fiestas:Array <diaFiesta[]>){
  console.log(meses);
    for (let i = 0; i < meses.length; i++) {

      for (let j = 0; j < meses[i].nDias; j++) {
        
        for (let k = 0; k < fiestas.length; k++) {
          
          for (let l = 0; l< fiestas[k].length; l++) {
            
            if ( fiestas[0] == this.septiembre  && fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'l' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "l"}) }
 
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'r' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "r"}) }
          
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'c' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "c"}) } 
          
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'n' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "n"}) }
          
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'l' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "l"}) }
 
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'r' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "r"}) }
          
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'c' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "c"}) } 
          
            } else if (fiestas[k][l].dia == j && fiestas[k][l].idFiesta == 'n' && fiestas[k][l].mes == meses[i].nombre) { { meses[i].fDias.push({dia : j, idFiesta : "n"}) } } 

          }
        }

        if (meses[i].fDias[j] == null) { meses[i].fDias.push({dia : j, idFiesta : "" });}

      }
    }
  }

}