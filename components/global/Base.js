import Sidebar from './Sidebar';
import Header from './Header'
import Hero from './Hero';
import Breadcrumb from './Hero/Breadcrumb';

import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addProducts, addCategories, addBanners } from '../../features/products/productsSlice';



const Base = (Component) => {
    return ({ data }) => {
        const pathname = useRouter().pathname;
        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(addProducts(data.products));
            dispatch(addCategories(data.categories));
            dispatch(addBanners(data.banners));
        },[])
        return (
            <>
                <Sidebar />
                <Header />
                <Hero />
                {pathname !== '/' && <Breadcrumb />}
                <Component />
            </>
        );
    }
}


export default Base;