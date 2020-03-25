import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productos: Product[];
  imagen = "https://i.picsum.photos/id/40/100/100.jpg";
  busqueda = '';
  activado = false;
  productosBackup = [];
  constructor() {
    this.productos = [
      new Product("2z2", "Smartphone", "LG", "Quadcore 3GHZ", 12018.5, 5),
      new Product("r52", "Smartwatch", "Sony", "3GB Ram", 4999.9, 0),
      new Product("ys2", "SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9, 3)
    ]
    this.productosBackup = [...this.productos];
  }
  
  mostrarParrafo(){
    this.busqueda = this.busqueda;
  }

  //Busqueda
  onKeydown(event){
    console.log(event)
    console.log(this.busqueda)
    let productos3 = [];
    this.productos = [...this.productosBackup];
    if(!this.busqueda){
      return;
    }
    for(let i = 0; i < this.productosBackup.length; i++){
      if(this.productos[i].nombre.toLowerCase().indexOf(this.busqueda.toLowerCase()) != (-1)
        || this.productos[i].descripcion.toLowerCase().indexOf(this.busqueda.toLowerCase()) != (-1)){
        productos3.push(this.productos[i]);
      }
    }
    this.productos = productos3;
  }

  checkbox(){
    this.activado = !this.activado
  }

  ngOnInit(): void {
  }

}
