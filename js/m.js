(function(){var a=cj.cookie.get("isMobile"),e=/android|webos|iphone|blackberry|iemobile|opera mini/i.test(navigator.userAgent)?1:0,b=window.location.pathname,c=window.location.href.match(/mobile=([01])/i),d=/\/m\//i.test(b);c?(a=c[1],cj.cookie.set("isMobile",a,3600)):null===a?a=e:cj.cookie.set("isMobile",a,3600);1==a&&!d?window.location="../m/"+/\/(tw|en|jp)\//i.exec(b)[1]+"/":0==a&&d&&(window.location="../../"+/\/(tw|en|jp)\//i.exec(b)[1]+"/")})();
