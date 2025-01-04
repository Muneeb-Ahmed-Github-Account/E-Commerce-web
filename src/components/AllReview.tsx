import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";

const reviewS = [
    {
      name: "Samantha D.",
      feedback:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      id: 1,
      verified: true,
      date : "Posted on August 14, 2023"
    },
    {
      name: "Alex M.",
      feedback:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      id: 2,
      verified: true,
      date : "Posted on August 14, 2023"
    },
    {
      name: "Ethan R.",
      feedback:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      id: 3,
      verified: false,
      date : "Posted on August 14, 2023"
    },
    {
      name: "Olivia P.",
      feedback:
       "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      id: 4,
      verified: true,
      date : "Posted on August 14, 2023"
    },
    {
      name: "Liam K.",
      feedback:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      id: 5,
      verified: true,
      date : "Posted on August 14, 2023"
    },
    {
        name: "Ava H.",
        feedback:
          "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        id: 6,
        verified: true,
        date : "Posted on August 14, 2023"
      },
  ];
  
let Star = [<FaStar key={1}/>, <FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>];

export default function AllRiview (){
    return(
        <main>
              <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 md:px-52 mt-24 md:mt-8  ">
                <p className="text-gray-500">Product Details</p>
                <p>Rating & Reviews</p>
                <p className="text-gray-500">FAQs</p>
              </div>
              <hr className="mt-5"/>
            <div className=" md:px-12 mt-4 md:mt-10 flex justify-between ">
            <h2 className=" text-2xl font-bold ml-5">All Reviews <span className="text-lg text-gray-400">(451)</span></h2>
               <div className="flex space-x-3">
                <Button className="hidden md:block rounded-[25px]" variant={"outline"}>Latest</Button>
                <Button className="rounded-[25px]">Write a Review</Button>
               </div>
            </div>

            {/* Container */}
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {
                     reviewS.map((data)=>{
                        return(
                                <div className="border p-5 rounded-[20px]"key={data.id}>
                                    <div className="flex text-yellow-500">
                                     {
                                        Star.map((icon,index)=> (
                                            <span key={index}>{icon}</span>
                                        ))
                                     }
                                </div>
                                    <h2 className="font-bold mt-2 flex ">{data.name} {<Check className="bg-green-500 w-[15px] h-[15px] mt-1 ml-1 rounded-full text-white"/>}</h2>
                                     <p className="text-sm mt-4 text-gray-500">{data.feedback}</p>
                                    <p className="mt-5 text-gray-500">{data.date}</p>
                                </div>
                            
                           )
                      })
                  }
              </div>
            </div>
        </main>
    )
}