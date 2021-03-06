"use strict";

const main = (token) => {
  mapboxgl.accessToken = token;

  const map = new mapboxgl.Map({
    container: "map",
    center: [10.136246,47.084164], //-9.136460336570337,38.715813526390804 Lisbon Center
    zoom: 3,
    style: "mapbox://styles/mapbox/streets-v11", 
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var pos = [position.coords.longitude, position.coords.latitude];
        map.setCenter(pos);
      },
      () => alert("Issue retrieving your location")
    );
  } else {
    alert(" Your browser doesn't support Geolocation");
  }

  axios
    .get("https://micfolpictureapp.herokuapp.com/api/pictures")
    .then((result) => {
      result.data.forEach((picture) => {
        new mapboxgl.Marker()
          .setLngLat([picture.lattitude, picture.longitude].reverse())
          .addTo(map);
      });
    })
    .catch((err) => console.error(err));
};