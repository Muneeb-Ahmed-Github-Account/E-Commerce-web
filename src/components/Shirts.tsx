import Image from "next/image"
import { FaStar } from "react-icons/fa";

interface Mproducts{
    title : string
    id : number
    price : string
    rating? : number
    old_price? : string
    pic_url : string
    
}

let products :Mproducts[]=[
    
    {
        title : "Gradient Graphic T-shirt",
        id : 1,
        price : "$145",
        pic_url : "/tshirt2.png",
    },
    {
        title : "Polo with Tipping Details",
        id : 2,
        price : "$180",
        pic_url : "/tshirt3.png",
    },
    {
        title : "Black Striped T-shirt",
        id : 3,
        price : "$120",
        old_price: "$160",
        pic_url : "/tshirt4.png",
    },
    {
        title : "SKINNY FIT JEANS",
        id : 4,
        price : "$240",
        old_price: "$260",
        pic_url : "/product2.png",
    },
    {
        title : "CHECKERED SHIRT",
        id : 5,
        price : "$180",
        pic_url : "/product3.png",
    },
    {
        title : "SLEEVE STRIPED T-SHIRT",
        id : 6,
        price : "$130",
        old_price: "$160",
        pic_url : "/product4.png",
    },
    {
        title : "VERTICAL STRIPED SHIRT",
        id : 7,
        price : "$212",
        old_price: "$232",
        pic_url : "/product5.png",
    },
    {
        title : "COURAGE GRAPHIC T-SHIRT",
        id : 8,
        price : "$145",
        pic_url : "/product6.png",
    },
    {
        title : "LOOSE FIT BERMUDA SHORTS",
        id : 9,
        price : "$80",
        pic_url : "/product7.png",
    },
]

let Star = [<FaStar key={1}/>, <FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>];

export default function Shirts(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-3">
            <h1 className="text-xl md:text-2xl font-extrabold text-start ml-7">Casual</h1>
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-3 mt-5">
                {
                    products.map((data)=>{
                        return(
                            <div key={data.id}>
                                <div className="w-[230px] h-[250px] bg-[#FOEEED]">
                                <Image src={data.pic_url} alt={data.title} className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
                                </div>
                                <div>
                                <p className="text-sm mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-500">
                                     {
                                        Star.map((icon,index)=> (
                                            <span key={index}>{icon}</span>
                                        ))
                                     }
                                </div>
                                <p className="font-bold mt-1 mb-7">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span> </p>
                                
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}