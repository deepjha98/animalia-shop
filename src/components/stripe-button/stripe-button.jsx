import React from "react";
import StripeCheckout from "react-stripe-checkout";
////////////////////////////////////////////////////////////
import { STRIPE_PUBLISHABLE_KEY } from "constants/constants";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Animalia Shop"
      billingAddress
      shippingAddress
      image="https://plantae-app.herokuapp.com/resources/PlantaeCBack.png"
      description={`Your total is Rs.${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={STRIPE_PUBLISHABLE_KEY}
    />
  );
};

////////////////////////////////////////////////////////////
export default StripeButton;
