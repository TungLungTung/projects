import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JhsSTEOeXxv7QdGeqRziNnJYcJzeMzXAXBYs9GQqEIVMz6h06xdXg0L6BznIQvHUQ196ZPMSPkbipnVKmY5KUOT00GQQG31nr';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='Shop Inc.'
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}
 
export default StripeCheckoutButton;