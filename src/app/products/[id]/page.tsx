 import Image from "next/image"
 import Link from "next/link";
 import { FaStar } from "react-icons/fa";
 import { useParams } from "next/navigation";

interface Mproducts{
    title : string
    id : number
    price : string
    rating? : number
    old_price? : string
    pic_url : string
    // str_rank? : string
    
}

let Top_products :Mproducts[]=[
    
    {
        title : "VERTICAL STRIPED SHIRT",
        id : 1,
        price : "$212",
        old_price: "$232",
        pic_url : "/product5.png",
    },
    {
        title : "COURAGE GRAPHIC T-SHIRT",
        id : 2,
        price : "$145",
        
        pic_url : "/product6.png",
    },
    {
        title : "LOOSE FIT BERMUDA SHORTS",
        id : 3,
        price : "$80",
        pic_url : "/product7.png",
    },
    {
        title : "FADED SKINNY JEANS",
        id : 4,
        price : "$210",
        pic_url : "/product8.png",
        // str_rank: "4.5/5"
    },
]

export default function Pro_Details(){

    
    return (
        <div>
            <h1>Products detail</h1>
        </div>
    )
}