import Banner from "../components/home/sections/Banner";
import Blog from "../components/home/sections/Blog";
import Categories from "../components/home/sections/Categories";
import Featured from "../components/home/sections/Featured";
import Hero from "../components/home/sections/Hero";
import LatestProduct from "../components/home/sections/LatestProduct";

export default function Home({value="customAlt"}) {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <Banner />
      <LatestProduct />
      <Blog />
    </>
  )
}