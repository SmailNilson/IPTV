(f=>{rabbitaitvThemeModule.$document.on("wdQuickShopSuccess wdQuickViewOpen wdUpdateWishlist",function(){rabbitaitvThemeModule.swatchesVariations()}),f.each(["frontend/element_ready/wd_single_product_add_to_cart.default"],function(a,t){rabbitaitvThemeModule.wdElementorAddAction(t,function(a){a.find(".variations_form").each(function(){f(this).wc_variation_form()}),rabbitaitvThemeModule.swatchesVariations()})}),rabbitaitvThemeModule.swatchesVariations=function(){function r(a,t){return"old"===rabbitaitv_settings.variation_gallery_storage_method?i(a):s(a,t)}var a=f(".variations_form"),d=!1,e=!1===a.data("product_variations"),c=[],o=(f(".variations_form .label").on("click",function(a){f(this).siblings(".value").hasClass("with-swatches")&&a.preventDefault()}),a.each(function(){var a,s=f(this);s.data("swatches")||s.hasClass("wd-quick-shop-2")||(s.data("swatches",!0),s.data("product_variations")||s.find(".wd-swatches-product").find("> .wd-swatch").addClass("wd-enabled"),f(".wd-swatches-product > div").hasClass("wd-active")&&(s.addClass("variation-swatch-selected"),v(s)),(a=s.find("select.wd-changes-variation-image")).on("change",function(){var e,i,o,a=f(this),r=a.attr("name"),d=a.val(),a=s.data("product_variations"),t=!1;s.find("select").each(function(){if(!f(this).val())return!(t=!0)}),t&&d&&a&&(e=s.parents(".product, .wd-page-content"),i=e.find(".wd-gallery-thumb .wd-carousel-item img").first(),o=e.find(".woocommerce-product-gallery .woocommerce-product-gallery__image > a .wp-post-image").first(),void 0===c.src&&(c.src=i.attr("src"),c.srcset=i.attr("srcset"),c.size=i.attr("srcset")),f.each(a,function(a,t){if(t.attributes[r]===d)return setTimeout(function(){s.wc_variations_image_update(t),u(t.variation_id,s)||i.attr("src")===t.image.thumb_src&&i.attr("srcset")===t.image.thumb_src||((i=e.find(".wd-gallery-thumb .wd-carousel-item img").first()).wc_set_variation_attr("src",t.image.src),i.wc_set_variation_attr("srcset",t.image.src),o.attr("data-o_src",t.image.src),o.attr("data-o_srcset",t.image.src),i.siblings("source").length&&i.siblings("source").attr("srcset",t.image.src),rabbitaitvThemeModule.$document.trigger("wdResetVariation"))}),!1}))}),a.val()&&a.trigger("change"),s.on("click touchstart",".wd-swatches-single > .wd-swatch",function(){var a=f(this),t=a.data("value"),e=a.parent().data("id");a.data("title");o(s),a.parents(".wd-swatches-limited").length&&a.parents(".wd-swatches-limited").find(".wd-swatch-divider").trigger("click"),a.hasClass("wd-active")||a.hasClass("wd-disabled")||(s.find("select#"+CSS.escape(e)).val(t).trigger("change"),a.parent().find(".wd-active").removeClass("wd-active"),a.addClass("wd-active"),o(s),g())}).on("woocommerce_update_variation_values",function(){g(),o(s)}).on("click",".reset_variations",function(){s.find(".wd-active").removeClass("wd-active"),("yes"===rabbitaitv_settings.swatches_labels_name&&769<=rabbitaitvThemeModule.$window.width()||rabbitaitvThemeModule.$window.width()<=768)&&s.find(".wd-attr-selected").html("")}).on("reset_data",function(){var t=f(this),e=!0,i=!0,a=(s.find(".variations select").each(function(){var a=f(this);0===(t.val()||"").length&&(e=!1),a.has("wd-changes-variation-image")&&a.val()&&(i=!1)}),e&&t.parent().find(".wd-active").removeClass("wd-active"),s.removeClass("variation-swatch-selected"),s.find(".woocommerce-variation").removeClass("wd-show"),document.querySelector(".woocommerce-product-gallery__wrapper.wd-carousel"));o(s),i&&u("default",s),a&&void 0!==a.swiper&&("yes"===rabbitaitv_settings.product_slider_auto_height&&a.swiper.update(),a.swiper.slideTo(0)),rabbitaitvThemeModule.$document.trigger("wdResetVariation")}).on("found_variation",function(a,t){e&&u(t.variation_id,s,t)}).on("reset_image",function(){var a=f(".wd-gallery-thumb .wd-carousel-item img").first();n()||l(s)||(a.wc_reset_variation_attr("src"),a.wc_reset_variation_attr("srcset"),!a.attr("data-o_srcset")&&a.attr("data-srcset")&&a.attr("data-srcset",null))}).on("show_variation",function(a,t){var e,i,o,r,d;s.find(".wd-swatch").length&&!s.find(".wd-swatch.wd-active").length&&s.find("select").each(function(){var a=f(this),t=a.val();t&&a.siblings(".wd-swatches-product").find('.wd-swatch[data-value="'+t+'"]').addClass("wd-active")}),g(),s.addClass("variation-swatch-selected"),void 0!==t&&t.image.src&&(i=0<(e=s.parents(".product, .wd-page-content")).find('.wd-gallery-thumb .wd-carousel-item img[data-o_src="'+t.image.thumb_src+'"]').length,r=(o=e.find(".wd-gallery-thumb .wd-carousel-item img, .quick-view-gallery.wd-carousel .wd-carousel-item img").first()).siblings("source"),d=e.find(".woocommerce-product-gallery .woocommerce-product-gallery__image > a").first().data("o_href"),i&&o.wc_reset_variation_attr("src"),l(s)||u(t.variation_id,s)||(o.attr("src")!==t.image.thumb_src&&(o.wc_set_variation_attr("src",t.image.src),t.image.srcset.length&&o.wc_set_variation_attr("srcset",t.image.srcset),r.length)&&(t.image.srcset.length?r.attr("srcset",t.image.srcset):r.attr("srcset",t.image.src)),rabbitaitvThemeModule.$document.trigger("wdShowVariationNotQuickView")),v(s),l(s)||n()||d===t.image.full_src||w(),i=document.querySelector(".woocommerce-product-gallery__wrapper"))&&(i.classList.contains("wd-carousel")&&void 0!==i.swiper&&(i.swiper.update(),i.swiper.slideTo(0)),void 0!==c.src)&&(o=e.find(".woocommerce-product-gallery .woocommerce-product-gallery__image > a .wp-post-image").first(),(d=r=c.src)!==o.attr("data-o_src"))&&(void 0!==c.srcset&&(d=c.srcset),void 0!==c.size&&o.attr("data-o_size",c.size),o.attr("data-o_src",r),o.attr("data-o_srcset",d))}))}),function(a){a.data("product_variations")&&a.find(".variations select").each(function(){var a=f(this),t=a.parent().find(".wd-swatches-product"),a=a.html(),a=f(a);t.find(".wd-swatch").removeClass("wd-enabled").addClass("wd-disabled"),a.each(function(){var a=f(this).val();f(this).hasClass("enabled")?t.find('div[data-value="'+a+'"]').removeClass("wd-disabled").addClass("wd-enabled"):t.find('div[data-value="'+a+'"]').addClass("wd-disabled").removeClass("wd-enabled")})})}),n=function(){return f(".single-product-content").hasClass("product-quick-view")},l=function(a){return a.parent().hasClass("quick-shop-form")},i=function(a){var t;if("undefined"!=typeof rabbitaitv_variation_gallery_data||"undefined"!=typeof rabbitaitv_qv_variation_gallery_data)return void 0!==(t=n()?rabbitaitv_qv_variation_gallery_data:rabbitaitv_variation_gallery_data)&&t&&t[a]},s=function(a,t){t=m(t);return void 0!==t&&t&&t[a]&&1<t[a].length||"default"===a},w=function(){var a;0!==f(".woocommerce-product-gallery__wrapper").length&&("yes"===rabbitaitv_settings.swatches_scroll_top_desktop&&1024<=rabbitaitvThemeModule.$window.width()||"yes"===rabbitaitv_settings.swatches_scroll_top_mobile&&rabbitaitvThemeModule.$window.width()<=1024)&&((a=f("html, body")).stop(!0),a.animate({scrollTop:f(".woocommerce-product-gallery__wrapper").offset().top-150},800),void 0!==f.fn.tooltip)&&f(".wd-swatch").tooltip("hide")},m=function(a,t){void 0===t&&(t=!1);var e=a.data("product_variations"),i=(e=(e=t?t:e)||a.data("wd_product_variations"),[]);return e&&("object"!=typeof e||Array.isArray(e)?(e="string"==typeof e?JSON.parse(e):e).forEach(function(a){i[a.variation_id]=a.additional_variation_images,i.default=a.additional_variation_images_default}):(i[e.variation_id]=e.additional_variation_images,i.default=e.additional_variation_images_default,a.data("wd_product_variations",JSON.stringify([{additional_variation_images_default:e.additional_variation_images_default}])))),i},u=function(a,t,e){if(void 0===e&&(e=!1),"old"===rabbitaitv_settings.variation_gallery_storage_method){if(!r(a,t)||l(t)||"default"===a&&!d)return!1;_(a,t)}else{if(!r(a,t)&&!e||e&&(i=a,!(void 0!==(o=e)&&o&&o.additional_variation_images&&1<o.additional_variation_images.length||"default"===i))||l(t)||"default"===a&&!d)return!1;o=m(t,e);h(o[a],t,a)}var i,o;return f(".woocommerce-product-gallery__image").trigger("zoom.destroy"),rabbitaitvThemeModule.$document.trigger("wdReplaceMainGallery"),n()||rabbitaitvThemeModule.$document.trigger("wdReplaceMainGalleryNotQuickView"),d="default"!==a,rabbitaitvThemeModule.$window.trigger("resize"),!0},_=function(a,t){var e=(n()?rabbitaitv_qv_variation_gallery_data:rabbitaitv_variation_gallery_data)[a],t=t.parents(".product, .wd-page-content"),i=t.find(".woocommerce-product-gallery__wrapper");i.hasClass("wd-carousel")&&(i=i.find(".wd-carousel-wrap")),e&&1<e.length?t.find(".woocommerce-product-gallery").addClass("wd-has-thumb"):t.find(".woocommerce-product-gallery").removeClass("wd-has-thumb"),i.empty();for(var o=0;o<e.length;o++){var r="",r=(n()||"default"!==a||void 0===e[o].video||void 0===e[o].video.classes||(r+=e[o].video.classes),'<div class="wd-carousel-item'+r+'">');r+='<figure data-thumb="'+e[o].data_thumb+'" class="woocommerce-product-gallery__image">',n()||"default"!==a||void 0===e[o].video||void 0===e[o].video.controls||(r+=e[o].video.controls),n()||(r+='<a href="'+e[o].href+'">'),r+=e[o].image,n()||(r+="</a>"),n()||"default"!==a||void 0===e[o].video||void 0===e[o].video.content||(r+=e[o].video.content),r+="</figure></div>",i.append(r)}},h=function(a,t,e=""){var i,o,r,t=t.parents(".product, .wd-page-content"),d=t.find(".woocommerce-product-gallery__wrapper");for(i in(d=d.hasClass("wd-carousel")?d.find(".wd-carousel-wrap"):d).empty(),a&&1<a.length?t.find(".woocommerce-product-gallery").addClass("wd-has-thumb"):t.find(".woocommerce-product-gallery").removeClass("wd-has-thumb"),a)a.hasOwnProperty(i)&&(o="",n()||"default"!==e||void 0===a[i].video||void 0===a[i].video.classes||(o+=a[i].video.classes),o='<div class="wd-carousel-item'+o+'">',n()||"default"!==e||void 0===a[i].video||void 0===a[i].video.controls||(o+=a[i].video.controls),o+='<figure class="woocommerce-product-gallery__image" data-thumb="'+a[i].thumbnail_src+'">',n()||(o+='<a href="'+a[i].full_src+'" data-elementor-open-lightbox="no">'),r=a[i].srcset?'srcset="'+a[i].srcset+'"':"",o+='<img width="'+a[i].width+'" height="'+a[i].height+'" src="'+a[i].src+'" class="'+a[i].class+'" alt="'+a[i].alt+'" title="'+a[i].title+'" data-caption="'+a[i].data_caption+'" data-src="'+a[i].data_src+'"  data-large_image="'+a[i].data_large_image+'" data-large_image_width="'+a[i].data_large_image_width+'" data-large_image_height="'+a[i].data_large_image_height+'" '+r+' sizes="'+a[i].sizes+'" />',n()||(o+="</a>"),n()||"default"!==e||void 0===a[i].video||void 0===a[i].video.content||(o+=a[i].video.content),o+="</figure></div>",d.append(o))};function v(a){var a=a.find(".woocommerce-variation"),t=!1;a.length&&(a.find("> *").each(function(){f(this).is(":empty")||(t=!0)}),t)&&a.addClass("wd-show")}function g(){var t=!1;f(".variations_form").each(function(){var a=f(this);("yes"===rabbitaitv_settings.swatches_labels_name&&769<=rabbitaitvThemeModule.$window.width()||rabbitaitvThemeModule.$window.width()<=768)&&!t&&(a.find(".wd-active").each(function(){var a=f(this),t=a.data("title"),e=a.parents("tr").find(".wd-attr-selected");e.length?e.html(t):a.parents("tr").find(" > th").append('<span class="wd-attr-selected">'+t+"</span>")}),t=!0)})}},f(document).ready(function(){rabbitaitvThemeModule.swatchesVariations()})})(jQuery);