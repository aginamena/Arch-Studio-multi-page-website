const portfolioList = document.querySelectorAll(".portfolio-item");
function tabletSize(isTablet) {
  if (isTablet.matches) { // If media query matches
    for(let i = 0; i<portfolioList.length; i++){
      let img = portfolioList[i].firstElementChild;
      let src = img.getAttribute("src");
      let startString = src.substring(0, 17);
      let endString;
      if("desktop" === src.substring(17, 24)){
        endString = src.substring(24);
      }else{
        endString = src.substring(23);
      }
      let newSrc = startString +"tablet"+endString;
      img.setAttribute("src", newSrc);
    }
  }
}
function mobileSize(isMobile){
  if (isMobile.matches) { // If media query matches
    for(let i = 0; i<portfolioList.length; i++){
      let img = portfolioList[i].firstElementChild;
      let src = img.getAttribute("src");
      let startString = src.substring(0, 17);
      let endString;
      if("desktop" === src.substring(17, 24)){
        endString = src.substring(24);
      }else{
        endString = src.substring(23);
      }
      let newSrc = startString +"mobile"+endString;
      img.setAttribute("src", newSrc);
    }
  }
}
function desktopSize(isDesktop){
  if (isDesktop.matches) { // If media query matches
    for(let i = 0; i<portfolioList.length; i++){
      let img = portfolioList[i].firstElementChild;
      let src = img.getAttribute("src");
      let startString = src.substring(0, 17);
      let endString;
      if("desktop" === src.substring(17, 24)){
        endString = src.substring(24);
      }else{
        endString = src.substring(23);
      }
      let newSrc = startString +"desktop"+endString;
      img.setAttribute("src", newSrc);
    }
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
