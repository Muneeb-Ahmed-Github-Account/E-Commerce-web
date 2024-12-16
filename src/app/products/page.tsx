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
        title : "T-SHIRT WITH TAPE DETAILS",
        id : 1,
        price : "$120",
        pic_url : "/product1.png",
    },
    {
        title : "SKINNY FIT JEANS",
        id : 2,
        price : "$120",
        old_price: "$200",
        pic_url : "/product2.png",
    },
    {
        title : "CHECKERED SHIRT",
        id : 3,
        price : "$120",
        pic_url : "/product3.png",
    },
    {
        title : "SLEEVE STRIPED T-SHIRT",
        id : 4,
        price : "$120",
        old_price: "$200",
        pic_url : "/product4.png",
    },
]

let Star = [<FaStar/>, <FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

export default function Products(){
    return(
        <div className="w-full h-[500px] mt-10">
            <h1 className="text-2xl md:text-4xl font-extrabold text-center">NEW ARRIVALS</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    products.map((data)=>{
                        return(
                            <div>
                                <div className="w-[220px] h-[230px] bg-[#FOEEED]">
                                <Image src={data.pic_url} alt={data.title} className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
                                </div>
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
// 03072610454 MISKEEN  03335472982 TOUSEEF  