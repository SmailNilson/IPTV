(s=>{woodmartThemeModule.cartWidget=function(){var e=woodmartThemeModule.$body,o=s(".cart-widget-side"),d=s(".wd-close-side"),t=(e.on("click",".cart-widget-opener",function(e){u()||r()||e.preventDefault(),c()?t():setTimeout(function(){n()},10)}),e.on("click touchstart",".wd-close-side",function(){c()&&t()}),e.on("click",".close-side-widget",function(e){e.preventDefault(),c()&&t()}),woodmartThemeModule.$document.on("keyup",function(e){27===e.keyCode&&c()&&t()}),function(){o.removeClass("wd-opened"),d.removeClass("wd-close-side-opened")}),n=function(){if(u()||r())return!1;o.addClass("wd-opened"),d.addClass("wd-close-side-opened")},c=function(){return o.hasClass("wd-opened")},u=function(){return woodmartThemeModule.$body.hasClass("woocommerce-cart")},r=function(){return woodmartThemeModule.$body.hasClass("woocommerce-checkout")}},s(document).ready(function(){woodmartThemeModule.cartWidget()})})(jQuery);