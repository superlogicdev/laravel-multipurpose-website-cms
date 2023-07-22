/*
Theme Name: Niva JS
Theme URI: https://niva.lucian.host/
Description: Agency Theme
Version: 1.0
Author: Sweet Themes

*/


( function ( $ ) {
    'use strict';
    $( document ).ready( function () {

    	
    	/* HOME SLIDE */
    	$(window).on("load", function() {
		    $('body:not(.rtl) .slider-niva').owlCarousel({
			 	loop: true,
			    margin: 10,
			    lazyLoad: true,
			    responsiveClass: true,
			    smartSpeed: 500,
			    autoplayTimeout:8000,
			    dots: false,
			    navText : ["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"],
			    responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        600:{
			            items:1,
			            nav:true
			        },
			        1000:{
			            items:1,
			            nav:true,
			        }
	    		}
		    });
	    });

	    /* HOME SLIDE */
    	$(window).on("load", function() {
		    $('body.rtl .slider-niva').owlCarousel({
			 	loop: true,
			 	rtl:true,
			    margin: 10,
			    lazyLoad: true,
			    responsiveClass: true,
			    smartSpeed: 500,
			    autoplayTimeout:8000,
			    dots: false,
			    navText : ["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"],
			    responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        600:{
			            items:1,
			            nav:true
			        },
			        1000:{
			            items:1,
			            nav:true,
			        }
	    		}
		    });
	    });

	    /* HOME ABOUT PARALAX */
	    if (jQuery(window).width() > 768) {
			let img1 = document.getElementsByClassName('thumparallax');
			new simpleParallax(img1, {
			  	delay: 2
			});

			let img2 = document.getElementsByClassName('thumparallax-down');
			new simpleParallax(img2, {
			  	delay: 2,
			  	orientation: 'down'
			});
		}

		/* FUN FACTS COUNTS */
		if (jQuery('#fun-facts').length) {
			function isScrolledIntoView(el) {
			    var elemTop = el.getBoundingClientRect().top;
			    var elemBottom = el.getBoundingClientRect().bottom;

			    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
			    return isVisible;
			}

			$(window).on('scroll', function(e) {
			  if (isScrolledIntoView(document.getElementById('fun-facts'))) {
			    $('.timer').countTo();
			    $(window).off(e);
			  }
			});
		}

		/* SERVICES BOXES */
		$('body:not(.rtl) .service-boxes-slider').owlCarousel({
			autoplay:true,
		    smartSpeed:500,
		    autoplayTimeout:4000,
		    margin: 10,
		    nav: false,
		    arrows: false,
		    dots: true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});

		$('.rtl .service-boxes-slider').owlCarousel({
			rtl:true,
			autoplay:true,
		    smartSpeed:500,
		    autoplayTimeout:4000,
		    margin: 10,
		    nav: false,
		    arrows: false,
		    dots: true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});

		/* TESTIMONIAL */
		$('body:not(.rtl) .testimonial-section-slider').owlCarousel({
			loop:true,
			autoplay:true,
		    smartSpeed: 500,
		    autoplayTimeout:4000,
		    margin: 100,
		    nav: false,
		    arrows: false,
		    dots: false,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});

		$('.rtl .testimonial-section-slider').owlCarousel({
			rtl:true,
			loop:true,
			autoplay:true,
		    smartSpeed: 500,
		    autoplayTimeout:4000,
		    margin: 100,
		    nav: false,
		    arrows: false,
		    dots: false,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});


        /* SIDEBAR */
	    jQuery('.side_panel_sidebar').on( "click", function() {
	        jQuery('.fixed-sidebar-menu').toggleClass('open');
	        jQuery(this).parent().find('#navbar').toggleClass('hidden');
	        jQuery('.fixed-sidebar-menu-overlay').addClass('visible');
	    });
	    jQuery('.fixed-sidebar-menu-overlay').on( "click", function() {
	        jQuery('.fixed-sidebar-menu').removeClass('open');
	        jQuery(this).removeClass('visible');
	    });    
	    jQuery('.fixed-sidebar-menu .close-sidebar').on( "click", function() {
	        jQuery('.fixed-sidebar-menu').removeClass('open');
	        jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
	    });
	    jQuery(document).on("keyup", function(e) {
	         if (e.keyCode == 27) {
	            jQuery('.fixed-sidebar-menu').removeClass('open');
	            jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
	        }
	    });

	    /* back to top */
	    var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		/* CLIENTS */
		$('body:not(.rtl) .clients-slider').owlCarousel({
			loop:true,
			lazyLoad: true,
			autoplay:true,
		    smartSpeed: 500,
		    autoplayTimeout:4000,
		    margin: 15,
		    nav: false,
		    arrows: false,
		    dots: false,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});


		$('.rtl .clients-slider').owlCarousel({
			rtl:true,
			loop:true,
			lazyLoad: true,
			autoplay:true,
		    smartSpeed: 500,
		    autoplayTimeout:4000,
		    margin: 15,
		    nav: false,
		    arrows: false,
		    dots: false,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});



        jQuery(window).on("scroll", function() {
            (jQuery(window).scrollTop() > 250 && jQuery(window).width() > 1200 && (
                jQuery("body").addClass("sticky"), 
                jQuery(".header-niva .navbar").addClass("animated fadeInDown"
            )),           
            jQuery(window).scrollTop() < 250 && (jQuery("body").removeClass("sticky"), 
            jQuery(".header-niva .navbar").removeClass("animated fadeInDown")))
       
        }), jQuery(window).resize(function() {
            jQuery(window).width() < 1200 && jQuery("body").removeClass("sticky") });
	  

    })
} ( jQuery ) )


!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);

		

function BackgroundNode({node, loadedClassName}) {
	let src = node.getAttribute('data-background-image-url');
	let show = (onComplete) => {
		requestAnimationFrame(() => {
			node.style.backgroundImage = `url(${src})`
			node.classList.add(loadedClassName);
			onComplete();
		})
	}

	return {
		node,

		// onComplete is called after the image is done loading.
		load: (onComplete) => {
			let img = new Image();
			img.onload = show(onComplete);
			img.src = src;
		}
	}
}

let defaultOptions = {
	selector: '[data-background-image-url]',
	loadedClassName: 'loaded'
}

function BackgroundLazyLoader({selector, loadedClassName} = defaultOptions) {
	let nodes = [].slice.apply(document.querySelectorAll(selector))
		.map(node => new BackgroundNode({node, loadedClassName}));

	let callback = (entries, observer) => {
		entries.forEach(({target, isIntersecting}) => {
			if (!isIntersecting) {
				return;
			}

			let obj = nodes.find(it => it.node.isSameNode(target));
			
			if (obj) {
				obj.load(() => {
					// Unobserve the node:
					observer.unobserve(target);
					// Remove this node from our list:
					nodes = nodes.filter(n => !n.node.isSameNode(target));
					
					// If there are no remaining unloaded nodes,
					// disconnect the observer since we don't need it anymore.
					if (!nodes.length) {
						observer.disconnect();
					}
				});
			}
		})
	};
	
	let observer = new IntersectionObserver(callback);
	nodes.forEach(node => observer.observe(node.node));
};

BackgroundLazyLoader();