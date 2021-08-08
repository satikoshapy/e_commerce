import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep, timeout, order}) => {
    const handleSubmit = async (event, elements, stripe) => {
         event.preventDefault();

         if(!stripe || !elements) return;

         const cardElement = elements.getElement(CardElement);

         const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement})

         if(error) {
             console.log(error);

         }
           else {
               const orderData = {
                   line_items: checkoutToken.live.line_items,
                   customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                   shipping: { name: "Primary", 
                   street: shippingData.address1, 
                   town_city: shippingData.city, 
                   country_state: shippingData.shippingSubdivision,
                   postal_zip_code: shippingData.zip,
                   country: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: "stripe",
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
               }

             onCaptureCheckout(checkoutToken.id, orderData);

             timeout()
             nextStep();
           }
    }
    return (
        <>
            <Review checkoutToken={checkoutToken} order={order}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0"}}>Payment methods</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                {({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <CardElement />
                        <br /> <br />
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <Button variant="outlined" onClick={backStep}>Back</Button>
                            <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                Pay {checkoutToken.merchant.country === "US" ?  `$ ${parseInt(checkoutToken.live.subtotal.formatted) + parseInt(checkoutToken.shipping_methods[0].price.formatted)}`
                            
                        
                            : `$ ${parseInt(checkoutToken.live.subtotal.formatted) + parseInt(checkoutToken.shipping_methods[1].price.formatted)}` }
                            </Button>
                        </div>
                    </form>
                )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm;
