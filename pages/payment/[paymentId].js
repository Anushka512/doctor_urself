import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getCourseById } from "@/lib/fetchHelper";
import crypto from 'crypto';


const PaymentMethods = [
  { id: 1, name: "PayPal", imgUrl: "/assets/paypal.png" },
  { id: 2, name: "Stripe", imgUrl: "/assets/stripe.png" },
  { id: 3, name: "Razorpay", imgUrl: "/assets/razorpay.png" },
];

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const router = useRouter()
  const { paymentId } = router.query;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ;


  const handleMethodChange = (methodId) => {
    setSelectedMethod(methodId);
  };

  const {
    isLoading,
    isError,
    data,
    error,
  } = useQuery(['payment', paymentId],()=>getCourseById(paymentId))

const price = data?.data?.price


  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
  
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
  
      document.body.appendChild(script);
    });
  };
  
  const openRazorpayPaymentWindow = async () => {
  
    const res = await initializeRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
  
    // Make API call to the serverless API
    const orderData = await 
    fetch(`${BASE_URL}api/create-order`,{ 
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price }),
   }).then((t) =>
      t.json()
    );
    console.log(orderData);
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      name: "Doctor Yourself",
      currency: orderData.currency,
      amount: orderData.amount,
      order_id: orderData.id,
      description: "Thankyou for your test donation",
      image: "/assets/favicon.ico",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        console.log("🚀 ~ file: [paymentId].js:88 ~ openRazorpayPaymentWindow ~ options.response:", response)
        // axios.post('')
        try {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
let body = razorpay_order_id + "|" + razorpay_payment_id
          // Verify Signature
          const shasum = crypto.createHmac('sha256', process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET)
          .update(body.toString())
          .digest('hex');

          if (shasum !== razorpay_signature) {
            return res.status(400).send({
              message: 'Invalid Signature',
            });
          }

          const handlePaymentResponse = (res) => {
            const status = res.message === 'Payment Success' ? 'success' : 'failure';
            console.log("🚀 ~ file: [paymentId].js:97 ~ handlePaymentResponse ~ status:", status)
            router.push(`/payment/${status}?paymentId=${res.paymentId}&orderId=${res.orderId}`);
          };

          handlePaymentResponse({
            message: 'Payment Success',
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            message: 'Internal Server Error',
          });
        }
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };
    
   
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedMethod === 3) {
      openRazorpayPaymentWindow()
    } else {
      // handle other payment gateway options
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-center">
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center">
            Simple Checkout or Enrollment Process
          </h1>
          <form className="mt-8" onSubmit={handleSubmit}>
            <h2 className="font-bold">Choose payment method:</h2>
            <div className="flex flex-wrap justify-evenly">
              {PaymentMethods.map((method) => (
                <div
                  className="flex items-center justify-center my-4"
                  key={method.id}
                >
                  <input
                    type="radio"
                    id={method.id}
                    name="paymentMethod"
                    value={method.id}
                    onChange={() => handleMethodChange(method.id)}
                    className="mr-2"
                  />
                  <label htmlFor={method.id} className="ml-2">
                    <Image
                      src={method.imgUrl}
                      className="h-12 w-24 object-contain"
                      alt={method.name}
                      quality={100}
                      width={120}
                      height={60}
                    />
                    {method.name}
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded"
              disabled={selectedMethod === null}
            >
              Proceed to Checkout/Enroll
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;