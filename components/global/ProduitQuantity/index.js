import { useState } from "react";

const ProduitQuantity = (params) => {
    const [inputVal, setinputVal] = useState(1);

    const handelleInc = (e) => {
        const newValue = inputVal + 1;
        setinputVal(newValue)
    }

    const handelleDec = (e) => {
        const newValue = inputVal - 1;
        setinputVal(newValue)
    }

    const handelleChange = (e) => {
        setinputVal(e.target.value)
    }
    return (
        <div className="pro-qty">
            <span className="dec qtybtn" onClick={handelleDec}>-</span>
            <input type="text" value={inputVal} onChange={handelleChange} />
            <span className="inc qtybtn" onClick={handelleInc}>+</span>
        </div>
    );
};
export default ProduitQuantity;