"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button>
                <IoMdMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
                <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
            
                {/*NAVBAR*/}
    <ul className="">
        <li className="grid grid-cols-1 gap-y-4">
            <Link href={""}><NavigationMenuDemo/></Link>
            <Link className="ml-3" href={""}>On Sale</Link>
            <Link className="ml-3" href={""}>NEW ARRIVALS</Link>
            <Link className="ml-3" href={""}>Brands</Link>
        </li>
    </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
