import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios =>{
      console.log(usuarios);
    })

      // const promesa =  new Promise( ( resolve, reject ) => {

      //   //Para mostrar el error y lo muestra pero sigue funcionando la app
      //   if( false ){
      //     resolve('Hola Mundo');
      //   } else {
      //     reject ('Algo salio mal');
      //   }


      // });

      // // a) Cuando todo sale bien  promesa.then( () => {
      // promesa.then( ( mensaje ) => {
      //   // a) console.log('Hey! terminé');
      //   console.log( mensaje );
      // })
      // .catch( error => console.log('Error en OmegaPromesa:', error) );

      // console.log('Fin del Init')

  }

  getUsuarios(){

    return new Promise( resolve =>{

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve( body.data ) );

    });

      //{ resp.json().then( body => console.log(body) ) }
      
      

  }

}
