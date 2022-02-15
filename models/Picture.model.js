const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
  {
    image: {
        type: String,
        required: [true, 'A picture is required to upload!'],
    },
    lattitude: Number, 
    longitude: Number,
    location: String,
    // add html protection to ensure one or the other is completed for user adding either location with "add location" button or the manual location field to type in the area.
    description: String,
  },
  {
    timestamps: true
  }
);

const Picture = model('picture', pictureSchema);

module.exports = Picture;