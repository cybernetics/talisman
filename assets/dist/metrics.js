webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(2),u=r(a),l=n(19),i=n(163),o=r(i),s=n(162),f=r(s),c=n(368),d=r(c),m=n(369),h=r(m),v=n(370),g=r(v),E=n(371),p=r(E),y=n(160),b=r(y),_=n(372),M=r(_),w=n(373),x=r(w),q=n(374),O=r(q),j=n(161),S=r(j),I=n(375),P=r(I),A=n(376),B=r(A),N=n(377),T=r(N),z=n(378),D=r(z),C=n(379),k=r(C),R=n(380),U=(r(R),n(96));r(U);(0,l.render)(u["default"].createElement(o["default"],{metric:d["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("canberra-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:g["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("cosine-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:h["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("chebyshev-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:p["default"],integerResult:!0}),document.getElementById("damerau-levenshtein-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:b["default"]}),document.getElementById("dice-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:M["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("euclidean-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:_.squared,enforceNumbers:!0,sameDimension:!0}),document.getElementById("euclidean-squared-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:x["default"],integerResult:!0,sameDimension:!0}),document.getElementById("hamming-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:O["default"]}),document.getElementById("jaccard-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:S["default"]}),document.getElementById("jaro-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:P["default"]}),document.getElementById("jaro-winkler-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:B["default"],integerResult:!0}),document.getElementById("levenshtein-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:T["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("manhattan-mount")),(0,l.render)(u["default"].createElement(f["default"],{metric:D["default"]}),document.getElementById("mra-mount")),(0,l.render)(u["default"].createElement(o["default"],{metric:k["default"]}),document.getElementById("overlap-mount"))},14:function(e,t){"use strict";function n(e,t){for(var n=[],r=void 0;r=e.exec(t);)n.push(r);return e.lastIndex=0,n}function r(e){return"string"==typeof e?e.split(""):e}function a(e){for(var t="string"==typeof e,n=r(e),a=[],u=0,l=n.length,i=null;l>u;u++)n[u]!==i&&(i=n[u],a.push(i));return t?a.join(""):a}function u(e,t){var n={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var r=0,a=e.length;a>r;r++)n[e[r]]=t[r];return n}function l(e){for(var t=Math.random(),n=e.length,r=0,a=0;n>a;a++)if(r+=e[a],r>=t)return a;return n-1}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=n,t.seq=r,t.squeeze=a,t.translation=u,t.weightedRandomIndex=l},23:function(e,t,n){"use strict";function r(e){return e=u(e),e&&e.replace(l,a).replace(f,"")}var a=n(66),u=n(47),l=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,i="\\u0300-\\u036f\\ufe20-\\ufe23",o="\\u20d0-\\u20f0",s="["+i+o+"]",f=RegExp(s,"g");e.exports=r},66:function(e,t){"use strict";function n(e){return r[e]}var r={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};e.exports=n},96:function(e,t,n){"use strict";function r(e,t){return(0,o.intersection)(e,t).size}function a(e,t){return(0,o.difference)(e,t).size}function u(e,t,n,u){var l=r(e,t);return l/(l+n*a(e,t)+u*a(t,e))}function l(e,t,n,u){var l=r(e,t),i=a(e,t),o=a(t,e),s=Math.min(i,o),f=Math.max(i,o);return l/(l+u*(n*s+Math.pow(n-1,f)))}function i(e,t,n){e=e||{};var r=e,a=r.alpha,i=void 0===a?1:a,o=r.beta,f=void 0===o?1:o,c=r.symmetric,d=void 0===c?!1:c;if(0>i||0>f)throw Error("talisman/metrics/tversky: alpha & beta parameters should be >= 0.");return t=new Set((0,s.seq)(t)),n=new Set((0,s.seq)(n)),d?l(t,n,i,f):u(t,n,i,f)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var o=n(159),s=n(14)},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){if("string"!=typeof e)throw Error("talisman/phonetics/mra: the given name is not a string.");var t=(0,i["default"])(e).toUpperCase().replace(/[^A-Z]/g,"");t=t.charAt(0)+t.slice(1).replace(/[AEIOU]/g,""),t=(0,u.squeeze)(t);var n=Math.min(3,t.length-3);return t.slice(0,3)+t.substr(t.length-n,n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=n(14),l=n(23),i=r(l)},159:function(e,t){"use strict";e.exports.intersection=function(e,t){var n=new Set;return e&&t&&(t.has||(t=new Set(t)),e.forEach(function(e){t.has(e)&&n.add(e)})),n},e.exports.union=function(e,t){var n=new Set(e);return t&&t.forEach(function(e){n.add(e)}),n},e.exports.difference=function(e,t){if(!t)return new Set(e);var n=new Set;return e&&(t.has||(t=new Set(t)),e.forEach(function(e){t.has(e)||n.add(e)})),n};var n={};e.exports.isEqual=function(e,t){if(e===t)return!0;if(!e&&!t)return!0;if(!e||!t)return!1;if(e.has||(e=new Set(e)),t.has||(t=new Set(t)),e.size!=t.size)return!1;try{e.forEach(function(e){if(!t.has(e))throw n})}catch(r){if(r===n)return!1;throw r}return!0},e.exports.add=e.exports.union,e.exports.subtract=e.exports.difference},160:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.coefficient=t.index=void 0;var a=n(96),u=r(a),l=n(388),i=function(e){return e.join("")},o=function(e,t){return e===t?1:1===e.length&&1===t.length&&e!==t?0:(e=(0,l.bigrams)(e,i),t=(0,l.bigrams)(t,i),(0,u["default"])({alpha:.5,beta:.5},e,t))},s=function(e,t){return 1-o(e,t)};t["default"]=o,t.index=o,t.coefficient=o,t.similarity=o,t.distance=s},161:function(e,t,n){"use strict";function r(e,t){if(e===t)return 1;e=(0,a.seq)(e),t=(0,a.seq)(t);var n=void 0,r=void 0;e.length>t.length?(n=e,r=t):(n=t,r=e);for(var l=Math.max((n.length/2|0)-1,0),i=(0,u.vec)(r.length,-1),o=(0,u.vec)(n.length,!1),s=0,f=0,c=r.length;c>f;f++)for(var d=r[f],m=Math.max(f-l,0),h=Math.min(f+l+1,n.length),v=m,g=h;g>v;v++)if(!o[v]&&d===n[v]){i[f]=v,o[v]=!0,s++;break}var E=new Array(s),p=new Array(s),y=void 0;y=0;for(var b=0,_=r.length;_>b;b++)-1!==i[b]&&(E[y]=r[b],y++);y=0;for(var M=0,w=n.length;w>M;M++)o[M]&&(p[y]=n[M],y++);for(var x=0,q=0,O=E.length;O>q;q++)E[q]!==p[q]&&x++;if(!s)return 0;var j=x/2|0,S=s;return(S/e.length+S/t.length+(S-j)/S)/3}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=void 0,t["default"]=r;var a=n(14),u=n(367),l=function(e,t){return 1-r(e,t)};t.similarity=r,t.distance=l},162:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),u=r(a),l=n(17),i=n(15),o=r(i),s=(0,l.compose)((0,l.withState)("sequenceOne","setSequenceOne",""),(0,l.withState)("sequenceTwo","setSequenceTwo","")),f=s(function(e){var t=e.metric,n=e.sequenceOne,r=e.sequenceTwo,a=e.setSequenceOne,l=e.setSequenceTwo,i=n.split(/,\s*/),s=r.split(/,\s*/),f=null;1===i.length&&1===s.length&&(i=i[0],s=s[0]),n&&r&&(f=t(i,s));var c="default";return f&&(c=f.matching?"success":"error"),u["default"].createElement("div",null,u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement(o["default"],{placeholder:"Name 1",value:n,onChange:function(e){return a(e.target.value)},status:c})),u["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},u["default"].createElement("strong",null,"·")),u["default"].createElement("td",null,u["default"].createElement(o["default"],{placeholder:"Name 2",value:r,onChange:function(e){return l(e.target.value)},status:c}))))),u["default"].createElement("p",null,u["default"].createElement("div",null,u["default"].createElement("strong",null,"Minimum:")," ",f?f.minimum:"",u["default"].createElement("br",null),u["default"].createElement("strong",null,"Similarity:")," ",f?f.similarity:"",u["default"].createElement("br",null),u["default"].createElement("strong",null,"Codex:")," ",f?"["+f.codex[0]+", "+f.codex[1]+"]":"",u["default"].createElement("br",null),u["default"].createElement("strong",null,"Matching:")," ",f?""+f.matching:"")))});t["default"]=f},163:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),u=r(a),l=n(17),i=n(15),o=r(i),s=function(e){return isNaN(+e)},f=(0,l.compose)((0,l.withState)("sequenceOne","setSequenceOne",""),(0,l.withState)("sequenceTwo","setSequenceTwo","")),c=f(function(e){var t=e.metric,n=e.sequenceOne,r=e.sequenceTwo,a=e.setSequenceOne,l=e.setSequenceTwo,i=e.integerResult,f=void 0===i?!1:i,c=e.sameDimension,d=void 0===c?!1:c,m=e.enforceNumbers,h=void 0===m?!1:m,v=n.split(/,\s*/),g=r.split(/,\s*/),E="~",p=null;return 1===v.length&&1===g.length&&(v=v[0],g=g[0]),d&&v.length!==g.length&&(p=u["default"].createElement("span",{className:"error"},"The compared vectors are not of the same dimension.")),h&&([].concat(v).some(s)||[].concat(g).some(s))&&(p=u["default"].createElement("span",{className:"error"},"This algorithm only accepts numbers.")),!p&&n&&r&&(E=t(v,g),!f&&E&&1!==E&&(E=E.toFixed(2))),u["default"].createElement("div",null,u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement(o["default"],{placeholder:"Sequence 1",value:n,onChange:function(e){return a(e.target.value)},status:"default"})),u["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},u["default"].createElement("strong",null,E)),u["default"].createElement("td",null,u["default"].createElement(o["default"],{placeholder:"Sequence 2",value:r,onChange:function(e){return l(e.target.value)},status:"default"}))))),u["default"].createElement("div",null,p," "))});t["default"]=c},367:function(e,t){"use strict";function n(e,t){var n=new Array(e);if(arguments.length>1)for(var r=0;e>r;r++)n[r]=t;return n}function r(e,t){for(var r=e.length,a=n(r),u=0;r>u;u++)a[u]=e[u]+t[u];return a}function a(e,t){for(var r=e.length,a=n(r),u=0;r>u;u++)a[u]=e[u]*t;return a}function u(e){for(var t=n(e[0].length,0),r=0,a=e.length;a>r;r++)for(var u=e[r],l=0,i=u.length;i>l;l++)t[l]+=u[l];for(var o=0,s=t.length;s>o;o++)t[o]/=e.length;return t}function l(e,t){for(var n=0,r=0,a=e.length;a>r;r++)n+=e[r]*t[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.vec=n,t.add=r,t.scale=a,t.mean=u,t.dot=l},368:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/canberra: the given vectors are not of the same dimension.");for(var n=0,r=0,a=e.length;a>r;r++)n+=Math.abs(e[r]-t[r])/(Math.abs(e[r])+Math.abs(t[r]));return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},369:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/chebyshev: the given vectors are not of the same dimension.");for(var n=0,r=0,a=e.length;a>r;r++)n=Math.max(n,Math.abs(e[r]-t[r]));return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},370:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/cosine: the given vectors are not of the same dimension.");for(var n=0,r=0,a=0,u=0,l=e.length;l>u;u++){var i=e[u],o=t[u];n+=i*i,a+=o*o,r+=i*o}return r/Math.sqrt(n*a)}function r(e,t){return 1-n(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,t.distance=r,t.similarity=n},371:function(e,t){"use strict";function n(e,t){if(e===t)return 0;var n=e.length,r=t.length;if(!n)return r;if(!r)return n;if(n>r){var a=[t,e];e=a[0],t=a[1];var u=[r,n];n=u[0],r=u[1]}for(;n>0&&e[n-1]===t[r-1];)n--,r--;var l=0;if(e[0]===t[0]||!n){for(;n>l&&e[l]===t[l];)l++;if(n-=l,r-=l,!n)return r;t=t.substr(l,r)}for(var i=new Array(r),o=new Array(r),s=0;r>s;s++)i[s]=s+1;for(var f=e[0],c=0,d=0;n>d;d++){var m=f,h=0,v=t[0],g=d;c=d+1,f=e[l+d];for(var E=0;r>E;E++){var p=c,y=v,b=h;v=t[E],h=o[E],o[E]=c=g,g=i[E],f!==v&&(c>g&&(c=g),c>p&&(c=p),c++,0!==d&&0!==E&&f===y&&v===m&&(b++,c>b&&(c=b))),i[E]=c}}return c}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},372:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/euclidean: the given vectors are not of the same dimension.");for(var n=0,r=0,a=e.length;a>r;r++)n+=Math.pow(e[r]-t[r],2);return n}function r(e,t){return Math.sqrt(n(e,t))}Object.defineProperty(t,"__esModule",{value:!0}),t.squared=n,t["default"]=r},373:function(e,t,n){"use strict";function r(e,t){if(e===t)return 0;if(e=(0,a.seq)(e),t=(0,a.seq)(t),e.length!==t.length)throw Error("talisman/metrics/hamming: given sequences are not of equal length.");for(var n=0,r=0,u=e.length;u>r;r++)e[r]!==t[r]&&n++;return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var a=n(14)},374:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.index=void 0;var a=n(96),u=r(a),l=function(e,t){return e===t?1:(0,u["default"])({alpha:1,beta:1},e,t)},i=function(e,t){return 1-l(e,t)};t["default"]=l,t.index=l,t.similarity=l,t.distance=i},375:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){e=e||{};var r=e,a=r.boostThreshold,u=void 0===a?.7:a,o=r.scalingFactor,s=void 0===o?.1:o;if(s>.25)throw Error("talisman/metrics/jaro-winkler: the scaling factor should not exceed 0.25.");if(0>u||u>1)throw Error("talisman/metrics/jaro-winkler: the boost threshold should be comprised between 0 and 1.");if(t===n)return 1;t=(0,i.seq)(t),n=(0,i.seq)(n);for(var f=Math.max(t.length,n.length),c=Math.min(t.length,n.length),d=0,m=0,h=c;h>m&&t[m]===n[m];m++)d++;var v=(0,l["default"])(t,n);return u>v?v:v+Math.min(s,f)*d*(1-v)}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.custom=void 0;var u=n(161),l=r(u),i=n(14),o=a.bind(null,null),s=function(e,t){return 1-o(e,t)};t["default"]=o,t.custom=a,t.similarity=o,t.distance=s},376:function(e,t){"use strict";function n(e,t){if(e===t)return 0;if(!e.length)return t.length;if(!t.length)return e.length;for(var n=new Array(t.length+1),r=0,a=n.length;a>r;r++)n[r]=r;for(var u=void 0,l=void 0,i=void 0,o=void 0,s=0,f=e.length;f>s;s++){u=s+1;var c=t.length;for(o=0;c>o;o++)l=u,u=n[o]+(e[s]===t[o]?0:1),i=l+1,u>i&&(u=i),i=n[o+1]+1,u>i&&(u=i),n[o]=l;n[o]=u}return u}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,t.distance=n},377:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/manhattan: the given vectors are not of the same dimension.");for(var n=0,r=0,a=e.length;a>r;r++)n+=Math.abs(e[r]-t[r]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},378:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return e.split("").reverse().join("")}function u(e,t){if("string"!=typeof e||"string"!=typeof t)throw Error("talisman/metrics/mra: given names should be strings.");var n=(0,i["default"])(e),r=(0,i["default"])(t);if(Math.abs(n.length-r.length)>3)return null;var u=n.length+r.length,l=2;4>=u&&(l=5),u>4&&7>=u&&(l=4),u>7&&11>=u&&(l=3);for(var o="",s="",f=0,c=Math.max(n.length,r.length);c>f;f++)n[f]!==r[f]&&(o+=n[f]?n[f]:"",s+=r[f]?r[f]:"");o=a(o),s=a(s);for(var d="",m="",h=0,v=Math.max(o.length,s.length);v>h;h++)o[h]!==s[h]&&(d+=o[h]?o[h]:"",m+=s[h]?s[h]:"");var g=Math.max(d.length,m.length),E=6-g,p=E>=l;return{codex:[n,r],minimum:l,similarity:E,matching:p}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var l=n(97),i=r(l)},379:function(e,t,n){"use strict";function r(e,t){if(e===t)return 1;e=new Set((0,u.seq)(e)),t=new Set((0,u.seq)(t));var n=(0,a.intersection)(e,t);return n.size/Math.min(e.size,t.size)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var a=n(159),u=n(14)},380:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.coefficient=t.index=void 0;var a=n(160),u=r(a);t["default"]=u["default"],t.index=u["default"],t.coefficient=u["default"],t.similarity=u["default"],t.distance=a.distance},388:function(e,t,n){"use strict";function r(e,t,n){if(1>e)throw Error("talisman/stats/ngrams: first argument should be a positive integer > 0.");t=(0,a.seq)(t),n="function"==typeof n?n:u;for(var r=[],l=0,i=t.length;i-e+1>l;l++){for(var o=[],s=0;e>s;s++)o.push(t[l+s]);r.push(n(o))}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.quadrigrams=t.trigrams=t.bigrams=void 0,t["default"]=r;var a=n(14),u=function(e){return e},l=r.bind(null,2),i=r.bind(null,3),o=r.bind(null,4);t.bigrams=l,t.trigrams=i,t.quadrigrams=o}});