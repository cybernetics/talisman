webpackJsonp([6],{0:function(e,u,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=t(3),a=r(n),l=t(25),o=t(24),i=r(o),q=t(391),d=r(q),c=function(e){return a["default"].createElement("span",null,a["default"].createElement("strong",null,"N:")," ",e.noun," - ",a["default"].createElement("strong",null,"V:")," ",e.verb)},s=function(e,u){return e.noun===u.noun||e.verb===u.verb};(0,l.render)(a["default"].createElement(i["default"],{algorithm:d["default"],codeRenderer:c,comparator:s}),document.getElementById("schinke-mount"))},24:function(e,u,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(u,"__esModule",{value:!0});var n=t(3),a=r(n),l=t(23),o=t(18),i=r(o),q=function(e){return e},d=function(e,u){return e===u},c=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),s=c(function(e){var u=e.algorithm,t=e.codeRenderer,r=void 0===t?q:t,n=e.comparator,l=void 0===n?d:n,o=e.wordOne,c=e.wordTwo,s=e.setWordOne,$=e.setWordTwo,f=o?u(o):null,m=c?u(c):null,b=f?r(f):"",v=m?r(m):"",p="·",g="default";return f&&m&&(l(f,m)?(p="=~",g="success"):(p="!~",g="error")),a["default"].createElement("table",null,a["default"].createElement("tbody",null,a["default"].createElement("tr",null,a["default"].createElement("td",null,a["default"].createElement(i["default"],{placeholder:"Word 1",value:o,onChange:function(e){return s(e.target.value)},status:g})),a["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},a["default"].createElement("strong",null,p)),a["default"].createElement("td",null,a["default"].createElement(i["default"],{placeholder:"Word 2",value:c,onChange:function(e){return $(e.target.value)},status:g}))),a["default"].createElement("tr",null,a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},b," "),a["default"].createElement("td",null),a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "))))});u["default"]=s},391:function(e,u){"use strict";function t(e){return e.replace(/j/g,"i").replace(/v/g,"u")}Object.defineProperty(u,"__esModule",{value:!0}),u["default"]=function(e){var u=t(e.toLowerCase().replace(/[^a-z]/g,"")),l=u.replace(/que$/,"");if(u!==l&&r.has(u))return{noun:u,verb:u};for(var o=l,i=l,q=0,d=n.length;d>q;q++){var c=o.replace(n[q],"");if(c!==l){o=c;break}}for(var s=0,$=a.length;$>s;s++){var f=a[s],m=f[0],b=f[1];if(m.test(i)){var v=new RegExp((b?"(.{2,})":"")+m.source);i=i.replace(v,b||"");break}}return{noun:o.length>1?o:l,verb:i.length>1?i:l}};var r=new Set(["atque","quoque","neque","itaque","absque","apsque","abusque","adaeque","adusque","denique","deque","susque","oblique","peraeque","plenisque","quandoque","quisque","quaeque","cuiusque","cuique","quemque","quamque","quaque","quique","quorumque","quarumque","quibusque","quosque","quasque","quotusquisque","quousque","ubique","undique","usque","uterque","utique","utroque","utribique","torque","coque","concoque","contorque","detorque","decoque","excoque","extorque","obtorque","optorque","retorque","recoque","attorque","incoque","intorque","praetorque"]),n=[/ibus$/,/ius$/,/ae$/,/am$/,/as$/,/em$/,/es$/,/ia$/,/is$/,/nt$/,/os$/,/ud$/,/um$/,/us$/,/a$/,/e$/,/i$/,/o$/,/u$/],a=[[/iuntur$/,"$1i"],[/erunt$/,"$1i"],[/untur$/,"$1i"],[/iunt$/,"$1i"],[/unt$/,"$1i"],[/beris$/,"$1bi"],[/bor$/,"$1bi"],[/bo$/,"$1bi"],[/ero$/,"$1eri"],[/mini$/],[/ntur$/],[/stis$/],[/mur$/],[/mus$/],[/ris$/],[/sti$/],[/tis$/],[/tur$/],[/ns$/],[/nt$/],[/ri$/],[/m$/],[/r$/],[/s$/],[/t$/]]}});