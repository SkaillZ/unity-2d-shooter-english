/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

var hljs=new function(){function l(o){return o.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function b(p){for(var o=p.firstChild;o;o=o.nextSibling){if(o.nodeName=="CODE"){return o}if(!(o.nodeType==3&&o.nodeValue.match(/\s+/))){break}}}function h(p,o){return Array.prototype.map.call(p.childNodes,function(q){if(q.nodeType==3){return o?q.nodeValue.replace(/\n/g,""):q.nodeValue}if(q.nodeName=="BR"){return"\n"}return h(q,o)}).join("")}function a(q){var p=(q.className+" "+q.parentNode.className).split(/\s+/);p=p.map(function(r){return r.replace(/^language-/,"")});for(var o=0;o<p.length;o++){if(e[p[o]]||p[o]=="no-highlight"){return p[o]}}}function c(q){var o=[];(function p(r,s){for(var t=r.firstChild;t;t=t.nextSibling){if(t.nodeType==3){s+=t.nodeValue.length}else{if(t.nodeName=="BR"){s+=1}else{if(t.nodeType==1){o.push({event:"start",offset:s,node:t});s=p(t,s);o.push({event:"stop",offset:s,node:t})}}}}return s})(q,0);return o}function j(x,v,w){var p=0;var y="";var r=[];function t(){if(x.length&&v.length){if(x[0].offset!=v[0].offset){return(x[0].offset<v[0].offset)?x:v}else{return v[0].event=="start"?x:v}}else{return x.length?x:v}}function s(A){function z(B){return" "+B.nodeName+'="'+l(B.value)+'"'}return"<"+A.nodeName+Array.prototype.map.call(A.attributes,z).join("")+">"}while(x.length||v.length){var u=t().splice(0,1)[0];y+=l(w.substr(p,u.offset-p));p=u.offset;if(u.event=="start"){y+=s(u.node);r.push(u.node)}else{if(u.event=="stop"){var o,q=r.length;do{q--;o=r[q];y+=("</"+o.nodeName.toLowerCase()+">")}while(o!=u.node);r.splice(q,1);while(q<r.length){y+=s(r[q]);q++}}}}return y+l(w.substr(p))}function f(q){function o(s,r){return RegExp(s,"m"+(q.cI?"i":"")+(r?"g":""))}function p(y,w){if(y.compiled){return}y.compiled=true;var s=[];if(y.k){var r={};function z(A,t){t.split(" ").forEach(function(B){var C=B.split("|");r[C[0]]=[A,C[1]?Number(C[1]):1];s.push(C[0])})}y.lR=o(y.l||hljs.IR,true);if(typeof y.k=="string"){z("keyword",y.k)}else{for(var x in y.k){if(!y.k.hasOwnProperty(x)){continue}z(x,y.k[x])}}y.k=r}if(w){if(y.bWK){y.b="\\b("+s.join("|")+")\\s"}y.bR=o(y.b?y.b:"\\B|\\b");if(!y.e&&!y.eW){y.e="\\B|\\b"}if(y.e){y.eR=o(y.e)}y.tE=y.e||"";if(y.eW&&w.tE){y.tE+=(y.e?"|":"")+w.tE}}if(y.i){y.iR=o(y.i)}if(y.r===undefined){y.r=1}if(!y.c){y.c=[]}for(var v=0;v<y.c.length;v++){if(y.c[v]=="self"){y.c[v]=y}p(y.c[v],y)}if(y.starts){p(y.starts,w)}var u=[];for(var v=0;v<y.c.length;v++){u.push(y.c[v].b)}if(y.tE){u.push(y.tE)}if(y.i){u.push(y.i)}y.t=u.length?o(u.join("|"),true):{exec:function(t){return null}}}p(q)}function d(D,E){function o(r,M){for(var L=0;L<M.c.length;L++){var K=M.c[L].bR.exec(r);if(K&&K.index==0){return M.c[L]}}}function s(K,r){if(K.e&&K.eR.test(r)){return K}if(K.eW){return s(K.parent,r)}}function t(r,K){return K.i&&K.iR.test(r)}function y(L,r){var K=F.cI?r[0].toLowerCase():r[0];return L.k.hasOwnProperty(K)&&L.k[K]}function G(){var K=l(w);if(!A.k){return K}var r="";var N=0;A.lR.lastIndex=0;var L=A.lR.exec(K);while(L){r+=K.substr(N,L.index-N);var M=y(A,L);if(M){v+=M[1];r+='<span class="'+M[0]+'">'+L[0]+"</span>"}else{r+=L[0]}N=A.lR.lastIndex;L=A.lR.exec(K)}return r+K.substr(N)}function z(){if(A.sL&&!e[A.sL]){return l(w)}var r=A.sL?d(A.sL,w):g(w);if(A.r>0){v+=r.keyword_count;B+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function J(){return A.sL!==undefined?z():G()}function I(L,r){var K=L.cN?'<span class="'+L.cN+'">':"";if(L.rB){x+=K;w=""}else{if(L.eB){x+=l(r)+K;w=""}else{x+=K;w=r}}A=Object.create(L,{parent:{value:A}});B+=L.r}function C(K,r){w+=K;if(r===undefined){x+=J();return 0}var L=o(r,A);if(L){x+=J();I(L,r);return L.rB?0:r.length}var M=s(A,r);if(M){if(!(M.rE||M.eE)){w+=r}x+=J();do{if(A.cN){x+="</span>"}A=A.parent}while(A!=M.parent);if(M.eE){x+=l(r)}w="";if(M.starts){I(M.starts,"")}return M.rE?0:r.length}if(t(r,A)){throw"Illegal"}w+=r;return r.length||1}var F=e[D];f(F);var A=F;var w="";var B=0;var v=0;var x="";try{var u,q,p=0;while(true){A.t.lastIndex=p;u=A.t.exec(E);if(!u){break}q=C(E.substr(p,u.index-p),u[0]);p=u.index+q}C(E.substr(p));return{r:B,keyword_count:v,value:x,language:D}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:l(E)}}else{throw H}}}function g(s){var o={keyword_count:0,r:0,value:l(s)};var q=o;for(var p in e){if(!e.hasOwnProperty(p)){continue}var r=d(p,s);r.language=p;if(r.keyword_count+r.r>q.keyword_count+q.r){q=r}if(r.keyword_count+r.r>o.keyword_count+o.r){q=o;o=r}}if(q.language){o.second_best=q}return o}function i(q,p,o){if(p){q=q.replace(/^((<[^>]+>|\t)+)/gm,function(r,v,u,t){return v.replace(/\t/g,p)})}if(o){q=q.replace(/\n/g,"<br>")}return q}function m(r,u,p){var v=h(r,p);var t=a(r);if(t=="no-highlight"){return}var w=t?d(t,v):g(v);t=w.language;var o=c(r);if(o.length){var q=document.createElement("pre");q.innerHTML=w.value;w.value=j(o,c(q),v)}w.value=i(w.value,u,p);var s=r.className;if(!s.match("(\\s|^)(language-)?"+t+"(\\s|$)")){s=s?(s+" "+t):t}r.innerHTML=w.value;r.className=s;r.result={language:t,kw:w.keyword_count,re:w.r};if(w.second_best){r.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function n(){if(n.called){return}n.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),b).filter(Boolean).forEach(function(o){m(o,hljs.tabReplace)})}function k(){window.addEventListener("DOMContentLoaded",n,false);window.addEventListener("load",n,false)}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=m;this.initHighlighting=n;this.initHighlightingOnLoad=k;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(q,r){var o={};for(var p in q){o[p]=q[p]}if(r){for(var p in r){o[p]=r[p]}}return o}}();hljs.LANGUAGES.bash=function(a){var g="true false";var e="if then else elif fi for break continue while in do done echo exit return set declare";var c={cN:"variable",b:"\\$[a-zA-Z0-9_#]+"};var b={cN:"variable",b:"\\${([^}]|\\\\})+}"};var h={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE,c,b],r:0};var d={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};var f={cN:"test_condition",b:"",e:"",c:[h,d,c,b],k:{literal:g},r:0};return{k:{keyword:e,literal:g},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},c,b,a.HCM,h,d,a.inherit(f,{b:"\\[ ",e:" \\]",r:0}),a.inherit(f,{b:"\\[\\[ ",e:" \\]\\]"})]}}(hljs);hljs.LANGUAGES.cs=function(a){return{k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},a.CLCM,a.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a.ASM,a.QSM,a.CNM]}}(hljs);hljs.LANGUAGES.ruby=function(e){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var j="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};var c={cN:"yardoctag",b:"@[A-Za-z]+"};var k=[{cN:"comment",b:"#",e:"$",c:[c]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[c],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];var d={cN:"subst",b:"#\\{",e:"}",l:a,k:g};var i=[e.BE,d];var b=[{cN:"string",b:"'",e:"'",c:i,r:0},{cN:"string",b:'"',e:'"',c:i,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:i},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:i},{cN:"string",b:"%[qw]?{",e:"}",c:i},{cN:"string",b:"%[qw]?<",e:">",c:i,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:i,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:i,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:i,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:i,r:10}];var h={cN:"function",bWK:true,e:" |$|;",k:"def",c:[{cN:"title",b:j,l:a,k:g},{cN:"params",b:"\\(",e:"\\)",l:a,k:g}].concat(k)};var f=k.concat(b.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(k)},h,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:b.concat([{b:j}]),r:0},{cN:"symbol",b:a+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:k.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[e.BE,d]}]),r:0}]));d.c=f;h.c[1].c=f;return{l:a,k:g,c:f}}(hljs);hljs.LANGUAGES.diff=function(a){return{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}(hljs);hljs.LANGUAGES.javascript=function(a){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",i:"\\n",c:[{b:"\\\\/"}]},{b:"<",e:">;",sL:"xml"}],r:0},{cN:"function",bWK:true,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[a.CLCM,a.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}}(hljs);hljs.LANGUAGES.css=function(a){var b={cN:"function",b:a.IR+"\\(",e:"\\)",c:[a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:"import page media charset",c:[b,a.ASM,a.QSM,a.NM]},{cN:"tag",b:a.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[b,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}(hljs);hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}(hljs);hljs.LANGUAGES.http=function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}}(hljs);hljs.LANGUAGES.java=function(a){return{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},a.CLCM,a.CBLCLM,a.ASM,a.QSM,{cN:"class",bWK:true,e:"{",k:"class interface",i:":",c:[{bWK:true,k:"extends implements",r:10},{cN:"title",b:a.UIR}]},a.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}}(hljs);hljs.LANGUAGES.php=function(a){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var b=[a.inherit(a.ASM,{i:null}),a.inherit(a.QSM,{i:null}),{cN:"string",b:'b"',e:'"',c:[a.BE]},{cN:"string",b:"b'",e:"'",c:[a.BE]}];var c=[a.BNM,a.CNM];var d={cN:"title",b:a.UIR};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",c:[a.CLCM,a.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"}]},{cN:"comment",eB:true,b:"__halt_compiler.+?;",eW:true},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[a.BE]},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"},e,{cN:"function",bWK:true,e:"{",k:"function",i:"\\$|\\[|%",c:[d,{cN:"params",b:"\\(",e:"\\)",c:["self",e,a.CBLCLM].concat(b).concat(c)}]},{cN:"class",bWK:true,e:"{",k:"class",i:"[:\\(\\$]",c:[{bWK:true,eW:true,k:"extends",c:[d]},d]},{b:"=>"}].concat(b).concat(c)}}(hljs);hljs.LANGUAGES.python=function(a){var f={cN:"prompt",b:"^(>>>|\\.\\.\\.) "};var c=[{cN:"string",b:"(u|b)?r?'''",e:"'''",c:[f],r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',c:[f],r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[a.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[a.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[a.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[a.BE]}].concat([a.ASM,a.QSM]);var e={cN:"title",b:a.UIR};var d={cN:"params",b:"\\(",e:"\\)",c:["self",a.CNM,f].concat(c)};var b={bWK:true,e:":",i:"[${=;\\n]",c:[e,d],r:10};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:c.concat([f,a.HCM,a.inherit(b,{cN:"function",k:"def"}),a.inherit(b,{cN:"class",k:"class"}),a.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}}(hljs);hljs.LANGUAGES.sql=function(a){return{cI:true,c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}(hljs);hljs.LANGUAGES.ini=function(a){return{cI:true,i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM]}]}]}}(hljs);hljs.LANGUAGES.perl=function(e){var a="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var d={cN:"subst",b:"[$@]\\{",e:"\\}",k:a,r:10};var b={cN:"variable",b:"\\$\\d"};var i={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var f=[e.BE,d,b,i];var h={b:"->",c:[{b:e.IR},{b:"{",e:"}"}]};var g={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var c=[b,i,e.HCM,g,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},h,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:f,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:f,r:5},{cN:"string",b:"'",e:"'",c:[e.BE],r:0},{cN:"string",b:'"',e:'"',c:f,r:0},{cN:"string",b:"`",e:"`",c:[e.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,g,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bWK:true,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];d.c=c;h.c[1].c=c;return{k:a,c:c}}(hljs);hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}}(hljs);hljs.LANGUAGES.cpp=function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};return{k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}}(hljs);

	// Check for touch screen and set global variable
	var touchEnabled = (Modernizr.touch) ? true : false;
	var masterW;

	$(document).ready(function(){

    var t = $('.copy').text();
    if( t ) $('.copy').text( t.replace('2014','2015') );

		initCore();

		// Make third level nav stuck
		if(masterW > 719 && $('.section-nav ul li').length > 0){

			var wrap = $('.section-nav .g12'),
					offset = wrap.offset().top;

			wrap.prepend('<h2>'+ $('.sub-nav a.active-trail').text() +'</h2>');
			wrap.wrapInner('<div class="wrap"></div>');
			$('ul',wrap).append('<li class="top"></li>');

			$('.section-nav li.top').click(function(e){ $('html, body').animate({ scrollTop: 0 }, 250, 'swing'); });

			$(window).scroll(function(){
				var p = $(window).scrollTop();
				(p > offset) ? $('.section-nav').addClass('nav-stuck') : $('.section-nav').removeClass('nav-stuck');
			});

		}

		// Toggle menu
		$('.mq-navbtn').live('click', function(){

			$('#master-header').toggleClass('mq-nav-visible');

			var bh = document.documentElement.scrollHeight;
			if(bh == 0) bh = document.body.scrollHeight;
			if(bh < parseInt($('#master-header').css('height'))) bh = parseInt($('#master-header').css('height'));

			$('#master-header').css('height', bh);
			$('.overlay').css('height', bh);
			$('.overlay').show();
			($('iframe').css('display') == 'none') ? $('iframe, object').show() : $('iframe, object').hide();
		});

		$('.overlay').bind('click', function(){ closeMenu(); });
		$('.overlay').hammer().bind('tap', function(){ closeMenu(); });

		function closeMenu(){
			$('#master-header').removeClass('mq-nav-visible').css('height','auto');
			$('iframe, object').show();
			$('.overlay').hide();
		}

		$('.section-nav .g12').click(function(e){
			if(masterW < 441)
				$('.section-nav ul').toggle();
		});

		// Toggle language selector
		$('.mq-langbtn').live('click', function(){
			if($('#flag-list a').length < 1){
				$('#flag-list').append($('.lang-selector').html());
			}
			$('#flag-list').toggle();
		});
		$('#flag-list .flag').live('click', function(){
			var url = $('a',this).attr('href');
			location.href = url;
		});

		// Hide elements on body click/touch
		$('html').bind('click', function(e){
			if($(e.target).closest('.section-nav .g12').length == 0 && masterW < 441){
				$('.section-nav ul').removeAttr('style');
			} else if($(e.target).closest('.select-box').length == 0){
				$('.select-box ul').hide();
			}
		});

		// Sets prefered language cookie
		$('.flag a').click(function(e){
			var code = $(this).parent().attr('class').split(' ')[1].split('-')[1];
			$.cookie('lang_pref', code, { expires: 30, path: '/', domain: 'unity3d.com' });
		});

		// Quick animate anything
		$('.animate').click(function(e){
			e.preventDefault();
			var args = {}; var v = $(this).attr('data-values').split('|'); var val = parseInt(v[2]);
			if(v[3].length != -1){ if(parseInt($('#'+v[0]).css(v[1])) == val){ val = v[3]; } } args[v[1]] = val;
			$('#'+v[0]).stop().animate(args,300, function(){
				// Add-ons
				if(v[0] == 'lang-selector') langLabelClick();
			});
		});

		// Toggle anything
		// [gs] 20140324
		$('.toggle, .tabs a').on('click', function(e){
			var el = $(this).data('target');
			if( !el ) return;
			e.preventDefault();
			if(el.indexOf('|') < 1){
				$(el).toggle();//($(el).css('display') == 'block') ? $(el).hide() : $(el).show();
			} else {
				el = el.split('|');
				$('.' + el[1]).hide();
				$('#' + el[0]).fadeIn(300);
			}
			if($('.tabs').length > 0) {
				$('.tabs a').removeClass('selected');
				$('.tabs a[data-target="'+ el[0] +'|'+ el[1] +'"]').addClass('selected');
			}
		});

		// Custom select box
		$('.select-box .label').click(function(e){
			var index = $(this).parent().index();
			$.each($('.select-box .label'), function(i,l){
				if($(this).parent().index() != index)
					$('ul',$(this).parent()).hide();
			});
			var el = $(this).parent().find('ul');
			(el.css('display') == 'none') ? el.slideDown(300) : el.hide();
		});

		// Custom select box options
		$('.select-box li').live('click',function(e){
			$(this).parent().hide();
			$(this).parent().parent().find('.current').text($(this).text());
		});

		// Expand/Contract
		$('.expand').live('click',function(e){
			e.preventDefault();
			$(this).toggleClass('expanded');
			var el = $(this).next('.info');
			$(el).toggle('fast');
		});

		// Anchor Jump
		// [gs] 20121108
		$('a[name]:not([id])').each(function(){this.id=this.name;this.name='';});
		$('.jump, .quickjump a[href^="#"]').on('click',function(e){
			e.preventDefault();
			var url = $(this).attr('href'), id = url.split("#")[1];
			scroll2('#'+id,function(){
				if (typeof(history.pushState) == 'function') history.pushState(null,null,url);
				else location.hash=id;
			});
		});
		var a = location.hash;
		if( a && $(a).length > 0 ) {
			var t = $(a)[0], id= a.split("#")[1];
			t.id=id+"_";
			$(window).on('load',function(){scroll2(a+'_',function(){t.id=id});});
		}
		// Auto Code Link to Document
		/*
		$("code").each(function(){
			var r = $(this).text().match(/(\w+)\.(\w+)(\(\))?/);
			if( r ) $(this).addClass("auto-code-link").click(function(){
				window.open("/developer/document/manual/ScriptReference/"+r[1]+(r[3]?".":"-")+r[2]+".html");
			});
		});
		*/

		// Tool buttons tip
		if(!touchEnabled){
			$('.tt').hover(function(){var d = $(this).attr('data-distance').split('|');$('.tip', $(this)).css('top',d[0]+'px');(d[2] == 'top') ? $('.tip', $(this)).addClass('t') : $('.tip', $(this)).addClass('b');centerElement($(this), '.tip', true);$(this).find('.tip').stop(true, true).removeClass('hide').animate({ 'top': d[1], 'opacity': 1 }, 200 );
			},function(){var d = $(this).attr('data-distance').split('|');$(this).find('.tip').stop(true, false).animate({ 'top': d[0], 'opacity': 0 }, 200, function(){$(this).addClass('hide');});});
		}

		$(window).resize(function(){
			$('.background, #content, #master-header').removeAttr('style').removeClass('mq-nav-visible');
			$('.overlay').hide();
			masterW = parseInt($('.gw').css('width'));
			menuRendering();
		});

		//position fix
		if( $(".pos-fix").each( function() {
				var orgy = $(this).position().top;
				var offy = $(this).attr('data-pos-fix-off-y') || 10;
				var area = $( $(this).attr('data-pos-fix-area') );
				if( area.length > 0 ) {
					var of = $(area).css('overflow');
					$(area).css('overflow','hidden');
					var h = area.height();
					var maxy = h + area.position().top - $(this).height() - 40;
					if( maxy > 0 ) $(this).data( "pos-fix-max-y", maxy );
					$(area).css('overflow',of);
				}
				$(this).data( "pos-fix-org-top", $(this).css('top') || 'auto' );
				$(this).data( "pos-fix-org-y", orgy - offy );
				$(this).data( "pos-fix-off-y", offy+'px' );

			} ).length > 0 )
		{
			$(window).scroll( function(e) {
				var y = $(window).scrollTop();
				$(".pos-fix").each( function() {
					var orgy = $(this).data( "pos-fix-org-y" );
					var maxy = $(this).data( "pos-fix-max-y" );
					if( y < orgy ) {
						if( $(this).css('position') != 'absolute' ) {
							$(this).css({
								position:'absolute',
								top:$(this).data( "pos-fix-org-top" ),
							});
						}
					} else if( maxy && y > maxy ) {
						$(this).css({
							position:'absolute',
							top:maxy+'px',
						});
					} else {
						if( $(this).css('position') != 'fixed' ) {
							var offy = $(this).data( "pos-fix-off-y" );
							$(this).css({
								position:'fixed',
								top:offy
							});
						}
					}
				} );
			} );
			$(window).scroll();
		}

		//RSS LIST
		$("div[data-rss-url]").each(function(index, element) {
			var months = ['','01','02','03','04','05','06','07','08','09','10','11','12'];
			var limit = $(this).attr('data-rss-limit') || 3;
			var url = $(this).data("rss-url");
			if( url.indexOf("http") == -1 ) url = "http://japan.unity3d.com"+url;
			url = url + "&_="+Math.floor((Number)(new Date())/1000);

			// Create Google Feed API address
			var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="
									+ encodeURIComponent(url) + "&num=" + limit + "&output=json_xml";

			// Send request
			$.getJSON(api, function(data){

				// Check for error
				if (data.responseStatus == 200) {
					var postsHTML = [];

					$(data.responseData.feed.entries).each(function(i,e){
						var pubDate = new Date(e.publishedDate);
						var month = pubDate.getFullYear()+' / '+months[pubDate.getMonth() + 1];
						var day = pubDate.getDate();
						var c = $(e.content);
						var u = $("a",c).attr("href");

						var html = '';
						html += '<div class="post mb5" onClick="window.open(\''+ u +'\');return false;">';
						html += '	<div class="date">';
						html += '		<div class="month tc cl">'+ month +'</div>';
						html += '		<div class="day tc">'+ day +'</div>';
						html += '	</div>';
						html += '	<div class="text">';
						html += '		<h4>'+ e.title +'</h4>'+ e.content;
						html += '	</div>';
						html += '	<div class="clear"></div>';
						html += '</div>';

						postsHTML.push(html);
					});

					$(element).html(postsHTML.join(''));
					$("div.text > div", element).addClass("rss-thumb");

				} else {
					// Handle error
				};
			});
		});

		//RSS ITEM CLICK HANDLER
		$("div[data-rss-url], div[data-inline-url]").on("click",".rss-item",function(e){
			var href = $("a",this).attr("href");
			var target = $("a",this).attr("target");
			if( href ) if( href.indexOf("japan.unity3d.com") > -1 && (!target||target=="_self") )
				location.href = href;
			else
				open( href, target );
		} ).on("click",".rss-item a",function(e){
			e.preventDefault();
		} );

		// Inline loader
		$('div[data-inline-url]').addClass('loading').each(function(){
			var f = $(this), url = $(this).attr('data-inline-url');
			$.ajax( {
				url: url,
				success: function( d ) {
					f.html(d).removeClass('loading');
				},
				error: function(req,err,e) {
					f.removeClass('loading').html('<span class="error">LOADING ERROR</span>');
					log( err );
				}
			});
		});

	});

	// Init function
	function initCore(){
		masterW = parseInt($('.gw').css('width'));
		menuRendering();
		l.lang = document.getElementById('language').value;
	}

	// Control overflow on language wrapper
	function langLabelClick(){
		(parseInt($('#lang-selector').css('width')) > 1) ? $('#lang-selector').css('overflow','visible') : $('#lang-selector').css('overflow','hidden');
	}

	// Sticky
	// [gs] 20121108
	function sticky(){
		$(calc);
		function calc() {
			if( $('#sticky').length == 0 ) return;
			var offy = $('#sticky').attr('data-pos-fix-off-y') || 0;
			var offset = $('#sticky').offset().top - offy;
			var posx = $('#sticky').offset().left+"px";
			var static = $('#sticky').css('position');
			var area = $( $('#sticky').attr('data-pos-fix-area') );
			var maxy = 1000000;
			if( area.length > 0 ) {
				var of = $(area).css('overflow');
				$(area).css('overflow','hidden');
				var maxy = area.height() + area.position().top - $('#sticky').height();
				$(area).css('overflow',of);
			}
			if(!touchEnabled && masterW > 768){
				$('body').append('<div class="sticky-top"></div>');
				$('.sticky-top').click(function(e){ $('html, body').animate({ scrollTop: 0 }, 500, 'swing'); });
			}
			$(window).scroll(function(){
				if(masterW > 719){
					var p = $(window).scrollTop();
					if( p<offset ) $('#sticky').css('position',static).css({'top':''});
					else $('#sticky').css('position', 'fixed').css({'top':(p>maxy ? maxy-p : offy)+'px'});
					(p > 600) ? $('.sticky-top').stop(true,true).fadeIn(300) : $('.sticky-top').stop(true,true).fadeOut(300);
				}
			}).trigger('scroll');
		}
	}

	// Returns current OS
	function getOS(){
		if(navigator.appVersion.indexOf("Win") != -1){
			var os = "windows";
		} else if(navigator.appVersion.indexOf("Mac") != -1){
			var os = "osx";
		} else if(navigator.appVersion.indexOf("X11") != -1 || navigator.appVersion.indexOf("Linux") != -1){
			var os = "na";
		} else {
			var os = "na";
		}
		return os;
	}

	// Returns current host
	function getHost(){
		var url = location.href;
		if(url.indexOf('http://unity3d.com') > -1)
			url = 'http://unity3d.com/';
		else if(url.indexOf('http://china.unity3d.com') > -1)
			url = 'http://china.unity3d.com/';
		else if(url.indexOf('http://spanish.unity3d.com') > -1)
			url = 'http://spanish.unity3d.com/';
		else if(url.indexOf('http://portuguese.unity3d.com') > -1)
			url = 'http://portuguese.unity3d.com/';
		else if(url.indexOf('http://testsite.unity3d.com') > -1)
			url = 'http://testsite.unity3d.com/';
		else if(url.indexOf('http://testsite.hq.unity3d.com') > -1)
			url = 'http://testsite.hq.unity3d.com/';
		else if(url.indexOf('/localhost/') > 0)
			url = 'http://localhost/unity/html/';
		else
			url = 'http://unity3d.com/';
		return url;
	}

	// Re-render second and third level
	function menuRendering(){
		// Third level menu
		if(masterW < 441 && $('.section-nav ul').length > -1){
			if($('.section-nav .label').length == 0){
				var label = $('.section-nav li[class=selected] a').text();
				$('.section-nav .g12').prepend('<div class="label">'+ label +'</div>');
			}
		} else if(masterW > 440 && $('.section-nav .label').length > 0){
			$('.section-nav .label').remove();
 			$('.section-nav ul').removeAttr('style');
		}

		// Second level menu
		if(masterW < 441 && $('.rs').length < 1){
			$('.tn-unity').append('<ul class="rs">'+ $('#sn-unity').html() +'</ul>');
			$('.tn-gallery').append('<ul class="rs">'+ $('#sn-gallery').html() +'</ul>');
			$('.tn-store').append('<ul class="rs">'+ $('#sn-store').html() +'</ul>');
			$('.tn-assetstore').append('<ul class="rs">'+ $('#sn-assetstore').html() +'</ul>');
			$('.tn-community').append('<ul class="rs">'+ $('#sn-community').html() +'</ul>');
			$('.tn-company').append('<ul class="rs">'+ $('#sn-company').html() +'</ul>');
		} else if(masterW > 440){
			$('.rs').remove();
		}

	}

	// Menu function, selects the correct menu/submenu & adds class to body
	function renderMenu(path){

		var primary, secondary, bodyClass;

		if(path.indexOf('/') > 0){
			path = path.split('/');
			primary = path[0];
			secondary = path[0] + '-' + path[1];
			bodyClass = (path.length > 2) ? secondary + '-' + path[2] : secondary;
			$('.sn-' + secondary).addClass('selected')
		} else {
			primary = path;
			bodyClass = path;
		}

		$('#sn-' + path).removeAttr('style');
		$('.tn-' + primary).addClass('selected');
		$('body').addClass(bodyClass);

		(secondary != '') ? $('.sn-' + secondary).addClass('selected') : '';
	}

	function calculateRatio(originalW,targetW){
		var ratio = targetW / originalW;
		return ratio;
	}

	function modalMessage(el){ el.fadeIn(300);setTimeout(function(){ el.fadeOut(300); }, 3000); }
	function centerElement(parent,child,nested){if(nested){var el = parent.find(child);el.css('width', el.width());el.css('left',parent.outerWidth() - el.outerWidth()/2 - parent.outerWidth()/2);}}
	function getHeight(){ if(typeof window.innerHeight != 'undefined'){var viewportheight = window.innerHeight;} else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientHeight != 0){var viewportheight = document.documentElement.clientHeight;} else {var viewportheight = document.getElementsByTagName('body')[0].clientHeight;} return viewportheight; }
	function getWidth(){ if (typeof window.innerWidth != 'undefined'){var viewportwidth = window.innerWidth;} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0){var viewportwidth = document.documentElement.clientWidth;} else {var viewportwidth = document.getElementsByTagName('body')[0].clientWidth;} return viewportwidth; }

	// Image preloader
	var imgList = [];
	$.extend({
		preload: function(imgArr, option) {
			var setting = $.extend({ init: function(loaded, total) {},loaded: function(img, loaded, total) {},loaded_all: function(loaded, total) {} }, option); var total = imgArr.length; var loaded = 0; setting.init(0, total);
			for(var i in imgArr) { imgList.push($("<img />").attr("src", imgArr[i]).load(function(){ loaded++; setting.loaded(this, loaded, total); if(loaded == total) { setting.loaded_all(loaded, total); } })); }
		}
	});

	// Page Scroll
	function scroll2(o,hook){
		var of = $(o).offset();
		if( !of ) of = $('a[name="'+o.replace('#','')+'"]').offset();
		if( !of ) return false;
		var y = of.top - ( of.top < 10 ? 0 : 10 );
		var hw = $(window).height();
		var hd = $(document).height();
		var p = ( y + hw <= hd ) ? y : hd - hw;
		var s = 500 + Math.abs( $(window).scrollTop() - p ) / 15;
		$('html, body').animate({ scrollTop: p }, s > 1000 ? 1000 : s, 'swing', hook);
	}

	// Panning
	function pan(){
		$(window).load(function(){function a(a){var b=a.pageX-$imagePan.offset().left;var c=a.pageY-$imagePan.offset().top;var d=b/containerWidth;var e=c/containerHeight;var f=-((totalContentW-containerWidth-containerWidth)*d);var g=-((totalContentH-containerHeight-containerHeight)*e);var h=b-f;var i=f-b;var j=c-g;var k=g-c;var l=$imagePan_panning.css("marginLeft").replace("px","");var m=$imagePan_panning.css("marginTop").replace("px","");var n=500;var o="easeOutCirc";if(b>f||c>g){$imagePan_container.stop().animate({left:-h-l,top:-j-m},n,o)}else if(b<f||c<g){$imagePan_container.stop().animate({left:i-l,top:k-m},n,o)}else{$imagePan_container.stop()}}$outer_container=$("#team-photo");$imagePan_panning=$("#image-w .panning");$imagePan=$("#image-w");$imagePan_container=$("#image-w .image-c");$imagePan_panning.css("margin-top",($imagePan.height()-$imagePan_panning.height())/2+"px");containerWidth=$imagePan.width();containerHeight=$imagePan.height();totalContentW=$imagePan_panning.width();totalContentH=$imagePan_panning.height();$imagePan_container.css("width",totalContentW).css("height",totalContentH);$imagePan_panning.css("margin-left",($imagePan.width()-$imagePan_panning.width())/2).css("margin-top",($imagePan.height()-$imagePan_panning.height())/2);$imagePan.bind("mousemove",function(b){a(b)})});$(window).resize(function(){$imagePan.unbind("mousemove");$imagePan_container.css("top",0).css("left",0);$(window).load()})
	}
	/* Riloadr.js 1.2.0 (c) 2012 Tubal Martin - MIT license */
	!function(e){typeof define=="function"&&define.amd?define(["jquery"],e):window.Riloadr=e(jQuery)}(function(e){"use strict";function V(t){function ot(){tt(O,h,B),tt(O,p,j),I&&(X=O[T],tt(O,k,F))}function ut(){nt(O,h,B),nt(O,p,j),I&&nt(O,k,F)}function at(e,t){e[m]=0,e[b]=r,e[d]=ft,e[v]=lt,e.src=K(e,a,V),R.splice(t,1)}function ft(){var e=this;e[d]=e[v]=s,e[w]=e[w].replace(E,"$1$2"),d in t&&t[d][u](e),ct()}function lt(){var e=this;v in t&&t[v][u](e),e[m]<D?(e[m]++,e.src=K(e,a,e[b]?st:V,n)):b in z&&!e[b]?(e[m]=0,e[b]=n,e.src=K(e,a,st)):ct()}function ct(){U--,U==0&&S in t&&t[S]()}var o=this,a=t.base||l,f=t.breakpoints||et('"breakpoints" not defined.'),g=t.name||"responsive",E=new RegExp("(^|\\s)"+g+"(\\s|$)"),N=t.defer&&t.defer.toLowerCase()||r,C=t.foldDistance||100,_=t.ignoreLowBandwidth||r,D=t[m]||0,P=t.root||s,H=N==="belowfold"&&!W,B=H&&G(function(){o[x]()},i),j=H&&Y(function(){o[x]()},i),F=H&&Y(function(){O[T]!==X&&(X=O[T],o[x]())},i),R=[],U=0,z,V,st;o[x]=function(t){Z(function(r,i){if(!R[c]||t===n)H&&ot(),e("img."+g,P).each(function(e,t){t&&!t[y]&&(t[y]=n,R.push(t),U++)});if(R[c]){i=0;while(r=R[i])r&&(!H||H&&!Q(r,C))&&(at(r,i),i--),i++}H&&!R[c]&&ut(),r=s})},rt(function(){L=e(O),A=M.body,P=P&&e("#"+P)||A,q=q||J(),z=$(f,q,_),V=z.name,st=z[b],!N||H?o[x]():it(o[x])})}function $(e,t,n){var r=t,i=0,s={},o,u,a,f;while(o=e[i]){u=o.minWidth,a=o.maxWidth,f=o.minDevicePixelRatio;if(t>0){if(u&&a&&t>=u&&t<=a||u&&!a&&t>=u||a&&!u&&t<=a)if(!f||f&&U>=f&&(n||!n&&!z))s=o}else if(r<=0||u<r||a<r)r=u||a||r,s=o;i++}return s}function J(){var e=Math,t=[_.clientWidth,_.offsetWidth,A.clientWidth],n=e.ceil(R/U),r=t[c],i=0,s;for(;i<r;i++)isNaN(t[i])&&(t.splice(i,1),i--);return t[c]&&(s=e.max[a](e,t),isNaN(n)||(s=e.min(n,s))),s||n||0}function K(e,t,n,r){var i=(e.getAttribute("data-base")||t)+(e.getAttribute("data-src")||l);return r&&(i+=(j.test(i)?"&":"?")+"riloadrts="+(new Date).getTime()),i.replace(F,n)}function Q(t,n){return L.height()+L.scrollTop()<=e(t).offset().top-n}function z2(){var e=O.navigator,t=e.connection||e.mozConnection||e.webkitConnection||e.oConnection||e.msConnection||{},n=t.type||"unknown",r=+t.bandwidth||Infinity;return r>0&&r<.1||/^[23]g|3|4$/.test(n+l)}function G(e,t){function f(){u=new Date,o=s,e[a](i,n)}var n,r,i,o,u=0;return function(){var s=new Date,l=t-(s-u);return n=arguments,i=this,l<=0?(u=s,r=e[a](i,n)):o||(o=setTimeout(f,l)),r}}function Y(e,t,n){function f(){u=s,n||e[a](o,r)}var r,i,o,u;return function(){var s=n&&!u;return r=arguments,o=this,clearTimeout(u),u=setTimeout(f,t),s&&(i=e[a](o,r)),i}}function Z(e){var t=Array[E].slice[u](arguments,1);setTimeout(function(){return e[a](s,t)},1)}function et(e){throw new Error("Riloadr: "+e)}function tt(e,t,n){e[H](P+t,n,r)}function nt(e,t,n){e[B](P+t,n,r)}function rt(t){e(t)}function it(e){if(M.readyState===g)e();else{var t=function(){nt(O,o,t),e()};tt(O,o,t)}}var t="on",n=!0,r=!1,i=250,s=null,o="load",u="call",a="apply",f="error",l="",c="length",h="scroll",p="resize",d=t+o,v=t+f,m="retries",g="complete",y="riloaded",b="fallback",w="className",E="prototype",S=t+g,x="loadImages",T="orientation",N="EventListener",C="add"+N,k=T+"change",L,A,O=window,M=O.document,_=M.documentElement,D=C in M,P=D?l:t,H=D?C:"attachEvent",B=D?"remove"+N:"detachEvent",j=/\?/,F=/{breakpoint-name}/gi,I=T in O&&t+k in O,q,R=O.screen.width,U=O.devicePixelRatio||1,z=z2(),W=Object[E].toString[u](O.operamini)==="[object OperaMini]",X;return _[w]=_[w].replace(/(^|\s)no-js(\s|$)/,"$1$2"),V.version="1.3.0",V[E].riload=function(){this[x](n)},V});

	var inlineImages = new Riloadr({
		root: 'content', name: 'ii', defer: 'belowfold', foldDistance: 125, ignoreLowBandwidth: false, retries: 1,
		breakpoints: [
			{name: 's', minWidth: 320, maxWidth: 739, fallback: 'l'},
			//{name: 'medium', maxWidth: 320, minDevicePixelRatio: 2},
			{name: 'm', minWidth: 740, maxWidth: 979, fallback: 'l'},
			{name: 'l', minWidth: 980}
		]
	});

	/* jQuery FlexSlider v2.0, Copyright 2012 WooThemes */
	;(function(d){d.flexslider=function(h,k){var a=d(h),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,s=o?"touchend":"click",l="vertical"===c.direction,m=c.reverse,i=0<c.itemWidth,p="fade"===c.animation,r=""!==c.asNavFor,f={};d.data(h,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
	c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;a.transitions=!c.video&&!p&&c.useCSS&&function(){var b=document.createElement("div"),c=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],d;for(d in c)if(b.style[c[d]]!==void 0){a.pfx=c[d].replace("Perspective","").toLowerCase();
	a.prop="-"+a.pfx+"-transform";return true}return false}();""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();r&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
	(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(b===39||b===37)){b=b===39?a.getTarget("next"):b===37?a.getTarget("prev"):false;a.flexAnimate(b,c.pauseOnAction)}});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=g<0?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){a.pause()},function(){a.manualPause||
	a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());o&&c.touch&&f.touch();(!p||p&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();!d(c.asNavFor).data("flexslider").animating&&
	!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var q=0;q<a.pagingCount;q++)g="thumbnails"===c.controlNav?'<img src="'+a.slides.eq(q).attr("data-thumb")+
	'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});o&&a.controlNavScaffold.delegate("a","click touchstart",function(a){a.preventDefault()})},
	setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});o&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+
	"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+
	e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(s,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});o&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=
	e+"disabled";c.animationLoop||(1===a.pagingCount?a.directionNav.addClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b))}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",
	a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(s,function(b){b.preventDefault();if(d(this).hasClass(e+"pause")){a.pause();a.manualPause=true}else{a.play();a.manualPause=false}});o&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:
	d-b.touches[0].pageX;o=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!o||500<Number(new Date)-k)b.preventDefault(),!p&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/n+2:1),a.setProps(f+j,"setTouch"))}function g(){if(a.animatingTo===a.currentSlide&&!o&&null!==j){var i=m?-j:j,l=0<i?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&20<Math.abs(i)||Math.abs(i)>n/2)?a.flexAnimate(l,
	c.pauseOnAction):a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}h.removeEventListener("touchmove",b,!1);h.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,n,j,k,o=!1;h.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),n=l?a.h:a.w,k=Number(new Date),f=i&&m&&a.animatingTo===a.last?0:i&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:i&&a.currentSlide===a.last?a.limit:i?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+
	a.cloneOffset)*n:(a.currentSlide+a.cloneOffset)*n,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,h.addEventListener("touchmove",b,!1),h.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(i||a.doMath(),p?f.smoothHeight():i?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,
	"setTotal")))},smoothHeight:function(b){if(!l||p){var c=p?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,q,h,k){if(!a.animating&&(a.canAdvance(b)||q)&&a.is(":visible")){if(r&&h)if(q=d(c.asNavFor).data("flexslider"),
	a.atEnd=0===b||b===a.count-1,q.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",q.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();
	i||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(p)a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup);else{var n=l?a.slides.filter(":first").height():a.computedW;i?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=
	0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*n:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*n:m?(a.count-1-b+a.cloneOffset)*n:(b+a.cloneOffset)*n;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(n)})}else a.container.animate(a.args,
	c.animationSpeed,c.easing,function(){a.wrapup(n)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!p&&!i&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;
	c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b){var d=r?a.pagingCount-1:a.last;return r&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!r?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===
	b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,d,e){var f=function(){var e=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;return-1*function(){if(i)return"setTouch"===d?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:e;switch(d){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*
	b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px"}();a.transitions&&(f=l?"translate3d(0,"+f+",0)":"translate3d("+f+",0,0)",e=void 0!==e?e/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",e));a.args[a.prop]=f;(a.transitions||void 0===e)&&a.container.css(a.args)};a.setup=function(b){if(p)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===
	b&&a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing),c.smoothHeight&&f.smoothHeight();else{var g,h;"init"===b&&(a.viewport=d('<div class="flex-viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(h=d.makeArray(a.slides).reverse(),a.slides=d(h),a.container.empty().append(a.slides)));c.animationLoop&&!i&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));
	a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!i?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",
	display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}i||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();i?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+
	d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();i||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===
	d&&!i||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!i||a.pagingCount<a.controlNav.length)i&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+
	":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,
	slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},
	removed:function(){}};d.fn.flexslider=function(h){h=h||{};if("object"===typeof h)return this.each(function(){var a=d(this),c=a.find(h.selector?h.selector:".slides > li");1===c.length?(c.fadeIn(400),h.start&&h.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,h)});var k=d(this).data("flexslider");switch(h){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;
	default:"number"===typeof h&&k.flexAnimate(h,!0)}}})(jQuery);

	/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
	jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})

	/* jQuery Cookie Plugin v1.3 */
	jQuery.cookie=function(a,b,c){if(arguments.length>1&&String(b)!=="[object Object]"){c=jQuery.extend({},c);if(b===null||b===undefined){c.expires=-1}if(typeof c.expires==="number"){var d=c.expires,e=c.expires=new Date;e.setDate(e.getDate()+d)}b=String(b);return document.cookie=[encodeURIComponent(a),"=",c.raw?b:encodeURIComponent(b),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}c=b||{};var f,g=c.raw?function(a){return a}:decodeURIComponent;return(f=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?g(f[1]):null}

	/* Hammer.JS jQuery plugin - https://github.com/EightMedia/hammer.js */
	function Hammer(a,b,c){function x(a){return a.touches?a.touches.length:1}function y(a){a=a||window.event;if(!w){var b=document,c=b.body;return[{x:a.pageX||a.clientX+(b&&b.scrollLeft||c&&c.scrollLeft||0)-(b&&b.clientLeft||c&&b.clientLeft||0),y:a.pageY||a.clientY+(b&&b.scrollTop||c&&c.scrollTop||0)-(b&&b.clientTop||c&&b.clientTop||0)}]}else{var d=[],e;for(var f=0,g=a.touches.length;f<g;f++){e=a.touches[f];d.push({x:e.pageX,y:e.pageY})}return d}}function z(a,b){return Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI}function A(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}function B(a,b){if(a.length==2&&b.length==2){var c=A(a[0],a[1]);var d=A(b[0],b[1]);return d/c}return 0}function C(a,b){if(a.length==2&&b.length==2){var c=z(a[1],a[0]);var d=z(b[1],b[0]);return d-c}return 0}function D(a,b){b.touches=y(b.originalEvent);b.type=a;if(L(d["on"+a])){d["on"+a].call(d,b)}}function E(a){a=a||window.event;if(a.preventDefault){a.preventDefault();a.stopPropagation()}else{a.returnValue=false;a.cancelBubble=true}}function F(){i={};k=false;j=0;f=0;g=0;l=null}function H(c){switch(c.type){case"mousedown":case"touchstart":i.start=y(c);n=(new Date).getTime();j=x(c);k=true;t=c;var d=a.getBoundingClientRect();var e=a.clientTop||document.body.clientTop||0;var o=a.clientLeft||document.body.clientLeft||0;var p=window.pageYOffset||a.scrollTop||document.body.scrollTop;var q=window.pageXOffset||a.scrollLeft||document.body.scrollLeft;r={top:d.top+p-e,left:d.left+q-o};s=true;G.hold(c);if(b.prevent_default){E(c)}break;case"mousemove":case"touchmove":if(!s){return false}u=c;i.move=y(c);if(!G.transform(c)){G.drag(c)}break;case"mouseup":case"mouseout":case"touchcancel":case"touchend":if(!s||l!="transform"&&c.touches&&c.touches.length>0){return false}s=false;v=c;G.swipe(c);if(l=="drag"){D("dragend",{originalEvent:c,direction:h,distance:f,angle:g})}else if(l=="transform"){D("transformend",{originalEvent:c,position:i.center,scale:B(i.start,i.move),rotation:C(i.start,i.move)})}else{G.tap(t)}m=l;D("release",{originalEvent:c,gesture:l});F();break}}function I(b){if(!J(a,b.relatedTarget)){H(b)}}function J(a,b){if(!b&&window.event&&window.event.toElement){b=window.event.toElement}if(a===b){return true}if(b){var c=b.parentNode;while(c!==null){if(c===a){return true}c=c.parentNode}}return false}function K(a,b){var c={};if(!b){return a}for(var d in a){if(d in b){c[d]=b[d]}else{c[d]=a[d]}}return c}function L(a){return Object.prototype.toString.call(a)=="[object Function]"}function M(a,b,c){b=b.split(" ");for(var d=0,e=b.length;d<e;d++){if(a.addEventListener){a.addEventListener(b[d],c,false)}else if(document.attachEvent){a.attachEvent("on"+b[d],c)}}}function N(a,b,c){b=b.split(" ");for(var d=0,e=b.length;d<e;d++){if(a.removeEventListener){a.removeEventListener(b[d],c,false)}else if(document.detachEvent){a.detachEvent("on"+b[d],c)}}}var d=this;var e={prevent_default:false,css_hacks:true,swipe:true,swipe_time:200,swipe_min_distance:20,drag:true,drag_vertical:true,drag_horizontal:true,drag_min_distance:20,transform:true,scale_treshold:.1,rotation_treshold:15,tap:true,tap_double:true,tap_max_interval:300,tap_max_distance:10,tap_double_distance:20,hold:true,hold_timeout:500};b=K(e,b);(function(){if(!b.css_hacks){return false}var c=["webkit","moz","ms","o",""];var d={userSelect:"none",touchCallout:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"};var e="";for(var f=0;f<c.length;f++){for(var g in d){e=g;if(c[f]){e=c[f]+e.substring(0,1).toUpperCase()+e.substring(1)}a.style[e]=d[g]}}})();var f=0;var g=0;var h=0;var i={};var j=0;var k=false;var l=null;var m=null;var n=null;var o={x:0,y:0};var p=null;var q=null;var r={};var s=false;var t;var u;var v;var w="ontouchstart"in window;this.option=function(a,d){if(d!=c){b[a]=d}return b[a]};this.getDirectionFromAngle=function(a){var b={down:a>=45&&a<135,left:a>=135||a<=-135,up:a<-45&&a>-135,right:a>=-45&&a<=45};var c,d;for(d in b){if(b[d]){c=d;break}}return c};this.destroy=function(){if(w){N(a,"touchstart touchmove touchend touchcancel",H)}else{N(a,"mouseup mousedown mousemove",H);N(a,"mouseout",I)}};var G={hold:function(a){if(b.hold){l="hold";clearTimeout(q);q=setTimeout(function(){if(l=="hold"){D("hold",{originalEvent:a,position:i.start})}},b.hold_timeout)}},swipe:function(a){if(!i.move){return}var c=i.move[0].x-i.start[0].x;var e=i.move[0].y-i.start[0].y;f=Math.sqrt(c*c+e*e);var j=(new Date).getTime();var k=j-n;if(b.swipe&&b.swipe_time>k&&f>b.swipe_min_distance){g=z(i.start[0],i.move[0]);h=d.getDirectionFromAngle(g);l="swipe";var m={x:i.move[0].x-r.left,y:i.move[0].y-r.top};var o={originalEvent:a,position:m,direction:h,distance:f,distanceX:c,distanceY:e,angle:g};D("swipe",o)}},drag:function(a){var c=i.move[0].x-i.start[0].x;var e=i.move[0].y-i.start[0].y;f=Math.sqrt(c*c+e*e);if(b.drag&&f>b.drag_min_distance||l=="drag"){g=z(i.start[0],i.move[0]);h=d.getDirectionFromAngle(g);var j=h=="up"||h=="down";if((j&&!b.drag_vertical||!j&&!b.drag_horizontal)&&f>b.drag_min_distance){return}l="drag";var m={x:i.move[0].x-r.left,y:i.move[0].y-r.top};var n={originalEvent:a,position:m,direction:h,distance:f,distanceX:c,distanceY:e,angle:g};if(k){D("dragstart",n);k=false}D("drag",n);E(a)}},transform:function(a){if(b.transform){if(x(a)!=2){return false}var c=C(i.start,i.move);var d=B(i.start,i.move);if(l!="drag"&&(l=="transform"||Math.abs(1-d)>b.scale_treshold||Math.abs(c)>b.rotation_treshold)){l="transform";i.center={x:(i.move[0].x+i.move[1].x)/2-r.left,y:(i.move[0].y+i.move[1].y)/2-r.top};var e={originalEvent:a,position:i.center,scale:d,rotation:c};if(k){D("transformstart",e);k=false}D("transform",e);E(a);return true}}return false},tap:function(a){var c=(new Date).getTime();var d=c-n;if(b.hold&&!(b.hold&&b.hold_timeout>d)){return}var e=function(){if(o&&b.tap_double&&m=="tap"&&n-p<b.tap_max_interval){var a=Math.abs(o[0].x-i.start[0].x);var c=Math.abs(o[0].y-i.start[0].y);return o&&i.start&&Math.max(a,c)<b.tap_double_distance}return false}();if(e){l="double_tap";p=null;D("doubletap",{originalEvent:a,position:i.start});E(a)}else{var g=i.move?Math.abs(i.move[0].x-i.start[0].x):0;var h=i.move?Math.abs(i.move[0].y-i.start[0].y):0;f=Math.max(g,h);if(f<b.tap_max_distance){l="tap";p=c;o=i.start;if(b.tap){D("tap",{originalEvent:a,position:i.start});E(a)}}}}};if(w){M(a,"touchstart touchmove touchend touchcancel",H)}else{M(a,"mouseup mousedown mousemove",H);M(a,"mouseout",I)}}
	jQuery.fn.hammer=function(a){return this.each(function(){var b=new Hammer(this,a);var c=jQuery(this);c.data("hammer",b);var d=["hold","tap","doubletap","transformstart","transform","transformend","dragstart","drag","dragend","swipe","release"];for(var e=0;e<d.length;e++){b["on"+d[e]]=function(a,b){return function(c){a.trigger(jQuery.Event(b,c))}}(c,d[e])}})}



// Localization
var l = {
	lang: 'jp',
	get: function() {
		var args = Array.prototype.slice.call(arguments);
		var e = this[args[0]][this.lang] || this[args[0]]['en'];
		if (args.length == 1)
			return e;
		else if (args.length == 2)
			return e[args[1]];
		else
			return '';
	},
	name: {
		en: "English",
  	cn: "Chinese",
		pt: "Portuguese",
		es: "Spanish",
		jp: "日本語"
  },
	years: {
		en : ['','2012','2011', '2010', '2009','2008', '2007','2006', '2005','2004'],
  	cn : ['','2012','2011', '2010', '2009','2008', '2007','2006', '2005','2004'],
		pt : ['','2012','2011', '2010', '2009','2008', '2007','2006', '2005','2004'],
		es : ['','2012','2011', '2010', '2009','2008', '2007','2006', '2005','2004'],
		jp : ['','2012','2011', '2010', '2009','2008', '2007','2006', '2005','2004']
  },
	months: {
		en : ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'],
		 cn : ['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		pt : ['Janeiro', 'Fevereiro', 'Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		es : ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		jp : ['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
 },
	monthsnum: {
		en : ['0','1','2','3','4','5','6','7','8','9','10','11','12'],
    cn : ['0','1','2','3','4','5','6','7','8','9','10','11','12'],
		pt : ['0','1','2','3','4','5','6','7','8','9','10','11','12'],
		es : ['0','1','2','3','4','5','6','7','8','9','10','11','12']
  },
	viewGame: {
		en: "View game",
    cn: "查看游戏",
		pt: "View game",
		es: "View game",
  },
	webplayer: {
		en: "Unity Web Player. Install Now!",
    cn: "Unity浏览器3D播放器。立马安裝",
		pt: "Unity Web Player, Instalar agora",
		es: "Unity Web Player. Instalar ahora"
  },
	viewgame: {
		en: "View Game",
    cn: "查看游戏",
		pt: "Ver jogo",
		es: "Ver Juego",
		jp: "詳細情報"
  },
	genre: {
		en: "Genre(s)",
    cn: "性別",
		pt: "Tipo",
		es: "Tipo",
		jp: "ジャンル"
  },
	platform: {
		en: "Platform(s)",
    cn: "平台",
		pt: "Plataforma",
		es: "Plataforma",
		jp: "Platform"
  },
	by: {
		en: "by",
    cn: "由",
		pt: "por",
		es: "por"
  },
	date: {
		en: "Date",
    cn: "日期",
		pt: "Data",
		es: "Fecha"
  },
	time: {
		en: "Time!",
    cn: "时间",
		pt: "Tempo!",
		es: "Tiempo!"
  },
	duration: {
		en: "Duration",
		cn: "为期",
		pt: "Duração",
		es: "Duración"
  },
	course_name: {
		en: "Course Name",
    cn: "课程名称",
		pt: "Nome do curso",
		es: "Nombre del curso"
  },
	description: {
		en: "Description",
    cn: "描述",
		pt: "Descrição",
		es: "Descripción"
  },
	noclass: {
		en: "There are no classes at the moment",
    cn: "本时段无课程",
		pt: "Não há aulas no momento",
		es: "No hay clases en el momento"
  },
	sign: {
		en: "Sign In",
    cn: "登入",
		pt: "Entrar",
		es: "Registrarse"
  },
	receive: {
		en: "To receive news from us, you can enter your email address here.",
    cn: "请在此输入您的电邮以获取我们最新的信息",
		pt: "Para receber notícias de nós, você pode digitar o seu endereço de e-mail aqui.",
		es: "Para recibir noticias de nosotros, usted puede introducir su dirección de correo electrónico aquí."
  },
	thanks_newsl: {
		en: "Thanks… we will be notifying you of interesting things in the future.\n\nRemember to check out the forums too. It's a great way to connect to our great community.",
    cn: "谢谢您…我们将会通知您对您感兴趣的消息。也欢迎您定期浏览我们的论坛得知最新的新闻与我们技术社区保持联系",
		pt: "Obrigado ... vamos notificá-lo de coisas interessantes no futuro. \n\nRemember para verificar os fóruns também. É uma ótima maneira de se conectar a nossa grande comunidade.",
		es: "Gracias ... le estaremos notificando de cosas interesantes en el futuro. \n\nRemember de revisar los foros. Es una gran manera de conectar a nuestra gran comunidad."
  },
	moreinfo: {
		en: "More Information",
    cn: "更多相关信息",
		pt: "Mais informações",
		es: "Más información",
		jp:	"詳細情報"
  },
	more: {
		en: "[more]",
    cn: "［更多］",
		pt: "[mais]",
		es: "[más]"
  },
	less: {
		en: "[less]",
    cn: "［更少］",
		pt: "[menos]",
		es: "[menos]"
  },
	limit_description: {
		en: "270",
    cn: "80",
		pt: "270",
		es: "270"
  },
	all: {
		en: "All",
    cn: "全部",
		pt: "Todos",
		es: "Todos"
  },
	managment: {
		en: "management",
    cn: "经营部",
		pt: "gestão",
		es: "manejo"
  },
	board: {
		en: "board",
    cn: "董事会",
		pt: "board",
		es: "board"
  },
	error_popupgallery: {
		en: "Could not load gallery data from",
    cn: "无法从下载游戏库",
		pt: "Não foi possível carregar os dados da Galeria",
		es: "No se ha podido cargar datos galería de"
	},
	gallery: {
		en: "Gallery",
    cn: "游戏库",
		pt: "Galería",
		es: "Galeria"
	},
	closes: {
		en: "Gallery",
    cn: "游戏库",
		pt: "Gallery",
		es: "Gallery"
	},
	entermail: {
		en: "Enter your email here...",
    cn: "在这里输入您的电子邮件",
		pt: "Digite o seu e-mail aqui...",
		es: "Ingresa tu correo electrónico aquí..."
	},
	readmore: {
		en: "Read more",
    cn: "阅读更多",
		pt: "Leia mais",
		es: "Leer más"
	},
	learnmore: {
		en: "Learn more",
    cn: "阅读更多",
		pt: "Saiba mais",
		es: "Más información"
	}

};

var log = (function(){ try{ return console.log.bind(console); } catch(e){}; })();


