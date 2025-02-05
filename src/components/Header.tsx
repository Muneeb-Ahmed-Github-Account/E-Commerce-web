'use client'
import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonVideo } from "react-icons/bs";
import { SheetSide } from "./Sheet";
import { NavigationMenuDemo } from "./NavigationMenu";
import { useCart } from "@/context/CartContext";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function Header() {
    const {getCartCount} = useCart()

    const cartCount = getCartCount()

  return (
   <header className="max-w-screen-2xl mx-auto flex w-full h-[70px] justify-between items-center">
    {/*left*/}
    <div className="flex justify-center items-center ">
        <SheetSide/>
        <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
    {/*NAVBAR*/}
    <ul className="hidden md:block">
        <li className="space-x-5 flex justify-center items-center">
            <Link href={""}><NavigationMenuDemo/></Link>
            <Link href={"/casual"}>On Sale</Link>
            <Link href={"/products"}>NEW ARRIVALS</Link>
            <Link href={"/brand"}>Brands</Link>
        </li>
    </ul>
    {/*SEARCH BAR*/}
      <div className="hidden md:block">
           <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[50px] bg-[#f0f0f0]">
               <TbSearch className="text-xl  ml-3"/>
               <input placeholder="search for products..." className="w-full h-full outline-none rounded-[50px] ml-2 bg-[#f0f0f0]"></input>
           </div>
      </div>

       {/*CART*/}
       <div className="flex items-center mr-[30px] space-x-5">
       <TbSearch className="text-xl ml-3 md:hidden"/>
       
       <Link className="relative" href={"/cart"}>
       <FiShoppingCart size={26}/>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-[15px] h-[15px] flex items-center justify-center">
                  {cartCount}
            </span>
       </Link>
       <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
       </div>

   </header>
  );
}

