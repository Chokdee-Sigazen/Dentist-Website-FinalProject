const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    appointmentDate: {
      type: Date,
      required: [true, 'Please provide a appointment date'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, 'Please provide a user'],
    },
    dentist: {
      type: mongoose.Schema.ObjectId,
      ref: "Dentist",
      required: [true, 'Please provide a dentist'],
    },
    finish:{
      type:Boolean,
      default:false
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

module.exports = mongoose.model('Appointment', appointmentSchema);