import Image from "next/image";

export default function DressStyle (){
    return(
        <div className="max-w-screen-2xl mx-auto flex flex-col w-[85%] md:w-[1000px] h-[100%] md:h-[550px] bg-[#F0F0F0] rounded-[20px] ml-7 md:ml-[120px] mt-[870px] md:mt-0 ">
            <div className="flex justify-center items-center ">
                <h3 className="text-4xl font-extrabold ml-6 md:ml-2 mt-12">BROWSE BY DRESS STYLE</h3>
            </div>
             <div className="flex flex-col md:flex-row justify-center items-center ml-2 md:ml-4 gap-1 mt-8">
                 {/*IMAGES*/}
                 
                 <Image src={"/dressstyle.png"} className=" w-[90%] md:w-[300px] h-[100%] md:h-[180px] mr-4" alt="dressimage" width={100} height={100}></Image>
                 <Image src={"/dressstyle2.png"} className="w-[265px] md:w-[500px] ml-2 md:ml-0 h-[180px] md:h-[180px] mt-2 mr-8" alt="dressimage" width={100} height={100}></Image>

            </div>
              <div className="flex flex-col md:flex-row justify-center items-center ml-4 mt-3 mr-3">
                <Image src={"/dressstyle3.png"} className="w-[265px] md:w-[500px] h-[180px] md:h-[180px] mr-5" alt="dressimage" width={100} height={100}></Image>
                <Image src={"/dressstyle4.png"} className="w-[95%] md:w-[300px] h-[100%] md:h-[180px] mt-3 md:mt-0 mr-4" alt="dressimage" width={100} height={100}></Image>
            </div>
        </div>
    )
}