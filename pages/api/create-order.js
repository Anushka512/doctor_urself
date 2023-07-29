import Razorpay from 'razorpay';
const uniqId = require("uniqid");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  const orderId = uniqId(); // generate a unique order ID
  const orderAmount =Number(req.body.price) *100 ; // the total amount of the order in paise (e.g. 100 paise = INR 1)
  const orderCurrency = 'INR'; // the currency of the order (only INR is supported by Razorpay)
  const orderReceipt = `order_${orderId}`; // a unique receipt number for the order (you can use a prefix to identify it)

  const options = {
    amount: orderAmount,
    currency: orderCurrency,
    receipt: orderReceipt,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Something went wrong.' });
  }
}