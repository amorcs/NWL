//create map
const map = L.map("mapid").setView([-1.4522878, -48.4949849], 16);
//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});
//const popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Orfanato X <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"/></a>'
);

//create ans add mar
L.marker([-1.4522878, -48.4949849], { icon: icon })
  .addTo(map)
  .bindPopup(popup);
