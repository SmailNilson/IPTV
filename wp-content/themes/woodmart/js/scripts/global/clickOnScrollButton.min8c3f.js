(a=>{woodmartThemeModule.clickOnScrollButton=function(t,n,o){var e,i;"function"==typeof a.fn.waypoint&&0!==(e=a(t)).length&&(e.trigger("wd-waypoint-destroy"),o=o||0,i=new Waypoint({element:e[0],handler:function(){e.trigger("click")},offset:function(){return woodmartThemeModule.$window.outerHeight()+parseInt(o)}}),e.data("waypoint-inited",!0).off("wd-waypoint-destroy").on("wd-waypoint-destroy",function(){e.data("waypoint-inited")&&(i.destroy(),e.data("waypoint-inited",!1))}))}})(jQuery);