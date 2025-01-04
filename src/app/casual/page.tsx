import { AccordionDemo } from "@/components/Accordian";
import { CheckboxDemo } from "@/components/Checkbox";
import { DressStyle } from "@/components/Dressstyle";
import Shirts from "@/components/Shirts";
import Size from "@/components/Size";
import { SliderDemo } from "@/components/Slider";

export default function Casual(){
    return(
        <main className="flex flex-col md:flex-row justify-center items-center space-x-6">
            {/* RIGHT DIV */}
            <div className="w-full md:w-[283px] h-full md:h-[1155px] border rounded-[16px]">
                <AccordionDemo/>
                <SliderDemo/>
                <CheckboxDemo/>
                <Size/>
                <DressStyle/>
                

            </div>
            {/* LEFT DIV */}
            <div className="w-full md:w-[900px] h-full md:h-[1200px] mt-5">
               <Shirts/>
            </div>
        </main>
    )
}