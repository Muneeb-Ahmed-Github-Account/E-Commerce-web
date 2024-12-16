import Image from "next/image"
import Link from "next/link";
import { FaStar } from "react-icons/fa";

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

let Star = [<FaStar/>, <FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

export default function Top_Selling_products(){
    return(
        <div className="w-full h-[500px] mt-10 ">
            <h1 className="text-2xl xs:mt-[850px] md:text-4xl font-extrabold text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    Top_products.map((data)=>{
                        return(
                            <div key={data.id} >
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[220px] h-[230px] bg-[#FOEEED]">
                                <Image src={data.pic_url} alt={data.title} className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
                                </div>
                                </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-500">{Star}</p>
                                <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span> </p>
                                
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
  