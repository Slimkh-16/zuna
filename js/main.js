// window.onload = function() {
//   // PRELOADER
//   var body = document.querySelector('body');
//   body.classList.remove('noscroll')
//   body.classList.add('loading')
//   if (isMobile == true) {body.parentNode.classList.add('mobile'); }
//   setTimeout(function(){body.classList.add('loaded')},1800)
//   setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},2500)
//   // //PRELOADER
//   if(document.querySelector('.product-window') != undefined && window.innerWidth > 1023){
//     prodWidth();
//     prodHeight();
//   }
// }
// window.onresize = function() {
//   if(document.querySelector('.news-window') != undefined){
//   }
//   if(document.querySelector('.product-window') != undefined && window.innerWidth > 1023){
//     prodWidth();
//     prodHeight();
//   }
// }
// window.onscroll = function() {
//   var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//   if(document.querySelector('.section-nav') != undefined){
//   }
// }
// var isMobile = false;
// function getBrowser() {
//     var ua = navigator.userAgent;
//     var bName = function () {
//         if (ua.search(/Edge/) > -1) return "edge";
//         if (ua.search(/MSIE/) > -1) return "ie";
//         if (ua.search(/Trident/) > -1) return "ie11";
//         if (ua.search(/Firefox/) > -1) return "firefox";
//         if (ua.search(/Opera/) > -1) return "opera";
//         if (ua.search(/OPR/) > -1) return "operaWebkit";
//         if (ua.search(/YaBrowser/) > -1) return "yabrowser";
//         if (ua.search(/Chrome/) > -1) return "chrome";
//         if (ua.search(/Safari/) > -1) return "safari";
//         if (ua.search(/Maxthon/) > -1) return "maxthon";
//     }();
//     var version;
//     switch (bName) {
//         case "edge":
//             version = (ua.split("Edge")[1]).split("/")[1];
//             break;
//         case "ie":
//             version = (ua.split("MSIE ")[1]).split(";")[0];
//             break;
//         case "ie11":
//             bName = "ie";
//             version = (ua.split("; rv:")[1]).split(")")[0];
//             break;
//         case "firefox":
//             version = ua.split("Firefox/")[1];
//             break;
//         case "opera":
//             version = ua.split("Version/")[1];
//             break;
//         case "operaWebkit":
//             bName = "opera";
//             version = ua.split("OPR/")[1];
//             break;
//         case "yabrowser":
//             version = (ua.split("YaBrowser/")[1]).split(" ")[0];
//             break;
//         case "chrome":
//             version = (ua.split("Chrome/")[1]).split(" ")[0];
//             break;
//         case "safari":
//             version = (ua.split("Version/")[1]).split(" ")[0];
//             break;
//         case "maxthon":
//             version = ua.split("Maxthon/")[1];
//             break;
//     }
//     var platform = 'desktop';
//     if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
//     var browsrObj;
//     try {
//         browsrObj = {
//             platform: platform,
//             browser: bName,
//             versionFull: version,
//             versionShort: version.split(".")[0]
//         };
//     } catch (err) {
//         browsrObj = {
//             platform: platform,
//             browser: 'unknown',
//             versionFull: 'unknown',
//             versionShort: 'unknown'
//         };
//     }
//     return browsrObj;
// };
// function prodWidth() {
//   document.querySelector('.product-other').style.width = window.innerWidth - document.querySelector('.product-window').clientWidth + 'px';
// }
// function prodHeight() {
//   document.querySelector('.product-other-body').style.maxHeight = window.innerHeight - document.querySelector('.product-other__head').clientHeight - 150 + 'px';
// }

// var browserYou = getBrowser();
// if (browserYou.platform == 'mobile') { isMobile = true; $('.wrapper').addClass('mobile'); }
// if ((browserYou.browser == 'ie' &&  browserYou.versionShort < +'9') || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < +'18') || (browserYou.browser == 'firefox' &&  browserYou.versionShort < +'30')) {
//     alert('Обновите браузер','')
// };
// $(window).scroll(function() {
//   var e = $(document).scrollTop();
//   if(e > $(window).height()) {
//     $('.to-top').addClass('visible');
//   }else {
//     $('.to-top').removeClass('visible');
//   }
// })
// $(document).ready(function() {
//   $('.js_top, .logo').on('click',function(){
//     $('html, body').animate({scrollTop: 0},777);
//   })
//   if (isMobile == false && $('.animate-img').length) {
//       // top animation
//       $('html').mousemove(function(e){
//           var wx = $(window).width();
//           var wy = 250;
//           var x = e.pageX - this.offsetLeft;
//           var y = e.pageY - this.offsetTop;
//           var newx = x - wx/2;
//           var newy = y - wy/2;
//           $('.animate-img').each(function(){
//               var speed = $(this).attr('data-speed');
//               if($(this).attr('data-revert')) speed *= -5;
//               TweenMax.to($(this), 1, {x: (20 - newx*speed), y: (20+ newy*speed)});
//           });
//       });
//       // top animation
//   }
//   // animate icon
//   if($('.our-plus-item').length){
//     var icon1 = document.querySelector('.our-plus-item--1'),
//         icon1_2Elem = document.querySelector('.icon1_2Elem'),
//         icon1_1Elem = document.querySelector('.icon1_1Elem');
//     var tl = new TimelineMax({paused: true});
//       tl.to(icon1_1Elem, 1, {rotation:360,transformOrigin:'55% 50%'});
//       icon1.addEventListener("mouseenter", function(){
//         tl.play();
//       });
//       icon1.addEventListener("mouseleave", function(){
//         tl.reverse();
//       });
//     var icon2 = document.querySelector('.our-plus-item--2'),
//         tb = new TimelineMax({paused: true }),
//         icon2_1Elem = document.querySelectorAll('.icon2_1Elem');
//         for (var i = 0; i < icon2_1Elem.length; i++ ) {
//           var thisPause = Math.random()*1.5;
//           tb.to(icon2_1Elem[i], 1, {y: -25, alpha: 0 ,repeat: -1},thisPause);
//         }
//       icon2.addEventListener("mouseenter", function(){
//         tb.play();
//       });
//       icon2.addEventListener("mouseleave", function(){
//         tb.stop();
//       });
//     var icon3 = document.querySelector('.our-plus-item--3'),
//         tc = new TimelineMax({paused: true ,repeat: -1}),
//         icon3_1Elem = document.querySelectorAll('.icon3_1Elem');
//         tc.to(icon3_1Elem, 0.1, {rotation: 5, transformOrigin:'0% 50%'})
//           .to(icon3_1Elem, 0.1, {rotation: -5, transformOrigin:'0% 50%'});
//       icon3.addEventListener("mouseenter", function(){
//         tc.play();
//       });
//       icon3.addEventListener("mouseleave", function(){
//         tc.stop();
//       });
//     var icon4 = document.querySelector('.our-plus-item--4'),
//         icon4_1Elem = document.querySelector('.icon4_1Elem');
//     var te = new TimelineMax({paused: true, repeat: -1});
//       te.to(icon4_1Elem, 0.5, {scale:1.2, rotation:360,transformOrigin:'50% 50%'})
//         .to(icon4_1Elem, 0.5, {scale:0.8})
//         .to(icon4_1Elem, 0.5, {rotation:360, scale:1,transformOrigin:'50% 50%'});
//       icon4.addEventListener("mouseenter", function(){
//         te.play();
//       });
//       icon4.addEventListener("mouseleave", function(){
//         te.stop();
//       });
//     }
//   // animate icon
//   $('.section').scrollSpy();
//   $('#fullpage').fullpage({
//     responsiveHeight: 750,
//     responsiveWidth: 1199,
//     css3:true,
//     easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
//     slidesNavigation: true,
//     anchors: ['sectionBeg', 'sect2', 'sect3', 'sect4','sect5', 'sect6', 'sect7', 'sect8'],
//    // menu: '#menu',
//     hybrid:true,
//     fitToSection: false
//   });
//   $(document).on('click','.mobile-mav a',function(){
//     var sections = {'#sect1':"#section1", '#sect2':"#section2", '#sect3':"#section3", '#sect4':"#section4", '#sect5':"#section5", '#sect6':"#section6", '#sect7':"#section7", '#sect8':"#section8", '#sect9':"#section9", '#sect10':"#section10"};
//     var sect = sections[$(this).attr('href')];
//     sect = sect ? sect : $(this).attr('href');
//     var destination = parseInt($(sect).offset().top) - 120;
//     $('html, body').stop().animate({scrollTop: destination+'px'}, 600);
//     setTimeout(function(){
//       $('.hamburger--collapse').removeClass('is-active');
//       $('.mobile-mav').removeClass('visible');
//     },600);
//     return false;
//   });
//   $(document).on('click','.product-item-icon',function(){
//     var dataT = $(this).parents('.product-item').attr('data-tk');
//     if ($(this).parents('.product-item').hasClass('active')) {
//       $(this).parents('.product-item').removeClass('active');
//       $('.product-box').removeClass('active');
//       setTimeout(function(){
//         $('.product-box').slideUp(300);
//       },500);
//     }else {
//       $('.product-item').removeClass('active');
//       $(this).parents('.product-item').addClass('active');
//       $('.tab-lev-1').find('.product-box').slideUp(300);
      
//       setTimeout(function(){
//         $('.tab-lev-1.active').find('.product-box[data-tk="' + dataT + '"]').slideDown(300);
//         // $('.tab-lev-1.active').find('.product-box[data-tk="' + dataT + '"]').addClass('active');
//       },300);
//       setTimeout(function(){
//         $('body, html').animate({scrollTop: $('.tab-lev-1.active').find('.product-box[data-tk="' + dataT + '"]').offset().top - $(window).height()/2},500);
//       },800)
//     }
//   });
//   $('ul.tabs').tabs({
//     onShow : function(){
//       var attrTab = $(this).attr('href');
//       $('.tab-lev-1').removeClass('active');
//       $(attrTab).addClass('active');
//     }
//   });
//   // open product
//   $(document).on('click','.product-box__item',function(){
//     // var prodId = $(this).attr('data-view-product');
//     var prodId = $(this).attr('data-id');
//     $.ajax({
//       data: "getinfo[id]="+prodId,
//       dataType: "json",
//       type: "POST",
//       success: function(data){
//         $('.product-window[data-view-product=1]').find('.pr-name').html(data.pagetitle_parent_parent); // Название Категории 
//         $('.product-window[data-view-product=1]').find('.pr-subname').html(data.pagetitle_parent); // Название ткани 
//         $('.product-window[data-view-product=1]').find('.pr-char').html(data.description); // Список параметров <li></li>
//       }
//     });
//     $('.product-other').show();
//     $('.overlay').addClass('visible');
//     // setTimeout(function(){$('.product-window[data-view-product='+ prodId +']').addClass('visible')},300);
//     setTimeout(function(){$('.product-window[data-view-product=1]').attr("data-product-id", prodId).addClass('visible')},300);
//     // $(document).on('scroll DOMMouseScroll wheel swipe',function(e){
//     //   e.preventDefault();
//     // });
//     $.fn.fullpage.setAllowScrolling(false);
//     if($('html').hasClass('mobile')) {
//       $('body').css('top', -$(document).scrollTop());
//     }
//     $('html').addClass('open-window-product');
//     return false;
//   });
//   $(document).on('click','.product-other__it',function(){
//     $('.product-other__it').removeClass('active');
//     $(this).toggleClass('active');
//   });
//   $(document).on('mousewheel  DOMMouseScroll',function(){ //touchmove swipe
//     // alert('touh')
//     if($('html').hasClass('open-window-product')) {
//       return false;
//     }
//   });
//   $(document).on('click','.overlay',function(){
//     $('.product-window').removeClass('visible')
//     setTimeout(function(){
//       $('.overlay').removeClass('visible');
//       $.fn.fullpage.setAllowScrolling(true);
//       $('html').removeClass('open-window-product');
//     },300);
//   });
//   $('.js_close_prod').on('click',function(){
//     $('.product-other').fadeOut(200);
//     setTimeout(function(){$('.product-window').removeClass('visible');},200);
//     if($('html').hasClass('mobile')) {
//       $(document).scrollTop(+Math.abs($('body').css('top').split('px')[0]));
//     }
//     setTimeout(function(){
//       $('.overlay').removeClass('visible');
//     },600);
//     $('html').removeClass('open-window-product');
//     $.fn.fullpage.setAllowScrolling(true);
//     return false;
//   });
//   $(document).on('click','.js_order',function(){
//     $(this).fadeOut(200);
//     $(this).parents('.product-window__info').addClass('active');
//     $(this).parents('.product-window__info').find('.product-form').show();
//     setTimeout(function(){
//      $('.product-window__info.active').find('.product-form').addClass('visible')
//     },300);
//     return false;
//   });
//   // validate form
//   $('.js_validate button[type="submit"]').on("click", function(e){
//     var valid = validate($(this).parent(".js_validate"));
//     if(valid){
//       var form = $(this).parents('form');
//       if(form.hasClass("no_ajax")) { 
//         return true; 
//       }
//       if( form.attr("data-type") == "order" )
//         var prodId = parseInt($(".product-window").attr("data-product-id")) ? '&order[id]='+parseInt($(".product-window").attr("data-product-id")) : 1;
//       else
//         var prodId = '';
//       $.ajax({
//         method: "POST",
//         data: form.serialize()+prodId,
//         dataType: "json",
//         success: function(data){
//           $('#modal3').closeModal();
//           $('#modal2').closeModal();
//           var thank = $('#modal_thank');
//           thank.find('.modal-head').html(data.head);
//           thank.find('.modal-message').html(data.message);
//           thank.openModal();
//         }
//       })
//       return false;
//     }
//     return valid;
//   }); 
//   $(document).on('click','.hamburger--collapse',function(){
//     $(this).toggleClass('is-active');
//     $('.mobile-mav').toggleClass('visible');
//   })
//   $(document).on('click','.mobile-mav a',function(){
//     setTimeout(function(){
//       $('.hamburger--collapse').removeClass('is-active');
//       $('.mobile-mav').removeClass('visible');
//     },600);
//   });
//   $(document).on('click','.modal-close',function(){
//     return false;
//   });
//   $('.modal-trigger').leanModal({
//     dismissible: true,
//     opacity: .5, 
//     starting_top: '4%', // Starting top style attribute
//     ending_top: '10%', // Ending top style attribute
//     ready: function() {
//       $('body').addClass('open-modal');
//     },
//     complete: function() {
//       $('body').removeClass('open-modal');
//     }
//   });
// });
// $(window).load(function(){
//   $('.product-window__info').css('height', $(window).height() - $('.product-window__pic').height() + 150);
// });
// $(window).resize(function(){
//   $('.product-window__info').css('height',$(window).height() - $('.product-window__pic').height() + 150);
// })
// // validate form
// function validate(form){
//     var error_class = "error";
//     var norma_class = "pass";
//     var item        = form.find("[required]");
//     var e           = 0;
//     var reg         = undefined;
//     var pass        = form.find('.password').val();
//     var pass_1      = form.find('.password_1').val();
//     var email       = false;
//     var password    = false;
//     var phone       = false;
//     function mark (object, expression) {
//         if (expression) {
//             object.parent('div').addClass(error_class).removeClass(norma_class).find('.error_text').show();
//             e++;
//         } else
//             object.parent('div').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
//     }
//     form.find("[required]").each(function(){
//         switch($(this).attr("data-validate")) {
//             case undefined:
//                 mark ($(this), $.trim($(this).val()).length === 0);
//             break;
//             case "email":
//                 email = true;
//                 reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//                 mark ($(this), !reg.test($.trim($(this).val())));
//                 email = false;
//             break;
//             case "phone":
//                 phone = true;
//                 reg = /[0-9 -()+]{10}$/;
//                 mark ($(this), !reg.test($.trim($(this).val())));
//                 phone = false;
//             break;
//             case "pass":
//                 password = true;
//                 reg = /^[a-zA-Z0-9_-]{6,}$/;
//                 mark ($(this), !reg.test($.trim($(this).val())));
//                 password = false;
//             break;
//             case "pass1":
//                 mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
//             break;
//             default:
//                 reg = new RegExp($(this).attr("data-validate"), "g");
//                 mark ($(this), !reg.test($.trim($(this).val())));
//             break
//         }
//     })
//     $('.js_valid_radio').each(function(){
//         var inp = $(this).find('input.required');
//         var rezalt = 0;
//         for (var i = 0; i < inp.length; i++) {
//             if ($(inp[i]).is(':checked') === true) {
//                 rezalt = 1;
//                 break;
//             } else {
//                 rezalt = 0;
//             }
//         }
//         if (rezalt === 0) {
//            $(this).addClass(error_class).removeClass(norma_class);
//             e=1;
//         } else {
//             $(this).addClass(norma_class).removeClass(error_class);
//         }
//     })
//     if (e == 0) {
//      return true;
//     }
//     else {
//         form.find("."+error_class+" input:first").focus();
//         return false;
//     }
// }
// // validate form 

window.onload = function() {
  // PRELOADER
  var body = document.querySelector('body');
  body.classList.remove('noscroll')
  body.classList.add('loading')
  if (isMobile == true) {body.parentNode.classList.add('mobile'); }
  setTimeout(function(){body.classList.add('loaded')},1800)
  setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},3500)
  // //PRELOADER
  if(document.querySelector('.product-window') != undefined && window.innerWidth > 1023){
    prodWidth();
    prodHeight();
  }
}
window.onresize = function() {
  if(document.querySelector('.news-window') != undefined){
  }
  if(document.querySelector('.product-window') != undefined && window.innerWidth > 1023){
    prodWidth();
    prodHeight();
  }
}
window.onscroll = function() {
  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  if(document.querySelector('.section-nav') != undefined){
  }
}
var isMobile = false;
function getBrowser() {
    var ua = navigator.userAgent;
    var bName = function () {
        if (ua.search(/Edge/) > -1) return "edge";
        if (ua.search(/MSIE/) > -1) return "ie";
        if (ua.search(/Trident/) > -1) return "ie11";
        if (ua.search(/Firefox/) > -1) return "firefox";
        if (ua.search(/Opera/) > -1) return "opera";
        if (ua.search(/OPR/) > -1) return "operaWebkit";
        if (ua.search(/YaBrowser/) > -1) return "yabrowser";
        if (ua.search(/Chrome/) > -1) return "chrome";
        if (ua.search(/Safari/) > -1) return "safari";
        if (ua.search(/Maxthon/) > -1) return "maxthon";
    }();
    var version;
    switch (bName) {
        case "edge":
            version = (ua.split("Edge")[1]).split("/")[1];
            break;
        case "ie":
            version = (ua.split("MSIE ")[1]).split(";")[0];
            break;
        case "ie11":
            bName = "ie";
            version = (ua.split("; rv:")[1]).split(")")[0];
            break;
        case "firefox":
            version = ua.split("Firefox/")[1];
            break;
        case "opera":
            version = ua.split("Version/")[1];
            break;
        case "operaWebkit":
            bName = "opera";
            version = ua.split("OPR/")[1];
            break;
        case "yabrowser":
            version = (ua.split("YaBrowser/")[1]).split(" ")[0];
            break;
        case "chrome":
            version = (ua.split("Chrome/")[1]).split(" ")[0];
            break;
        case "safari":
            version = (ua.split("Version/")[1]).split(" ")[0];
            break;
        case "maxthon":
            version = ua.split("Maxthon/")[1];
            break;
    }
    var platform = 'desktop';
    if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
    var browsrObj;
    try {
        browsrObj = {
            platform: platform,
            browser: bName,
            versionFull: version,
            versionShort: version.split(".")[0]
        };
    } catch (err) {
        browsrObj = {
            platform: platform,
            browser: 'unknown',
            versionFull: 'unknown',
            versionShort: 'unknown'
        };
    }
    return browsrObj;
};
function prodWidth() {
  document.querySelector('.product-other').style.width = window.innerWidth - document.querySelector('.product-window').clientWidth + 'px';
}
function prodHeight() {
  document.querySelector('.product-other-body').style.maxHeight = window.innerHeight - document.querySelector('.product-other__head').clientHeight - 150 + 'px';
}
var browserYou = getBrowser();
if (browserYou.platform == 'mobile') { isMobile = true; $('.wrapper').addClass('mobile'); }
if ((browserYou.browser == 'ie' &&  browserYou.versionShort < +'9') || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < +'18') || (browserYou.browser == 'firefox' &&  browserYou.versionShort < +'30')) {
    alert('РћР±РЅРѕРІРёС‚Рµ Р±СЂР°СѓР·РµСЂ','')
};
$(window).scroll(function() {
  var e = $(document).scrollTop();
    if(e > $(window).height()) {
      $('.to-top').addClass('visible');
    }else {
      $('.to-top').removeClass('visible');
    }
})
$(document).ready(function() {
  $('.js_top, .logo').on('click',function(){
    $('html, body').animate({scrollTop: 0},777);
  })
  if (isMobile == false && $('.animate-img').length) {
      // top animation
      $('html').mousemove(function(e){
          var wx = $(window).width();
          var wy = 250;
          var x = e.pageX - this.offsetLeft;
          var y = e.pageY - this.offsetTop;
          var newx = x - wx/2;
          var newy = y - wy/2;
          $('.animate-img').each(function(){
              var speed = $(this).attr('data-speed');
              if($(this).attr('data-revert')) speed *= -5;
              TweenMax.to($(this), 1, {x: (20 - newx*speed), y: (20+ newy*speed)});
          });
      });
      // top animation
  }
  // animate icon
  if($('.our-plus-item').length){
    var icon1 = document.querySelector('.our-plus-item--1'),
        icon1_2Elem = document.querySelector('.icon1_2Elem'),
        icon1_1Elem = document.querySelector('.icon1_1Elem');
    var tl = new TimelineMax({paused: true});
      tl.to(icon1_1Elem, 1, {rotation:360,transformOrigin:'55% 50%'});
      icon1.addEventListener("mouseenter", function(){
        tl.play();
      });
      icon1.addEventListener("mouseleave", function(){
        tl.reverse();
      });
    var icon2 = document.querySelector('.our-plus-item--2'),
        tb = new TimelineMax({paused: true }),
        icon2_1Elem = document.querySelectorAll('.icon2_1Elem');
        for (var i = 0; i < icon2_1Elem.length; i++ ) {
          var thisPause = Math.random()*1.5;
          tb.to(icon2_1Elem[i], 1, {y: -25, alpha: 0 ,repeat: -1},thisPause);
        }
      icon2.addEventListener("mouseenter", function(){
        tb.play();
      });
      icon2.addEventListener("mouseleave", function(){
        tb.stop();
      });
    var icon3 = document.querySelector('.our-plus-item--3'),
        tc = new TimelineMax({paused: true ,repeat: -1}),
        icon3_1Elem = document.querySelectorAll('.icon3_1Elem');
        tc.to(icon3_1Elem, 0.1, {rotation: 5, transformOrigin:'0% 50%'})
          .to(icon3_1Elem, 0.1, {rotation: -5, transformOrigin:'0% 50%'});
      icon3.addEventListener("mouseenter", function(){
        tc.play();
      });
      icon3.addEventListener("mouseleave", function(){
        tc.stop();
      });
    var icon4 = document.querySelector('.our-plus-item--4'),
        icon4_1Elem = document.querySelector('.icon4_1Elem');
    var te = new TimelineMax({paused: true, repeat: -1});
      te.to(icon4_1Elem, 0.5, {scale:1.2, rotation:360,transformOrigin:'50% 50%'})
        .to(icon4_1Elem, 0.5, {scale:0.8})
        .to(icon4_1Elem, 0.5, {rotation:360, scale:1,transformOrigin:'50% 50%'});
      icon4.addEventListener("mouseenter", function(){
        te.play();
      });
      icon4.addEventListener("mouseleave", function(){
        te.stop();
      });
    }
  // animate icon
  $('.section').scrollSpy();
  $('#fullpage').fullpage({
    responsiveHeight: 750,
    responsiveWidth: 1199,
    css3:true,
    easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
    slidesNavigation: true,
    anchors: ['sectionBeg', 'sect2', 'sect3', 'sect4','sect5', 'sect6', 'sect7', 'sect8'],
   // menu: '#menu',
    hybrid:true,
    fitToSection: false
  });
  $(document).on('click','.mobile-mav a',function(){
    var sections = {'#sect1':"#section1", '#sect2':"#section2", '#sect3':"#section3", '#sect4':"#section4", '#sect5':"#section5", '#sect6':"#section6", '#sect7':"#section7", '#sect8':"#section8", '#sect9':"#section9", '#sect10':"#section10"};
    var sect = sections[$(this).attr('href')];
    sect = sect ? sect : $(this).attr('href');
    var destination = parseInt($(sect).offset().top) - 120;
    $('html, body').stop().animate({scrollTop: destination+'px'}, 600);
    setTimeout(function(){
      $('.hamburger--collapse').removeClass('is-active');
      $('.mobile-mav').removeClass('visible');
    },600);
    return false;
  });
  $(document).on('click','.product-item-icon',function(){
    var dataT = $(this).parents('.product-item').attr('data-tk');
    if ($(this).parents('.product-item').hasClass('active')) {
      $(this).parents('.product-item').removeClass('active');
      $('.product-box').removeClass('active');
      setTimeout(function(){
        $('.product-box').slideUp(300);
      },500);
    }else {
      $('.product-item').removeClass('active');
      $(this).parents('.product-item').addClass('active');
      $('.tab-lev-1').find('.product-box').slideUp(300);
      
      setTimeout(function(){
        $('.tab-lev-1.active').find('.product-box[data-tk="' + dataT + '"]').slideDown(300);
        // $('.tab-lev-1.active').find('.product-box[data-tk="' + dataT + '"]').addClass('active');
      },300);
      setTimeout(function(){
        $('body, html').animate({scrollTop: $('.tab-lev-1.active').find('.product-box[data-tk="' + dataT + '"]').offset().top - $(window).height()/2},500);
      },800)
    }
  });
  $('ul.tabs').tabs({
    onShow : function(){
      var attrTab = $(this).attr('href');
      $('.tab-lev-1').removeClass('active');
      $(attrTab).addClass('active');
    }
  });
  // open product
  $(document).on('click','.product-box__item',function(){
    // var prodId = $(this).attr('data-view-product');
    var prodId = $(this).attr('data-id');
    $.ajax({
      data: "getinfo[id]="+prodId,
      dataType: "json",
      type: "POST",
      success: function(data){
        console.log(data.description);
        $('.product-window[data-view-product=1]').find('.pr-name').html(data.pagetitle_parent_parent); // РќР°Р·РІР°РЅРёРµ РљР°С‚РµРіРѕСЂРёРё 
        $('.product-window[data-view-product=1]').find('.pr-subname').html(data.pagetitle_parent); // РќР°Р·РІР°РЅРёРµ С‚РєР°РЅРё 
        $('.product-window[data-view-product=1]').find('.pr-subname-two').html(data.pagetitle); // РќР°Р·РІР°РЅРёРµ С‚СЂРµС‚СЊРµРіРѕ СѓСЂРѕРІРЅСЏ СЂРµСЃСѓСЂСЃР°
        $('.product-window[data-view-product=1]').find('.pr-char').html(data.description); // РЎРїРёСЃРѕРє РїР°СЂР°РјРµС‚СЂРѕРІ <li></li>
        $('.product-window__pic').find('img').attr("src", data.img); // РџРѕРґРіСЂСѓР·РєР° РєР°СЂС‚РёРЅРєРё С‚РѕРІР°СЂР°
      }
    });
    $('.product-other').show();
    $('.overlay').addClass('visible');
    // setTimeout(function(){$('.product-window[data-view-product='+ prodId +']').addClass('visible')},300);
    $('.product-info .butt').show();
    $('.product-window__info').removeClass('active');
    $('.product-window').find('.product-form').hide().removeClass('visible');
    setTimeout(function(){$('.product-window').attr("data-product-id", prodId).addClass('visible')},300);
    $.fn.fullpage.setAllowScrolling(false);
    $('body').css('top', -$(document).scrollTop());
    $('html').addClass('open-window-product');
    return false;
  });
  $(document).on('click','.product-other__it',function(){
    $('.product-other__it').removeClass('active');
    $(this).toggleClass('active');
  });
  $(document).on('mousewheel  DOMMouseScroll',function(){ //touchmove swipe
    // alert('touh')
    if($('html').hasClass('open-window-product')) {
      return false;
    }
  });
  $(document).on('click','.overlay',function(){
    $('.product-form form').trigger('reset');
    $('.product-window').removeClass('visible');
    if($('html').hasClass('mobile')) {
      $(document).scrollTop(+($('body').attr('style').replace(/\D/g,'')));
    }
    setTimeout(function(){
      $('.overlay').removeClass('visible');
      $.fn.fullpage.setAllowScrolling(true);
      $('html').removeClass('open-window-product');
      $(document).scrollTop(+($('body').attr('style').replace(/\D/g,'')));
      $('body').css('top', 0);
    },300);
  });
  $('.js_close_prod').on('click',function(){
    $('.product-form form').trigger('reset');
    $('.product-other').fadeOut(200);
    setTimeout(function(){$('.product-window').removeClass('visible');},200);
    if($('html').hasClass('mobile')) {
      $(document).scrollTop(+($('body').attr('style').replace(/\D/g,'')));
    }
    setTimeout(function(){
      $('.overlay').removeClass('visible');
      $('html').removeClass('open-window-product');
      $.fn.fullpage.setAllowScrolling(true);
      $(document).scrollTop(+($('body').attr('style').replace(/\D/g,'')));
      $('body').css('top', 0);
    },600);
    return false;
  });
  $(document).on('click','.js_order',function(){
    $(this).fadeOut(200);
    $(this).parents('.product-window__info').addClass('active');
    $('.product-window__info.active').css('height', $(window).height() - $('.product-window__pic').height()+150);
    $(this).parents('.product-window__info').find('.product-form').show();
    setTimeout(function(){
     $('.product-window__info.active').find('.product-form').addClass('visible')
    },300);
    return false;
  });
  // validate form
  $('.js_validate button[type="submit"]').on("click", function(e){
    var valid = validate($(this).parent(".js_validate"));
    if(valid){
      var form = $(this).parents('form');
      if(form.hasClass("no_ajax")) { 
        return true; 
      }
      if( form.attr("data-type") == "order" )
        var prodId = parseInt($(".product-window").attr("data-product-id")) ? '&order[id]='+parseInt($(".product-window").attr("data-product-id")) : 1;
      else
        var prodId = '';
      $.ajax({
        method: "POST",
        data: form.serialize()+prodId,
        dataType: "json",
        success: function(data){
          $('#modal3').closeModal();
          $('#modal2').closeModal();
          var thank = $('#modal_thank');
          thank.find('.modal-head').html(data.head);
          thank.find('.modal-message').html(data.message);
          thank.openModal();
        }
      })
      return false;
    }
    return valid;
  }); 
  $(document).on('click','.hamburger--collapse',function(){
    $(this).toggleClass('is-active');
    $('.mobile-mav').toggleClass('visible');
  })
  $(document).on('click','.modal-close',function(){
    return false;
  });
  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity: .5, 
    starting_top: '4%', // Starting top style attribute
    ending_top: '10%', // Ending top style attribute
    ready: function() {
      $('body').addClass('open-modal');
    },
    complete: function() {
      $('body').removeClass('open-modal');
    }
  });
});
$(window).load(function(){
  $('.product-window__info').css('height', $(window).height() - $('.product-window__pic').height());
  $('.product-window__info.active').css('height', $(window).height() - $('.product-window__pic').height()+150);
});
$(window).resize(function(){
  $('.product-window__info').css('height',$(window).height() - $('.product-window__pic').height());
  $('.product-window__info.active').css('height', $(window).height() - $('.product-window__pic').height()+150);
})
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).removeClass(norma_class).find('.error_text').show();
            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 


