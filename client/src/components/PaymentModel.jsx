import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import { useHistory } from "react-router-dom"; 
import { AiOutlineClose } from "react-icons/ai";

const PaymentModel = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentOption, setPaymentOption] = useState("Credit Card");
  const [showThankYouModal, setShowThankYouModal] = useState(false);


//   const history = useHistory();


  const handleCheckout = () => {
    setShowThankYouModal(true);
    window.location.href = "/";
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Checkout Modal"
      style={{
        content: {
          background: "none",
          border: "none",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.7)", // Adjust the opacity and color as needed
        },
      }}
    >
      <div className="flex items-center justify-center z-50  p-4 overflow-x-hidden overflow-y-auto max-h-full">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-slate-50"
              onClick={onRequestClose}
            >
              <AiOutlineClose className=" text-xl font-medium text-gray-900 dark:text-white" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Checkout
              </h3>
              <form onSubmit={handleCheckout} className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="paymentOption"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Payment Option
                  </label>
                  <select
                    name="paymentOption"
                    id="paymentOption"
                    value={paymentOption}
                    onChange={(e) => setPaymentOption(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    {/* Add more payment options if needed */}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Confirm and Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </Modal>
  );
};


export default PaymentModel;










