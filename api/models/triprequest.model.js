// triprequest.model.js

import mongoose from 'mongoose';

const tripRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    requests: [
      {
        departure: {
          type: String,
        },
        destination: {
          type: String,
        },
        timeOfPickup: {
          type: String,
        },
        pickupDate: {
          type: Date,
        },
        accepted: {
          type: Boolean,
          default: false,
        },
        acceptedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Vendor',
        },
      },
    ],
  },
  { timestamps: true }
);

const TripRequest = mongoose.model('TripRequest', tripRequestSchema);

export default TripRequest;
