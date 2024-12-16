import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonVideo } from "react-icons/bs";
import { SheetSide } from "./Sheet";
import { NavigationMenuDemo } from "./NavigationMenu";


export default function Header() {
  return (
   <header className="flex w-full h-[70px] justify-between items-center">
    {/*left*/}
    <div className="flex justify-center items-center ">
        <SheetSide/>
        <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
    {/*NAVBAR*/}
    <ul className="hidden md:block">
        <li className="space-x-5 flex justify-center items-center">
            <Link href={""}><NavigationMenuDemo/></Link>
            <Link href={""}>On Sale</Link>
            <Link href={""}>NEW ARRIVALS</Link>
            <Link href={""}>Brands</Link>
        </li>
    </ul>
    {/*SEARCH BAR*/}
      <div className="hidden md:block">
           <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[50px] bg-[#f0f0f0]">
               <TbSearch className="text-xl ml-3"/>
               <input placeholder="search for products..." className="w-full h-full rounded-[50px] ml-2 bg-[#f0f0f0]"></input>
           </div>
      </div>

       {/*CART*/}
       <div className="flex items-center mr-[30px] space-x-5">
       <TbSearch className="text-xl ml-3 md:hidden"/>
       <FiShoppingCart />
       <BsPersonVideo />
       </div>

   </header>
  );
}
