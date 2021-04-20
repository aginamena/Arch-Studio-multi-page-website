
var mymap = L.map('mapid').setView([32.779, -96.80], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWVuYWFnaW5hIiwiYSI6ImNrbmpvcGJsbTAwbm8yc24wOWZraGdjOGEifQ.75zDg1sZQPOLDQAd6Mjmww'
}).addTo(mymap);

var name = document.querySelector("#input");
const location_one = document.querySelector("#location-one");
const location_two = document.querySelector("#location-two");
location_one.addEventListener("click", ()=>{
  L.marker([32.779, -96.80]).addTo(mymap);
});
location_two.addEventListener("click", ()=>{
  L.marker([33.55, -95.60]).addTo(mymap);
});

const image =  document.querySelector("#image");
function tabletSize(isTablet){
  if(isTablet.matches){
    image.setAttribute("src", "assets/contact/tablet/image-hero.jpg");
  }
}
function mobileSize(isMobile){
  if(isMobile.matches){
    image.setAttribute("src", "assets/contact/mobile/image-hero.jpg");
  }
}
function desktopSize(isDesktop){
  if(isDesktop.matches){
    image.setAttribute("src", "assets/contact/desktop/image-hero.jpg");
  }
}
var isTablet = window.matchMedia("(min-width: 768px) and (max-width: 992px)");
tabletSize(isTablet); // Call listener function at run time
isTablet.addListener(tabletSize); // Attach listener function on state changes

var isMobile = window.matchMedia("(max-width: 768px)");
mobileSize(isMobile);
isMobile.addListener(mobileSize);

var isDesktop = window.matchMedia("(min-width: 1200px)");
desktopSize(isDesktop);
isDesktop.addListener(desktopSize);
