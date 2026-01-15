(function ($) {
  $(document).ready(function () {
    $("body").addClass("js");
    var $menu = $("#menu"),
      $menulink = $(".menu-link");

    $menulink.click(function () {
      $menulink.toggleClass("active");
      $menu.toggleClass("active");
      return false;
    });
  });

  videoPopup();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      750: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "fade",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $("div.features-post").hover(
    function () {
      $(this).find("div.content-hide").slideToggle("medium");
    },
    function () {
      $(this).find("div.content-hide").slideToggle("medium");
    }
  );

  $("#tabs").tabs();

  (function init() {
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    function initializeClock(endtime) {
      var timeinterval = setInterval(function () {
        var t = getTimeRemaining(endtime);
        document.querySelector(".days > .value").innerText = t.days;
        document.querySelector(".hours > .value").innerText = t.hours;
        document.querySelector(".minutes > .value").innerText = t.minutes;
        document.querySelector(".seconds > .value").innerText = t.seconds;
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }, 1000);
    }
    initializeClock(new Date().getFullYear() + 1 + "/1/1");
  })();
})(jQuery);

// ============================================
// JAVASCRIPT PARA MENÚ RESPONSIVE
// Agregar al final de tu archivo custom.js o crear uno nuevo
// ============================================

$(document).ready(function () {
  // Toggle menú mobile
  $(".menu-link").on("click", function (e) {
    e.preventDefault();
    $("#menu").toggleClass("active");
    $(this).toggleClass("active");

    // Prevenir scroll del body cuando el menú está abierto
    if ($("#menu").hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  });

  // Cerrar menú al hacer clic en un enlace
  $(".main-menu a").on("click", function () {
    if ($(window).width() <= 768) {
      $("#menu").removeClass("active");
      $(".menu-link").removeClass("active");
      $("body").css("overflow", "auto");
    }
  });

  // Cerrar menú al hacer clic fuera de él
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".main-nav, .menu-link").length) {
      if ($("#menu").hasClass("active")) {
        $("#menu").removeClass("active");
        $(".menu-link").removeClass("active");
        $("body").css("overflow", "auto");
      }
    }
  });

  // Cerrar menú al presionar ESC
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $("#menu").hasClass("active")) {
      $("#menu").removeClass("active");
      $(".menu-link").removeClass("active");
      $("body").css("overflow", "auto");
    }
  });

  // Ajustar al cambiar tamaño de ventana
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $("#menu").removeClass("active");
      $(".menu-link").removeClass("active");
      $("body").css("overflow", "auto");
    }
  });

  // Header scroll effect (opcional - hace el header más pequeño al hacer scroll)
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".main-header").addClass("scrolled");
    } else {
      $(".main-header").removeClass("scrolled");
    }
  });
});

// ============================================
// CSS ADICIONAL PARA EFECTO SCROLL (OPCIONAL)
// ============================================
/*
.main-header.scrolled {
  padding: 10px 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.main-header.scrolled .logo a {
  font-size: 20px;
}

.main-header.scrolled .escudo {
  height: 40px;
}

@media (max-width: 768px) {
  .main-header.scrolled {
    padding: 10px 20px;
  }
  
  .main-header.scrolled .escudo {
    height: 30px;
  }
}
*/
