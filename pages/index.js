import Banner from "../components/home/sections/Banner";
import Blog from "../components/home/sections/Blog";
import Categories from "../components/home/sections/Categories";
import Featured from "../components/home/sections/Featured";
import LatestProduct from "../components/global/LatestProduct";
import Base from '../components/global/Base';

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addCatoriezedItems } from "../features/products/productsSlice";


function Home() {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const categoriezedItems = products.items?.filter((el) => {
      return el.isCatoriezed;
    });
    dispatch(addCatoriezedItems(categoriezedItems));
  },[products.items]);

  return (
    <>
      <Categories />
      <Featured />
      <Banner />
      <LatestProduct />
      <Blog />
    </>
  )
}

export default Base(Home);
