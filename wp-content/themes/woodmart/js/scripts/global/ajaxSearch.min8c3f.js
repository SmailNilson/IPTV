(w=>{woodmartThemeModule.$document.on("wdShopPageInit",function(){woodmartThemeModule.ajaxSearch()}),w.each(["frontend/element_ready/wd_search.default"],function(e,t){woodmartThemeModule.wdElementorAddAction(t,function(){woodmartThemeModule.ajaxSearch()})}),woodmartThemeModule.ajaxSearch=function(){void 0!==w.fn.devbridgeAutocomplete&&(w("form.woodmart-ajax-search").each(function(){var o=w(this),n=parseInt(o.data("count")),s=parseInt(o.data("thumbnail")),d=parseInt(o.data("symbols_count")),r=o.find('[name="product_cat"]'),e=o.parent(),i=e.find(".wd-dropdown-results > .wd-scroll-content"),l=o.data("post_type"),c=woodmart_settings.ajaxurl+"?action=woodmart_ajax_search",u=parseInt(o.data("price")),p=o.data("sku"),m=o.parents(".wd-search-full-screen-2").length,h=e.find(".wd-dropdown-results");0<n&&(c+="&number="+n),c+="&post_type="+l,i.on("click",".view-all-results",function(){o.submit()}),r.length&&""!==r.val()&&(c+="&product_cat="+r.val()),o.find('[type="text"]').on("focus keyup cat_selected",function(e){var t=w(this),a={action:"woodmart_ajax_search",number:0<n?n:void 0,post_type:l};m&&h.removeClass("wd-no-results"),t.hasClass("wd-search-inited")||(t.devbridgeAutocomplete({serviceUrl:c,appendTo:i,minChars:d,deferRequestBy:woodmart_settings.ajax_search_delay,onSelect:function(e){0<e.permalink.length&&(window.location.href=e.permalink)},onHide:function(){h.removeClass("wd-opened")},onSearchStart:function(){o.addClass("search-loading")},beforeRender:function(e){w(e).find(".suggestion-divider-title").parent().addClass("suggestion-divider"),w(e).find(".no-found-msg").parent().addClass("suggestion-no-found"),2<e[0].childElementCount&&w(e).append('<div class="view-all-results"><span>'+woodmart_settings.all_results+"</span></div>"),w(e).removeAttr("style")},onSearchComplete:function(){o.removeClass("search-loading"),woodmartThemeModule.$document.trigger("wood-images-loaded")},formatResult:function(e,t){var t="("+(t="&"===t?"&#038;":t).replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+")",a="";return e.divider&&(a+=' <h5 class="suggestion-divider-title">'+e.divider+"</h5>"),s&&e.thumbnail&&(a+=' <div class="suggestion-thumb">'+e.thumbnail+"</div>"),e.value&&(a=(a+=' <div class="suggestion-content wd-set-mb reset-last-child">')+'<h4 class="wd-entities-title">'+e.value.replace(new RegExp(t,"gi"),"<strong>$1</strong>").replace(/&lt;(\/?strong)&gt;/g,"<$1>")+"</h4>"),p&&e.sku&&(a+=' <p class="suggestion-sku">'+e.sku+"</p>"),u&&e.price&&(a+=' <p class="price">'+e.price+"</p>"),e.value&&(a+=" </div>"),e.products_not_found&&(a='<span class="no-found-msg">'+e.value+"</span>"),m&&e.no_results&&h.addClass("wd-no-results"),h.addClass("wd-opened"),o.parents("div[class*='wd-search-full-']").addClass("wd-searched"),a}}),t.addClass("wd-search-inited")),r.length&&"cat_selected"===e.type&&(""!==r.val()&&(a.product_cat=r.val()),t=o.find('[type="text"]').devbridgeAutocomplete(),e=woodmart_settings.ajaxurl+"?"+new URLSearchParams(a).toString(),t.setOptions({serviceUrl:e}),t.hide(),t.onValueChange())}),woodmartThemeModule.$document.on("click",function(e){e=e.target;w(e).is(".wd-search-form")||w(e).parents().is(".wd-search-form")||w(e).is(".wd-search-full-screen")||w(e).parents().is(".wd-search-full-screen")||o.find('[type="text"]').devbridgeAutocomplete("hide")}),w(".wd-dropdown-results > .wd-scroll-content").on("click",function(e){e.stopPropagation()})}),w(".wd-header-search.wd-display-dropdown > a").on("click",function(e){e.preventDefault()}))},w(document).ready(function(){woodmartThemeModule.ajaxSearch()})})(jQuery);