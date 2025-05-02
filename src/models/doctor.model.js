import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  fees: {
    online: { type: Number, required: true },
    offline: { type: Number, required: false, default: 0 },
  },
  qualifications: {
    type: String,
    required: true,
  },
  languages: [
    {
      type: String,
      required: true,
    },
  ],
  availability: {
    type: String,
    enum: ["online", "offline", "both", "none"],
    required: true,
  },
  availabilityLocation: {
    online: { type: String },
    offline: { type: String },
  },
  availabilityTime: {
    online: { type: Date },
    offline: { type: Date },
  },
  cashbackAmount: {
    type: Number,
    default: null,
  },
  image: {
    //* For cloud url
    type: String,
  },
});

doctorSchema.plugin(mongooseAggregatePaginate);

const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

export default Doctor;
