(function(){var a,b,c,d,e;c=function(a,b,c,d){var e;return e=null,"js"===a?(e=document.createElement("script"),e.setAttribute("type","text/javascript"),e.setAttribute("src",b)):"css"===a&&(e=document.createElement("link"),e.setAttribute("type","text/css"),e.setAttribute("rel","stylesheet"),e.setAttribute("href",b)),e.readyState?e.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&c(d)}:e.onload=function(){c(d)},(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)},d=function(){var d,e,f,g,h,i,j,k;for(d=a("#donation-script").data("testmode")===!0?"jquery.donations.ce65f2d7.js":"https://d2yuwrm8xcn0u8.cloudfront.net/jquery.donations.ce65f2d7.js",h=["https://js.stripe.com/v2/","https://d3dy5gmtp8yhk7.cloudfront.net/2.1/pusher.min.js",d],f=0,e=function(){return f++,f===h.length?(initJQueryPayments(jQuery),b(),donationsForm.init(a,a("#donation-script").data())):void 0},k=[],i=0,j=h.length;j>i;i++)g=h[i],k.push(c("js",g,e));return k},b=function(){return function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","gaDonations"),gaDonations("create","UA-48690908-1","controlshiftlabs.com"),gaDonations("send","pageview")},e=function(){a=jQuery=window.jQuery.noConflict(!0);var b,e;e=a("#donation-script").data("testmode")===!0,b=e?"jquery.donations.ad0577da.css":"https://d2yuwrm8xcn0u8.cloudfront.net/jquery.donations.ad0577da.css",c("css",b,function(){}),d()},void 0===window.jQuery||window.jQuery.fn.jquery&&(1!==parseInt(window.jQuery.fn.jquery[0])||parseInt(window.jQuery.fn.jquery[1])<9)?c("js","https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",e):e()}).call(this);