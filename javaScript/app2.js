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

  const emailInput = document.querySelector('.email');
      const form = document.querySelector('form');
      const insert = document.querySelector('.insert')

      form.addEventListener('submit', (e) => {
        if(emailInput.value === ''){
          e.preventDefault();
          insert.textContent = 'Please enter your email...';
          insert.style.padding = '.15rem';
        }else{
          emailInput.value = '';
        }
      });
