import React from 'react';
import Bank from '../Bank';

const PaymentGetWay = () => {
    return (
        <div className='grid gap-3 grid-cols-2'>
            <Bank title={"Stripe"} transaction={1249}  revenue ={"25,000"}/>
            <Bank title={"PayPal"} transaction={1245}  revenue ={"25,000"}/>
            <Bank title={"Bkash"} transaction={1249}  revenue ={"25,000"}/>
            <Bank title={"Bkash"} transaction={1249}  revenue ={"25,000"}/>
        </div>
    );
};

export default PaymentGetWay;