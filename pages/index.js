import Banner from "../components/home/sections/Banner";
import Blog from "../components/home/sections/Blog";
import Categories from "../components/home/sections/Categories";
import Featured from "../components/home/sections/Featured";
import LatestProduct from "../components/global/LatestProduct";
import Base from '../components/global/Base';

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addCatoriezedItems, addFiltredItems } from "../features/products/productsSlice";


function Home() {


  const products = useSelector(state => state.products);
  const dispatch = useDispatch();


  useEffect(() => {
    const categoriezedItems = products.items?.filter((el) => {
      return el.isCatoriezed;
    });
    dispatch(addCatoriezedItems(categoriezedItems));
  }, [products.items]);

  useEffect(() => {
    if(products?.items.length) {
      const { items } = products;
      const filtredItems = items.filter((el) => {
        if (el.isFiltred) {
          return el;
        }
      })
      dispatch(addFiltredItems(filtredItems));
    }
  }, [products.items]);



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
