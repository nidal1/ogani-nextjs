const withBaseHeader = (Component) => {
    return (props) => {
        const topHeaderInfo = {
            email: "hello@colorlib.com",
            amountOfFreeShippingOrders: 0,
            socialMedias: [
                {
                    sosialMediaName: "facebook",
                    socialMediaFont: "fa fa-facebook",
                    socialMediaLink: "https://web.facebook.com/nidal.tou"
                },
                {
                    sosialMediaName: "twitter",
                    socialMediaFont: "fa fa-twitter",
                    socialMediaLink: "https://web.twitter.com/nidal.tou"
                },
                {
                    sosialMediaName: "linkedin",
                    socialMediaFont: "fa fa-linkedin",
                    socialMediaLink: "https://web.linkedin.com/nidal.tou"
                },
                {
                    sosialMediaName: "pinterest",
                    socialMediaFont: "fa fa-pinterest-p",
                    socialMediaLink: "https://web.pinterest.com/nidal.tou"
                },
            ]
        }

        const navigation = {
            navItems: [{
                navIteam: "Home",
                navLink: '/'
            },
            {
                navIteam: "Shop",
                navLink: '/shop'
            },
            {
                navIteam: "Blog",
                navLink: '/blog'
            },
            {
                navIteam: "Contact",
                navLink: '/contact'
            }
            ],
            favoritItems: 0,
            cartIteams: 0,
            total: 0
        }

        return (<Component topHeaderInfo={topHeaderInfo} navigation={navigation} {...props} />);

    };
}
export default withBaseHeader;