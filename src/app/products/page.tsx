"use client"
import { useEffect, useState } from "react"
import { Products } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { fourProducts } from "@/sanity/queries"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image"

let Star = [<FaStar key={1}/>, <FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>]; 
const Productsfour =()=>{

    const [product,setProduct] =useState<Products[]>([])
    useEffect(()=>{
        async function fatchproduct(){
            const fatchedProducts : Products[]= await client.fetch(fourProducts)
            setProduct(fatchedProducts)
        }
         fatchproduct()
        },[])
    return(
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-2xl md:text-4xl font-extrabold text-center">NEW ARRIVALS</h1>
            <div className="flex flex-col  md:flex-row  justify-center items-center md:justify-evenly px-6 mt-10">
                 {
                     product.map((product)=>(
                             <div key={product._id}>
                                 <Link href={`/products/${product._id}`}>
                                 <div className="w-[230px] h-[240px] bg-[#FOEEED] ">
                                 {product.image && (
                                    <Image src={urlFor(product.image).url()}
                                    alt={product.name}
                                    className="w-full h-full rounded-[20px]"
                                    width={200}
                                    height={200}/>
                                 )}
                                 </div>
                                 </Link>
                                 <div>
                                 <p className="text-sm  mt-2 font-bold ml-2 ">{product.name}</p>
                                 <div className="flex text-yellow-500 ml-2">
                                      {
                                         Star.map((icon,index)=> (
                                             <span key={index}>{icon}</span>
                                         ))
                                      }
                                 </div>
                                 <p className="font-bold mt-1 ml-2">{product.price} <span className="text-gray-400 font-bold line-through">{product.discountPercent}</span> </p>
                                
                                 </div>
                             </div>
                         )
                     )
                 }
             </div>
         </div>
    )
}
export default Productsfour;






























//  import Image from "next/image"
//  import Link from "next/link";
//  import { FaStar } from "react-icons/fa";


// interface Mproducts{
//     title : string
//     id : number
//     price : string
//     rating? : number
//     old_price? : string
//     pic_url : string
//     slug? : string
    
// }

// let products :Mproducts[]=[
    
//     {
//         title : "T-SHIRT WITH TAPE DETAILS",
//         id : 1,
//         price : "$120",
//         pic_url : "/product1.png",
//         slug :  "t-shirt-with-tape-details"
//     },
//     {
//         title : "SKINNY FIT JEANS",
//         id : 2,
//         price : "$240",
//         old_price: "$260",
//         pic_url : "/product2.png",
//     },
//     {
//         title : "CHECKERED SHIRT",
//         id : 3,
//         price : "$180",
//         pic_url : "/product3.png",
//     },
//     {
//         title : "SLEEVE STRIPED T-SHIRT",
//         id : 4,
//         price : "$130",
//         old_price: "$160",
//         pic_url : "/product4.png",
//     },
// ]

//  let Star = [<FaStar key={1}/>, <FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>];

// export default function Products(){
//      return(
//         <div className="w-full h-full sm:h-[500px] mt-10">
//             <h1 className="text-2xl md:text-4xl font-extrabold text-center">NEW ARRIVALS</h1>
//             <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-6 mt-10">
//                  {
//                      product.map((product)=>{
//                         return(
//                              <div key={data.id}>
//                                  <Link href={`/products/${data.id}`}>
//                                  <div className="w-[220px] h-[230px] bg-[#FOEEED]">
//                                  <Image src={data.pic_url} alt={data.title} className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
//                                  </div>
//                                  </Link>
//                                  <div>
//                                  <p className="text-sm md:text-lg mt-2 font-bold">{data.title}</p>
//                                  <div className="flex text-yellow-500">
//                                       {
//                                          Star.map((icon,index)=> (
//                                              <span key={index}>{icon}</span>
//                                          ))
//                                       }
//                                  </div>
//                                  <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span> </p>
                                
//                                  </div>
//                              </div>
//                          )
//                      })
//                  }
//              </div>
//          </div>
//      )
//  }
  