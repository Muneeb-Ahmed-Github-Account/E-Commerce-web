import { LuPlus } from "react-icons/lu";
export default function Annouce() {
    return (
      <main className="bg-[#000000] w-full h-[38px] flex justify-center items-center ral">
        {/*left section */}
        <div className="flex justify-center items-center">
            <h3 className="text-[#fafafa] text-xs sm:text-sm">Sign up and get 20% off to your first order.</h3>
            <button className="text-[#fafafa] text-xs sm:text-sm ml-3">Sign Up Now</button>
        </div>
        <LuPlus className="text-white absolute right-[50px] hidden sm:block"/>
      </main>
    );
  }
