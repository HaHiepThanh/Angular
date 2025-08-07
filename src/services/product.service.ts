import { Injectable } from '@angular/core';
import {FrameSales} from '../Models/frameSales.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  frameDisplay:FrameSales[] = [
    {
      id: '1',
      text1: 'Giảm 21%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/m/image_1396_1.png",
      description: 'Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB I Chính hãng Apple Việt Nam',
      saleprice: 19650000,
      originalprice: 24990000,
      smemberdiscount: 197000,
      sstudentdiscount: 500000,
      rating: 4.9,
      quantity: 0,
    },
    {
      id: '2',
      text1: 'Giảm 8%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_1.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: 24790000,
      originalprice: 26990000,
      smemberdiscount: 2480000,
      sstudentdiscount:500000,
      rating: 5,
      quantity: 0,
    },
    {
      id: '3',
      text1: 'Giảm 4%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_7_1.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: 14390000,
      originalprice: 14990000,
      smemberdiscount: 144000,
      sstudentdiscount:431000,
      rating: 5,
      quantity: 0,
    },
    {
      id: '4',
      text1: 'Giảm 5%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__7.png",
      description: 'MacBook Pro 14 M4 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 37990000,
      originalprice: 39990000,
      smemberdiscount: 380000,
      sstudentdiscount:500000,
      rating: 5,
      quantity: 0,
    },
    {
      id: '5',
      text1: 'Giảm 6%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 29990000,
      originalprice: 31990000,
      smemberdiscount: 300000,
      sstudentdiscount: 500000,
      rating: 5,
      quantity: 0,
    },
    {
      id: '6',
      text1: 'Giảm 9%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_1_2.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB Sạc 70W | Chính hãng Apple Việt Nam',
      saleprice: 25590000,
      originalprice: 27990000,
      smemberdiscount: 260000,
      sstudentdiscount: 0,
      rating: 0,
      quantity: 0,
    },
    {
      id: '7',
      text1: 'Giảm 4%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_9__4.png",
      description: 'MacBook Pro 14 M4 Pro 12CPU 16GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 47990000,
      originalprice: 49990000,
      smemberdiscount: 480000,
      sstudentdiscount: 500000,
      rating: 4.8,
      quantity: 0,
    },
    {
      id: '8',
      text1: 'Giảm 2%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_8.png",
      description: 'MacBook Pro 14 M4 10CPU 10GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 44190000,
      originalprice: 44990000,
      smemberdiscount: 442000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '9',
      text1: 'Giảm 16%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_562.png",
      description: 'MacBook Pro 16 M3 Max 36GB - 1TB | Chính hãng Apple Việt Nam',
      saleprice: 75990000,
      originalprice: 89990000,
      smemberdiscount: 760000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '10',
      text1: 'Giảm 5%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_2__21.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 10GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 34990000,
      originalprice: 36990000,
      smemberdiscount: 350000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '11',
      text1: 'Giảm 4%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__2_3.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 19290000,
      originalprice: 19990000,
      smemberdiscount: 193000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '12',
      text1: 'Giảm 8%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1_2.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB Sạc 70W | Chính hãng Apple Việt Nam',
      saleprice: 30490000,
      originalprice: 32990000,
      smemberdiscount: 305000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '13',
      text1: '',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 24GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: 19990000,
      originalprice: 0,
      smemberdiscount: 200000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '14',
      text1: 'Giảm 10%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_524_2_.png",
      description: 'Apple MacBook Air M2 2024 8CPU 10GPU 16GB 512GB Sạc 70W I Chính hãng Apple Việt Nam',
      saleprice: 26990000,
      originalprice: 29990000,
      smemberdiscount: 270000,
      sstudentdiscount: 500000,
      rating: 4.3,
      quantity: 0,
    },
    {
      id: '15',
      text1: 'Giảm 1%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_2__13.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 24790000,
      originalprice: 24990000,
      smemberdiscount: 248000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '16',
      text1: 'Giảm 6%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__1_3_2.png",
      description: 'MacBook Air M4 15 inch 2025 10CPU 10GPU 16GB 512GB Sạc 70W | Chính hãng Apple Việt Nam',
      saleprice: 35690000,
      originalprice: 37990000,
      smemberdiscount: 375000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '17',
      text1: 'Giảm 8%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_3__15.png",
      description: 'MacBook Air M4 15 inch 2025 10CPU 10GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: 29590000,
      originalprice: 31990000,
      smemberdiscount: 296000,
      sstudentdiscount: 500000,
      rating: 5,
      quantity: 0,
    },
    {
      id: '18',
      text1: '',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_10__4.png",
      description: 'Apple Mac Studio M4 Max 2025 14CPU 32GPU 36GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 57990000,
      originalprice: 0,
      smemberdiscount: 0,
      sstudentdiscount: 0,
      rating: 0,
      quantity: 0,
    },
    {
      id: '19',
      text1: 'Giảm 14%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_8__2.png",
      description: 'MacBook Air M3 13 inch 2024 8CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: 28490000,
      originalprice: 32990000,
      smemberdiscount: 285000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
    {
      id: '20',
      text1: 'Giảm 5%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__2_2.png",
      description: 'iMac M4 2024 24 inch 8CPU 8GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: 33090000,
      originalprice: 34990000,
      smemberdiscount: 331000,
      sstudentdiscount: 500000,
      rating: 0,
      quantity: 0,
    },
  ]

  cartList:FrameSales[]=[];

  getDetailProduct(id:string):FrameSales{
    let product =  this.frameDisplay.find(item=>item.id === id);
    if (product){
      return product;
    }else{
      return {} as FrameSales;
    }
  }

  addProductToCart(id:string){
    let product =  this.frameDisplay.find(item=>item.id === id);
    if (product){
      let productInCart = this.cartList.find(itemCart=>itemCart.id === id);
      if(productInCart){
        product.quantity += 1;
        this.calculateThanhTien(product.id);
      }else{
        product.quantity +=1;
        this.cartList.push(product);
        this.calculateThanhTien(product.id);
      }
    }
    console.log(this.cartList);
  }

  calculateTotalAmount(){
    let total = 0;
    for (const item of this.cartList){
      total += item.saleprice * item.quantity;
    }
    return total;
  }

  thanhTien = 0;

  calculateThanhTien(id:string){
    let product = this.cartList.find(item=>item.id === id);
    if(product){
      this.thanhTien = product.saleprice * product.quantity;
    }
    return this.thanhTien;
  }

}
