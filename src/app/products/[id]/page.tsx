//  "use client"

// import Image from "next/image"
// import { FaStar } from "react-icons/fa";
// import { useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Check, Minus, Plus } from "lucide-react";
// import AllRiview from "@/components/AllReview";
// import { BreadcrumbDemo } from "@/components/BreadCrumb";
// import Tshirt_products from "@/components/TshirtProducts";
// import { useEffect, useState } from "react";
// import { AllProducts, Products } from "../../../../types/products";
// import { client } from "@/sanity/lib/client";
// import { allProducts } from "@/sanity/queries";

// interface Mproducts{
//     title : string
//     id : number
//     price : string
//     rating? : number
//     old_price? : string
//     pic_url : string
//     img1 : string
//     img2 : string
//     img3 : string
//     img4 : string 
    
// }

// let Top_products :Mproducts[]=[
    
//     {
//         title : "T-SHIRT WITH TAPE DETAILS",
//         id : 1,
//         price : "$120",
//         pic_url : "/product1.png",
//         img1 : "/product1.png",
//         img2 : "/product1.png",
//         img3 : "/product1.png",
//         img4 : "/product1.png",
        
//     },
//     {
//         title : "SKINNY FIT JEANS",
//         id : 2,
//         price : "$240",
//         old_price: "$260",
//         pic_url : "/product2.png",
//         img1 : "/product2.png",
//         img2 : "/product2.png",
//         img3 : "/product2.png",
//         img4 : "/product2.png",
//     },
//     {
//         title : "CHECKERED SHIRT",
//         id : 3,
//         price : "$180",
//         pic_url : "/product3.png",
//         img1 : "/product3.png",
//         img2 : "/product3.png",
//         img3 : "/product3.png",
//         img4 : "/product3.png",
//     },
//     {
//         title : "SLEEVE STRIPED T-SHIRT",
//         id : 4,
//         price : "$130",
//         old_price: "$160",
//         pic_url : "/product4.png",
//         img1 : "/product4.png",
//         img2 : "/product4.png",
//         img3 : "/product4.png", 
//         img4 : "/product4.png",
       
//     },
//     {
//         title : "VERTICAL STRIPED SHIRT",
//         id : 5,
//         price : "$260",
//         pic_url : "/product5.png",
//         img1 : "/product5.png",
//         img2 : "/product5.png",
//         img3 : "/product5.png", 
//         img4 : "/product5.png",
       
//     },
//     {
//         title : "COURAGE GRAPHIC T-SHIRT",
//         id : 6,
//         price : "$260",
//         pic_url : "/product6.png",
//         img1 : "/product6.png",
//         img2 : "/product6.png",
//         img3 : "/product6.png", 
//         img4 : "/product6.png",
       
//     },
//     {
//         title : "LOOSE FIT BERMUDA SHORTS",
//         id : 7,
//         price : "$260",
//         pic_url : "/product7.png",
//         img1 : "/product7.png",
//         img2 : "/product7.png",
//         img3 : "/product7.png", 
//         img4 : "/product7.png",
       
//     },
//     {
//         title : "FADED SKINNY JEANS",
//         id : 8,
//         price : "$260",
//         pic_url : "/product8.png",
//         img1 : "/product8.png",
//         img2 : "/product8.png",
//         img3 : "/product8.png", 
//         img4 : "/product8.png",
       
//     },
//     {
//         title : "Polo with Contrast Trims",
//         id : 9,
//         price : "$212",
//         old_price: "$242",
//         pic_url : "/product8.png",
//         img1 : "/tshirt1.png",
//         img2 : "/tshirt1.png",
//         img3 : "/tshirt1.png", 
//         img4 : "/tshirt1.png",
       
//     },
//     {
//         title : "Gradient Graphic T-shirt",
//         id : 10,
//         price : "$145",
//         pic_url : "/product8.png",
//         img1 : "/tshirt2.png",
//         img2 : "/tshirt2.png",
//         img3 : "/tshirt2.png", 
//         img4 : "/tshirt2.png",
       
//     },
//     {
//         title : "Polo with Tipping Details",
//         id : 11,
//         price : "$180",
//         pic_url : "/product8.png",
//         img1 : "/tshirt3.png",
//         img2 : "/tshirt3.png",
//         img3 : "/tshirt3.png", 
//         img4 : "/tshirt3.png",
       
//     },
//     {
//         title : "Black Striped T-shirt",
//         id : 12,
//         price : "$120",
//         old_price: "$160 ",
//         pic_url : "/product8.png",
//         img1 : "/tshirt4.png",
//         img2 : "/tshirt4.png",
//         img3 : "/tshirt4.png", 
//         img4 : "/tshirt4.png",
       
//     },
// ]

// let Star = [<FaStar key={1}/>, <FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>];



// export default function Pro_Details(){  
//     const [product,setProduct] =useState<AllProducts[]>([])
//         useEffect(()=>{
//             async function fatchproduct(){
//                 const fatchedProducts : AllProducts[]= await client.fetch(allProducts)
//                 setProduct(fatchedProducts)
//             }
//              fatchproduct()
//             },[])

//     const params = useParams();
//     const id = params.id
//     const items = product.find((item)=>item._id === id)
//     if(!items){
//          return <h1>Product not found</h1>
//     }

//     return (
//         <>
//         <BreadcrumbDemo/>
//         <div className="flex flex-col md:flex-row justify-evenly sm:mt-10 p-5 sm:m-0">
//             {/*LEFT */}
//             <div className="flex sm:flex-col justify-between items-center w-full md:w-[142px] mt-3 sm:mt-0 order-2 sm:order-1">
//                 <Image src={items.image} className="w-[100px] sm:w-full h-[100px] sm:h-[150px]" alt="product_Image" width={100} height={100}></Image>
//                 <Image src={items.image} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 " alt="product_Image" width={100} height={100}></Image>
//                 <Image src={items.image} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 " alt="product_Image" width={100} height={100}></Image>
//             </div>
//             {/*MEDIUM DIV*/}
//             <div className="w-[100%] sm:w-[444px] h-[350px] sm:h-[500px] px-4 mt-5 sm:mt-0 order-1 sm:order-2">
//             <Image src={items.image} className="w-full h-[100%]" alt="product_Image" width={100} height={100}></Image>
//             </div>
//             {/*RIGHT DIV*/}
//              <div className="w-full sm:w-[600px] h-[500px] order-3">
//             <div>
//                 <h1 className="text-2xl md:text-3xl font-extrabold mt-4">{items.name}</h1>
//             </div>
//                 <div className="flex text-yellow-500">
//                        {
//                           Star.map((icon,index)=> (
//                           <span key={index}>{icon}</span>
//                           ))
//                        }
//                </div>
//             <div>
//                 <p className="font-bold text-xl mt-3">{items.price} <span className="line-through text-gray-400">{items.discountPercent}</span></p>
//                 <p className="text-gray-600 mt-4">{items.description}</p>
//             </div>
//             <hr className="mt-5"/>
//             {/*SELECT COLOR*/}
//             <div className="mt-5">
//                 <div className="flex space-x-4 mt-2">
//                <p className="text-gray-500">Select Colors</p>
//                {items.colors.map((color, i)=>{
//                   return <div key={i} className='w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-[0px_0px_5px_gray]' style={{backgroundColor: color}}><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
//                 })}
//                 </div>
//             </div >
//             <hr className="mt-5"/>
//             {/*SELECT SIZE*/}
//             <p className="text-gray-500 mt-4">Choose Size</p>
//             <div className="flex space-x-3 mt-2">
//                 {items.sizes.map((size , i)=>(
//                <div key={i} className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px]  bg-[#F0F0F0] text-gray-500">{size}</div>
//                 ))} 
//             </div>
//             <hr className="mt-6"/>
//                 {/*BUTTONS*/}
//             <div className="flex justify-start items-center mt-7 space-x-4">
//                <div className="w-[100px] h-[37px] flex justify-between p-3 items-center rounded-[62px]  bg-[#F0F0F0] text-gray-500">
//                 <Minus/>
//                 1
//                 <Plus/>
//                 </div>
//                <Button className="bg-black text-white w-[310px] rounded-[30px]">Add to cart</Button>
//             </div> 
//           </div>  
//         </div> 
//         <AllRiview/>
//         <Tshirt_products/>
//         </>
//     )
// }


// app/product/[id]/page.tsx
'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { AllProducts } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/queries";
import { Check, Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function Pro_Details() {
    const [product, setProduct] = useState<AllProducts[]>([]);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const { addToCart } = useCart(); // Access cart context

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProducts: AllProducts[] = await client.fetch(allProducts);
            setProduct(fetchedProducts);
        }
        fetchProduct();
    }, []);

    const params = useParams();
    const id = params.id;
    const item = product.find((item) => item._id === id);

    if (!item) {
        return <h1>Product not found</h1>;
    }

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            const cartItem = {
                id: item._id,
                name: item.name,
                price: item.price,
                size: selectedSize,
                color: selectedColor,
                imageUrl: item.image,
                quantity: 1,
            };
            addToCart(cartItem );
        } else {
            alert("Please select both size and color");
        }
    };
    
    return (
        <>
            <div className="flex flex-col md:flex-row justify-evenly sm:mt-10 p-5 sm:m-0">
                <div className="flex sm:flex-col justify-between items-center w-full md:w-[142px] mt-3 sm:mt-0 order-2 sm:order-1">
                    <Image
                        src={item.image}
                        className="w-[100px] sm:w-full h-[100px] sm:h-[150px]"
                        alt="product_Image"
                        width={100}
                        height={100}
                    />
                    {/* Other images */}
                </div>
                <div className="w-[100%] sm:w-[444px] h-[350px] sm:h-[500px] px-4 mt-5 sm:mt-0 order-1 sm:order-2">
                    <Image
                        src={item.image}
                        className="w-full h-[100%]"
                        alt="product_Image"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="w-full sm:w-[600px] h-[500px] order-3">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold mt-4">{item.name}</h1>
                    </div>
                    <div className="flex text-yellow-500">
                        {/* Star Rating */}
                    </div>
                    <div>
                        <p className="font-bold text-xl mt-3">
                            {item.price} <span className="line-through text-gray-400">{item.discountPercent}</span>
                        </p>
                        <p className="text-gray-600 mt-4">{item.description}</p>
                    </div>
                    <hr className="mt-5" />
                    {/* Select Color */}
                    <div className="mt-5">
                        <div className="flex space-x-4 mt-2">
                            <p className="text-gray-500">Select Colors</p>
                            {item.colors.map((color, i) => (
                                <div
                                    key={i}
                                    className="w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-[0px_0px_5px_gray]"
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {selectedColor === color && <Check className="text-white opacity-100" />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="mt-5" />
                    {/* Select Size */}
                    <p className="text-gray-500 mt-4">Choose Size</p>
                    <div className="flex space-x-3 mt-2">
                        {item.sizes.map((size, i) => (
                            <div
                                key={i}
                                className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-500"
                                onClick={() => setSelectedSize(size)}
                            >
                                {selectedSize === size && <Check className="text-gray-700" />}
                                {size}
                            </div>
                        ))}
                    </div>
                    <hr className="mt-6" />
                    {/* Buttons */}
                    <div className="flex justify-start items-center mt-7 space-x-4">
                        <Button className="bg-black text-white w-[310px] rounded-[30px]" onClick={handleAddToCart}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
    
}