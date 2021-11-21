

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    const mongoose = require("mongoose");
    const Schema = mongoose..Schema;
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: true
          },
          name: {
            type: String,
            trim: true,
            required: true
          },
          duration: {
            type: Number,
            required: true
          },
          weight: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
      }
    ]
  });
 
  

