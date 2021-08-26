import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Laptops', 'Computadoras', 'Impresoras'];
  public data1 = [
    [10, 50, 5],
    ];

}
