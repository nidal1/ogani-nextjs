import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import withBaseheader from "../../global/withBaseHeader";
import DropDown from './Dropdown';
import DropDownItem from './Dropdown/DropdownItem';

const CustomLink = ({ itemName, href }) => {
    const router = useRouter();
    let activeClass = router.asPath === href ? 'active' : '';
    return (
        <li className={activeClass} >
            <Link href={href}>
                {itemName}
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

    const {
        favoritItems,
        cartIteams,
        total
    } = navigation

    const [targetName, setTarget] = useState(undefined);


    const smLinks = socialMedias.map((cur) => {
        return <a key={cur.sosialMediaName} href={cur.socialMediaLink}><i className={cur.socialMediaFont} /></a>
    });


    const navigationLinks = navigation.navItems.map((cur) => {
        return <CustomLink key={cur.navIteam} href={cur.navLink} itemName={cur.navIteam} />
    });


    const onEnterHeaderCart = (e) => {
        let dataAtt;
        if (e.target.tagName === "LI") {
            dataAtt = e.target.attributes.getNamedItem('data-name').value;
        }
        if (e.target !== e.currentTarget) {
            dataAtt = e.target.offsetParent.attributes.getNamedItem('data-name').value;
        }
        if (!targetName) {
            setTarget(dataAtt);
        }
    }

    const onLeaveHeaderCart = (e) => {
        if (targetName) setTarget(undefined);
    }


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
                                <ul className="dropdown">

                                    <li type="button" data-name="favorite-items-btn" onMouseEnter={onEnterHeaderCart} onMouseLeave={onLeaveHeaderCart}><i className="fa fa-heart" />
                                        <span>{favoritItems}</span>

                                        {targetName === "favorite-items-btn" && <DropDown>
                                            <DropDownItem />
                                            <DropDownItem />
                                            <DropDownItem />
                                        </DropDown>}
                                    </li>

                                    <li type="button" data-name="add-to-cart-btn" onMouseEnter={onEnterHeaderCart} onMouseLeave={onLeaveHeaderCart}>
                                        <i className="fa fa-shopping-bag" /> <span>{cartIteams}</span>
                                        {targetName === "add-to-cart-btn" && <DropDown>
                                            <DropDownItem />
                                            <DropDownItem />
                                            <DropDownItem />
                                        </DropDown>}
                                    </li>
                                </ul>
                                <div className="header__cart__price">item: <span>${total}</span></div>
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