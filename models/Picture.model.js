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
    description: String,
    author: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Picture = model('picture', pictureSchema);

module.exports = Picture;