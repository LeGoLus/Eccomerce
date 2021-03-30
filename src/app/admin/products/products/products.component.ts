import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/share/product.service';
import { environment } from 'src/environments/environment';

import { IProduct } from 'src/app/models/IProduct';

// IProduct
// export interface IProduct {
//   id: string;
//   pName: string;
//   pQty: number;
//   pPrice: number;
//   pPriceSale: number;
//   pDesc: string;
//   pSize: string;
//   pColor: string;
//   pStar: number;
//   pImapImageDefaultges: string;
//   pImages: string;
//   pSpecification: string;
//   createdAt: Date;
//   updatedAt: Date;
// }
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  imgPath: string = environment.image_path;

  displayedColumns: string[] = ['id', 'pImapImageDefaultges', 'pName', 'pQty', 'pPrice', 'pPriceSale', 'createdAt'];
  dataSource: MatTableDataSource<IProduct>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productService:ProductService,
  ) { }

  async ngOnInit(){

    const objs:any = await this.getAll();
    // console.log('dobjs.data-', objs);
    if(objs){
      this.dataSource = new MatTableDataSource(objs);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }
  }

  async getAll(){
    console.log('getAll');
    const data = await this.productService.getAll();
    if(data){
      return data.data;
    }
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
