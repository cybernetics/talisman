webpackJsonp([2],{0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var u=r(2),s=n(u),l=r(19),o=r(10),i=n(o),a=r(381),g=n(a),f=r(382),c=n(f),d=r(383),b=n(d),S=r(384),h=n(S),m=r(97),E=n(m),p=r(385),A=n(p),H=r(386),C=n(H),v=function(t){return"["+t[0]+", "+t[1]+"]"},$=function(t,e){return t[0]===e[0]||t[0]===e[1]||t[1]===e[0]||t[1]===e[1]},T=function(t){return"["+t.join(", ")+"]"},K=function(t,e){var r=new Set(e);return t.some(function(t){return r.has(t)})};(0,l.render)(s["default"].createElement(i["default"],{algorithm:g["default"]}),document.getElementById("caverphone-original-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:a.revisited}),document.getElementById("caverphone-revisited-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:cologne}),document.getElementById("cologne-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:c["default"],codeRenderer:T,comparator:K}),document.getElementById("daitch-mokotoff-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:b["default"],codeRenderer:v,comparator:$}),document.getElementById("double-metaphone-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:h["default"]}),document.getElementById("metaphone-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:E["default"]}),document.getElementById("mra-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:A["default"]}),document.getElementById("nysiis-original-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:p.refined}),document.getElementById("nysiis-refined-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:C["default"]}),document.getElementById("soundex-mount")),(0,l.render)(s["default"].createElement(i["default"],{algorithm:H.refined}),document.getElementById("soundex-refined-mount"))},10:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var u=r(2),s=n(u),l=r(17),o=r(15),i=n(o),a=function(t){return t},g=function(t,e){return t===e},f=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),c=f(function(t){var e=t.algorithm,r=t.codeRenderer,n=void 0===r?a:r,u=t.comparator,l=void 0===u?g:u,o=t.wordOne,f=t.wordTwo,c=t.setWordOne,d=t.setWordTwo,b=o?e(o):null,S=f?e(f):null,h=b?n(b):"",m=S?n(S):"",E="·",p="default";return b&&S&&(l(b,S)?(E="=~",p="success"):(E="!~",p="error")),s["default"].createElement("table",null,s["default"].createElement("tbody",null,s["default"].createElement("tr",null,s["default"].createElement("td",null,s["default"].createElement(i["default"],{placeholder:"Word 1",value:o,onChange:function(t){return c(t.target.value)},status:p})),s["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},s["default"].createElement("strong",null,E)),s["default"].createElement("td",null,s["default"].createElement(i["default"],{placeholder:"Word 2",value:f,onChange:function(t){return d(t.target.value)},status:p}))),s["default"].createElement("tr",null,s["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},h," "),s["default"].createElement("td",null),s["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "))))});e["default"]=c},14:function(t,e){"use strict";function r(t,e){for(var r=[],n=void 0;n=t.exec(e);)r.push(n);return t.lastIndex=0,r}function n(t){return"string"==typeof t?t.split(""):t}function u(t){for(var e="string"==typeof t,r=n(t),u=[],s=0,l=r.length,o=null;l>s;s++)r[s]!==o&&(o=r[s],u.push(o));return e?u.join(""):u}function s(t,e){var r={};if(t=t.split(""),e=e.split(""),t.length!==e.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var n=0,u=t.length;u>n;n++)r[t[n]]=e[n];return r}function l(t){for(var e=Math.random(),r=t.length,n=0,u=0;r>u;u++)if(n+=t[u],n>=e)return u;return r-1}Object.defineProperty(e,"__esModule",{value:!0}),e.findall=r,e.seq=n,e.squeeze=u,e.translation=s,e.weightedRandomIndex=l},23:function(t,e,r){"use strict";function n(t){return t=s(t),t&&t.replace(l,u).replace(g,"")}var u=r(66),s=r(47),l=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,o="\\u0300-\\u036f\\ufe20-\\ufe23",i="\\u20d0-\\u20f0",a="["+o+i+"]",g=RegExp(a,"g");t.exports=n},66:function(t,e){"use strict";function r(t){return n[t]}var n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};t.exports=r},97:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/mra: the given name is not a string.");var e=(0,o["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");e=e.charAt(0)+e.slice(1).replace(/[AEIOU]/g,""),e=(0,s.squeeze)(e);var r=Math.min(3,e.length-3);return e.slice(0,3)+e.substr(e.length-r,r)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(14),l=r(23),o=n(l)},381:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){for(;t.length<10;)t+="1";return t.slice(0,10)}function s(t,e){if("string"!=typeof e)throw Error("talisman/phonetics/caverphone: the given name is not a string.");e=(0,o["default"])(e).toLowerCase().replace(/[^a-z]/g,"");for(var r=i[t],n=0,s=r.length;s>n;n++){var l=r[n],a=l[0],g=l[1];e=e.replace(a,g)}return u(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.revisited=e.original=void 0;var l=r(23),o=n(l),i={original:[[/e$/g,""],[/^(cou|rou|tou|enou|trou)gh/g,"$12f"],[/^gn/g,"2n"],[/^mb/g,"m2"],[/cq/g,"2q"],[/ci/g,"si"],[/ce/g,"se"],[/cy/g,"sy"],[/tch/g,"2ch"],[/c/g,"k"],[/q/g,"k"],[/x/g,"k"],[/v/g,"f"],[/dg/g,"2g"],[/tio/g,"sio"],[/tia/g,"sia"],[/d/g,"t"],[/ph/g,"fh"],[/b/g,"p"],[/sh/g,"s2"],[/z/g,"s"],[/^[aieou]/g,"A"],[/[aeiou]/g,"3"],[/i/g,"y"],[/^y3/g,"Y3"],[/^y/g,"A"],[/y/g,"3"],[/3gh3/g,"3kh3"],[/gh/g,"22"],[/g/g,"k"],[/s+/g,"S"],[/t+/g,"T"],[/p+/g,"P"],[/k+/g,"K"],[/f+/g,"F"],[/m+/g,"M"],[/n+/g,"N"],[/w3/g,"W3"],[/wh3/g,"Wh3"],[/w$/g,"3"],[/w/g,"2"],[/^h/g,"A"],[/h/g,"2"],[/r3/g,"R3"],[/r$/g,"3"],[/r/g,"2"],[/l3/g,"L3"],[/l$/g,"3"],[/l/g,"2"],[/2/g,""],[/3$/g,"A"],[/3/g,""]],revisited:[[/e$/g,""],[/^(cou|rou|tou|enou|trou)gh/g,"$12f"],[/^gn/g,"2n"],[/mb$/g,"mb"],[/cq/g,"2q"],[/c([iey])/g,"s$1"],[/tch/g,"2ch"],[/[cqx]/g,"k"],[/v/g,"f"],[/dg/g,"2g"],[/ti([oa])/g,"si$1"],[/d/g,"t"],[/ph/g,"fh"],[/b/g,"p"],[/sh/g,"s2"],[/z/g,"s"],[/^[aeiou]/g,"A"],[/[aeiou]/g,"3"],[/j/g,"y"],[/^y3/g,"Y3"],[/^y/g,"A"],[/y/g,"3"],[/3gh3/g,"3kh3"],[/gh/g,"22"],[/g/g,"k"],[/s+/g,"S"],[/t+/g,"T"],[/p+/g,"P"],[/k+/g,"K"],[/f+/g,"F"],[/m+/g,"M"],[/n+/g,"N"],[/w3/g,"W3"],[/wh3/g,"Wh3"],[/w$/g,"3"],[/w/g,"2"],[/^h/g,"A"],[/h/g,"2"],[/r3/g,"R3"],[/r$/g,"3"],[/r/g,"2"],[/l3/g,"L3"],[/l$/g,"3"],[/l/g,"2"],[/2/g,""],[/3$/g,"A"],[/3/g,""]]},a=s.bind(null,"original"),g=s.bind(null,"revisited");e["default"]=a,e.original=a,e.revisited=g},382:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"000000").slice(0,6)}function s(t){for(var e=[""],r=0,n=t.length;n>r;r++){var u=t[r];if("object"===("undefined"==typeof u?"undefined":i(u))){for(var s=0,l=e.length;l>s;s++)e.push(e[s]);for(var o=0,a=e.length;a>o;o++){var g=u[a/2>o?0:1];e[o]+=null!==g?g:""}}else for(var f=0,c=e.length;c>f;f++)e[f]+=u}return e}function l(t){if("string"!=typeof t)throw Error("talisman/phonetics/daitch-mokotoff: the given name is not a string.");for(var e=[],r=(0,g["default"])(t).toUpperCase().replace(/[^A-ZĄĘŢ]/g,""),n=!0,l=void 0;r.length;){for(var o=r.charAt(0),i=d[o],a=0,f=i.length;f>a;a++){var c=i[a],S=c[0],h=c[1],m=c[2],E=c[3],p=S?r.match(S):[o];if(p){var A=p[0].length,H=E;n?H=h:b.has(r.charAt(A))&&(H=m),l!==S&&null!==H&&e.push(H),l=S||o,r=r.slice(A);break}}n=!1}return s(e).map(u)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":o(t)};e["default"]=l;var a=r(23),g=n(a),f=/^(MN|NM)/,c=/^(M|N)/,d={A:[[/^(AI|AJ|AY)/,0,1,null],[/^AU/,0,7,null],[null,0,null,null]],"Ą":[[null,null,null,[6,null]]],B:[[null,7,7,7]],C:[[/^CHS/,5,54,54],[/^CH/,[5,4],[5,4],[5,4]],[/^CK/,[5,45],[5,45],[5,45]],[/^(CSZ|CZS|CZ|CS)/,4,4,4],[null,[5,4],[5,4],[5,4]]],D:[[/^(DRZ|DRS|DSH|DSZ|DZH|DZS|DS|DZ)/,4,4,4],[/^(DT|D)/,3,3,3]],E:[[/^(EI|EJ|EY)/,0,1,null],[/^EU/,1,1,null],[null,0,null,null]],"Ę":[[null,null,null,[6,null]]],F:[[/^(FB|F)/,7,7,7]],G:[[null,5,5,5]],H:[[null,5,5,null]],I:[[/^(IA|IE|IO|IU)/,1,null,null],[null,0,null,null]],J:[[null,[1,4],[null,4],[null,4]]],K:[[/^KS/,5,54,54],[/^(KH|K)/,5,5,5]],L:[[null,8,8,8]],M:[[f,null,66,66],[c,6,6,6]],N:[[f,null,66,66],[c,6,6,6]],O:[[/^(OI|OJ|OY)/,0,1,null],[null,0,null,null]],P:[[/^(PF|PH|P)/,7,7,7]],Q:[[null,5,5,5]],R:[[/^(RZ|RS)/,[94,4],[94,4],[94,4]],[null,9,9,9]],S:[[/^(SCHTSCH|SCHTSH|SCHTCH|SHTCH|SHCH|SHTSH)/,2,4,4],[/^SCH/,4,4,4],[/^(SHT|SCHT|SCHD)/,2,43,43],[/^SH/,4,4,4],[/^(STCH|STSCH|SC|STRZ|STRS|STSH)/,2,4,4],[/^ST/,2,43,43],[/^(SZCZ|SZCS)/,2,4,4],[/^(SZT|SHD|SZD|SD)/,2,43,43],[/^(SZ|S)/,4,4,4]],T:[[/^(TCH|TTCH|TTSCH)/,4,4,4],[/^TH/,3,3,3],[/^(TRZ|TRS|TSCH|TSH|TS|TTS|TTSZ|TC|TZ|TTZ|TZS|TSZ)/,4,4,4],[null,3,3,3]],"Ţ":[[null,[3,4],[3,4],[3,4]]],U:[[/^(UI|UJ|UY)/,0,1,null],[/^(UE|U)/,0,null,null]],V:[[null,7,7,7]],W:[[null,7,7,7]],X:[[null,5,54,54]],Y:[[null,1,null,null]],Z:[[/^(ZHDZH|ZDZH|ZDZ)/,2,4,4],[/^(ZHD|ZD)/,2,43,43],[/^(ZSCH|ZSH|ZH|ZS|Z)/,4,4,4]]},b=new Set(["A","E","I","O","U","Y"])},383:function(t,e){"use strict";function r(t){return l.test(t)}function n(t){return 1===t.length&&o.has(t)}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/doubleMetaphone: the given word is not a string.");for(var e=t.toUpperCase()+"     ",r=s.test(e.slice(0,2))?1:0,u=t.length,l=u-1,o=[],i=[],a=r;;){if(a>u||o.length>=4&&i.length>=4)break;var g=e[a],f=1;n(g)&&(a||(o.push("A"),i.push("A")));var c=h[g];if(c){var d=c(e,a,l,u),b=d[0],S=void 0===b?null:b,m=d[1],E=void 0===m?null:m,p=d[2],A=void 0===p?1:p;f=A,S&&(o=o.concat(S)),E&&(i=i.concat(E))}a+=f}return[o.join("").slice(0,4),i.join("").slice(0,4)]}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=/^GN|KN|PN|WR|PS$/,l=/W|K|CZ|WITZ/,o=new Set(["A","E","I","O","U","Y"]),i=new Set(["HARAC","HARIS"]),a=new Set(["HOR","HYM","HIA","HEM"]),g=new Set(["VAN ","VON "]),f=new Set(["ORCHES","ARCHIT","ORCHID"]),c=new Set(["T","S"]),d=new Set(["A","O","U","E"]),b=new Set(["L","R","N","M","B","H","F","V","W"," "]),S=new Set(["CE","CI"]),h={B:function(t,e){return["P","P","B"===t.substr(e+1,1)?2:1]},CH:function(t,e){return e&&"CHAE"===t.substr(e,4)?["K","X",2]:e||!i.has(t.substr(e+1,5))&&!a.has(t.substr(e+1,3))||"CHORE"===t.substr(0,5)?g.has(t.substr(0,4))||"SCH"===t.substr(0,3)||f.has(t.substr(e-2,6))||c.has(t.substr(e+2,1))||(!e||d.has(t.substr(e-1,1)))&&b.has(t.substr(e+2,1))?["K","K",2]:e?["MC"===t.substr(0,2)?"K":"X","K",2]:["X","X",2]:["K","K",2]},CC:function(t,e){return/^I|E|H$/.test(t.substr(e+2,1))&&"HU"!==t.substr(e+2,2)?1===e&&"A"===t.substr(e-1,1)||/^UCCE(E|S)$/.test(t.substr(e-1,5))?[["K","S"],["K","S"],3]:["X","X",3]:["K","K",2]},C:function(t,e){if(e>1&&n(t.substr(e-2,1))&&"ACH"===t.substr(e-1,3)&&"I"!==t.substr(e+2,1)&&("E"!==t.substr(e+2,1)||/^(B|M)ACHER$/.test(t.substr(e-2,6))))return["K","K",2];if(!e&&"CAESAR"===t.substr(e,6))return["S","S",2];if("CHIA"===t.substr(e,4))return["K","K",2];if("CH"===t.substr(e,2))return h.CH(t,e);if("CZ"===t.substr(e,2)&&"WICZ"!==t.substr(e-2,4))return["S","X",2];if("CIA"===t.substr(e+1,3))return["X","X",3];if("CC"===t.substr(e,2)&&1!==e&&"M"!==t.substr(0,1))return h.CC(t,e);if(/^C(K|G|Q)$/.test(t.substr(e,2)))return["K","K",2];if(/^C(I|E|Y)$/.test(t.substr(e,2)))return["S",/^CI(O|E|A)$/.test(t.substr(e,3))?"X":"S",2];if(/^ (C|Q|G)$/.test(t.substr(e+1,2)))return["K","K",3];var r=1;return/^C|K|Q$/.test(t.substr(e+1,1))&&!S.has(t.substr(e+1,2))&&(r=2),["K","K",r]},"Ç":function(){return["S","S",1]},D:function(t,e){return"DG"===t.substr(e,2)?/^I|E|Y$/.test(t.substr(e+2,1))?["J","J",3]:[["T","K"],["T","K"],2]:["T","T",/^D(T|D)$/.test(t.substr(e,2))?2:1]},F:function(t,e){return["F","F","F"===t.substr(e+1,1)?2:1]},GH:function(t,e){return e&&!n(t.substr(e-1,1))?["K","K",2]:e?e>1&&/^B|H|D$/.test(t.substr(e-2,1))||e>2&&/^B|H|D$/.test(t.substr(e-3,1))||e>3&&/^B|H$/.test(t.substr(e-4,1))?[null,null,2]:e>2&&"U"===t.substr(e-1,1)&&/^C|G|L|R|T$/.test(t.substr(e-3,1))?["F","F",2]:e&&"I"!==t.substr(e-1,1)?["K","K",2]:[null,null,2]:"I"===t.substr(e+2,1)?["J","J",2]:["K","K",2]},GN:function(t,e){return 1===e&&n(t.substr(0,1))&&!r(t)?[["K","N"],"N",2]:"EY"===t.substr(e+2,2)||"Y"===t.substr(e+1,1)||r(t)?[["K","N"],["K","N"],2]:["N",["K","N"],2]},G:function(t,e){var n=t.substr(e+1,1),u=t.substr(e+1,2);return"H"===n?h.GH(t,e):"N"===n?h.GN(t,e):"LI"!==u||r(t)?(e||"Y"!==n&&!/^(E(S|P|B|L|Y|I|R)|I(B|L|N|E))$/.test(u))&&("ER"!==u&&"Y"!==n||/^(D|R|M)ANGER$/.test(t.substr(0,6))||/^E|I$/.test(t.substr(e-1,1))||/^(R|O)GY$/.test(t.substr(e-1,3)))?/^E|I|Y$/.test(n)||/^(A|O)GGI$/.test(t.substr(e-1,4))?/^V(A|O)N /.test(t.substr(0,4))||"SCH"===t.substr(0,3)||t.substr(e+1,!1)?["K","K",2]:"IER "===t.substr(e+1,4)?["J","J",2]:["J","K",2]:["K","K","G"===n?2:1]:["K","J",2]:[["K","L"],"L",2]},H:function(t,e){return e&&!n(t.substr(e-1,1))||!n(t.substr(e+1,1))?[null,null,1]:["H","H",2]},J:function(t,e,u){if("JOSE"===t.substr(e,4)||"SAN "===t.substr(0,4))return!e&&" "===t.substr(e+4,1)||"SAN "===t.substr(0,4)?["H","H",1]:["J","H",1];var s="J"===t.substr(e+1,1)?2:1;return e||"JOSE"===t.substr(e,4)?n(t.substr(e-1,1))&&!r(t)&&/^A|O$/.test(t.substr(e+1,1))?["J","H",s]:u===e?["J",null,s]:/^L|T|K|S|N|M|B|Z$/.test(t.substr(e+1,1))||/^S|K|L$/.test(t.substr(e-1,1))?[null,null,s]:["J","J",s]:["J","A",s]},K:function(t,e){return["K","K","K"===t.substr(e+1,1)?2:1]},L:function(t,e,r,n){return"L"===t.substr(e+1,1)?e===n-3&&/^(ILL(O|A)|ALLE)$/.test(t.substr(e-1,4))||/^(A|O)S$/.test(t.substr(r-1,2)||/^A|O$/.test(t.substr(r,1)))&&"ALLE"===t.substr(e-1,4)?["L",null,2]:["L","L",2]:["L","L",1]},M:function(t,e,r){return"UMB"===t.substr(e-1,3)&&(e===r-1||"ER"===t.substr(e+2,2))||"M"===t.substr(e+1,1)?["M","M",2]:["M","M",1]},N:function(t,e){return["N","N","N"===t.substr(e+1,1)?2:1]},"Ñ":function(){return["N","N",1]},P:function(t,e){return"H"===t.substr(e+1,1)?["F","F",2]:["P","P",/^P|B$/.test(t.substr(e+1,1))?2:1]},Q:function(t,e){return["K","K","Q"===t.substr(e+1,1)?2:1]},R:function(t,e,n){var u="R"===t.substr(e+1,1)?2:1;return e!==n||r(t)||"IE"!==t.substr(e-2,2)||/^M(E|A)$/.test(t.substr(e-4,2))?["R","R",u]:[null,"R",u]},SH:function(t,e){return/^H(EIM|OEK|OLM|OLZ)$/.test(t.substr(e+1,4))?["S","S",2]:["X","X",2]},SC:function(t,e){return"H"===t.substr(e+2,1)?/^OO|ER|EN|UY|ED|EM$/.test(t.substr(e+3,2))?[/^E(R|N)$/.test(t.substr(e+3,2))?"X":["S","K"],["S","K"],3]:["X",e||n(t.substr(3,1))||"W"===t.substr(e+3,1)?"X":"S",3]:/^I|E|Y$/.test(t.substr(e+2,1))?["S","S",3]:[["S","K"],["S","K"],3]},S:function(t,e,n){return/^(I|Y)SL$/.test(t.substr(e-1,3))?[null,null,1]:e||"SUGAR"!==t.substr(e,5)?"SH"===t.substr(e,2)?h.SH(t,e):/^SI(O|A)$/.test(t.substr(e,3))||"SIAN"===t.substr(e,4)?["S",r(t)?"S":"X",3]:!e&&/^M|N|L|W$/.test(t.substr(e+1,1))||"Z"===t.substr(e+1,1)?["S","X","Z"===t.substr(e+1,1)?2:1]:"SC"===t.substr(e,2)?h.SC(t,e):[n===e&&/^(A|O)I$/.test(t.substr(e-2,2))?null:"S","S",/^S|Z$/.test(t.substr(e+1,1))?2:1]:["X","S",1]},TH:function(t,e){return/^(O|A)M$/.test(t.substr(e+2,2))||/^V(A|O)N /.test(t.substr(0,4))||"SCH"===t.substr(0,3)?["T","T",2]:["0","T",2]},T:function(t,e){return"TION"===t.substr(e,4)||/^T(IA|CH)$/.test(t.substr(e,3))?["X","X",3]:"TH"===t.substr(e,2)||"TTH"===t.substr(e,3)?h.TH(t,e):["T","T",/^T|D$/.test(t.substr(e+1,1))?2:1]},V:function(t,e){return["F","F","V"===t.substr(e+1,1)?2:1]},W:function(t,e,r){if("WR"===t.substr(e,2))return["R","R",2];var u=[],s=[];return!e&&n(t.substr(e+1,1)||"WH"===t.substr(e,2))&&(u.push("A"),s.push(n(t.substr(e+1,1))?"F":"A")),e===r&&n(t.substr(e-1,1))||"SCH"===t.substr(0,3)||/^EWSKI|EWSKY|OWSKI|OWSKY$/.test(t.substr(e-1,5))?[u,s.concat("F"),1]:/^WI(C|T)Z$/.test(t.substr(e,4))?[u.concat(["T","S"]),s.concat(["F","X"]),4]:[u,s,1]},X:function(t,e,r){if(!e)return["S","S",1];var n=/^C|X$"/.test(t.substr(e+1,1))?2:1;return e===r&&/^(I|E)AU$/.test(t.substr(e-3,3))||/^(A|O)U$/.test(t.substr(e-2,2))?[null,null,n]:[["K","S"],["K","S"],n]},Z:function(t,e){if("H"===t.substr(e+1,1))return["J","J",2];var n="Z"===t.substr(e+1,1)?2:1;return/^Z(O|I|A)$/.test(t.substr(e+1,2))||e&&r(t)&&"T"===t.substr(e-1,1)?["S",["T","S"],n]:["S","S",n]}}},384:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/metaphone: the given word is not a string.");for(var e=(0,l["default"])(t).toLowerCase().replace(/[^a-z]/g,""),r=0,n=o.length;n>r;r++)e=e.replace(o[r][0],o[r][1]);return e.toUpperCase()}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(23),l=n(s),o=[[/([bcdfhjklmnpqrstvwxyz])\1+/g,"$1"],[/^ae/g,"E"],[/^[gkp]n/g,"N"],[/^wr/g,"R"],[/^x/g,"S"],[/^wh/g,"W"],[/mb$/g,"M"],[/(?!^)sch/g,"SK"],[/th/g,"0"],[/t?ch|sh/g,"X"],[/c(?=ia)/g,"X"],[/[st](?=i[ao])/g,"X"],[/s?c(?=[iey])/g,"S"],[/[cq]/g,"K"],[/dg(?=[iey])/g,"J"],[/d/g,"T"],[/g(?=h[^aeiou])/g,""],[/gn(ed)?/g,"N"],[/([^g]|^)g(?=[iey])/g,"$1J"],[/g+/g,"K"],[/ph/g,"F"],[/([aeiou])h(?=\b|[^aeiou])/g,"$1"],[/[wy](?![aeiou])/g,""],[/z/g,"S"],[/v/g,"F"],[/(?!^)[aeiou]+/g,""]]},385:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t,e){if("string"!=typeof e)throw Error("talisman/phonetics/nysiis: the given name is not a string.");e=(0,o["default"])(e).toUpperCase().trim().replace(/[^A-Z]/g,"");for(var r=i[t],n=0,u=r.first.length;u>n;n++){var l=r.first[n],a=l[0],g=l[1];e=e.replace(a,g)}var f=e.charAt(0);"original"===t&&(e=e.slice(1));for(var c=0,d=r.second.length;d>c;c++){var b=r.second[c],a=b[0],g=b[1];e=e.replace(a,g)}return f+(0,s.squeeze)(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.refined=e.original=void 0;var s=r(14),l=r(23),o=n(l),i={original:{first:[[/JR$/g,""],[/SR$/g,""],[/^MAC/g,"MCC"],[/^KN/g,"NN"],[/^K/g,"C"],[/^(PH|PF)/g,"FF"],[/^SCH/g,"SSS"],[/(EE|IE)$/g,"Y"],[/(DT|RT|RD|NT|ND)$/g,"D"]],second:[[/EV/g,"AF"],[/[EIOU]/g,"A"],[/Q/g,"G"],[/Z/g,"S"],[/(M|KN)/g,"N"],[/K/g,"C"],[/SCH/g,"SSS"],[/PH/g,"FF"],[/([^A])H/g,"$1"],[/(.)H[^A]/g,"$1"],[/AW/g,"A"],[/S$/g,""],[/AY$/g,"Y"],[/A$/g,""]]},refined:{first:[[/JR$/g,""],[/SR$/g,""],[/(S|Z)$/g,""],[/MAC/g,"MC"],[/PH/g,"F"],[/IX$/g,"IC"],[/EX$/g,"EC"],[/(YE|EE|IE)/g,"Y"],[/(DT|RT|RD|NT|ND)$/g,"D"],[/(.+)EV/g,"$1EF"]],second:[[/([AEIOU]+)W/g,"$1"],[/[EIOU]/g,"A"],[/AA+/g,"A"],[/GHT/g,"GT"],[/DG/g,"G"],[/PH/g,"F"],[/(.+)HA/g,"$1A"],[/A+H/g,"A"],[/KN/g,"N"],[/K/g,"C"],[/(.+)M/g,"$1N"],[/(.+)Q/g,"$1G"],[/(SH|SCH)/g,"S"],[/YW/g,"Y"],[/(.+)Y(.+)/g,"$1A$2"],[/WR/g,"R"],[/(.+)Z/g,"$1S"],[/AY$/g,"Y"],[/A+$/g,""],[/^\w/g,""]]}},a=u.bind(null,"original"),g=u.bind(null,"refined");e["default"]=a,e.original=a,e.refined=g},386:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return(t+"0000").slice(0,4)}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/soundex: the given name is not a string.");t=(0,a["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");for(var e=t.charAt(0),r="",n=1,s=t.length;s>n;n++)"D"!==g[t[n]]&&(r+=g[t[n]]);r.charAt(0)===g[e]&&(r=r.slice(1));var l=(0,o.squeeze)(r).replace(/0/g,"");return u(e+l)}function l(t){if("string"!=typeof t)throw Error("talisman/phonetics/soundex#refined: the given name is not a string.");t=(0,a["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");for(var e=t.charAt(0),r="",n=0,u=t.length;u>n;n++)"D"!==f[t[n]]&&(r+=f[t[n]]);var s=(0,o.squeeze)(r);return e+s}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s,e.refined=l;var o=r(14),i=r(23),a=n(i),g=(0,o.translation)("AEIOUYWHBPFVCSKGJQXZDTLMNR","000000DD111122222222334556"),f=(0,o.translation)("AEIOUYWHBPFVCKSGJQXZDTLMNR","000000DD112233344555667889")}});