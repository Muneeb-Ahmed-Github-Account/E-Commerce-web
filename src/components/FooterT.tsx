
import { MdOutlineEmail } from "react-icons/md";

export default function FooterT(){
    return(
        <main className="max-w-screen-2xl mx-auto w-full flex justify-center items-center ml-4 md:ml-[65px]">
            <div className="w-[315px] md:w-[100%] h-[272px] sm:h-[160px] bg-black text-white flex flex-col sm:flex-row items-center  md:ml-0 md:p-9 rounded-[20px] ">
                <h1 className=" md:w-[450px] md:h-[80px] text-3xl sm:text-4xl mt-3 md:mt-0 ml-2 md:ml-0 font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className="md:ml-[200px] space-y-3 mt-7 md:mt-0">
                    <div className="flex justify-start items-center sm:w-[330px] h-[40px]  rounded-[50px] bg-[#f0f0f0]">
                     <MdOutlineEmail className="text-xl ml-3 text-black"/>
                    <input placeholder="Enter your email address" className="w-full h-full  rounded-[50px] ml-2 bg-[#f0f0f0]"></input>
                    </div>
                    <div className="flex justify-center items-center sm:w-[330px] h-[40px] cursor-pointer rounded-[50px] bg-[#f0f0f0]">
                        <p className="text-black">Subscribe to Newsletter</p>
                    </div>
                </div>

            </div>
        </main>
    )
}