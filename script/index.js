const prog_para = document.querySelector("#project-para");
const seraph_sta = document.querySelector("#seraph-sta");
const fed_tower_one = document.querySelector("#fed-tower-one");
const fed_tower_two = document.querySelector("#fed-tower-two");
const section_three_img = document.querySelector("#section-three-img");

function tabletSize(isTablet){
  if(isTablet.matches){
    prog_para.setAttribute("src", "assets/home/tablet/image-hero-paramour.jpg");
    seraph_sta.setAttribute("src", "assets/home/tablet/image-hero-seraph.jpg");
    fed_tower_one.setAttribute("src", "assets/home/tablet/image-hero-federal.jpg");
    fed_tower_two.setAttribute("src", "assets/home/tablet/image-hero-trinity.jpg");
    section_three_img.setAttribute("src", "assets/home/tablet/image-small-team.jpg");
  }
}
function mobileSize(isMobile){
  if(isMobile.matches){
    prog_para.setAttribute("src", "assets/home/mobile/image-hero-paramour.jpg");
    seraph_sta.setAttribute("src", "assets/home/mobile/image-hero-seraph.jpg");
    fed_tower_one.setAttribute("src", "assets/home/mobile/image-hero-federal.jpg");
    fed_tower_two.setAttribute("src", "assets/home/mobile/image-hero-trinity.jpg");
    section_three_img.setAttribute("src", "assets/home/mobile/image-small-team.jpg");
  }
}
function desktopSize(isDesktop){
  if(isDesktop.matches){
    prog_para.setAttribute("src", "assets/home/desktop/image-hero-paramour.jpg");
    seraph_sta.setAttribute("src", "assets/home/desktop/image-hero-seraph.jpg");
    fed_tower_one.setAttribute("src", "assets/home/desktop/image-hero-federal.jpg");
    fed_tower_two.setAttribute("src", "assets/home/desktop/image-hero-trinity.jpg");
    section_three_img.setAttribute("src", "assets/home/desktop/image-small-team.jpg");
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
