
import Sidebar from './Sidebar';
import Header from './Header'
import Hero from './Hero';
import Breadcrumb from './Hero/Breadcrumb';

import { useRouter } from 'next/dist/client/router';
import { useEffect } from "react";

const Base = ({ children }) => {
    const pathname = useRouter().pathname;

    useEffect(() => {
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
          var bg = $(this).data('setbg');
          $(this).css('background-image', 'url(' + bg + ')');
        });
      });
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