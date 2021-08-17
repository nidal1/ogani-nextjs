import Link from "next/dist/client/link";

import { capitalizeAndRemoveForwardslash } from '../../../../util';

import { useRouter } from "next/dist/client/router";

const Breadcrumb = (params) => {
    let pathname = useRouter().pathname;
    pathname = capitalizeAndRemoveForwardslash(pathname);

    return (
        <section className="breadcrumb-section set-bg" data-setbg="./img/breadcrumb.jpg" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Organi Shop</h2>
                            <div className="breadcrumb__option">
                                <Link href="/">Home</Link>
                                <span>{ pathname }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default Breadcrumb;