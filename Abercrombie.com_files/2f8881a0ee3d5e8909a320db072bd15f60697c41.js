function bt_log(o) {if (typeof (window.console) == "object") {if (typeof (console.log) == "function") {console.log("BrightTag: " + o);}}}
function bt_parameter(s,x) {var C=x||document;"undefined"===typeof h&&(h=new BrightTag.HTTP.URL(C.location.href));return (typeof h.param(s) === "undefined") ? "" : h.param(s).replace(/</g,"").replace(/>/g,"")}
function bt_parameter_current(s,x) {return BrightTag.HTTP.URL(window.location.href).param(s).replace(/</g,"").replace(/>/g,"")}
"object"!==typeof JSON&&(JSON={});
(function(){function m(a){return 10>a?"0"+a:a}function r(a){s.lastIndex=0;return s.test(a)?'"'+a.replace(s,function(a){var c=u[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function p(a,l){var c,d,h,q,g=e,f,b=l[a];b&&("object"===typeof b&&"function"===typeof b.toJSON)&&(b=b.toJSON(a));"function"===typeof k&&(b=k.call(l,a,b));switch(typeof b){case "string":return r(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);
case "object":if(!b)return"null";e+=n;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){q=b.length;for(c=0;c<q;c+=1)f[c]=p(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(k&&"object"===typeof k)for(q=k.length,c=0;c<q;c+=1)"string"===typeof k[c]&&(d=k[c],(h=p(d,b))&&f.push(r(d)+(e?": ":":")+h));else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=p(d,b))&&f.push(r(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+
e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var t=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,l,c){var d;n=e="";if("number"===typeof c)for(d=0;d<c;d+=1)n+=" ";else"string"===typeof c&&(n=c);if((k=l)&&"function"!==typeof l&&("object"!==typeof l||"number"!==typeof l.length))throw Error("JSON.stringify");return p("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&"object"===typeof b)for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),void 0!==f?b[g]=f:delete b[g]);return e.call(a,d,b)}var d;a=String(a);t.lastIndex=0;t.test(a)&&(a=a.replace(t,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof e?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();

var BTanalytics=JSON.parse((function(){try{if (typeof $.cookie("BTanalytics") === "undefined"){return null;} else {return $.cookie("BTanalytics");}} catch(e){return null;}})());if(null===BTanalytics||"undefined"==typeof BTanalytics)BTanalytics={};

var uPref=JSON.parse((function(){try{if (typeof $.cookie("uPref") === "undefined"){return null;} else {return $.cookie("uPref");}} catch(e){return null;}})());if(null===uPref||"undefined"==typeof uPref)uPref={};
var BTcookieDomain = (function(){var thisDomain = (function(){ if (window.location.hostname.indexOf('abercrombie.') > -1){return 'abercrombie';}if (window.location.hostname.indexOf('hollisterco.') > -1){return 'hollisterco';}if (window.location.hostname.indexOf('abercrombiekids.') > -1){return 'abercrombiekids';}return window.location.hostname;})();arrDomain = window.location.hostname.toLowerCase().split('.');for (i=0;i<arrDomain.length;i++) {if (arrDomain[i] == thisDomain) {cookieDomainPeriods = arrDomain.length-i;}}return '.'+arrDomain.slice(-cookieDomainPeriods).join('.');})();

var BTcookieDate = new Date ((function(){var dt = new Date();return dt.setFullYear(dt.getFullYear() + 10);})());

//If PDP and hierarchy is remembered, set the PDP page's hierarcy
try {
    if ($('#catalog-productpageview, #catalog-product').length > 0 && typeof BTanalytics.pCategoryHier != 'undefined') {
        ANF.catalog.data = JSON.parse(BTanalytics.pCategoryHier);
    }
} catch(e) {}

//If not a PDP page, remember this hierarchy for later
try {
    if ($('#catalog-productpageview, #catalog-product').length == 0 ) {
        BTanalytics.pCategoryHier = JSON.stringify(ANF.catalog.data);
    }
} catch(e) {}
/*(function () { 
    var _bt_splitTesting_cookieName = "BTrand";            // Name of the cookie to use. Be sure to not repeat another test's / 
    if (bt_cookie(_bt_splitTesting_cookieName) == "") { 
        var _bt_splitTesting_cookieExpiration = 365;   // Number of days for the cookie to live / 
    	var _bt_splitTesting_cookiePath = "/";         // Path for cookie / 
		var rnd = BrightTag.Random.integer() % 100;    // Get a random number 0-99 / 
		var date = new Date();

		date.setTime(date.getTime()+(_bt_splitTesting_cookieExpiration*86400000)); 
		var expires = date.toGMTString();
		var cookieValue = _bt_splitTesting_cookieName + "=" + rnd + ";path="+_bt_splitTesting_cookiePath + ";expires=" + expires; 
		//document.cookie = cookieValue;
	}
})();
*/
try {
    $(ANF).on('shippingOptions:loaded', function(){
        //$(window).trigger('analytics.shippingOptions:loaded'); 
    });
    
    $(ANF).on('autocomplete:focused', function(){
        $(window).trigger('analytics.autocomplete','checkout:autocomplete:address line 1 focus'); 
    });
    
    $('.autocomplete_address-not-found').on('click', function(){
        $(window).trigger('analytics.autocomplete','checkout:autocomplete:canceled'); 
    });
    
    $(ANF).on('autocomplete:suggestion:selected', function(){
        $(window).trigger('analytics.autocomplete','checkout:autocomplete:suggestion-selected'); 
    });
    
    $(ANF).on('autocomplete:suggestions:noneFound', function(){
        $(window).trigger('analytics.autocomplete','checkout:autocomplete:no address found'); 
    });

    $(ANF).on('pudos:submittingForm',function(){
        $(window).trigger('pudos:submittingForm'); 
    });
    
    
    $(ANF).on('pudos:searchCompleted',function(){
        $(window).trigger('pudos:searchCompleted'); 
    });
    
    
    $(ANF).on('pudos:searchCached',function(){
        $(window).trigger('pudos:searchCompleted'); 
    });

    $(ANF).on('pudos:searchNoResults',function(){
        $(window).trigger('pudos:searchNoResults'); 
    });
    
} catch(e) {
}

try {
    $(ANF).on('dynamicCurrency:checkPayment:inValid', function(){
        $(window).trigger('analytics.dynamicCurrency','inValid:dynamicCurrency:checkPayment'); 
    });

    $(ANF).on('dynamicCurrency:checkCountry:inValid', function(){
        $(window).trigger('analytics.dynamicCurrency','inValid:dynamicCurrency:checkCountry'); 
    });

    $(ANF).on('dynamicCurrency:checkPayPalPayment:inValid', function(){
        $(window).trigger('analytics.dynamicCurrency','inValid:dynamicCurrency:checkPayPalPayment'); 
    });

    $(ANF).on('dynamicCurrency:checkGiftCard:inValid', function(){
        $(window).trigger('analytics.dynamicCurrency','inValid:dynamicCurrency:checkGiftCard'); 
    });
} catch(e) {
}

try {
    $(ANF).on('findAStore:searched', function(){
        $(window).trigger('analytics.findAStore:searched'); 
    });
} catch(e) {
}

try {
    $(ANF).on('analytics.gridProductsLoaded',function(){
        $(window).trigger('analytics.gridProductsLoaded'); 
    })
} catch(e) {
}

try {
    $(ANF).on('cartReminder:load',function(event, data){
        $(window).trigger('cartReminder:load',[{name:event.name,eligible:event.eligible}]); 
    })
    $(ANF).on('cartReminder:eligible',function(){
        $(window).trigger('cartReminder:eligible'); 
    })
} catch(e) {
}

try {
    $(ANF).on('AnalyticsTagging:ProductQualified',function(event, data){
        $(window).trigger('AnalyticsTagging:ProductQualified',[{productId:data.productId,sku:data.sku}]); 
    })
} catch(e) {
}