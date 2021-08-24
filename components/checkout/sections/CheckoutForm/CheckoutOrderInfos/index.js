import { useState } from "react";

const CheckoutOrderInfos = (params) => {

    const [inputsValues, setInputsValues] = useState({
        firstName:"",
        lastName:"",
        country:"",
        city:"",
        state:"",
        adress:"",
        adressOptional:"",
        postcode:"",
        phoneNumber:"",
        email:"",
        notes:""
    });

    return (
        <div className="col-lg-8 col-md-6">
            <div className="row">
                <div className="col-lg-6">
                    <div className="checkout__input">
                        <p>First Name<span>*</span></p>
                        <input type="text" required value={inputsValues.firstName} name="firstName" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="checkout__input">
                        <p>Last Name<span>*</span></p>
                        <input type="text" required value={inputsValues.lastName} name="lastName" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
                    </div>
                </div>
            </div>
            <div className="checkout__input">
                <p>Country<span>*</span></p>
                <input type="text" required value={inputsValues.country} name="country" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
            </div>
            <div className="checkout__input">
                <p>Address<span>*</span></p>
                <input type="text" placeholder="Street Address" className="checkout__input__add" required value={inputsValues.adress} name="adress" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
                <input type="text" placeholder="Apartment, suite, unite ect (optinal)" value={inputsValues.adressOptional} name="adressOptional" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
            </div>
            <div className="checkout__input">
                <p>Town/City<span>*</span></p>
                <input type="text" required value={inputsValues.city} name="city" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
            </div>
            <div className="checkout__input">
                <p>Country/State<span>*</span></p>
                <input type="text" required value={inputsValues.state} name="state" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
            </div>
            <div className="checkout__input">
                <p>Postcode / ZIP<span>*</span></p>
                <input type="text" required value={inputsValues.postcode} name="postcode" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="checkout__input">
                        <p>Phone<span>*</span></p>
                        <input type="text" required value={inputsValues.phoneNumber} name="phoneNumber" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="checkout__input">
                        <p>Email<span>*</span></p>
                        <input type="email" required value={inputsValues.email} name="email" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })}/>
                    </div>
                </div>
            </div>
            <div className="checkout__input">
                <p>Order notes</p>
                <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." value={inputsValues.notes} name="notes" onChange={(e)=> setInputsValues({
                            ...inputsValues,
                            [e.target.name]:e.target.value
                        })} />
            </div>
        </div>

    );
};
export default CheckoutOrderInfos;