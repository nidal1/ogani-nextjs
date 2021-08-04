import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import withBaseheader from "./withBaseHeader";

const CustomLink = ({ itemName, id, href }) => {
    const router = useRouter();
    let activeClass = router.asPath === href ? 'active' : '';
    return (
        <li key={ id } className={ activeClass } >
            <Link href={ href }>
                { itemName }
            </Link>
        </li>
    )

}

const Header = ({ value = "customAlt", topHeaderInfo, navigation }, ...props) => {

    const {
        email,
        amountOfFreeShippingOrders,
        socialMedias
    } = topHeaderInfo;

    const smLinks = socialMedias.map((cur) => {
        return <a key={cur.sosialMediaName} href={cur.socialMediaLink}><i className={cur.socialMediaFont} /></a>
    });


    const navigationLinks = navigation.navItems.map((cur) => {
        return <CustomLink id={cur.navIteam} href={cur.navLink} itemName = {cur.navIteam}/>
    });
    const addItemTo = (event) => {
        console.log(event)
    }

    const items = (
        <div className="popover" role="tooltip">
            <div className="popover-body" >
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* Header Section Begin */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope" /> {email}</li>
                                        <li>Free Shipping for all Order of ${amountOfFreeShippingOrders}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        {smLinks}
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src="/img/language.png" alt={value.toString()} />
                                        <div>English</div>
                                        <span className="arrow_carrot-down" />
                                        <ul>
                                            <li><Link href="#"><>Spanis</></Link></li>
                                            <li><Link href="#"><>English</></Link></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <Link href="#"><><i className="fa fa-user" /> Login</></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link href="/"><img src="/img/logo.png" alt={value.toString()} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    {navigationLinks}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li type="button" data-role="favorite-items-btn" onClick={addItemTo}><i className="fa fa-heart" /> <span>1</span></li>
                                    <li><i className="fa fa-shopping-bag" type="button" data-role="add-to-cart-btn" /> <span>3</span></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
            {/* Header Section End */}
        </>
    );
};

export default withBaseheader(Header);