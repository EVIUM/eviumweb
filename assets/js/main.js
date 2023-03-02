function toggleSidebar() {
	$(".sidebar-wrapper").toggleClass("open");
}

function toggleDarkMode() {
	$(".app-container").toggleClass("dark");

	if ($(".app-container").hasClass("dark")) {
		$("#darkMode").html("check_box");
		$("#darkMode")
			.parent()
			.addClass("active");
	} else {
		$("#darkMode").html("check_box_outline_blank");
		$("#darkMode")
			.parent()
			.removeClass("active");
	}
}

function toggleEviumMode() {
	$(".app-container").toggleClass("evium");

	if ($(".app-container").hasClass("evium")) {
		$("#eviumMode").html("check_box");
		$("#eviumMode")
			.parent()
			.addClass("active");
	} else {
		$("#eviumMode").html("check_box_outline_blank");
		$("#eviumMode")
			.parent()
			.removeClass("active");
	}
}

function toggleMusicMode() {
	$(".app-container").toggleClass("music");

	if ($(".app-container").hasClass("music")) {
		$("#musicMode").html("check_box");
		$("#musicMode")
			.parent()
			.addClass("active");
	} else {
		$("#musicMode").html("check_box_outline_blank");
		$("#musicMode")
			.parent()
			.removeClass("active");
	}
}

function toggleChat() {
	$(".app-container").toggleClass("chat");
}

$(".dropdown-toggle").on("click", function(e) {
	$parent = $(this).parent();

	var remove = false;
	if ($parent.hasClass("open")) {
		remove = true;
	}

	setTimeout(function() {
		if (remove) {
			$parent.removeClass("open");
		} else {
			$parent.addClass("open");
		}
	}, 0);
});

$(window).on("click", function() {
	$(".dropdown").removeClass("open");
});

$(".mobile-search .dropdown-toggle").on("click", function(e) {
	$(".mobile-search input").focus();
});

$(".mobile-search input").on("click", function(e) {
	e.stopPropagation();
});


////

document.addEventListener("DOMContentLoaded", function() {

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination' ,
            clickable: true
        },
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
});




const App = {
  data() {
    return {
      isFullscreen: false,
      activeIndex: 0,
      list: [
{
          
          name: "Evium",
          desc:
            "Welcome to EVIUM. Jump into a New World.",
          img:
            "evium_a.png",
          thumbImg:
            "E1.png"
        },
          {
          
          name: "Alpha",
          desc:
            "ALPHA Energy is the primary energy of EVIUM. Alpha energy is absorbed from the soil and rocky minerals native to the EVIUM moon. EVIUM is rich in gold ore and has plentiful mountain ranges, each containing an abundance of gold veins. Alpha EVIUM are predominantly physically strong and dynamic creatures who traverse and graze the lush pasturelands on EVIUM. Alpha EVIUM are highly consistent hunter gatherers and can always provide for a clan. Explore Alpha in the left HUD menu.",
          img:
            "alpha_a.png",
          thumbImg:
            "alpha_a.png"
        },
        {
          name: "Beta",
          desc:
            "BETA Energy is the secondary energy of EVIUM. Beta Energy is provided by the water that flows through EVIUM. Beta energy flows through every EVIUM creature as they are all composed of mainly water. Beta energy flows from ancient oceans that originated in deep space before EVIUM was pulled into orbit in its new solar system. Beta EVIUM are hydrodynamic and have extraordinary health levels which is beneficial when creating a powerful EVIUM clan. Explore Beta in the left HUD menu.",
          img:
            "beta_g.png",
          thumbImg:
            "beta_g.png"
        },
        {
          name: "Gamma",
          desc:
            "GAMMA Energy is the atomic, fiery energy of EVIUM. Creatures formed from gamma energy can be temperamental and have powerful combative attributes. Gamma energy was supplied by the binary stars when they emitted powerful gamma ray bursts towards EVIUM. Gamma EVIUM are vibrant and radiate a fiery glow to warn other EVIUM of impending danger. Gamma EVIUM can be tamed, but still provide the greatest protection against external threats. Explore Gamma in the left HUD menu.",
          img:
            "gamma_g.png",
          thumbImg:
            "gamma_g.png"
        },
        {
          name: "Delta",
          desc:
            "DELTA Energy is the flora and fauna energy that is essential for life to exist on EVIUM. Delta energy EVIUM are mostly pollinators who maintain the ecosystem and pollinate the flowers. Delta energy EVIUM can pack a serious venomous attack, even when they may be small in stature. Delta EVIUM are highly efficient at working together in large numbers. A clan containing many Delta EVIUM can become the most streamlined and productive clan. Explore Delta in the left HUD menu.",
          img:
            "delta_g.png",
          thumbImg:
            "delta_g.png"
        },
        {
          name: "Phi",
          desc:
            "PHI Energy is the spiritual and psychedelic energy of EVIUM. Phi energy EVIUM possess the powerful ability to heal themselves with naturally occurring psychedelic isotopes. Legend tells that the Phi energy was transferred from the powerful gas giant above into a deep, global, neural network underground. Phi energy EVIUM are meditative and introverted creatures. Their bioluminescence reaches peak levels when they are in their ideal environment. Explore Phi in the left HUD menu.",
          img:
            "phi_f.png",
          thumbImg:
            "phi_f.png"
        },
        {
          name: "Psi",
          desc:
            "PSI Energy is the second spiritual and psychedelic energy of EVIUM. Psi Energy EVIUM possess the spiritual ability to revive other EVIUM with naturally occurring psychedelic chemicals. Legend is that EVIUM obtained the psychedelic chemicals from comet trails on its journey through deep space. Psi energy are calm and empathetic creatures who enjoy socializing with creatures from all energy types. Psi EVIUM perform at their best capacity when they are in the same vicinity of other Psi and Phi EVIUM. Explore Psi in the left HUD menu.",
          img:
            "psi_g.png",
          thumbImg:
            "psi_g.png"
        },
        {
          name: "Omega",
          desc:
            "OMEGA Energy is the final energy form of EVIUM. Omega energy EVIUM posses the ability to generate naturally occurring bio armour on their bodies, which equips them with a defensive advantage in combat and exploration. Omega EVIUM are explorers who are exceptional at finding resources in the wild. Omega EVIUM are staunch, dependent creatures who provide the ultimate support and reinforcement in a clan. Explore Omega in the left HUD menu.",
          img:
            "omega_g.png",
          thumbImg:
            "omega_g.png"
        }
      ]
    };
  },
  computed: {
    activeInfo() {
      if (!this.list.length) return null;
      return this.list[this.activeIndex];
    },
    itemPosition() {
      const len = this.list.length;
      return this.list.map((_, key) => {
        const deg = (360 / len) * key - 90;
        const radius = "2rem";
        return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`;
      });
    }
  },
  methods: {
    toggleFullScreen() {
      const el = document.documentElement;
      if (!this.isFullscreen) {
        // open
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
          /* Safari */
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          /* IE11 */
          el.msRequestFullscreen();
        }
      } else {
        // close
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      }
      this.isFullscreen = !this.isFullscreen;
    }
  }
};

Vue.createApp(App).mount("#app");

///// 

function sndFX_click(){
        var audio = document.createElement("audio");
        audio.src = "http://www.soundjay.com/misc/sounds/briefcase-lock-6.mp3";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();   
    }
//http://www.soundjay.com/misc/sounds/handbag-lock-4.mp3

$('#makeNoise').bind("click",function() {
  sndFX_click();
}); 


/*
$('#sndFXtrig').bind("click",function() {
  sndFX_click();
});

$("#makeNoise").click(function(){
  $("#sndFXtrig").click();
});

$("#makeNoise").click();
*/

//////

function sndFX_click(){
        var audio = document.createElement("audio");
        audio.src = "http://www.soundjay.com/misc/sounds/briefcase-lock-6.mp3";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();   
    }
//http://www.soundjay.com/misc/sounds/handbag-lock-4.mp3

$('#makeNoise1').bind("click",function() {
  sndFX_click();
}); 


/*
$('#sndFXtrig1').bind("click",function() {
  sndFX_click();
});

$("#makeNoise1").click(function(){
  $("#sndFXtrig1").click();
});

$("#makeNoise1").click();
*/


///

function sndFX_click(){
        var audio = document.createElement("audio");
        audio.src = "http://www.soundjay.com/misc/sounds/briefcase-lock-6.mp3";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();   
    }
//http://www.soundjay.com/misc/sounds/handbag-lock-4.mp3

$('#musicMode').bind("click",function() {
  sndFX_click();
}); 


/*
$('#nyan-btn').bind("click",function() {
  sndFX_click();
});

$("#musicMode").click(function(){
  $("#nyan-btn").click();
});

$("#musicMode").click();
*/

///

var nyan = document.getElementById('nyan');
var nyanBtn = document.getElementById('nyan-btn');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function reset(btn8, song){
   if(btn8.classList.contains('playing')){
      btn8.classList.toggle('playing');
   }
   song.pause();
   song.currentTime = 0;
}

function progress(btn8, song){
   setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      var percent = current/(end/100);
      //check if song is at the end
      if(current==end){
         reset(btn8, song);
      }
      //call function again
      progress(btn8, song);     
   }, 1000);
}

nyanBtn.addEventListener('click', function(){
   nyanBtn.classList.toggle('playing');
   playPause(nyan);
   progress(nyanBtn, nyan);
});


/// slider

var Slider = function() {
  var total, $slide, $slider, sliderWidth, increment = 120;
  var on = function() {
    $slider = $('.slider');
    $slide = $('.slide');
    sliderWidth = $slider.width();
    total = $slide.length;
    position();
  }

  var position = function() {
    var sign, half = $('.active').index(), x = 0, z = 0, zindex,scaleX = 1.3,scaleY = 1.3, transformOrigin;
    $slide.each(function(index, element) {
      scaleX = scaleY = 1;
      transformOrigin = sliderWidth / 2;
      if(index < half) {
        sign = 1;
        zindex = index + 1;
        x = sliderWidth / 2 - increment * (half - index + 1);
        z =  -increment * (half - index + 1);
      } else if(index > half) {
        sign = -1
        zindex = total - index;
        x = sliderWidth / 2 + increment * (index - half + 1);
        z =  -increment * (index - half + 1);
      } else {
        sign = 0;
        zindex = total;
        x = sliderWidth / 2;
        z = 1;
        scaleX = scaleY = 1.2;
        transformOrigin = 'initial';
      }
      $(element).css(
        {
          'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
          'z-index': zindex,
          'transform-origin-x': transformOrigin
        }
      );
    });
  };

  var calculateX = function(position, sign, width) {
    switch(sign) {
      case 1:
      case 0: return position - width / 2;
      case -1: return position - width / 2;
    }
  }
  
  var imageSize = function() {
    return $slider.width() / 3;
  }
  
  var recalculateSizes = function() {
    sliderWidth = $slider.width();
    position();
  }
  
  var clickedImage = function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    position();
  }
  
  var addEvents = function() {
    $( window ).resize(recalculateSizes);
    $(document).on('click','.slide', clickedImage);
  }
  
  return {
    init: function() {
      on();
      addEvents();
    }
  };
}();

$(function(){
  var slider = Slider.init();
})