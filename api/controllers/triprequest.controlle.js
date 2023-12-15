import TripRequest from "../models/triprequest.model.js";

import { errorHandler } from "../utils/error.js";



export const createTripRequest = async (req, res, next) => {
  try {
    const { userId, departure, destination, timeOfPickup, pickupDate, requesterName, requesterEmail } = req.body;
    console.log(timeOfPickup);
    console.log(pickupDate);
   
    let userRequests = await TripRequest.findOne({ userId });

    // If the user's folder doesn't exist, create it
    if (!userRequests) {
      userRequests = await TripRequest.create({ userId, requests: [] });
    }

    // Add the new request to the user's folder
    userRequests.requests.push({
      departure,
      destination,
      timeOfPickup,
      pickupDate,
      requesterName,
      requesterEmail,
    });

    // Save the changes
    await userRequests.save();

    // Fetch and return all requests
    const allRequests = await TripRequest.findOne({ userId });

    return res.status(200).json({
      success: true,
      message: 'Trip request created successfully',
      data: allRequests.requests,
    });
  } catch (error) {
    next(error);
  }
};

export const getTripRequest = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    // Find the user's trip requests
    const userRequests = await TripRequest.findOne({ userId });

    if (!userRequests) {
      return res.status(404).json({
        success: false,
        message: 'User not found or no trip requests available.',
        data: null,
      });
    }

    // console.log(userRequests);
    return res.status(200).json({
      success: true,
      message: 'Trip requests fetched successfully',
      data: userRequests.requests,
    });
  } catch (error) {
    next(error);
  }
};



export const getAllTripRequest = async (req, res, next) => {
  try {
    // Use the find method to retrieve all trip requests
    const tripRequests = await TripRequest.find();
    const requestsArray = tripRequests.map((doc) => doc.requests).flat();

    console.log(requestsArray);

    res.status(200).json({
      success: true,
      data: requestsArray,
    });
  } catch (error) {
    next(error);
  }
};