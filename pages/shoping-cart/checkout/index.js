import CheckoutForm from '../../../components/checkout/sections/CheckoutForm'
import RedirectToCheckout from '../../../components/checkout/sections/RedirectToCheckout'
import Base from '../../../components/global/Base'

export default function Home(params) {
    return (
        <Base>
            {/* Checkout Section Begin */}
            <section className="checkout spad">
                <div className="container">
                    <RedirectToCheckout />
                    <CheckoutForm />
                </div>
            </section>
            {/* Checkout Section End */}

        </Base>
    )
}