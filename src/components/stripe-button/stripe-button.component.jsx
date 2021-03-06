import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
	const priceForStrip = price * 100;
	const publishableKey = 'pk_test_51IbLpgK78PcLzzuRJ' +
	                       'FnPY527uq528vED7EppkRXZqyNKGIW' +
	                       'aIwGZHere8ciy8fda4apPX6iS0ZtckbHB' +
	                       'RGZVfdRa00wqtvJRBz';

	const onToken = token => {
	console.log(token);
	alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}`}
			amount={priceForStrip}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
		);
};

export default StripeCheckoutButton;
