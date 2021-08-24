import Link from "next/link";

const RedirectToCheckout = (params) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <h6><span className="icon_tag_alt" /> Have a coupon? <Link href={{pathname:'/shoping-cart'}}>Click here</Link> to enter your code
                </h6>
            </div>
        </div>
    );
};
export default RedirectToCheckout;