(()=>{"use strict";const e=function(e,t){var n=t.find(".jss-ff-el-net-promoter");n.length&&e.each(n,(function(t,n){e(n).on("click","label",(function(t){var n=e(this);n.addClass("active"),n.prevAll().removeClass("active"),n.nextAll().removeClass("active")}))}))};var t=function(e){!function(e){e.on("click",".js-repeat .repeat-plus",(function(e){var t=jQuery(this),n=t.closest(".ff-el-repeat"),a=parseInt(n.data("max_repeat")),i=n.find(".ff-t-cell:first-child .ff-el-input--content > input").length;if(!(a&&a<=i)){a&&a-i==1&&n.find(".repeat-plus").hide();var r=t.closest("div"),o=r.index(),l=t.closest(".ff-el-input--content").find(".ff-t-cell").length;t.closest(".ff-el-input--content").find(".ff-t-cell").each((function(e,t){var n=jQuery(this).find(".ff-el-form-control:last-child"),a=n.attr("tabindex"),i=n.clone(),r={value:"",id:"ffrpt-"+(new Date).getTime()+e};a&&(r.tabIndex=parseInt(a)+l),i.prop(r),i.insertAfter(n)})),r.clone().insertAfter(r),t.closest(".ff-el-input--content").find(".ff-t-cell").eq(0).find("input:eq(".concat(o+1,")")).focus()}})),e.on("click",".js-repeat .repeat-minus",(function(e){var t=!1,n=jQuery(this),a=n.closest("div");n.closest(".ff-el-repeat").find(".repeat-plus").show(),n.closest(".ff-el-input--content").find(".ff-t-cell").each((function(){var e=a.index(),n=jQuery(this).find(".ff-el-form-control:eq("+e+")");a.siblings().length&&(t=n.remove().length)})),t&&a.remove()}))}(e),function(e){e.on("click",".js-repeater .repeat-plus",(function(e){var t=jQuery(this),n=t.closest("table"),a=t.closest("tr"),i=parseInt(n.attr("data-max_repeat")),r=n.find("tbody tr").length;if(i&&r==i)n.addClass("repeat-maxed");else{var o=a.clone();o.find("td").each((function(e,t){var n=jQuery(this).find(".ff-el-form-control:last-child"),a=(n.attr("tabindex"),n.attr("data-mask"));a&&n.mask(a);var i="ffrpt-"+(new Date).getTime()+e,r=(n.data("name"),{value:"",id:i});n.prop(r)})),o.insertAfter(a);var l=n.attr("data-root_name"),f=0;n.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,n){var a=jQuery(n);0==e&&(f=a.attr("tabindex")),a.prop({name:l+"["+e+"][]"}),a.attr("data-name",l+"_"+t+"_"+e),f&&a.attr("tabindex",f)}))})),o.find(".ff-el-form-control")[0].focus(),n.trigger("repeat_change"),i&&r+1==i&&n.addClass("repeat-maxed")}})),e.on("click",".js-repeater .repeat-minus",(function(e){var t=jQuery(this),n=t.closest("table");if(1!=n.find("tbody tr").length){t.closest("tr").remove(),n.removeClass("repeat-maxed");var a=n.attr("data-root_name");n.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,n){jQuery(n).prop({name:a+"["+e+"][]"})}))})),n.trigger("repeat_change")}}))}(e)};function n(){n=function(e,t){return new o(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function o(e,n,a){var r=new RegExp(e,n);return t.set(r,a||t.get(e)),i(r,o.prototype)}function l(e,n){var a=t.get(n);return Object.keys(a).reduce((function(t,n){return t[n]=e[a[n]],t}),Object.create(null))}return a(o,RegExp),o.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=l(n,this)),n},o.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=r(e[e.length-1])&&(e=[].slice.call(e)).push(l(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},n.apply(this,arguments)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}const l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fields=t,this.formData=n,this.counter=0,this.field_statues={}}var t,a,i;return t=e,(a=[{key:"setFields",value:function(e){this.fields=e}},{key:"setFormData",value:function(e){this.formData=e}},{key:"getCalculatedStatuses",value:function(){for(var e=0,t=Object.keys(this.fields);e<t.length;e++){var n=t[e],a=this.fields[n];this.field_statues[n]=this.evaluate(a,n)}return this.field_statues}},{key:"evaluate",value:function(e,t){var n=this,a=!1;if(e.status){this.counter++;var i=e.type,r=1;"any"==i&&(r=0),e.conditions.forEach((function(e){var a=n.getItemEvaluateValue(e,n.formData[e.field]);a&&n.fields[e.field]&&e.field!=t&&(a=n.evaluate(n.fields[e.field],e.field)),"any"==i?a&&(r=1):!a&&r&&(r=!1)})),a=1==r}return e.status&&e.conditions.length&&!a||e.container_condition&&(a=this.evaluate(e.container_condition)),a}},{key:"getItemEvaluateValue",value:function(e,t){t=t||null;var n=jQuery("[name='".concat(e.field,"']"));return"="==e.operator?""===e.value?null===t:"object"==r(t)?null!==t&&-1!=t.indexOf(e.value):n.hasClass("ff_numeric")?this.parseFormattedNumericValue(n,t)==this.parseFormattedNumericValue(n,e.value):t==e.value:"!="==e.operator?"object"==r(t)?null!==t&&-1==t.indexOf(e.value):n.hasClass("ff_numeric")?this.parseFormattedNumericValue(n,t)!=this.parseFormattedNumericValue(n,e.value):t!=e.value:">"==e.operator?t&&this.parseFormattedNumericValue(n,t)>this.parseFormattedNumericValue(n,e.value):"<"==e.operator?t&&this.parseFormattedNumericValue(n,t)<this.parseFormattedNumericValue(n,e.value):">="==e.operator?t&&this.parseFormattedNumericValue(n,t)>=this.parseFormattedNumericValue(n,e.value):"<="==e.operator?t&&this.parseFormattedNumericValue(n,t)<=this.parseFormattedNumericValue(n,e.value):"startsWith"==e.operator?t&&t.startsWith(e.value):"endsWith"==e.operator?t&&t.endsWith(e.value):"contains"==e.operator?null!==t&&-1!=t.indexOf(e.value):"doNotContains"==e.operator?null!==t&&-1==t.indexOf(e.value):"test_regex"==e.operator&&(t=t||"",this.stringToRegex(e.value).test(t))}},{key:"stringToRegex",value:function(e){var t,a=(null===(t=String(e).match(n(/^\/(.*)\/([gimsuy]*)$/,{body:1,flags:2})))||void 0===t?void 0:t.groups)||{},i=a.body,r=a.flags;return i?(r=r||"g",RegExp(i,r)):new RegExp(e,"g")}},{key:"parseFormattedNumericValue",value:function(e,t){if(e.hasClass("ff_numeric")){var n=JSON.parse(e.attr("data-formatter"));return currency(t,n).value}return Number(t)||0}}])&&o(t.prototype,a),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();const f=function(e,t,n){var a,i,r,o,f,s="."+n.form_instance;(a={},i={},r=function(n){e.each(n,(function(e,t){var n=f(e).closest(".has-conditions");t?("0px"==n.css("height")&&n.attr("style",""),n.removeClass("ff_excluded").addClass("ff_cond_v").slideDown(200)):n.removeClass("ff_cond_v").addClass("ff_excluded").slideUp(200)})),t.trigger("do_calculation")},o=function(){var n={};return e.each(a,(function(a,i){var r=i.prop("type")||i.attr("data-type");if("radio"==r)n[a]="",i.each((function(t,i){e(i).is(":checked")&&(n[a]=e(i).val())}));else if("checkbox"==r)a=a.replace("[]",""),n[a]=[],i.each((function(t,i){e(i).is(":checked")&&n[a].push(e(i).val())}));else if("select-multiple"==r){a=a.replace("[]","");var o=i.val();n[a]=o||[]}else if("file"==r){var l="";t.find("input[name="+a+"]").closest(".ff-el-input--content").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(t,n){l+=e(this).data("src")})),n[a]=l}else n[a]=i.val()})),n},f=function(t){var n=e(s),a=e("[data-name='"+t+"']",n);return(a=a.length?a:e("[name='"+t+"']",n)).length?a:e("[name='"+t+"[]']",n)},{init:function(){if(n.conditionals){e.each(n.conditionals,(function(t,n){t&&e.each(n.conditions,(function(e,t){var n=f(t.field);a[n.prop("name")]=n}))})),i=o();var t=new l(n.conditionals,i);e.each(a,(function(e,n){n.on("change",(function(){i=o(),t.setFormData(i),r(t.getCalculatedStatuses())}))})),r(t.getCalculatedStatuses())}}}).init()};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t,n,a){var i=0,r="";n.stepAnimationDuration=parseInt(n.stepAnimationDuration);var o="yes"==t.find(".ff-step-container").attr("data-enable_step_data_persistency"),l=!1;o&&(l="yes"==t.find(".ff-step-container").attr("data-enable_step_page_resume"));var f=!!window.fluentFormVars.is_rtl,s=!1,u=function(){return window.fluentFormApp(t)},d=function(t){var a=t.response,i=t.step_completed,r=[];if(jQuery.each(a,(function(t,a){if(a){var i=Object.prototype.toString.call(a);if("[object Object]"===i){var o=jQuery("[data-name=".concat(t,"]"));if(o.length&&"tabular-element"===o.attr("data-type"))jQuery.each(a,(function(n,a){var i=jQuery('[name="'.concat(t,"[").concat(n,']\\[\\]"]'));i.length||(i=jQuery('[name="'.concat(t,"[").concat(n,']"]'))),jQuery.each(i,(function(t,n){var i=e(n).val();-1===jQuery.inArray(i,a)&&i!==a||e(n).prop("checked",!0).change()}))}));else if("chained-select"===o.attr("data-type")){var l={meta_key:o.find("select:first").attr("data-meta_key"),form_id:o.closest("form").attr("data-form_id"),action:"fluentform_get_chained_select_options",filter_options:"all",keys:a};jQuery.getJSON(n.ajaxUrl,l).then((function(e){jQuery.each(e,(function(e,t){var n=o.find("select[data-key='".concat(e,"']"));0!=n.attr("data-index")&&jQuery.each(t,(function(e,t){n.append(jQuery("<option />",{value:t,text:t}))})),n.attr("disabled",!1).val(a[e])}))}))}else jQuery.each(a,(function(e,n){jQuery('[name="'.concat(t,"[").concat(e,']"]')).val(n).change()}))}else if("[object Array]"===i){var f=jQuery("[name=".concat(t,"]"));if("file"==(f=(f=f.length?f:jQuery("[data-name=".concat(t,"]"))).length?f:jQuery("[name=".concat(t,"\\[\\]]"))).attr("type"))y(f,a);else if(f.prop("multiple"))if(e.isFunction(window.Choices)){var s=f.data("choicesjs");r.push({handler:s,values:a})}else f.val(a).change();else if("repeater_field"===f.attr("data-type")){var c=f.find("tbody"),u=f.attr("data-name");jQuery.each(a,(function(t,n){0!=t?c.find("tr:last").clone().appendTo(c).find(".ff-el-form-control").each((function(a,i){var r="ffrpt-"+(new Date).getTime()+a;e(i).val(n[a]),e(i).attr({id:r,name:"".concat(u,"[").concat(t,"][]"),value:n[a]}).change()})):c.find("tr:first .ff-el-form-control").each((function(t,a){e(a).val(n[t]).change()}))}))}else f.each((function(t,n){-1!=jQuery.inArray(e(n).val(),a)&&e(n).prop("checked",!0).change()}))}else{var d=jQuery("[name=".concat(t,"]"));if("radio"===d.prop("type")||"checkbox"===d.prop("type"))jQuery("[name=".concat(t,'][value="').concat(a,'"]')).prop("checked",!0).change();else{var p=d.closest(".ff-el-group").find(".fluentform-signature-pad");if(p.length){var m=p[0].getContext("2d"),v=new Image;v.src=a,v.onload=function(){m.drawImage(v,0,0)}}d.val(a).change()}}}})),r.length>0)for(var o=0;o<r.length;o++)r[o].handler.setValue(r[o].values).change();s=!0,l&&h(i,n.stepAnimationDuration,!0),s=!1},p=function(t,a){0!==t.length&&(e.each(t,(function(t,n){e(n).attr("data-step-number",t)})),t.on("click",(function(t){var i=u(),r=e(this),o=0;try{var l=r.data("step-number");if(isNaN(l))return;e.each(a,(function(t,n){if(o=t,t<l){var a=e(n).find(":input").not(":button").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));a.length&&i.validate(a)}})),h(l,n.stepAnimationDuration,!0)}catch(t){if(!(t instanceof window.ffValidationError))throw t;h(o,n.stepAnimationDuration,!0),i.showErrorMessages(t.messages),i.scrollToFirstError(350)}})))},m=function(a){if(t.find(".ff-el-progress").length){var i=a.totalSteps,r=a.activeStep,o=100/i*(r+1),l=t.find(".ff-el-progress-title li"),f=t.find(".ff-step-header .ff-el-progress-bar"),s=f.find("span");f.css({width:o+"%"}),o?f.append(s.text(parseInt(o)+"%")):s.empty();var c=n.step_text,u=e(l[r]).text();c=c.replace("%activeStep%",r+1).replace("%totalStep%",i).replace("%stepTitle%",u),t.find(".ff-el-progress-status").html(c),l.css("display","none"),e(l[r]).css("display","inline")}},v=function(n){e(document).on("keydown",a+" .fluentform-step > .step-nav button",(function(t){9==t.which&&"next"==e(this).data("action")&&t.preventDefault()})),e(a).on("click",".fluentform-step  .step-nav button, .fluentform-step  .step-nav img",(function(a){var r=e(this).data("action"),o="next",l=e(this).closest(".fluentform-step"),f=u();if("next"==r){try{var s=l.find(":input").not(":button").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));s.length&&f.validate(s),i++}catch(a){if(!(a instanceof window.ffValidationError))throw a;return f.showErrorMessages(a.messages),void f.scrollToFirstError(350)}t.trigger("ff_to_next_page",i),jQuery(document).trigger("ff_to_next_page",{step:i,form:t});var c=t.find(".fluentform-step");t.trigger("ff_render_dynamic_smartcodes",e(c[i]))}else i--,o="prev",t.trigger("ff_to_prev_page",i),jQuery(document).trigger("ff_to_prev_page",{step:i,form:t});var d="yes"!=t.find(".ff-step-container").attr("data-disable_auto_focus");h(i,n,d,o)}))},h=function(n,l){var u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"next";e("div"+a+"_errors").empty(),i=n;var p=t.find(".ff-step-body"),v=t.find(".ff-step-titles li"),h=t.find(".fluentform-step"),y=h.length;t.offset().top,e("#wpadminbar");h.removeClass("active"),e(h[i]).addClass("active"),v.removeClass("ff_active ff_completed"),e.each(c(Array(i).keys()),(function(t){e(e(v[t])).addClass("ff_completed")})),e(v[i]).addClass("ff_active");var _=function(){if(!window.ff_disable_step_scroll){var n=t.find(".ff_step_start");if(window.ff_scroll_top_offset)var a=window.ff_scroll_top_offset;else a=n.offset().top-20;var i,r,o,f,s;(r=(i=n).offset().top,o=r+i.outerHeight(),f=e(window).scrollTop(),s=f+e(window).height(),o>f&&r<s)&&!window.ff_force_scroll||e("html, body").delay(l).animate({scrollTop:a},0)}},b={left:-100*i+"%"};f&&(b={right:-100*i+"%"}),p.animate(b,l,(function(){u&&_(),p.css({width:r})}));var x=0===i;if(o&&!s&!x&&g(t,i).then((function(e){console.log(e)})),m({activeStep:i,totalSteps:y}),h.last().hasClass("active"))t.find('button[type="submit"]').css("display","inline-block");else if(t.find('button[type="submit"]').css("display","none"),!window.ff_disable_auto_step){var w=0;t.find(".fluentform-step.active .ff_excluded").legth&&(w=50),setTimeout((function(){var e=t.find(".fluentform-step.active"),n=t.find(".fluentform-step.active > div").length-1,a=t.find(".fluentform-step.active > .ff_excluded").length;t.find(".fluentform-step.active > .ff-t-container").length&&(n-=t.find(".fluentform-step.active > .ff-t-container").length,n+=t.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > div").length,a+=t.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > .ff_excluded").length,t.find(".fluentform-step.active > .ff-t-container.ff_excluded").length&&(a-=t.find(".fluentform-step.active > .ff-t-container.ff_excluded").length,a-=t.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > .ff_excluded").length,a+=t.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > div").length)),n==a&&e.find(".step-nav button[data-action="+d+"]").click()}),w)}},g=function(t,a){var i=t.find(":input").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));i.filter((function(t,n){var a=e(n);return a.parents().hasClass("ff_repeater_table")&&"select"==a.attr("type")&&!a.val()})).prepend("<option selected disabled />");var r=i.serialize();e.each(t.find("[type=file]"),(function(t,n){var a={},i=n.name+"[]";a[i]=[],e(n).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(t,n){a[i][t]=e(this).data("src")})),e.each(a,(function(t,n){if(n.length){var a={};a[t]=n,r+="&"+e.param(a),!0}}))}));var o={active_step:a,data:r,form_id:t.data("form_id"),action:"fluentform_step_form_save_data"};return jQuery.post(n.ajaxUrl,o)},y=function(t,a){var i=t.closest(".ff-el-input--content").find(".ff-uploaded-list");e.each(a,(function(t,a){var r=e("<div/>",{class:"ff-upload-preview","data-src":a,style:"border: 1px solid rgb(111, 117, 125)"}),o=e("<div/>",{class:"ff-upload-thumb"});o.append(e("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('".concat(_(a),"');")}));var l=e("<div/>",{class:"ff-upload-details"}),f=e("<span/>",{html:n.upload_completed_txt,class:"ff-upload-progress-inline-text ff-inline-block"}),s=e("<div/>",{class:"ff-upload-filename",html:a.substring(a.lastIndexOf("https://ts-invitation.com/")+1)}),c=e('\n\t\t\t\t\t\t\t\t\t<div class="ff-upload-progress-inline ff-el-progress">\n\t\t\t\t\t\t\t\t\t\t<div style="width: 100%;" class="ff-el-progress-bar"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t'),u=e("<span/>",{"data-href":"#",html:"&times;",class:"ff-upload-remove"}),d=e("<div>",{class:"ff-upload-filesize ff-inline-block",html:""}),p=e("<div>",{class:"ff-upload-error",style:"color:red;"});l.append(s,c,f,d,p,u),r.append(o,l),i.append(r)})),t.trigger("change_remaining",-a.length),t.trigger("change")},_=function(e){var t=e.split(/[#?]/)[0].split(".").pop().trim().toLowerCase();if(-1!=["jpg","jpeg","gif","png"].indexOf(t))return e;var n=document.createElement("canvas");n.width=60,n.height=60,n.style.zIndex=8,n.style.position="absolute",n.style.border="1px solid";var a=n.getContext("2d");return a.fillStyle="rgba(0, 0, 0, 0.2)",a.fillRect(0,0,60,60),a.font="13px Arial",a.fillStyle="white",a.textAlign="center",a.fillText(t,30,30,60),n.toDataURL()};return{init:function(){var a,l,f,s;o&&jQuery(document).ready((function(e){jQuery.getJSON(n.ajaxUrl,{form_id:t.data("form_id"),action:"fluentform_step_form_get_data"}).then((function(e){e&&d(e)}))})),t.find(".fluentform-step:first").find('.step-nav [data-action="prev"]').remove(),a=t.find(".ff-step-body"),l=t.find(".fluentform-step"),f=l.length,s=t.find(".ff-step-titles li"),r=100*f+"%",a.css({width:r}),l.css({width:100/f+"%"}),e(l[i]).addClass("active"),e(s[i]).addClass("active"),l.length&&!l.last().hasClass("active")&&t.find('button[type="submit"]').css("display","none"),m({activeStep:i,totalSteps:f}),v(n.stepAnimationDuration),p(s,l),function(){function n(e){if(1==e.closest(".fluentform-step.active").find(".ff-el-group:not(.ff_excluded):not(.ff-custom_html)").length)if(e.closest(".fluentform-step.active").find(".ff_excluded").length){var t=window.ffTransitionTimeOut||400;setTimeout((function(){e.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}),t)}else e.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}"yes"==t.find(".ff-step-container").attr("data-enable_auto_slider")&&(t.find(".ff-el-form-check-radio,.ff-el-net-label, .ff-el-ratings label").on("click",(function(){n(e(this))})),t.find("select").on("change",(function(){n(e(this))})))}()},updateSlider:h,populateFormDataAndSetActiveStep:d}}var p,m,v=[{type:8,token:"round",show:"round",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t||0===t||(t=2),e=parseFloat(e).toFixed(t),parseFloat(e)}},{type:0,token:"ceil",show:"ceil",value:function(e){return Math.ceil(e)}},{type:0,token:"floor",show:"floor",value:function(e){return Math.floor(e)}},{type:0,token:"abs",show:"abs",value:function(e){return Math.abs(e)}},{type:8,token:"max",show:"max",value:function(e,t){return e>t?e:t}},{type:8,token:"min",show:"min",value:function(e,t){return e<t?e:t}}];function h(e,t){var n=t.find(".ff_has_formula");if(n.length){var a={},i={};mexp.addToken(v);var r=function(){jQuery.each(n,(function(n,a){var i=jQuery(a),r=i.data("calculation_formula"),l=function(e,t){for(var n,a=[],i=RegExp(e,"g");n=i.exec(t);)delete n.input,a.push(n);return a}(/{(.*?)}/g,r),d={};jQuery.each(l,(function(e,n){var a=n[0];jQuery.each(["{input.","{select.","{checkbox.","{radio.","{repeat.","{payment."],(function(e,n){if(function(e,t){return-1!==e.indexOf(t)}(a,n)){var i=(p=a,m=new RegExp(n+"|}","g"),p.replace(m,"")),r=0;if("{select."===n)r=c(i);else if("{checkbox."===n)r=u(i);else if("{radio."===n)r=s(i);else if("{repeat."===n)r=f(i);else if("{payment."===n)r=function(e){var n=0,a=t.find(":input[data-name="+e+"]");if(a.length&&o(a)){var i=a[0].type;"radio"===i?n=s(e,!0):"hidden"===i?n=a.attr("data-payment_value"):"number"===i||"text"===i?n=window.ff_helper.numericVal(a):"checkbox"===i?n=u(e,!0):"select-one"===i&&(n=c(e,!0))}return n}(i);else{var l=t.find("input[name="+i+"]");o(l)&&(r=window.ff_helper.numericVal(l))}return d[a]=r,!1}var p,m}))})),jQuery.each(d,(function(e,t){t||(t=0),r=r.split(e).join(t)}));var p="";try{r=r.replace(/\n/g,""),p=mexp.eval(r),isNaN(p)&&(p="")}catch(e){console.log(e,a)}if("text"==i[0].type){var m=e(i),v=m.val(),h=window.ff_helper.formatCurrency(m,p);if(m.val(h).prop("defaultValue",h),""==v)return;v!=h&&m.trigger("change")}else i.text(p)}))};t.find("input[type=number],input[data-calc_value],select[data-calc_value],.ff_numeric,.ff_payment_item").on("change keyup",r),r(),t.on("do_calculation",(function(){r()}))}function o(e){return!e.closest(".ff_excluded.has-conditions").length}function l(n){var a=0,i=t.find(n);return i.closest(".ff_excluded.has-conditions").length||e.each(i,(function(t,n){var i=e(n).attr("data-calc_value");i&&!isNaN(i)&&(a+=Number(i))})),a}function f(n){var l=0,f=n.split("."),s=!1;f.length>1&&(n=f[0],s=f[1]);var c=t.find("table[data-root_name="+n+"]");if(a[n]||(a[n]=!0,c.on("repeat_change",(function(){r()}))),o(c))if(s){var u=c.find("tbody tr td:nth-child("+s+")");e.each(u,(function(t,a){var o=e(a).find(":input"),f=n+"_"+s+"_"+o.attr("id");i[f]||(i[f]=!0,o.on("change",(function(){r()})));var c=0;c="select"===o.attr("type")?parseFloat(o.find("option:selected").attr("data-calc_value")):parseFloat(o.val()),isNaN(c)||(l+=c)})),l&&(l=l.toFixed(2))}else l=c.find("tbody tr").length;return l}function s(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=0,i=t.find("input[name="+e+"]:checked");return n?i.attr("data-payment_value"):(o(i)&&(a=i.attr("data-calc_value")||0),a)}function c(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=0;return n?t.find("select[name="+e+"] option:selected").data("payment_value"):(a=l("select[data-name="+e+"] option:selected"),t.find("select[data-name="+e+"]").attr("data-calc_value",a),a)}function u(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n)return l("input[data-name="+e+"]:checked");var a=t.find(":input[data-name="+e+"]"),i=a.data("group_id"),r=t.find('input[data-group_id="'+i+'"]:checked'),o=0;return r.each((function(e,t){var n=jQuery(t).data("payment_value");n&&(o+=parseFloat(n))})),o}}(p=jQuery)(document.body).on("fluentform_init",(function(n,a,i){if(a.attr("data-form_instance"),i){i.form_id_selector;var r="."+i.form_instance;if(function(e,t,n,a,i){var r=function(){jQuery.fn.fileupload&&t.find('input[type="file"]').each((function(r,c){var u,d=e(this);u=e("<div/>",{class:"ff-uploaded-list",style:"font-size:12px; margin-top: 15px;"}),d.closest("div").append(u);var p=u.width(),m=n.rules[d.prop("name")],v=m.max_file_count.value;"max_file_count"in m&&(m.max_file_count.remaining=Number(v));var h="";function g(e){var n=d.prop("name");t.trigger("show_element_error",{element:n,message:e})}function y(a,r){if(r&&r.files&&r.files.length){if(t.find(".ff-upload-preview-elem").remove(),"max_file_count"in m){e(i+"_errors").empty(),e(this).closest("div").find(".error").html("");var o=m.max_file_count.remaining;if(!o||r.files.length>o){var l="Maximum 1 file is allowed!";return l=v>1?"Maximum "+v+" files are allowed!":l,m.max_file_count&&m.max_file_count.message&&(l=m.max_file_count.message),g(l),!1}}var s=f(r.files[0],n.rules[d.prop("name")]);return!s.length||(g(s.join(", ")),!1)}}"allowed_file_types"in m?(h=m.allowed_file_types.value.join("|"),d.prop("accept","."+h.replace(/\|/g,",."))):(h=m.allowed_image_types.value.join("|"))?d.prop("accept","."+h.replace(/\|/g,",.")):d.prop("accept","image/*");var _=e(c);d.fileupload({dataType:"json",dropZone:d.closest(".ff-el-group"),url:a.ajaxUrl,formData:function(e){var t=e.serializeArray();return t.push({name:"action",value:"fluentform_file_upload"}),t.push({name:"formId",value:n.id}),t},change:y,add:function(t,n){if(y(0,n)){var i=e("<div/>",{class:"ff-upload-preview"});n.context=i;var r=e("<div/>",{class:"ff-upload-thumb"}),f=e("<div/>",{class:"ff-upload-details"}),s=e("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('".concat(o(n.files[0]),"');")}),c=e("<div>",{class:"ff-upload-error",style:"color:red;"}),d=e("<span/>",{html:a.upload_start_txt,class:"ff-upload-progress-inline-text ff-inline-block"}),m=e('\n\t\t\t\t\t\t\t\t\t<div class="ff-upload-progress-inline ff-el-progress">\n\t\t\t\t\t\t\t\t\t\t<div class="ff-el-progress-bar"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t'),v=e("<div/>",{class:"ff-upload-filename",html:n.files[0].name}),h=e("<span/>",{"data-href":"#","data-attachment-id":"",html:"&times;",class:"ff-upload-remove"}),g=e("<div>",{class:"ff-upload-filesize ff-inline-block",html:l(n.files[0].size)});r.append(s),f.append(v,m,d,g,c,h),i.append(r,f),u.append(i),v.css({maxWidth:p-91+"px"}),n.submit(),n.context.addClass("ff_uploading")}},progress:function(e,t){var n=parseInt(t.loaded/t.total*100,10);t.context.find(".ff-el-progress-bar").css("width",n+"%"),t.context.find(".ff-upload-progress-inline-text").text(a.uploading_txt)},done:function(e,n){if(n.context.removeClass("ff_uploading"),n.result&&"data"in n.result&&"files"in n.result.data)"error"in n.result.data.files[0]?(g("Upload Error: "+n.result.data.files[0].error),n.context.remove()):(n.context.find(".ff-upload-progress-inline-text").text(a.upload_completed_txt),m.max_file_count.remaining-=1,n.context.attr("data-src",n.result.data.files[0].url),n.context.find(".ff-upload-remove").attr({"data-href":n.result.data.files[0].file,"data-attachment-id":n.result.data.files[0].attachment_id}),t.find("input[name="+_.data("name")+"]").trigger("change"));else{var i="Sorry! The upload failed for some unknown reason.";if(n.messages){var r=Object.keys(n.messages);r.length&&(i=n.messages[r[0]])}g(i),n.context.remove()}},fail:function(t,n){var a=[];n.context.remove(),n.jqXHR.responseJSON&&n.jqXHR.responseJSON.errors?e.each(n.jqXHR.responseJSON.errors,(function(t,n){"object"==s(n)?e.each(n,(function(e,t){a.push(t)})):a.push(n)})):n.jqXHR.responseText?a.push(n.jqXHR.responseText):a.push("Something is wrong when uploading the file! Please try again"),g(a.join(", "))}}),_.on("change_remaining",(function(e,t){m.max_file_count.remaining+=t}))}))},o=function(e){if(e.type.match("image"))return URL.createObjectURL(e);var t=document.createElement("canvas");t.width=60,t.height=60,t.style.zIndex=8,t.style.position="absolute",t.style.border="1px solid";var n=t.getContext("2d");return n.fillStyle="rgba(0, 0, 0, 0.2)",n.fillRect(0,0,60,60),n.font="13px Arial",n.fillStyle="white",n.textAlign="center",n.fillText(e.name.substr(e.name.lastIndexOf(".")+1),30,30,60),t.toDataURL()},l=function(e){return e<1024?e+"bytes":e>=1024&&e<=1048576?(e/1024).toFixed(1)+"KB":e>1048576?(e/1048576).toFixed(1)+"MB":void 0},f=function(e,t){var n=[],a="",i="";if("allowed_file_types"in t?(a=t.allowed_file_types.value,i=t.allowed_file_types.message):"allowed_image_types"in t&&(a=t.allowed_image_types.value,i=t.allowed_image_types.message),a){var r=new RegExp("("+a.join("|")+")","i"),o=e.name.split(".").pop();o=o.toLowerCase(),r.test(o)||n.push(i)}return"max_file_size"in t&&e.size>t.max_file_size.value&&n.push(t.max_file_size.message),n};r(),t.find(".ff-uploaded-list").on("click",".ff-upload-remove",(function(t){t.preventDefault();var n=e(this),i=n.closest(".ff-uploaded-list"),r=i.closest(".ff-el-input--content").find("input[type=file]"),o=n.attr("data-href"),l=n.attr("data-attachment-id");"#"==o?(n.closest(".ff-upload-preview").remove(),i.find(".ff-upload-preview").length||i.siblings(".ff-upload-progress").addClass("ff-hidden"),r.trigger("change_remaining",1)):e.post(a.ajaxUrl,{path:o,attachment_id:l,action:"fluentform_delete_uploaded_file"}).then((function(e){n.closest(".ff-el-input--content").find("input"),r.trigger("change_remaining",1),n.closest(".ff-upload-preview").remove(),i.find(".ff-upload-preview").length||i.siblings(".ff-upload-progress").addClass("ff-hidden"),r.trigger("change")}))})),e(document.body).on("fluentform_reset",(function(){r()}))}(p,a,i,window.fluentFormVars,r),t(a),function(e,t){var n=t.find(".fluentform .js-repeat");e.each(n,(function(t,n){var a=e(n);if(a.find(".ff-t-cell").length>1){var i=a.find(".ff-el-group").height()-a.find(".ff-el-group").find(".ff-el-input--content").height();a.find(".js-repeat-buttons").css("margin-top",i+"px")}var r=a.find(".ff-el-group").find(".ff-el-input--content .ff-el-form-control").outerHeight();a.find(".ff-el-repeat-buttons").height(r)}))}(p,a),f(p,a,i,window.fluentFormVars),h(p,a),function(e,t){var n=t.find(".jss-ff-el-ratings");n.length&&e.each(n,(function(t,n){var a=e(n);a.find("label.active").prevAll().addClass("active"),a.on("mouseenter","label",(function(t){var n=e(this),a="[data-id="+n.find("input").attr("id")+"]";n.addClass("active"),n.prevAll().addClass("active"),n.nextAll().removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(a).css("display","inline-block")})).on("click","label",(function(t){var n=e(this).find(".jss-ff-svg");n.addClass("scale"),n.addClass("scalling"),setTimeout((function(e){n.removeClass("scalling"),n.removeClass("scale")}),150)})).on("mouseleave",(function(t){var n=e(this),a="[data-id="+n.find("input:checked").attr("id")+"]",i=n.find("input:checked").parent("label");i.length?(i.addClass("active"),i.prevAll().addClass("active"),i.nextAll().removeClass("active")):n.find("label").removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(a).css("display","inline-block")}))}))}(p,a),e(p,a),a.hasClass("ff-form-has-steps")){var o=d(p,a,window.fluentFormVars,r);o.init(),a.on("update_slider",(function(e,t){o.updateSlider(t.goBackToStep,t.animDuration,t.isScrollTop,t.actionType)}))}a.hasClass("ff_has_dynamic_smartcode")&&(a.on("ff_render_dynamic_smartcodes",(function(e,t){l(p(t))})),a.on("keyup change",":input",(function(){l(a)})),l(a))}else console.log("No Fluent form JS vars found!");function l(e){jQuery.each(e.find(".ff_dynamic_value"),(function(e,t){var n=p(t).data("ref");if("payment_summary"!=n){var i=a.find('.ff-el-form-control[name="'+n+'"]'),r=" ";i.length||(i=a.find('.ff-field_container[data-name="'+n+'"]').find("input")),i.length||((i=a.find('*[name="'+n+'"]:checked')).length||(i=a.find('*[name="'+n+'[]"]:checked'),r=", "),i.length||(i=a.find('*[name="'+n+'[]"]').find("option:selected"),r=", "));var o=[];p.each(i,(function(){var e=p(this).val();e&&o.push(e)}));var l="";l=o.length?o.join(r):p(t).data("fallback"),p(this).html(l)}else a.trigger("calculate_payment_summary",{element:p(t)})}))}})),(m=String.prototype).startsWith||(m.startsWith=function(e,t){return t=!t||t<0?0:+t,this.substring(t,t+e.length)===e}),m.endsWith||(m.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),m.includes||(m.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===t&&(t=0),-1!==this.indexOf(e,t)})})();