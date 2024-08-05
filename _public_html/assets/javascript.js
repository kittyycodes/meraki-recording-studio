


// Nav bar color change //

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    if(window.pageYOffset >0){
      navbar.classList.add('sticky');
    }else{
      navbar.classList.remove('sticky'); 
    }
  });

  // Nav bar color change End //


  document.getElementById('overlay').scrollTop =0;
 




    /* Smooth Scrolling
    * ------------------------------------------------------ */
 $(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smoothScroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/*
 JS to toggle scroll axis styles
*/
const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});



// Team Section Bio ON/OFF

function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("team1btn").style.display = "none";

}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("team1btn").style.display = "block";
}

function on2() {
  document.getElementById("overlay2").style.display = "block";
  document.getElementById("team2btn").style.display = "none";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("team2btn").style.display = "block";
}



// mouse click to touch

$(selector).click(e => {
  if (e.pointerType === "mouse") {} // mouse event
  else {} // touch event
});


