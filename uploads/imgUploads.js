// const express = require('express');
// const router = express.Router();
// const signature = require('../modules/signuploadwidget');
// require('/uploads/uploadConfig');

// const cloudinary = require('cloudinary').v2
// const cloudName = cloudinary.config().cloud_name;
// const apiKey = cloudinary.config().api_key;

// // using this API should require authentication
// router.get('/', function (req, res, next) {
//   const sig = signature.signuploadwidget()
//   res.json({
//     signature: sig.signature,
//     timestamp: sig.timestamp,
//     cloudname: cloudName,
//     apikey: apiKey
//   })
// });

// module.exports = router

// const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const files = document.querySelector("[type=file]").files;
//   const formData = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     formData.append("file", file);
//     formData.append("upload_preset", "docs_upload_example_us_preset");

//     fetch(url, {
//       method: "POST",
//       body: formData
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         document.getElementById("data").innerHTML += data;
//       });
//   }
// });