const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');
const mainmenu = document.querySelector('.mainmenu');


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.right = '0';
}

function close(){
    mainmenu.style.right = '-100%';
}



window.addEventListener('scroll', function(){
    const header = document.querySelector('.navigation');
    header.classList.toggle("sticky", window.scrollY > 120);
});


//Image Slider

var images = [
    "../images/welcomew3.jpg",
    "../images/welcomecol.jpg",
    "../images/welcome2.jpg"
    ];
    
    setInterval (auto,1000);
      var num = 0;
    
    function auto() {
      var slider = document.getElementById("welcomee");
      num++;
      if(num >= images.length) {
        num = 0;
      }
      slider.src = images[num];
      }




      $(function(){
        $(".modal-click").click(function(){
          $(".modal-bg").addClass("modal-active");
        });
       
        $(".modal-close").click(function(){
          $(".modal-bg").removeClass("modal-active");
        });
      });

      

      var typed = new Typed(".typing", {
        strings: ["Health is Wealth", "Stay healthy always", "Treasure your health", "Stay informed" ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      showCursor: false
      });

      const emailInput = document.querySelector('.email');
      const form = document.querySelector('form');
      const insert = document.querySelector('.insert')

      form.addEventListener('submit', (e) => {
        if(emailInput.value === ''){
          e.preventDefault();
          insert.textContent = 'Please enter your email...';
        }else{
          emailInput.value = '';
        }
      });