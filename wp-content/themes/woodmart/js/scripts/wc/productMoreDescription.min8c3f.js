(r=>{woodmartThemeModule.$document.on("wdShopPageInit wdLoadMoreLoadProducts wdArrowsLoadProducts wdProductsTabsLoaded wdSearchFullScreenContentLoaded wdUpdateWishlist wdRecentlyViewedProductLoaded",function(){woodmartThemeModule.productMoreDescription()}),r.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(e,d){woodmartThemeModule.wdElementorAddAction(d,function(){woodmartThemeModule.productMoreDescription()})}),woodmartThemeModule.productMoreDescription=function(){r(".wd-hover-with-fade, .wd-image-hotspot.hotspot-type-product, .wd-spot:has(.wd-spot-product)").on("mouseenter touchstart",function(){var e,d=r(this).find(".wd-more-desc"),o=d.find(".wd-more-desc-inner"),t=d.find(".wd-more-desc-btn");d.hasClass("wd-more-desc-calculated")||(e=d.outerHeight(),30<(o=o.outerHeight()-e)?t.addClass("wd-shown"):0<o&&d.css("height",e+o),d.addClass("wd-more-desc-calculated"))}),woodmartThemeModule.$body.on("click",".wd-more-desc-btn",function(e){e.preventDefault();e=r(this);e.parent().addClass("wd-more-desc-full"),woodmartThemeModule.$document.trigger("wdProductMoreDescriptionOpen",[e.parents(".wd-hover-with-fade")])})},r(document).ready(function(){woodmartThemeModule.productMoreDescription()})})(jQuery);