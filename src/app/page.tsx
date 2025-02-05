
import Fonts from "@/components/Fonts";
import Hero from "@/components/Hero";
// import Products from "./products/page";
import Top_Selling_products from "./products/Sale";
import ProductDetails from "./products/[id]/page";
import DressStyle from "@/components/Dress";
import HappyCustomers from "@/components/Happycustomers";
import Productsfour from "./products/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Fonts/>
      {/* <Products/> */}
      <Productsfour/>
      <Top_Selling_products/>
      <ProductDetails/>
      <DressStyle/>
      <HappyCustomers/>
      
    </div>
  );
}
