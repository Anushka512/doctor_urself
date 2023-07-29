import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PaymentSuccess() {
    const router = useRouter()
    const {paymentId,orderId} = router.query
    console.log("🚀 ~ file: success.js:7 ~ PaymentSuccess ~ ii:", paymentId,orderId)
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <a href="#" className="text-white">
              Doctor Yourself
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Successful!</h1>
            <p className="text-lg text-gray-600 mb-12">
              Thank you for your purchase! Your order <span className='text-blue-500'>#{orderId}</span>  has been successfully processed. Your payment ID is <span className='text-blue-500'>{paymentId}</span> .
            </p>
            <Link href="/" >
              <span className="bg-indigo-600 text-white py-3 px-4 rounded hover:bg-indigo-500">Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">&copy; 2020 Doctor Yourself. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}