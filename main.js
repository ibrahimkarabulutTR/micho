

let btnMenu = $("#btnmenu");
let sidebarContainer = document.querySelector(".sidebarContainer");
let homeSection = document.querySelector(".home-section");
let navNav = document.querySelector(".home-section nav");
let navNav2 = document.querySelector(".navbar");
let sidebarv3 = document.querySelector(".sidebarv3");
let btnSearch = document.querySelector(".bx-search");





$(document).ready(function() {
  // Menü durumunu al
  var menuState = localStorage.getItem('menuState');
  // Menü durumu yoksa varsayılan olarak kapalı olarak ayarla
  if (menuState == null) {
    menuState = 'closed';
  };
  if (menuState == "open") {
    sidebarv3.classList.add("active");
    sidebarContainer.classList.add("active");
    homeSection.classList.add("active");
    $("#logo-navbar").after('<h5 class="m-0 mt-1 ml-1" id="logo-text-navbar" style="color:#fff">MichoAPP</h5>');
  };
  if (menuState == "closed") {
    sidebarv3.classList.remove("active");
    sidebarContainer.classList.remove("active");
    homeSection.classList.remove("active");
    $("#logo-text-navbar").remove();
  };

  //sub menu durumu
  

  

  var subMenuState = [];
  $(".li-submenu a.upMenu").each(function(index){
    subMenuState[index] = localStorage.getItem('subMenuState' + index);
    if (subMenuState[index] == null) {
      subMenuState[index] = 'closed';
    };

    if (subMenuState[index] == "open") {
      $("#downMenu", this).remove();
      $(this).append('<i class="fa-solid fa-chevron-down" id="downMenu"></i>');
      $(this).next().addClass("active");
    };
    if (subMenuState[index] == "closed") {
      $("#downMenu", this).remove();
      $(this).append('<i class="fa-solid fa-chevron-right" id="downMenu"></i>');
      $(this).next().removeClass("active");
    };


    $(this).on("click", function(){
      subMenuState[index] = localStorage.getItem('subMenuState' + index);
      if (subMenuState[index] == null) {
        subMenuState[index] = 'closed';
      };
      console.log("bastı");
      $(this).next().toggleClass("active");
      if($(this).next().hasClass("active")){
        $("#downMenu", this).remove();
        $(this).append('<i class="fa-solid fa-chevron-down" id="downMenu"></i>');
        localStorage.setItem('subMenuState' + index, 'open');
      }else{
        $("#downMenu", this).remove();
        $(this).append('<i class="fa-solid fa-chevron-right" id="downMenu"></i>');
        localStorage.setItem('subMenuState' + index, 'closed');
      };
    });
  });
});

btnMenu.click(function(){
    // Menü durumunu al
    var menuState = localStorage.getItem('menuState');
    // Menü durumu yoksa varsayılan olarak kapalı olarak ayarla
    if (menuState == null) {
      menuState = 'closed';
    };
    //sidebarv2.classList.toggle("active");
    sidebarv3.classList.toggle("active");
    sidebarContainer.classList.toggle("active");
    homeSection.classList.toggle("active");
    if(sidebarv3.classList.contains("active")){
      $("#logo-navbar").after('<h5 class="m-0 mt-1 ml-1" id="logo-text-navbar" style="color:#fff">MichoAPP</h5>');
      localStorage.setItem('menuState', 'open');
    }
    else{
      $("#logo-text-navbar").remove();
      localStorage.setItem('menuState', 'closed');
    }
    //navNav.classList.toggle("active");
    
});

/////////////////////////////DATA TABLE//////////////////////////////////////

