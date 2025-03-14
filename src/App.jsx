import { CircleAlert } from "lucide-react";
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [couponDetails, setCouponDetails] = useState(null);
  const [message, setMessage] = useState('');

    const handleClaimCoupon = async () => {
      try {
        const response = await axios.get('https://your-backend-api.com/coupon');
        setCouponDetails(response.data);
        setMessage('Coupon claimed successfully!');
      } catch (error) {
        setMessage(<span className="text-red-500">Failed to claim coupon. Please try again.</span>);
        console.log(error);
      }
    };

    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <div className="my-12 text-4xl font-bold">
            Exclusive Coupons for You!
          </div>
          <div className="flex items-center justify-center">
            <CircleAlert className="mr-2"/> <div className="flex items-center justify-center">Limited to one coupon per user</div>
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-purple-400 px-5 py-3 rounded-lg my-12 text-white font-bold"
            onClick={handleClaimCoupon}
          >
            Claim your free coupon
          </button>
          {message && <div className="mt-4 text-green-500">{message}</div>}
          {couponDetails && (
            <div className="mt-4 p-4 border rounded-lg bg-gray-100">
              <h2 className="text-2xl font-bold">Coupon Details</h2>
              <p>Code: {couponDetails.code}</p>
              <p>Discount: {couponDetails.discount}</p>
              <p>Expiry Date: {couponDetails.expiryDate}</p>
            </div>
          )}
        </div>
      </>
    );
}

export default App;
