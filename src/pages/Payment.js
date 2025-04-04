// src/pages/Payment.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

// Load your publishable key from Stripe
const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return; // Stripe.js has not yet loaded.
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentIntent } = await stripe.confirmCardPayment('YOUR_CLIENT_SECRET', {
            payment_method: {
                card: cardElement,
            },
        });

        if (error) {
            setError(error.message);
            setSuccess(false);
        } else {
            setError(null);
            setSuccess(true);
            console.log('Payment successful!', paymentIntent);
            // Handle successful payment here (e.g., redirect to a confirmation page)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Payment successful!</div>}
        </form>
    );
};

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <div className="payment-container">
                <h2>Payment</h2>
                <CheckoutForm />
            </div>
        </Elements>
    );
};

export default Payment;