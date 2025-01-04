import Image from "next/image";

export default function Hero(){
    return(
        <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
            {/*LEFT */}
            <div className="max-w-screen-2xl mx-auto w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
                <h1 className=" text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm mt-1 md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="bg-black py-2 px-8 text-sm text-white mt-4 rounded-[16px]">Shop Now</button>
            </div>
            {/*RIGHT */}
            <div className="relative">
                <Image src={"/profile.jpg"} className="w-[500px] mr-5" height={200} width={200} alt="profile image"></Image>
                <Image src={"/Vector.png"} className="w-[50px] md:w-[80px] absolute top-[90px] left-5 md:top-[190px] md:left-[-100px] " height={200} width={200} alt="profile image"></Image>

                <Image src={"/Vector.png"} className="w-[75px] md:w-[100px] absolute top-2 right-[32px] md:top-[50px] md:right-[30px] " height={200} width={200} alt="profile image"></Image>
            </div>
        </main>
    )
}