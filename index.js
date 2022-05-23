const response = fetch("https://ipapi.co/json/")
  .then((data) => data.json())
  .then((location) => {
    console.log(location);

    let map = L.map("map").setView([location.latitude, location.longitude], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );
    L.marker([location.latitude, location.longitude]).addTo(map);

    document.getElementById(
      "city"
    ).textContent = `You are in ${location.city}, ${location.country_name}`;
  });
