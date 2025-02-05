import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import FooterT from "./FooterT";
import Image from "next/image";

export default function FooterB (){
    return(
        <main className="max-w-screen-2xl mx-auto bg-[#F0F0F0] w-full h-[830px] md:h-[425px] relative  mt-32">
            
            <span className="absolute top-[-105px] md:top-[-80px]">
            <FooterT/>
            </span>
            
           {/* TOP DIV */}
           <div className="max-w-screen-2xl flex h-[335px] flex-col md:flex-row justify-between items-start p-5 pt-[180px] md:pt-32 border-b">
           <div className="flex flex-row justify-center items-center w-[250px] ml-14 md:ml-12">
            <ul className="">
                <h2 className="text-2xl sm:text-3xl font-extrabold ">SHOP.CO</h2>
                <p className="w-[357px] md:w-[245px] h-[40px] md:h-[65px] md text-sm mt-2 md:mt-3  text-gray-500">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                {/* ICONS */}
                  <div className="flex items-center space-x-3 mt-4 md:mt-8">
                    <TiSocialTwitterCircular className="text-xl"/>
                                 <FaFacebook className="text-xl"/>
                            <RiInstagramLine className="text-xl"/>
                               <IoLogoGithub className="text-xl"/>
                 </div>
            </ul>
           </div>

           {/* MEDIUM DIV */}
           <div className=" w-full md:w-[900px] grid grid-cols-2 md:grid-cols-4 mt-6 md:mt-0 space-x-4">
             {/* BOX 1 */}
              
                  <ul className="space-y-4 ml-4 md:ml-14 text-gray-500">
                     <h2 className="text-sm md:text-1xl font-semibold">COMPANY</h2>
                     <li className="text-sm">About</li>
                     <li className="text-sm">Features</li>
                     <li className="text-sm">Works</li>
                     <li className="text-sm">Career</li>
                  </ul>
             {/* BOX 2  */}

                  <ul className="space-y-4  text-gray-500">
                     <h2 className="text-sm md:text-1xl font-semibold">HELP</h2>
                     <li className="text-sm">Customer Support</li>
                     <li className="text-sm">Delivery Details</li>
                     <li className="text-sm">Terms & Conditions</li>
                     <li className="text-sm">Privacy Policy</li>
                  </ul>
             {/* BOX 3  */}

                  <ul  className="space-y-4 mt-10 md:mt-0 text-gray-500">
                     <h2 className="text-sm md:text-1xl font-semibold">FAQ</h2>
                     <li className="text-sm">Account</li>
                     <li className="text-sm">Manage Deliveries</li>
                     <li className="text-sm">Orders</li>
                     <li className="text-sm">Payments</li>
                  </ul>
            {/* BOX 4  */}

                  <ul className="space-y-4 mt-10 md:mt-0 text-gray-500">
                     <h2 className="text-sm sm:text-1xl font-semibold">RESOURCES</h2>
                     <li className="text-sm">Free eBooks</li>
                     <li className="text-sm">Development Tutorial</li>
                     <li className="text-sm">How to - Blog</li>
                     <li className="text-sm">Youtube Playlist</li>
                  </ul>
             
        </div> 

         </div>
          {/* BOTTOM DIV */}
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-[400px] md:mt-4">
            <p className="text-sm md:mr-[500px] mb-3 md:mb-0 text-gray-500">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex items-center">
                <Image src={"/flogo1.png"} alt="Image" className="w-[50px]" width={100} height={100}></Image>
                <Image src={"/flogo2.png"} alt="Image" className="w-[50px]" width={100} height={100}></Image>
                <Image src={"/flogo3.png"} alt="Image" className="w-[50px]" width={100} height={100}></Image>
                <Image src={"/flogo4.png"} alt="Image" className="w-[50px]" width={100} height={100}></Image>
                <Image src={"/flogo5.png"} alt="Image" className="w-[50px]" width={100} height={100}></Image>
            </div>
         </div>  
        </main>
    )
}