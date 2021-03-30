import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/share/product.service';

import { IProduct } from 'src/app/models/IProduct';

// IProduct
// export interface IProduct {
//   id: string;
//   pName: string;
//   pSlug: string;
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
  selector: 'app-product-adedit',
  templateUrl: './product-adedit.component.html',
  styleUrls: ['./product-adedit.component.scss']
})
export class ProductAdeditComponent implements OnInit {
  product;
  paramId :any = 0;
  Errors = {status:false, msg:''}
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private productService:ProductService,
    public dialog: MatDialog,
  ) {

    this.form = this.fb.group({
      pName: ['', Validators.required],
      pSlug: ['', Validators.required],
      pQty: ['', Validators.required],
      pPrice: ['', Validators.required],
      pPriceSale: ['', Validators.required],
      pDesc: ['', Validators.required],
      pSize: ['', Validators.required],
      pColor: ['', Validators.required],
      pImages: ['', Validators.required],
      pSpecification: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.paramId  = parseInt(params.get('id'));
      console.log('id-', this.paramId );
    });

    if(this.paramId  && this.paramId  > 0){
      this.getOne(this.paramId);
    }

  }

  get f() { return this.form.controls; }

  async getOne(id){
    console.log('getOne');
    const data = await this.productService.getOne(id);

    if(data.status === 2000){
      this.product = data.data;
    }else{
      this.Errors.status = true;
      this.Errors.msg = data.message;
    }

    console.log('Errors--', this.Errors);
  }

  submit(){

  }

}
