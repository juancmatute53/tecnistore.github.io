import { Component, OnInit } from '@angular/core';
import {Productos} from "./productos";
import {ProductosService} from "./productos.service";

import {CategoriasService} from "../categorias/categorias.service";
import {ActivatedRoute} from "@angular/router";
import {Categorias} from "../categorias/categorias";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos1: Productos[] = [];

  categorias1: Categorias[] = [];
  filterPost= '';

  id: number = 0;

  constructor(private productosService: ProductosService, public categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.productosService.getProducto().subscribe(
      productos1 => this.productos1 =productos1
    );

    this.categoriasService.getCategorias().subscribe(
      categorias1 => this.categorias1 = categorias1
    )

  }

  categoriasById(id: number):void{
    this.categoriasService.getCategoriasById(id).subscribe(
      categorias1 => this.categorias1 = categorias1
    )
  }


/*

  categorias1: Categorias[] = [];

  ide: number = 0;

    this.categoriasService.getCategoriasById(this.).subscribe(
      categorias1 => this.categorias1 = categorias1
    )



  categoriaById(id: number):void{
    this.categoriasService.getCategoriasId(id).subscribe(
      es=> this.categorias = es
    )
  }*/
}
