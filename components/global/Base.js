import Sidebar from './Sidebar';
import Header from './Header'
import Hero from './Hero';
import Breadcrumb from './Hero/Breadcrumb';

import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from '../../features/products/productsSlice';



const Base = (Component) => {
    return ({ data }) => {
        const pathname = useRouter().pathname;
        const products = useSelector(state => state);
        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(addProducts(data));
        })
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