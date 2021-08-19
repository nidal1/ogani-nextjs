import Banner from "../components/home/sections/Banner";
import Blog from "../components/home/sections/Blog";
import Categories from "../components/home/sections/Categories";
import Featured from "../components/home/sections/Featured";
import LatestProduct from "../components/global/LatestProduct";
import Base from '../components/global/Base';


export default function Home() {
  

  return (
    <Base>
      <Categories />
      <Featured />
      <Banner />
      <LatestProduct />
      <Blog />
    </Base>
  )
}
