import React from 'react'
import Modal from "react-modal";


const ConfirmationMOdel = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Thank You Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
      className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-center h-screen"
    >
      <div className="bg-white rounded-lg shadow dark:bg-gray-800 max-w-md w-full p-6 text-center relative">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Well done, you can start your journey now.
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Happy Journey
        </p>
        <button
          onClick={onRequestClose}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800 mt-6"
        >
          Close
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmationMOdel