import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  listo = false;
  nombre:string = '';
  apellido:string = '';
  lugares:any = [
    {nombre:'Florería la Gardenia'},
    {nombre:'Donas la pasadita'},
    {nombre:'Veterinaria Huellitas Felices'},
    {nombre:'Florería la Gardenia'},
    {nombre:'Donas la pasadita'},
    {nombre:'Veterinaria Huellitas Felices'}
  ];
  lat: number = 19.4181457;
  lng: number = -99.1615951;

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
    hacerAlgo(){
      alert('Haciendo algo!');
    }
  }
