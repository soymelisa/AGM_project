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
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'El Pendúlo'},
    {plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas en Álvaro Obregón'},
    {plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Metrobus Álvaro Obregón'},
    {plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Florería sobre Insurgentes'},
    {plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Metro Chilpancingo'},
    {plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Casa'}
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
