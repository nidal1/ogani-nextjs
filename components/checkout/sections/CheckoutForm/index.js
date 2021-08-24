import CheckoutOrder from "./CheckoutOrder";
import CheckoutOrderInfos from "./CheckoutOrderInfos";

const CheckoutForm = (params) => {
    return (
        <div className="checkout__form">
            <h4>Billing Details</h4>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className="row">
                    <CheckoutOrderInfos />
                    <CheckoutOrder />
                    </div>
            </form>
        </div>
    );
};
export default CheckoutForm;