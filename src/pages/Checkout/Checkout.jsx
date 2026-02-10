import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/checkout.css";

const Checkout = () => {

  const { totalPrice } = useContext(CartContext);

  const [paymentStatus, setPaymentStatus] = useState(""); 

  const [paymentId, setPaymentId] = useState("");

  const handlePayment = () => {
    if (!totalPrice || totalPrice <= 0) {
      setPaymentStatus("failed");
      return;
    }

    if (!window.Razorpay) {
      setPaymentStatus("failed");
      return;
    }

    const options = {

      key: "rzp_test_SDuFyl6IM1HePf",
      amount: totalPrice * 100,
      currency: "INR",
      name: "ElectroMart",
      description: "Electronics Purchase",

      handler: function (response){
        setPaymentStatus("success");
        setPaymentId(response.razorpay_payment_id);
      },

      prefill: {
        name: "Vamsi Narayanam",
        email: "vamsi@gmail.com",
        contact: "9582908655",
      },

      theme: {
        color: "#007987",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function () {
      setPaymentStatus("failed");
    });

    razorpay.open();
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h2>Secure Checkout</h2>

        {paymentStatus === "success" && (
          <div className="payment-success">
            ✅ Payment Successful!
          </div>
        )}

        {paymentStatus === "failed" && (
          <div className="payment-failed">
            ❌ Payment Failed. Please try again.
          </div>
        )}

        <div className="section">
          <h4>Delivery Details</h4>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Delivery Address" />
        </div>

        <div className="section">
          <h4>Order Summary</h4>

          <div className="summary-row">
            <span>Items Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="summary-row total">
            <span>Total Payable</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        <button
          className="pay-btn" onClick={handlePayment} 
          disabled={paymentStatus === "success"}>
            
          {paymentStatus === "success" ? "Paid ✔" : `Pay ₹${totalPrice}`}

        </button>

        <p className="secure-text">
          🔒 100% Secure Payments powered by Razorpay
        </p>

      </div>

    </div>

  );
};

export default Checkout;
