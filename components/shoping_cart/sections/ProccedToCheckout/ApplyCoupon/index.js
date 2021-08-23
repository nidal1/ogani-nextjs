import { useState } from "react";

const ApplyCoupon = (params) => {

    const [couponValue, setCouponValue] = useState();

    return (
        <div className="col-lg-6">
            <div className="shoping__continue">
                <div className="shoping__discount">
                    <h5>Discount Codes</h5>
                    <form onSubmit={ (e) => e.preventDefault()}>
                        <input type="text" placeholder="Enter your coupon code" value={couponValue} onChange={(e) => setCouponValue(e.target.value)} />
                        <button type="submit" className="site-btn" onClick={()=> console.log("object")}>APPLY COUPON</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ApplyCoupon;