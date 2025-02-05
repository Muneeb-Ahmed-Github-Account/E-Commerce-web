// import { BreadcrumbDemo } from "@/components/BreadCrumb"
// import { Button } from "@/components/ui/button"
// import { Minus, Plus } from "lucide-react"
// import Image from "next/image"
// import { MdDeleteForever } from "react-icons/md"

// interface Icart {
//     imageurl: string
//     tital : string
//     id : number
//     size : string
//     color : string
//     price : string
// }
// const cartItems : Icart[] =[
//     {
//         imageurl: "/tshirt2.png",
//         tital : "Gradient Graphic T-shirt",
//         id : 1,
//         size : "Lagre",
//         color : "White",
//         price : "$145" ,
//     },
//     {
//         imageurl: "/product3.png",
//         tital : "CHECKERED SHIRT",
//         id : 2,
//         size : "Medium",
//         color : "Red",
//         price : "$180" ,
//     },
//     {
//         imageurl: "/product2.png",
//         tital : "SKINNY FIT JEANS",
//         id : 3,
//         size : "Lagre",
//         color : "Blue",
//         price : "$240" ,
//     }
// ]


// export default function Cart(){
//     return(
//          <>
//          <div className="md:pl-14">
//             <BreadcrumbDemo/>
//          <h1 className="text-3xl font-extrabold ml-4 mt-4">YOUR CART</h1>
//          </div>
//         <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
            
//              {/* LEFT DIV */}
//              <div className="w-full h-full md:w-[700px] md:h-[450px] border rounded-[20px]">
//                   {
//                     cartItems.map((items)=>{
//                         return(
//                             <div className="flex justify-between border-b"key={items.id}>
//                                 <div className="flex gap-3 mt-4 ml-5 md:ml-0 md:p-4">
//                                 <Image src={items.imageurl} alt={items.tital} className="rounded-[16px]" width={100} height={100}></Image>
//                                 <div className="mt-2">
//                                   <h3 className="font-bold text-sm">{items.tital}</h3>
//                                    <p className="text-sm ">Size: {items.size}</p>
//                                    <p className="text-sm">Color: {items.color}</p>
//                                    <p className="font-bold">{items.price}</p>
//                                 </div>
//                                 </div>
//                                 {/* RIGHT SIDE */}
//                                 <div className="flex flex-col justify-evenly items-end mr-2 ">
//                                 <MdDeleteForever className="text-red-500 w-[40px] "/>
//                                 <div className="w-[100px] h-[37px] flex justify-between p-3 mt-2 items-center rounded-[62px]  bg-[#F0F0F0] text-gray-500">
//                                     <Minus/>
//                                     1
//                                     <Plus/>
//                                 </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                   }
//              </div>

//              {/* RIGHT DIV */}
//              <div className="w-full h-full md:w-[400px] md:h-[415px] border rounded-[20px] flex flex-col justify-start items-center p-4">
//                  <div className="w-[90%] space-y-3">
//                      <h1 className="text-xl font-extrabold">Order Summary</h1>
//                      <p className="flex justify-between">Subtotal <span>$565</span></p>
//                      <p className="flex justify-between">Discount (-20) <span className="text-red-500 font-bold">-$113</span></p>
//                      <p className="flex justify-between">Delivery Fee <span>$15</span></p>
//                      <p className="flex justify-between">Total <span>$467</span></p>
//                     <div className="flex ">
//                       <input className="bg-[#F0F0F0] py-2 px-2 md:px-5 rounded-[18px] md:mt-6 text-gray-600 outline-none" placeholder="Add promo code" />
//                       <Button className="ml-2 rounded-[17px]">Apply</Button>
//                     </div>
//                  </div>
//                       <Button className="w-full rounded-[20px] mt-8">Go to Checkout</Button>
//              </div>
//         </div>
//         </>
//     )
// }



// ### **Step 4: Update `CartPage.tsx`**

// Now, let’s modify the cart page to use the dynamic cart data.

// ```tsx
// // app/cart/page.tsx
// app/cart/page.tsx
'use client'

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity , getSubtotal } = useCart();
    const router = useRouter()
    

    const handleUpdateQuantity = (id: string, quantity: number) => {
        if (quantity > 0) {
            updateQuantity(id, quantity);
        }
    };

    // Calculate subtotal
    const subtotal = getSubtotal()
    const handleCheckout = () => {
        router.push(`/checkout?amount=${subtotal}`)
    }
    // Calculate total (considering a fixed discount and delivery fee for this example)
    const discount = 20; // Example discount value
    const deliveryFee = 15; // Example delivery fee
    const total = subtotal - discount + deliveryFee;

    return (
        <>
            <div className="md:pl-14">
                <h1 className="text-3xl font-extrabold ml-4 mt-4">YOUR CART</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
                <div className="w-full h-full md:w-[700px] md:h-[450px] border rounded-[20px]">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="flex justify-between border-b" key={item.id}>
                                <div className="flex gap-3 mt-4 ml-5 md:ml-0 md:p-4">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="rounded-[16px]"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="mt-2">
                                        <h3 className="font-bold text-sm">{item.name}</h3>
                                        <p className="text-sm">Size: {item.size}</p>
                                        <p className="text-sm">Color: {item.color}</p>
                                        <p className="font-bold">{item.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-evenly items-end mr-2">
                                    <MdDeleteForever
                                        className="text-red-500 w-[40px]"
                                        onClick={() => removeFromCart(item.id)}
                                    />
                                    <div className="w-[100px] h-[37px] flex justify-between p-3 mt-2 items-center rounded-[62px] bg-[#F0F0F0] text-gray-500">
                                        <Minus onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} />
                                        {item.quantity}
                                        <Plus onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center p-5">Your cart is empty</p>
                    )}
                </div>

                {/* RIGHT DIV: Order Summary */}
                <div className="w-full h-full md:w-[400px] md:h-[415px] border rounded-[20px] flex flex-col justify-start items-center p-4">
                    <div className="w-[90%] space-y-3">
                        <h1 className="text-xl font-extrabold">Order Summary</h1>
                        <p className="flex justify-between">Subtotal <span>${subtotal.toFixed(2)}</span></p>
                        <p className="flex justify-between">Discount (-20) <span className="text-red-500 font-bold">-${discount}</span></p>
                        <p className="flex justify-between">Delivery Fee <span>${deliveryFee}</span></p>
                        <p className="flex justify-between">Total <span>${total.toFixed(2)}</span></p>
                        <div className="flex">
                            <input className="bg-[#F0F0F0] py-2 px-2 md:px-5 rounded-[18px] md:mt-6 text-gray-600 outline-none" placeholder="Add promo code" />
                            <Button className="ml-2 rounded-[17px]">Apply</Button>
                        </div>
                    </div>
                    <Button onClick={handleCheckout} className="w-full rounded-[20px] mt-8">Go to Checkout</Button>
                </div>
            </div>
        </>
    );
}
