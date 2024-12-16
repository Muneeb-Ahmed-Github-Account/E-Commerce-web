import Annouce from "@/components/annoucement";
import Fonts from "@/components/Fonts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "./products/page";
import Top_Selling_products from "./products/Sale";
import ProductDetails from "./products/[id]/page";

export default function Home() {
  return (
    <div>
      <Annouce/>
      <Header/>
      <Hero/>
      <Fonts/>
      <Products/>
      <Top_Selling_products/>
      <ProductDetails/>
    </div>
  );
}
