const image =  document.querySelector("#image");
const heritageImg = document.querySelector("#heritage-img");
const jake = document.querySelector("#jake-img");
const thomp = document.querySelector("#thomp-img");
const maria = document.querySelector("#maria-img");
const jackson = document.querySelector("#jackson-img");
function tabletSize(isTablet){
  if(isTablet.matches){
    image.setAttribute("src", "assets/about/tablet/image-hero.jpg");
  }
}
function mobileSize(isMobile){
  if(isMobile.matches){
    image.setAttribute("src", "assets/about/mobile/image-hero.jpg");
  }
}
function desktopSize(isDesktop){
  if(isDesktop.matches){
    image.setAttribute("src", "assets/about/desktop/image-hero.jpg");
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
