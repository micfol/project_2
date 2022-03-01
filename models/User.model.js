const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email address is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is Required.'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    bio: String,
    pictureEntries: [{ type: Schema.Types.ObjectId, ref: 'picture' }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;