
import Fonts from "@/components/Fonts";
import Hero from "@/components/Hero";
import Top_Selling_products from "./products/Sale";
import DressStyle from "@/components/Dress";
import HappyCustomers from "@/components/Happycustomers";
import Productsfour from "./products/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Fonts/>
      <Productsfour/>
      <Top_Selling_products/>
      <DressStyle/>
      <HappyCustomers/>
      
    </div>
  );
}
