import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent  implements OnDestroy{

  public titulo: string | undefined;
  public tituloSubs$: Subscription | undefined;

  constructor( private router: Router, private route: ActivatedRoute) {

    //console.log( route.snapshot.children[0].data)
    this.tituloSubs$ = this.getArgumentosRuta() 
                           .subscribe( ({ titulo }) => {
                              //console.log( data );
                              this.titulo = titulo;
                              document.title = `Sm8 Omega - ${ titulo }`; //Para que en la pestaña de chrome se vea el nombre
                            });
   }
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

   getArgumentosRuta(){
      
    return this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),  // Se agrega : any porque si no da error Monytype operator Function
      //filter((event): event is ActivationEnd => event instanceof ActivationEnd), // Otra solucion posible

        filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.data ),
      );
     
    
   }


}
