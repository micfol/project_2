const cloudinary = require('cloudinary').v2;

const myconfig = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});

exports.myconfig = myconfig;