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
      saleprice: '19.650.000',
      originalprice: '24.990.000',
      smemberdiscount: 197,
      sstudentdiscount: 500,
      rating: 4.9,
      quantity: 0,
    },
    {
      id: '2',
      text1: 'Giảm 8%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_1.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: '24.790.000',
      originalprice: '26.990.000',
      smemberdiscount: 248,
      sstudentdiscount:500,
      rating: 5,
      quantity: 0,
    },
    {
      id: '3',
      text1: 'Giảm 4%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_7_1.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: '14.390.000',
      originalprice: '14.990.000',
      smemberdiscount: 144,
      sstudentdiscount:431,
      rating: 5,
      quantity: 0,
    },
    {
      id: '4',
      text1: 'Giảm 5%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__7.png",
      description: 'MacBook Pro 14 M4 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '37.990.000',
      originalprice: '39.990.000',
      smemberdiscount: 380,
      sstudentdiscount:500,
      rating: 5,
      quantity: 0,
    },
    {
      id: '5',
      text1: 'Giảm 6%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '29.990.000',
      originalprice: '31.990.000',
      smemberdiscount: 300,
      sstudentdiscount: 500,
      rating: 5,
      quantity: 0,
    },
    {
      id: '6',
      text1: 'Giảm 9%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11_1_2.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB Sạc 70W | Chính hãng Apple Việt Nam',
      saleprice: '25.590.000',
      originalprice: '27.990.000',
      smemberdiscount: 260,
      sstudentdiscount: 0,
      rating: 0,
      quantity: 0,
    },
    {
      id: '7',
      text1: 'Giảm 4%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_9__4.png",
      description: 'MacBook Pro 14 M4 Pro 12CPU 16GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '47.990.000',
      originalprice: '49.990.000',
      smemberdiscount: 480,
      sstudentdiscount: 500,
      rating: 4.8,
      quantity: 0,
    },
    {
      id: '8',
      text1: 'Giảm 2%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_8.png",
      description: 'MacBook Pro 14 M4 10CPU 10GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '44.190.000',
      originalprice: '44.990.000',
      smemberdiscount: 442,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '9',
      text1: 'Giảm 16%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_562.png",
      description: 'MacBook Pro 16 M3 Max 36GB - 1TB | Chính hãng Apple Việt Nam',
      saleprice: '75.990.000',
      originalprice: '89.990.000',
      smemberdiscount: 760,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '10',
      text1: 'Giảm 5%',
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_2__21.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 10GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '34.990.000',
      originalprice: '36.990.000',
      smemberdiscount: 350,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '11',
      text1: 'Giảm 4%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__2_3.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '19.290.000',
      originalprice: '19.990.000',
      smemberdiscount: 193,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '12',
      text1: 'Giảm 8%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__4_1_2.png",
      description: 'MacBook Air M4 13 inch 2025 10CPU 10GPU 16GB 512GB Sạc 70W | Chính hãng Apple Việt Nam',
      saleprice: '30.490.000',
      originalprice: '32.990.000',
      smemberdiscount: 305,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '13',
      text1: '',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_11.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 24GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: '19.990.000',
      originalprice: '',
      smemberdiscount: 200,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '14',
      text1: 'Giảm 10%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_524_2_.png",
      description: 'Apple MacBook Air M2 2024 8CPU 10GPU 16GB 512GB Sạc 70W I Chính hãng Apple Việt Nam',
      saleprice: '26.990.000',
      originalprice: '29.990.000',
      smemberdiscount: 270,
      sstudentdiscount: 500,
      rating: 4.3,
      quantity: 0,
    },
    {
      id: '15',
      text1: 'Giảm 1%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_2__13.png",
      description: 'Mac mini M4 2024 10CPU 10GPU 24GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '24.790.000',
      originalprice: '24.990.000',
      smemberdiscount: 248,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '16',
      text1: 'Giảm 6%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_4__1_3_2.png",
      description: 'MacBook Air M4 15 inch 2025 10CPU 10GPU 16GB 512GB Sạc 70W | Chính hãng Apple Việt Nam',
      saleprice: '35.690.000',
      originalprice: '37.990.000',
      smemberdiscount: 375,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '17',
      text1: 'Giảm 8%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_3__15.png",
      description: 'MacBook Air M4 15 inch 2025 10CPU 10GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: '29.590.000',
      originalprice: '31.990.000',
      smemberdiscount: 296,
      sstudentdiscount: 500.000,
      rating: 5,
      quantity: 0,
    },
    {
      id: '18',
      text1: '',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_10__4.png",
      description: 'Apple Mac Studio M4 Max 2025 14CPU 32GPU 36GB 512GB | Chính hãng Apple Việt Nam',
      saleprice: '57.990.000',
      originalprice: '',
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
      saleprice: '28.490.000',
      originalprice: '32.990.000',
      smemberdiscount: 285,
      sstudentdiscount: 500,
      rating: 0,
      quantity: 0,
    },
    {
      id: '20',
      text1: 'Giảm 5%',
      img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__2_2.png",
      description: 'iMac M4 2024 24 inch 8CPU 8GPU 16GB 256GB | Chính hãng Apple Việt Nam',
      saleprice: '33.090.000',
      originalprice: '34.990.000',
      smemberdiscount: 331,
      sstudentdiscount: 500,
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
      }else{
        product.quantity +=1;
        this.cartList.push(product);
      }
    }
    console.log(this.cartList);
  }

  calculateTotalAmount(){
    let total = 0;
    for (const item of this.cartList){
      total += (parseFloat(item.saleprice)*1000000) * item.quantity;
    }
    return total;
  }

}
