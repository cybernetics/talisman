webpackJsonp([5],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var $=i(2),a=n($),l=i(19),s=i(10),r=n(s),u=i(390),o=n(u),A=i(392),c=n(A),d=i(393),f=n(d);(0,l.render)(a["default"].createElement(r["default"],{algorithm:o["default"]}),document.getElementById("lancaster-mount")),(0,l.render)(a["default"].createElement(r["default"],{algorithm:c["default"]}),document.getElementById("lovins-mount")),(0,l.render)(a["default"].createElement(r["default"],{algorithm:f["default"]}),document.getElementById("porter-mount"))},10:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var $=i(2),a=n($),l=i(17),s=i(15),r=n(s),u=function(e){return e},o=function(e,t){return e===t},A=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),c=A(function(e){var t=e.algorithm,i=e.codeRenderer,n=void 0===i?u:i,$=e.comparator,l=void 0===$?o:$,s=e.wordOne,A=e.wordTwo,c=e.setWordOne,d=e.setWordTwo,f=s?t(s):null,y=A?t(A):null,g=f?n(f):"",m=y?n(y):"",v="·",h="default";return f&&y&&(l(f,y)?(v="=~",h="success"):(v="!~",h="error")),a["default"].createElement("table",null,a["default"].createElement("tbody",null,a["default"].createElement("tr",null,a["default"].createElement("td",null,a["default"].createElement(r["default"],{placeholder:"Word 1",value:s,onChange:function(e){return c(e.target.value)},status:h})),a["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},a["default"].createElement("strong",null,v)),a["default"].createElement("td",null,a["default"].createElement(r["default"],{placeholder:"Word 2",value:A,onChange:function(e){return d(e.target.value)},status:h}))),a["default"].createElement("tr",null,a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},g," "),a["default"].createElement("td",null),a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "))))});t["default"]=c},390:function(e,t){"use strict";function i(e){return u.test(e.charAt(0))?e.length>1:e.length>2&&u.test(e)}function n(e){var t=e.toLowerCase(),n=!0,l=r[t.charAt(t.length-1)];if(!l)return t;for(var u=-1,o=l.length;++u<o;){var A=l[u],c=A[0],d=A[1],f=A[2];if(n||f!==$){var y=t.length-c.length;if(!(0>y||t.substr(y)!==c)){if(f===s)return t;var g=t.substr(0,y)+d;if(i(g)&&(t=g,f===a)){if(n=!1,l=r[t.charAt(t.length-1)],!l)return t;u=-1,o=l.length}}}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var $="INTACT",a="CONTINUE",l="STOP",s="PROTECT",r={a:[["ia","",$],["a","",$]],b:[["bb","b",l]],c:[["ytic","ys",l],["ic","",a],["nc","nt",a]],d:[["dd","d",l],["ied","y",a],["ceed","cess",l],["eed","ee",l],["ed","",a],["hood","",a]],e:[["e","",a]],f:[["lief","liev",l],["if","",a]],g:[["ing","",a],["iag","y",l],["ag","",a],["gg","g",l]],h:[["th","",$],["guish","ct",l],["ish","",a]],i:[["i","",$],["i","y",a]],j:[["ij","id",l],["fuj","fus",l],["uj","ud",l],["oj","od",l],["hej","her",l],["verj","vert",l],["misj","mit",l],["nj","nd",l],["j","s",l]],l:[["ifiabl","",l],["iabl","y",l],["abl","",a],["ibl","",l],["bil","bl",a],["cl","c",l],["iful","y",l],["ful","",a],["ul","",l],["ial","",a],["ual","",a],["al","",a],["ll","l",l]],m:[["ium","",l],["um","",$],["ism","",a],["mm","m",l]],n:[["sion","j",a],["xion","ct",l],["ion","",a],["ian","",a],["an","",a],["een","",s],["en","",a],["nn","n",l]],p:[["ship","",a],["pp","p",l]],r:[["er","",a],["ear","",s],["ar","",l],["ior","",a],["or","",a],["ur","",a],["rr","r",l],["tr","t",a],["ier","y",a]],s:[["ies","y",a],["sis","s",l],["is","",a],["ness","",a],["ss","",s],["ous","",a],["us","",$],["s","",a],["s","",l]],t:[["plicat","ply",l],["at","",a],["ment","",a],["ent","",a],["ant","",a],["ript","rib",l],["orpt","orb",l],["duct","duc",l],["sumpt","sum",l],["cept","ceiv",l],["olut","olv",l],["sist","",s],["ist","",a],["tt","t",l]],u:[["iqu","",l],["ogu","og",l]],v:[["siv","j",a],["eiv","",s],["iv","",a]],y:[["bly","bl",a],["ily","y",a],["ply","",s],["ly","",a],["ogy","og",l],["phy","ph",l],["omy","om",l],["opy","op",l],["ity","",a],["ety","",a],["lty","l",l],["istry","",l],["ary","",a],["ory","",a],["ify","",l],["ncy","nt",a],["acy","",a]],z:[["iz","",a],["yz","ys",l]]},u=/[aeiouy]/},392:function(e,t){"use strict";function i(e){e=e.toLowerCase().replace(/^a-z'/g,"");for(var t=e,i=0,n=$.length;n>i;i++){var a=$[i],l=a[0],u=a[1];if(t=e.replace(l,""),t.length>1&&t.length<e.length&&s[u](t))break}/[bdglmnprst]{2,}$/.test(t)&&t[t.length-1]===t[t.length-2]&&(t=t.slice(0,-1));for(var o=0,A=r.length;A>o;o++){var c=r[o],l=c[0],d=c[1];t=t.replace(l,d)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;for(var n=[/alistically$/,"B",/arizability$/,"A",/izationally$/,"B",/antialness$/,"A",/arisations$/,"A",/arizations$/,"A",/entialness$/,"A",/allically$/,"C",/antaneous$/,"A",/antiality$/,"A",/arisation$/,"A",/arization$/,"A",/ationally$/,"B",/ativeness$/,"A",/eableness$/,"E",/entations$/,"A",/entiality$/,"A",/entialize$/,"A",/entiation$/,"A",/ionalness$/,"A",/istically$/,"A",/itousness$/,"A",/izability$/,"A",/izational$/,"A",/ableness$/,"A",/arizable$/,"A",/entation$/,"A",/entially$/,"A",/eousness$/,"A",/ibleness$/,"A",/icalness$/,"A",/ionalism$/,"A",/ionality$/,"A",/ionalize$/,"A",/iousness$/,"A",/izations$/,"A",/lessness$/,"A",/ability$/,"A",/aically$/,"A",/alistic$/,"B",/alities$/,"A",/ariness$/,"E",/aristic$/,"A",/arizing$/,"A",/ateness$/,"A",/atingly$/,"A",/ational$/,"B",/atively$/,"A",/ativism$/,"A",/elihood$/,"E",/encible$/,"A",/entally$/,"A",/entials$/,"A",/entiate$/,"A",/entness$/,"A",/fulness$/,"A",/ibility$/,"A",/icalism$/,"A",/icalist$/,"A",/icality$/,"A",/icalize$/,"A",/ication$/,"G",/icianry$/,"A",/ination$/,"A",/ingness$/,"A",/ionally$/,"A",/isation$/,"A",/ishness$/,"A",/istical$/,"A",/iteness$/,"A",/iveness$/,"A",/ivistic$/,"A",/ivities$/,"A",/ization$/,"F",/izement$/,"A",/oidally$/,"A",/ousness$/,"A",/aceous$/,"A",/acious$/,"B",/action$/,"G",/alness$/,"A",/ancial$/,"A",/ancies$/,"A",/ancing$/,"B",/ariser$/,"A",/arized$/,"A",/arizer$/,"A",/atable$/,"A",/ations$/,"B",/atives$/,"A",/eature$/,"Z",/efully$/,"A",/encies$/,"A",/encing$/,"A",/ential$/,"A",/enting$/,"C",/entist$/,"A",/eously$/,"A",/ialist$/,"A",/iality$/,"A",/ialize$/,"A",/ically$/,"A",/icance$/,"A",/icians$/,"A",/icists$/,"A",/ifully$/,"A",/ionals$/,"A",/ionate$/,"D",/ioning$/,"A",/ionist$/,"A",/iously$/,"A",/istics$/,"A",/izable$/,"E",/lessly$/,"A",/nesses$/,"A",/oidism$/,"A",/acies$/,"A",/acity$/,"A",/aging$/,"B",/aical$/,"A",/alist$/,"A",/alism$/,"B",/ality$/,"A",/alize$/,"A",/allic$/,"BB",/anced$/,"B",/ances$/,"B",/antic$/,"C",/arial$/,"A",/aries$/,"A",/arily$/,"A",/arity$/,"B",/arize$/,"A",/aroid$/,"A",/ately$/,"A",/ating$/,"I",/ation$/,"B",/ative$/,"A",/ators$/,"A",/atory$/,"A",/ature$/,"E",/early$/,"Y",/ehood$/,"A",/eless$/,"A",/elity$/,"A",/ement$/,"A",/enced$/,"A",/ences$/,"A",/eness$/,"E",/ening$/,"E",/ental$/,"A",/ented$/,"C",/ently$/,"A",/fully$/,"A",/ially$/,"A",/icant$/,"A",/ician$/,"A",/icide$/,"A",/icism$/,"A",/icist$/,"A",/icity$/,"A",/idine$/,"I",/iedly$/,"A",/ihood$/,"A",/inate$/,"A",/iness$/,"A",/ingly$/,"B",/inism$/,"J",/inity$/,"CC",/ional$/,"A",/ioned$/,"A",/ished$/,"A",/istic$/,"A",/ities$/,"A",/itous$/,"A",/ively$/,"A",/ivity$/,"A",/izers$/,"F",/izing$/,"F",/oidal$/,"A",/oides$/,"A",/otide$/,"A",/ously$/,"A",/able$/,"A",/ably$/,"A",/ages$/,"B",/ally$/,"B",/ance$/,"B",/ancy$/,"B",/ants$/,"B",/aric$/,"A",/arly$/,"K",/ated$/,"I",/ates$/,"A",/atic$/,"B",/ator$/,"A",/ealy$/,"Y",/edly$/,"E",/eful$/,"A",/eity$/,"A",/ence$/,"A",/ency$/,"A",/ened$/,"E",/enly$/,"E",/eous$/,"A",/hood$/,"A",/ials$/,"A",/ians$/,"A",/ible$/,"A",/ibly$/,"A",/ical$/,"A",/ides$/,"L",/iers$/,"A",/iful$/,"A",/ines$/,"M",/ings$/,"N",/ions$/,"B",/ious$/,"A",/isms$/,"B",/ists$/,"A",/itic$/,"H",/ized$/,"F",/izer$/,"F",/less$/,"A",/lily$/,"A",/ness$/,"A",/ogen$/,"A",/ward$/,"A",/wise$/,"A",/ying$/,"B",/yish$/,"A",/acy$/,"A",/age$/,"B",/aic$/,"A",/als$/,"BB",/ant$/,"B",/ars$/,"O",/ary$/,"F",/ata$/,"A",/ate$/,"A",/eal$/,"Y",/ear$/,"Y",/ely$/,"E",/ene$/,"E",/ent$/,"C",/ery$/,"E",/ese$/,"A",/ful$/,"A",/ial$/,"A",/ian$/,"A",/ics$/,"A",/ide$/,"L",/ied$/,"A",/ier$/,"A",/ies$/,"P",/ily$/,"A",/ine$/,"M",/ing$/,"N",/ion$/,"Q",/ish$/,"C",/ism$/,"B",/ist$/,"A",/ite$/,"AA",/ity$/,"A",/ium$/,"A",/ive$/,"A",/ize$/,"F",/oid$/,"A",/one$/,"R",/ous$/,"A",/ae$/,"A",/al$/,"BB",/ar$/,"X",/as$/,"B",/ed$/,"E",/en$/,"F",/es$/,"E",/ia$/,"A",/ic$/,"A",/is$/,"A",/ly$/,"B",/on$/,"S",/or$/,"T",/um$/,"U",/us$/,"V",/yl$/,"R",/s'/,"A",/'s$/,"A",/a$/,"A",/e$/,"A",/i$/,"A",/o$/,"A",/s$/,"W",/y$/,"B"],$=[],a=0,l=n.length;l>a;a+=2)$.push([n[a],n[a+1]]);var s={A:function(){return!0},B:function(e){return e.length>2},C:function(e){return e.length>3},D:function(e){return e.length>4},E:function(e){return!/e$/.test(e)},F:function(e){return s.B(e)&&s.E(e)},G:function(e){return s.B(e)&&/f$/.test(e)},H:function(e){return/(t|ll)$/.test(e)},I:function(e){return!/[oe]$/.test(e)},J:function(e){return!/[ae]$/.test(e)},K:function(e){return s.B(e)&&/(l|i|(u\we))$/.test(e)},L:function(e){return!/(u|x|([^o]s))$/.test(e)},M:function(e){return!/[acem]$/.test(e)},N:function(e){return/s\w{2}$/.test(e)?s.C(e):s.B(e)},O:function(e){return/[li]$/.test(e)},P:function(e){return!/c$/.test(e)},Q:function(e){return s.B(e)&&!/[ln]$/.test(e)},R:function(e){return/[nr]$/.test(e)},S:function(e){return/(dr|[^t]t)$/.test(e)},T:function(e){return/(s|[^o]t)$/.test(e)},U:function(e){return/[lmnr]$/.test(e)},V:function(e){return/c$/.test(e)},W:function(e){return!/[su]$/.test(e)},X:function(e){return/(l|i|u\we)$/.test(e)},Y:function(e){return/in$/.test(e)},Z:function(e){return!/f$/.test(e)},AA:function(e){return/([dflt]|ph|th|er|or|es)$/.test(e)},BB:function(e){return s.B(e)&&!/(met|ryst)/.test(e)},CC:function(e){return/l$/.test(e)}},r=[[/iev$/,"ief"],[/uct$/,"uc"],[/umpt$/,"um"],[/rpt$/,"rb"],[/urs$/,"ur"],[/istr$/,"ister"],[/metr$/,"meter"],[/olv$/,"olut"],[/([^aoi])ul$/,"$1l"],[/bex$/,"bic"],[/dex$/,"dic"],[/pex$/,"pic"],[/tex$/,"tic"],[/ax$/,"ac"],[/ex$/,"ec"],[/ix$/,"ic"],[/lux$/,"luc"],[/uad$/,"uas"],[/vad$/,"vas"],[/cid$/,"cis"],[/lid$/,"lis"],[/erid$/,"eris"],[/pand$/,"pans"],[/([^s])end$/,"$1ens"],[/ond$/,"ons"],[/lud$/,"lus"],[/rud$/,"rus"],[/([^pt])her$/,"$1hes"],[/mit$/,"mis"],[/([^m])ent$/,"$1ens"],[/ert$/,"ers"],[/([^n])et$/,"$1es"],[/(yt|yz)$/,"ys"]]},393:function(e,t){"use strict";function i(e){return e.slice(0,-1)}function n(e,t){var i=e.exec(t);return e.lastIndex=0,i}function $(e){if(e=e.toLowerCase(),e.length<3)return e;var t=null;if("y"===e[0]&&(e="Y"+e.slice(1)),e=e.replace(p,"$1$2"),e=e.replace(B,"$1$2"),t=n(E,e)){var $=t,a=$[1];m.test(a)&&(e=i(e))}else if(t=n(z,e)){var l=t,s=l[1];b.test(s)&&(e=s,w.test(e)?e+="e":x.test(e)?e=i(e):C.test(e)&&(e+="e"))}if(t=n(j,e)){var d=t,f=d[1];e=f+"i"}if(t=n(r,e)){var y=t,g=y[1],_=y[2];m.test(g)&&(e=g+A[_])}if(t=n(u,e)){var I=t,F=I[1],M=I[2];m.test(F)&&(e=F+c[M])}if(t=n(o,e)){var P=t,W=P[1];h.test(W)&&(e=W)}else if(t=n(R,e)){var L=t,S=L[1],N=L[2],Y=S+N;h.test(Y)&&(e=Y)}if(t=n(O,e)){var G=t,J=G[1];(h.test(J)||v.test(J)&&!T.test(J))&&(e=J)}return/ll$/.test(e)&&h.test(e)&&(e=i(e)),e.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=$;var a=["ational","tional","enci","anci","izer","bli","alli","entli","eli","ousli","ization","ation","ator","alism","iveness","fulness","ousness","aliti","iviti","biliti","logi"],l=["icate","ative","alize","iciti","ical","ful","ness"],s=["al","ance","ence","er","ic","able","ible","ant","ement","ment","ent","ou","ism","ate","iti","ous","ive","ize"],r=new RegExp("^(.+?)("+a.join("|")+")$"),u=new RegExp("^(.+?)("+l.join("|")+")$"),o=new RegExp("^(.+?)("+s.join("|")+")$"),A={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},c={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},d="[^aeiou]",f="[aeiouy]",y=""+d+d+"*",g=""+f+f+"*",m=new RegExp("^("+y+")?"+g+y),v=new RegExp("^("+y+")?"+g+y+"("+g+")?$"),h=new RegExp("^("+y+")?"+g+y+g+y),b=new RegExp("^("+y+")?"+f),p=/^(.+?)(ss|i)es$/,B=/^(.+?)([^s])s$/,E=/^(.+?)eed$/,z=/^(.+?)(ed|ing)$/,w=/(at|bl|iz)$/,x=/([^aeiouylsz])\1$/,C=new RegExp("^"+y+f+"[^aeiouwxy]$"),j=new RegExp("^(.*"+f+".*)y$"),R=/^(.+?)(s|t)(ion)$/,O=/^(.+?)e$/,T=new RegExp("^"+y+f+"[^aeiouwxy]$")}});