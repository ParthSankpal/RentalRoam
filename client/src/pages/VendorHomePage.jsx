import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfirmationMOdel from "../components/ConfirmationMOdel";

const VendorHomePage = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [tripRequests, setTripRequests] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const fetchTripRequests = async () => {
    try {
      const res = await fetch("/api/triprequest/all");  // Update the API endpoint
      const data = await res.json();
      console.log(data);
      setTripRequests(data.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTripRequests();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="p-8 sm:p-16">
      <h1 className=" w-full text-lg sm:text-4xl py-4 flex">Lets start the new journy</h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
        <div className="flex flex-1 bg-slate-200 rounded-lg w-[100%]">
          <div className="grid grid-cols-1 gap-4 m-4 lg:grid-cols-4 w-full  ">
            {Array.isArray(tripRequests) && tripRequests.length > 0 ? (
              tripRequests.map((request) => (
                <div className="bg-slate-300 rounded-lg p-4" key={request._id}>
                  <h1 className=" align-middle text-sm sm:text-2xl">Trip Request</h1>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Departure: {request.departure}</div>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Destination: {request.destination}</div>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Pick up: {request.timeOfPickup}</div>
                  <div className="text-xs pb-2 sm:text-lg text-opacity-10 py-2">Date: {formatDate(request.pickupDate)}</div>

                  <button onClick={openModal}  className="w-full bg-slate-700 rounded-lg p-2 uppercase">
                      Confirm this
                    </button>
                  {/* Additional details can be displayed here */}
                </div>
              ))
            ) : (
              <p className=" w-full text-lg sm:text-2xl flex ">No trip requests available</p>
            )}
          </div>
        <ConfirmationMOdel isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </main>
  );
};

export default VendorHomePage;
