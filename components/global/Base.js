
import Sidebar from './Sidebar';
import Header from './Header'
import Hero from './Hero';
import Breadcrumb from './Hero/Breadcrumb';

import { useRouter } from 'next/dist/client/router';


const Base = ({ children }) => {
    const pathname = useRouter().pathname;
    
    return (
        <>
            <Sidebar />
            <Header />
            <Hero />
            { pathname !== '/' && <Breadcrumb />}
            {children}
        </>
    );
};
export default Base;