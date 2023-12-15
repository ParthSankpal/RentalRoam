import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentModel from '../components/PaymentModel'

const UserHomePage = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({});
  const [reqData, setReqData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPaid, setPaid] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
      requesterName: currentUser.user.name,
      requesterEmail: currentUser.user.email,
      userId: currentUser.user._id,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("/api/triprequest/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // setError(data.message);
      } else {
        // Mark the payment as paid
        setPaid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleShowTripRequest = async () => {
    try {
      const res = await fetch(`/api/triprequest/${currentUser.user._id}/requests`);
      const data = await res.json();
      setReqData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleShowTripRequest();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="p-8 sm:p-16">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
        <div className="flex flex-col gap-4 flex-1 max-w-sm">
          <h1 className="text-3xl font-semibold text-center my-7">
            Find a trip
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-8">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Departure"
                name="departure"
                id="departure"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Destination"
                name="destination"
                id="destination"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />
              <input
                type="time"
                placeholder="Pick up time"
                name="timeofpickup"
                id="timeOfPickup"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />
              <input
                type="date"
                placeholder="Pick up Date"
                name="pickupdate"
                id="pickupDate"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />
              
               
                            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                  Search
                </button>
            
            </div>
          </form>
        </div>
        <div className="flex flex-1 bg-slate-200 rounded-lg w-[100%] ">
          <div className="grid grid-cols-1 gap-4 m-4 lg:grid-cols-4 w-full   ">
            {Array.isArray(reqData) ? (
              reqData.map((reqData) => (
                <div className="bg-slate-300 rounded-lg p-4" key={reqData._id}>
                  <h1 className="align-middle text-sm sm:text-2xl">Ready for the trip</h1>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Departure: {reqData.departure}</div>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Destination: {reqData.destination}</div>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Pick up: {reqData.timeOfPickup}</div>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Date: {formatDate(reqData.pickupDate)}</div>
                  
                    <button onClick={openModal} className="w-full text-white bg-slate-700 rounded-lg p-2 uppercase">
                      Pay now
                    </button>
                
                </div>
              ))
            ) : (
              <p className=" w-full text-2xl flex mx-auto">Let's start the trip </p>
            )}
          </div>
          <PaymentModel isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </main>
  );
};

export default UserHomePage;
