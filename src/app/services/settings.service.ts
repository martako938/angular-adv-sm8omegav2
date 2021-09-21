import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 

    //console.log('Settings Service iniciado 2021');
    //Para dejar guardado tema seleccionado
    const url = localStorage.getItem('theme') || './assets/css/colors/sm8omega.css';
    this.linkTheme?.setAttribute('href', url);

  }

  changeTheme( theme: string){
    // console.log(theme);  retorna color
    const url = `./assets/css/colors/${ theme }.css`;
    // console.log(url) imprime el link de cada tema completo
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    //Se queda igual la ariable links pues al querer sacarla y hacerla publica 
    //e implementarla en el init da error que no esta definido el tipo 
    const links = document.querySelectorAll('.selector');
    
    //Metodo para cambiar flecha en account settings
    // console.log(links);
    links.forEach( elem =>{

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      //Hacemos comparacion 
      if ( btnThemeUrl == currentTheme ){
          //Para Agregar una clase
          elem.classList.add('working');
      }

    })

  }

}
