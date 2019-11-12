import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  public ProductosRecibidos:Array<any>=[];

  constructor( public _ProductsService:ProductsService, public Router:Router) { }

  ngOnInit() {
    this.ProductosRecibidos = this._ProductsService.GetProducts();
    console.log(this.ProductosRecibidos);
    
  }

  public MandarProducto(id){
    console.log(id);
    this.Router.navigate(["Informacion",id])
  } 
  
}
