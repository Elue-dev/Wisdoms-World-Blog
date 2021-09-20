const openmenu = document.querySelector('.open');
const closemenu = document.querySelector('.close');
const mainmenu = document.querySelector('.main');


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.right = '0';
}

function close(){
    mainmenu.style.right = '-100%';
}


$(function(){
    $(".modal-click").click(function(){
      $(".modal-bg").addClass("modal-active");
    });
   
    $(".modal-close").click(function(){
      $(".modal-bg").removeClass("modal-active");
    });
  });
