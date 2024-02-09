/*! For license information please see comments-comments-tab.js.LICENSE.txt */
(()=>{var e,n,r,s={64578:(e,n,r)=>{"use strict";var s=r(77958),o=r(43554),i=r(80351),a=r.n(i),c=r(20144),l=r(59953),u=r(14596),h=r(54298);const p={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},f=t=>t.replace(/[[\]\\-]/g,"\\$&"),d=t=>t.join(""),g=(t,e)=>{const n=e;if("["!==t.charAt(n))throw new Error("not in a brace expression");const r=[],s=[];let o=n+1,i=!1,a=!1,c=!1,l=!1,u=n,h="";t:for(;o<t.length;){const e=t.charAt(o);if("!"!==e&&"^"!==e||o!==n+1){if("]"===e&&i&&!c){u=o+1;break}if(i=!0,"\\"!==e||c){if("["===e&&!c)for(const[e,[i,c,l]]of Object.entries(p))if(t.startsWith(e,o)){if(h)return["$.",!1,t.length-n,!0];o+=e.length,l?s.push(i):r.push(i),a=a||c;continue t}c=!1,h?(e>h?r.push(f(h)+"-"+f(e)):e===h&&r.push(f(e)),h="",o++):t.startsWith("-]",o+1)?(r.push(f(e+"-")),o+=2):t.startsWith("-",o+1)?(h=e,o+=2):(r.push(f(e)),o++)}else c=!0,o++}else l=!0,o++}if(u<o)return["",!1,0,!1];if(!r.length&&!s.length)return["$.",!1,t.length-n,!0];if(0===s.length&&1===r.length&&/^\\?.$/.test(r[0])&&!l){return[(g=2===r[0].length?r[0].slice(-1):r[0],g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")),!1,u-n,!1]}var g;const m="["+(l?"^":"")+d(r)+"]",b="["+(l?"":"^")+d(s)+"]";return[r.length&&s.length?"("+m+"|"+b+")":r.length?m:b,a,u-n,!0]};var m=r(34155),b=r(25108);const j=(t,e,n={})=>(X(e),!(!n.nocomment&&"#"===e.charAt(0))&&new K(e,n).match(t)),v=/^\*+([^+@!?\*\[\(]*)$/,y=t=>e=>!e.startsWith(".")&&e.endsWith(t),w=t=>e=>e.endsWith(t),O=t=>(t=t.toLowerCase(),e=>!e.startsWith(".")&&e.toLowerCase().endsWith(t)),x=t=>(t=t.toLowerCase(),e=>e.toLowerCase().endsWith(t)),k=/^\*+\.\*+$/,S=t=>!t.startsWith(".")&&t.includes("."),A=t=>"."!==t&&".."!==t&&t.includes("."),E=/^\.\*+$/,C=t=>"."!==t&&".."!==t&&t.startsWith("."),P=/^\*+$/,M=t=>0!==t.length&&!t.startsWith("."),$=t=>0!==t.length&&"."!==t&&".."!==t,L=/^\?+([^+@!?\*\[\(]*)?$/,z=([t,e=""])=>{const n=W([t]);return e?(e=e.toLowerCase(),t=>n(t)&&t.toLowerCase().endsWith(e)):n},T=([t,e=""])=>{const n=_([t]);return e?(e=e.toLowerCase(),t=>n(t)&&t.toLowerCase().endsWith(e)):n},R=([t,e=""])=>{const n=_([t]);return e?t=>n(t)&&t.endsWith(e):n},N=([t,e=""])=>{const n=W([t]);return e?t=>n(t)&&t.endsWith(e):n},W=([t])=>{const e=t.length;return t=>t.length===e&&!t.startsWith(".")},_=([t])=>{const e=t.length;return t=>t.length===e&&"."!==t&&".."!==t},I="object"==typeof m&&m?"object"==typeof m.env&&m.env&&m.env.__MINIMATCH_TESTING_PLATFORM__||m.platform:"posix";j.sep="win32"===I?"\\":"/";const V=Symbol("globstar **");j.GLOBSTAR=V;const Z={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},F="[^/]",H=F+"*?",D=t=>t.split("").reduce(((t,e)=>(t[e]=!0,t)),{}),B=D("().*{}+?[]^$\\!"),q=D("[.(");j.filter=(t,e={})=>n=>j(n,t,e);const G=(t,e={})=>Object.assign({},t,e);j.defaults=t=>{if(!t||"object"!=typeof t||!Object.keys(t).length)return j;const e=j;return Object.assign(((n,r,s={})=>e(n,r,G(t,s))),{Minimatch:class extends e.Minimatch{constructor(e,n={}){super(e,G(t,n))}static defaults(n){return e.defaults(G(t,n)).Minimatch}},unescape:(n,r={})=>e.unescape(n,G(t,r)),escape:(n,r={})=>e.escape(n,G(t,r)),filter:(n,r={})=>e.filter(n,G(t,r)),defaults:n=>e.defaults(G(t,n)),makeRe:(n,r={})=>e.makeRe(n,G(t,r)),braceExpand:(n,r={})=>e.braceExpand(n,G(t,r)),match:(n,r,s={})=>e.match(n,r,G(t,s)),sep:e.sep,GLOBSTAR:V})};const U=(t,e={})=>(X(t),e.nobrace||!/\{(?:(?!\{).)*\}/.test(t)?[t]:h(t));j.braceExpand=U;const X=t=>{if("string"!=typeof t)throw new TypeError("invalid pattern");if(t.length>65536)throw new TypeError("pattern is too long")};j.makeRe=(t,e={})=>new K(t,e).makeRe(),j.match=(t,e,n={})=>{const r=new K(e,n);return t=t.filter((t=>r.match(t))),r.options.nonull&&!t.length&&t.push(e),t};const Y=/[?*]|[+@!]\(.*?\)|\[|\]/,J=t=>t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");class K{options;set;pattern;windowsPathsNoEscape;nonegate;negate;comment;empty;preserveMultipleSlashes;partial;globSet;globParts;nocase;isWindows;platform;windowsNoMagicRoot;regexp;constructor(t,e={}){X(t),e=e||{},this.options=e,this.pattern=t,this.platform=e.platform||I,this.isWindows="win32"===this.platform,this.windowsPathsNoEscape=!!e.windowsPathsNoEscape||!1===e.allowWindowsEscape,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!e.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!e.nonegate,this.comment=!1,this.empty=!1,this.partial=!!e.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=void 0!==e.windowsNoMagicRoot?e.windowsNoMagicRoot:!(!this.isWindows||!this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(const t of this.set)for(const e of t)if("string"!=typeof e)return!0;return!1}debug(...t){}make(){const t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],e.debug&&(this.debug=(...t)=>b.error(...t)),this.debug(this.pattern,this.globSet);const n=this.globSet.map((t=>this.slashSplit(t)));this.globParts=this.preprocess(n),this.debug(this.pattern,this.globParts);let r=this.globParts.map(((t,e,n)=>{if(this.isWindows&&this.windowsNoMagicRoot){const e=!(""!==t[0]||""!==t[1]||"?"!==t[2]&&Y.test(t[2])||Y.test(t[3])),n=/^[a-z]:/i.test(t[0]);if(e)return[...t.slice(0,4),...t.slice(4).map((t=>this.parse(t)))];if(n)return[t[0],...t.slice(1).map((t=>this.parse(t)))]}return t.map((t=>this.parse(t)))}));if(this.debug(this.pattern,r),this.set=r.filter((t=>-1===t.indexOf(!1))),this.isWindows)for(let t=0;t<this.set.length;t++){const e=this.set[t];""===e[0]&&""===e[1]&&"?"===this.globParts[t][2]&&"string"==typeof e[3]&&/^[a-z]:$/i.test(e[3])&&(e[2]="?")}this.debug(this.pattern,this.set)}preprocess(t){if(this.options.noglobstar)for(let e=0;e<t.length;e++)for(let n=0;n<t[e].length;n++)"**"===t[e][n]&&(t[e][n]="*");const{optimizationLevel:e=1}=this.options;return e>=2?(t=this.firstPhasePreProcess(t),t=this.secondPhasePreProcess(t)):t=e>=1?this.levelOneOptimize(t):this.adjascentGlobstarOptimize(t),t}adjascentGlobstarOptimize(t){return t.map((t=>{let e=-1;for(;-1!==(e=t.indexOf("**",e+1));){let n=e;for(;"**"===t[n+1];)n++;n!==e&&t.splice(e,n-e)}return t}))}levelOneOptimize(t){return t.map((t=>0===(t=t.reduce(((t,e)=>{const n=t[t.length-1];return"**"===e&&"**"===n?t:".."===e&&n&&".."!==n&&"."!==n&&"**"!==n?(t.pop(),t):(t.push(e),t)}),[])).length?[""]:t))}levelTwoFileOptimize(t){Array.isArray(t)||(t=this.slashSplit(t));let e=!1;do{if(e=!1,!this.preserveMultipleSlashes){for(let n=1;n<t.length-1;n++){const r=t[n];1===n&&""===r&&""===t[0]||"."!==r&&""!==r||(e=!0,t.splice(n,1),n--)}"."!==t[0]||2!==t.length||"."!==t[1]&&""!==t[1]||(e=!0,t.pop())}let n=0;for(;-1!==(n=t.indexOf("..",n+1));){const r=t[n-1];r&&"."!==r&&".."!==r&&"**"!==r&&(e=!0,t.splice(n-1,2),n-=2)}}while(e);return 0===t.length?[""]:t}firstPhasePreProcess(t){let e=!1;do{e=!1;for(let n of t){let r=-1;for(;-1!==(r=n.indexOf("**",r+1));){let s=r;for(;"**"===n[s+1];)s++;s>r&&n.splice(r+1,s-r);let o=n[r+1];const i=n[r+2],a=n[r+3];if(".."!==o)continue;if(!i||"."===i||".."===i||!a||"."===a||".."===a)continue;e=!0,n.splice(r,1);const c=n.slice(0);c[r]="**",t.push(c),r--}if(!this.preserveMultipleSlashes){for(let t=1;t<n.length-1;t++){const r=n[t];1===t&&""===r&&""===n[0]||"."!==r&&""!==r||(e=!0,n.splice(t,1),t--)}"."!==n[0]||2!==n.length||"."!==n[1]&&""!==n[1]||(e=!0,n.pop())}let s=0;for(;-1!==(s=n.indexOf("..",s+1));){const t=n[s-1];if(t&&"."!==t&&".."!==t&&"**"!==t){e=!0;const t=1===s&&"**"===n[s+1]?["."]:[];n.splice(s-1,2,...t),0===n.length&&n.push(""),s-=2}}}}while(e);return t}secondPhasePreProcess(t){for(let e=0;e<t.length-1;e++)for(let n=e+1;n<t.length;n++){const r=this.partsMatch(t[e],t[n],!this.preserveMultipleSlashes);r&&(t[e]=r,t[n]=[])}return t.filter((t=>t.length))}partsMatch(t,e,n=!1){let r=0,s=0,o=[],i="";for(;r<t.length&&s<e.length;)if(t[r]===e[s])o.push("b"===i?e[s]:t[r]),r++,s++;else if(n&&"**"===t[r]&&e[s]===t[r+1])o.push(t[r]),r++;else if(n&&"**"===e[s]&&t[r]===e[s+1])o.push(e[s]),s++;else if("*"!==t[r]||!e[s]||!this.options.dot&&e[s].startsWith(".")||"**"===e[s]){if("*"!==e[s]||!t[r]||!this.options.dot&&t[r].startsWith(".")||"**"===t[r])return!1;if("a"===i)return!1;i="b",o.push(e[s]),r++,s++}else{if("b"===i)return!1;i="a",o.push(t[r]),r++,s++}return t.length===e.length&&o}parseNegate(){if(this.nonegate)return;const t=this.pattern;let e=!1,n=0;for(let r=0;r<t.length&&"!"===t.charAt(r);r++)e=!e,n++;n&&(this.pattern=t.slice(n)),this.negate=e}matchOne(t,e,n=!1){const r=this.options;if(this.isWindows){const n=""===t[0]&&""===t[1]&&"?"===t[2]&&"string"==typeof t[3]&&/^[a-z]:$/i.test(t[3]),r=""===e[0]&&""===e[1]&&"?"===e[2]&&"string"==typeof e[3]&&/^[a-z]:$/i.test(e[3]);if(n&&r){const n=t[3],r=e[3];n.toLowerCase()===r.toLowerCase()&&(t[3]=r)}else if(r&&"string"==typeof t[0]){const n=e[3],r=t[0];n.toLowerCase()===r.toLowerCase()&&(e[3]=r,e=e.slice(3))}else if(n&&"string"==typeof e[0]){const n=t[3];n.toLowerCase()===e[0].toLowerCase()&&(e[0]=n,t=t.slice(3))}}const{optimizationLevel:s=1}=this.options;s>=2&&(t=this.levelTwoFileOptimize(t)),this.debug("matchOne",this,{file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var o=0,i=0,a=t.length,c=e.length;o<a&&i<c;o++,i++){this.debug("matchOne loop");var l=e[i],u=t[o];if(this.debug(e,l,u),!1===l)return!1;if(l===V){this.debug("GLOBSTAR",[e,l,u]);var h=o,p=i+1;if(p===c){for(this.debug("** at the end");o<a;o++)if("."===t[o]||".."===t[o]||!r.dot&&"."===t[o].charAt(0))return!1;return!0}for(;h<a;){var f=t[h];if(this.debug("\nglobstar while",t,h,e,p,f),this.matchOne(t.slice(h),e.slice(p),n))return this.debug("globstar found match!",h,a,f),!0;if("."===f||".."===f||!r.dot&&"."===f.charAt(0)){this.debug("dot detected!",t,h,e,p);break}this.debug("globstar swallow a segment, and continue"),h++}return!(!n||(this.debug("\n>>> no match, partial?",t,h,e,p),h!==a))}let s;if("string"==typeof l?(s=u===l,this.debug("string match",l,u,s)):(s=l.test(u),this.debug("pattern match",l,u,s)),!s)return!1}if(o===a&&i===c)return!0;if(o===a)return n;if(i===c)return o===a-1&&""===t[o];throw new Error("wtf?")}braceExpand(){return U(this.pattern,this.options)}parse(t){X(t);const e=this.options;if("**"===t)return V;if(""===t)return"";let n,r=null;(n=t.match(P))?r=e.dot?$:M:(n=t.match(v))?r=(e.nocase?e.dot?x:O:e.dot?w:y)(n[1]):(n=t.match(L))?r=(e.nocase?e.dot?T:z:e.dot?R:N)(n):(n=t.match(k))?r=e.dot?A:S:(n=t.match(E))&&(r=C);let s="",o=!1,i=!1;const a=[],c=[];let l,u=!1,h=!1,p="."===t.charAt(0),f=e.dot||p;const d=t=>"."===t.charAt(0)?"":e.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",m=()=>{if(u){switch(u){case"*":s+=H,o=!0;break;case"?":s+=F,o=!0;break;default:s+="\\"+u}this.debug("clearStateChar %j %j",u,s),u=!1}};for(let n,r=0;r<t.length&&(n=t.charAt(r));r++)if(this.debug("%s\t%s %s %j",t,r,s,n),i){if("/"===n)return!1;B[n]&&(s+="\\"),s+=n,i=!1}else switch(n){case"/":return!1;case"\\":m(),i=!0;continue;case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",t,r,s,n),this.debug("call clearStateChar %j",u),m(),u=n,e.noext&&m();continue;case"(":{if(!u){s+="\\(";continue}const e={type:u,start:r-1,reStart:s.length,open:Z[u].open,close:Z[u].close};this.debug(this.pattern,"\t",e),a.push(e),s+=e.open,0===e.start&&"!"!==e.type&&(p=!0,s+=d(t.slice(r+1))),this.debug("plType %j %j",u,s),u=!1;continue}case")":{const t=a[a.length-1];if(!t){s+="\\)";continue}a.pop(),m(),o=!0,l=t,s+=l.close,"!"===l.type&&c.push(Object.assign(l,{reEnd:s.length}));continue}case"|":{const e=a[a.length-1];if(!e){s+="\\|";continue}m(),s+="|",0===e.start&&"!"!==e.type&&(p=!0,s+=d(t.slice(r+1)));continue}case"[":m();const[f,b,j,v]=g(t,r);j?(s+=f,h=h||b,r+=j-1,o=o||v):s+="\\[";continue;case"]":s+="\\"+n;continue;default:m(),s+=J(n)}for(l=a.pop();l;l=a.pop()){let t;t=s.slice(l.reStart+l.open.length),this.debug(this.pattern,"setting tail",s,l),t=t.replace(/((?:\\{2}){0,64})(\\?)\|/g,((t,e,n)=>(n||(n="\\"),e+e+n+"|"))),this.debug("tail=%j\n   %s",t,t,l,s);const e="*"===l.type?H:"?"===l.type?F:"\\"+l.type;o=!0,s=s.slice(0,l.reStart)+e+"\\("+t}m(),i&&(s+="\\\\");const b=q[s.charAt(0)];for(let t=c.length-1;t>-1;t--){const e=c[t],n=s.slice(0,e.reStart),r=s.slice(e.reStart,e.reEnd-8);let o=s.slice(e.reEnd);const i=s.slice(e.reEnd-8,e.reEnd)+o,a=n.split(")").length,l=n.split("(").length-a;let u=o;for(let t=0;t<l;t++)u=u.replace(/\)[+*?]?/,"");o=u,s=n+r+o+(""===o?"(?:$|\\/)":"")+i}if(""!==s&&o&&(s="(?=.)"+s),b&&(s=(p?"":f?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)")+s),!e.nocase||o||e.nocaseMagicOnly||(o=t.toUpperCase()!==t.toLowerCase()),!o)return s.replace(/\\(.)/g,"$1");const j=(e.nocase?"i":"")+(h?"u":"");try{const e=r?{_glob:t,_src:s,test:r}:{_glob:t,_src:s};return Object.assign(new RegExp("^"+s+"$",j),e)}catch(t){return this.debug("invalid regexp",t),new RegExp("$.")}}makeRe(){if(this.regexp||!1===this.regexp)return this.regexp;const t=this.set;if(!t.length)return this.regexp=!1,this.regexp;const e=this.options,n=e.noglobstar?H:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",r=e.nocase?"i":"";let s=t.map((t=>{const e=t.map((t=>"string"==typeof t?J(t):t===V?V:t._src));return e.forEach(((t,r)=>{const s=e[r+1],o=e[r-1];t===V&&o!==V&&(void 0===o?void 0!==s&&s!==V?e[r+1]="(?:\\/|"+n+"\\/)?"+s:e[r]=n:void 0===s?e[r-1]=o+"(?:\\/|"+n+")?":s!==V&&(e[r-1]=o+"(?:\\/|\\/"+n+"\\/)"+s,e[r+1]=V))})),e.filter((t=>t!==V)).join("/")})).join("|");s="^(?:"+s+")$",this.negate&&(s="^(?!"+s+").*$");try{this.regexp=new RegExp(s,r)}catch(t){this.regexp=!1}return this.regexp}slashSplit(t){return this.preserveMultipleSlashes?t.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(t)?["",...t.split(/\/+/)]:t.split(/\/+/)}match(t,e=this.partial){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;const n=this.options;this.isWindows&&(t=t.split("\\").join("/"));const r=this.slashSplit(t);this.debug(this.pattern,"split",r);const s=this.set;this.debug(this.pattern,"set",s);let o=r[r.length-1];if(!o)for(let t=r.length-2;!o&&t>=0;t--)o=r[t];for(let t=0;t<s.length;t++){const i=s[t];let a=r;if(n.matchBase&&1===i.length&&(a=[o]),this.matchOne(a,i,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate}static defaults(t){return j.defaults(t).Minimatch}}function Q(t){const e={};for(const n of t.keys())e[n]=t.get(n);return e}j.Minimatch=K,j.escape=(t,{windowsPathsNoEscape:e=!1}={})=>e?t.replace(/[?*()[\]]/g,"[$&]"):t.replace(/[?*()[\]\\]/g,"\\$&"),j.unescape=(t,{windowsPathsNoEscape:e=!1}={})=>e?t.replace(/\[([^\/\\])\]/g,"$1"):t.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1");var tt,et=r(23722);r(16932),r(65070),function(t){t.Array="array",t.Object="object",t.Original="original"}(tt||(tt={}));var nt=r(38728);const rt=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:n}}=t;return n.map((t=>{const{propstat:{prop:n}}=t;return function(t,e,n=!1){const{getlastmodified:r=null,getcontentlength:s="0",resourcetype:o=null,getcontenttype:i=null,getetag:a=null}=t,c=o&&"object"==typeof o&&void 0!==o.collection?"directory":"file",l={filename:e,basename:et.basename(e),lastmod:r,size:parseInt(s,10),type:c,etag:"string"==typeof a?a.replace(/"/g,""):null};return"file"===c&&(l.mime=i&&"string"==typeof i?i.split(";")[0]:""),n&&(l.props=t),l}(n,n.id.toString(),e)}))};let st,ot;if(r.nc=btoa((0,s.IH)()),(0,o.j)("comments","activityEnabled",!1)&&void 0!==OCA?.Activity?.registerSidebarAction)window.addEventListener("DOMContentLoaded",(function(){window.OCA.Activity.registerSidebarAction({mount:async(t,e)=>{let{context:n,fileInfo:s,reload:o}=e;if(!st){const{default:t}=await Promise.all([r.e(7874),r.e(6826),r.e(1462)]).then(r.bind(r,91462));st=c.ZP.extend(t)}ot=new st({parent:n,propsData:{reloadCallback:o,resourceId:s.id}}),ot.$mount(t),l.Z.info("Comments plugin mounted in Activity sidebar action",{fileInfo:s})},unmount:()=>{ot&&ot.$destroy()}}),window.OCA.Activity.registerSidebarEntries((async t=>{let{fileInfo:e,limit:n,offset:s}=t;const{data:o}=await async function(t,e){let{resourceType:n,resourceId:r}=t;const s=["",n,r].join("/"),o=e.datetime?`<oc:datetime>${e.datetime.toISOString()}</oc:datetime>`:"",i=await nt.Z.customRequest(s,Object.assign({method:"REPORT",data:`<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>${e.limit??20}</oc:limit>\n\t\t\t\t<oc:offset>${e.offset||0}</oc:offset>\n\t\t\t\t${o}\n\t\t\t</oc:filter-comments>`},e)),a=await i.text(),c=await(0,u.sw)(a);return function(t,e,n=!1){return n?{data:e,headers:t.headers?Q(t.headers):{},status:t.status,statusText:t.statusText}:e}(i,rt(c,!0),!0)}({resourceType:"files",resourceId:e.id},{limit:n,offset:s});l.Z.debug("Loaded comments",{fileInfo:e,comments:o});const{default:i}=await Promise.all([r.e(7874),r.e(6826),r.e(4322)]).then(r.bind(r,24322)),h=c.ZP.extend(i);return o.map((t=>({timestamp:a()(t.props.creationDateTime).toDate().getTime(),mount(n,r){let{context:s,reload:o}=r;this._CommentsViewInstance=new h({parent:s,propsData:{comment:t,resourceId:e.id,reloadCallback:o}}),this._CommentsViewInstance.$mount(n)},unmount(){this._CommentsViewInstance.$destroy()}})))})),window.OCA.Activity.registerSidebarFilter((t=>"comments"!==t.type)),l.Z.info("Comments plugin registered for Activity sidebar action")}));else{let e=null;const n=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-message-reply-text" viewBox="0 0 24 24"><path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" /></svg>',async mount(t,n,r){e&&e.$destroy(),e=new OCA.Comments.View("files",{parent:r}),await e.update(n.id),e.$mount(t)},update(t){e.update(t.id)},destroy(){e.$destroy(),e=null},scrollBottomReached(){e.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(n)}))}},59953:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(17499).IY)().setApp("comments").detectUser().build()},38728:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(14596),s=n(85581),o=n(77958);const i=(0,r.eI)((0,s.R)(),{headers:{"X-Requested-With":"XMLHttpRequest",requesttoken:(0,o.IH)()??""}})},85581:(t,e,n)=>{"use strict";n.d(e,{R:()=>s});var r=n(79753);const s=function(){return(0,r.generateRemoteUrl)("dav/comments")}},5623:t=>{"use strict";function e(t,e,s){t instanceof RegExp&&(t=n(t,s)),e instanceof RegExp&&(e=n(e,s));var o=r(t,e,s);return o&&{start:o[0],end:o[1],pre:s.slice(0,o[0]),body:s.slice(o[0]+t.length,o[1]),post:s.slice(o[1]+e.length)}}function n(t,e){var n=e.match(t);return n?n[0]:null}function r(t,e,n){var r,s,o,i,a,c=n.indexOf(t),l=n.indexOf(e,c+1),u=c;if(c>=0&&l>0){if(t===e)return[c,l];for(r=[],o=n.length;u>=0&&!a;)u==c?(r.push(u),c=n.indexOf(t,u+1)):1==r.length?a=[r.pop(),l]:((s=r.pop())<o&&(o=s,i=l),l=n.indexOf(e,u+1)),u=c<l&&c>=0?c:l;r.length&&(a=[o,i])}return a}t.exports=e,e.range=r},16932:(t,e,n)=>{"use strict";const r=n(78501),s=n(58844),o=n(41192);t.exports={XMLParser:s,XMLValidator:r,XMLBuilder:o}},46700:(t,e,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-ps":20315,"./ar-ps.js":20315,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku-kmr":90563,"./ku-kmr.js":90563,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id=46700},65070:t=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return r(t,arguments,o(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),s(i,t)},n(t)}function r(t,e,n){return r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o},r.apply(null,arguments)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(t){function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=function(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,o(n).call(this,t))).name="ObjectPrototypeMutationError",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,t),n}(n(Error));function a(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},s=n.split("."),o=s.length,i=function(e){var n=s[e];if(!t)return{v:void 0};if("+"===n){if(Array.isArray(t))return{v:t.map((function(n,o){var i=s.slice(e+1);return i.length>0?a(n,i.join("."),r):r(t,o,s,e)}))};var o=s.slice(0,e).join(".");throw new Error("Object at wildcard (".concat(o,") is not an array"))}t=r(t,n,s,e)},c=0;c<o;c++){var l=i(c);if("object"===e(l))return l.v}return t}function c(t,e){return t.length===e+1}t.exports={set:function(t,n,r){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n]=r,t[n];try{return a(t,n,(function(t,e,n,s){if(t===Reflect.getPrototypeOf({}))throw new i("Attempting to mutate Object.prototype");if(!t[e]){var o=Number.isInteger(Number(n[s+1])),a="+"===n[s+1];t[e]=o||a?[]:{}}return c(n,s)&&(t[e]=r),t[e]}))}catch(e){if(e instanceof i)throw e;return t}},get:function(t,n){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n];try{return a(t,n,(function(t,e){return t[e]}))}catch(e){return t}},has:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;if("number"==typeof n)return n in t;try{var s=!1;return a(t,n,(function(t,e,n,o){if(!c(n,o))return t&&t[e];s=r.own?t.hasOwnProperty(e):e in t})),s}catch(t){return!1}},hasOwn:function(t,e,n){return this.has(t,e,n||{own:!0})},isIn:function(t,n,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;try{var o=!1,i=!1;return a(t,n,(function(t,n,s,a){return o=o||t===r||!!t&&t[n]===r,i=c(s,a)&&"object"===e(t)&&n in t,t&&t[n]})),s.validPath?o&&i:o}catch(t){return!1}},ObjectPrototypeMutationError:i}},23722:(t,e,n)=>{"use strict";var r=n(34155),s=n(89539),o=function(t){return"string"==typeof t};function i(t,e){for(var n=[],r=0;r<t.length;r++){var s=t[r];s&&"."!==s&&(".."===s?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(s))}return n}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,c={};function l(t){return a.exec(t).slice(1)}c.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var s=n>=0?arguments[n]:r.cwd();if(!o(s))throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,e="/"===s.charAt(0))}return(e?"/":"")+(t=i(t.split("/"),!e).join("/"))||"."},c.normalize=function(t){var e=c.isAbsolute(t),n="/"===t.substr(-1);return(t=i(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},c.isAbsolute=function(t){return"/"===t.charAt(0)},c.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!o(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n)}return c.normalize(t)},c.relative=function(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n+1)}t=c.resolve(t).substr(1),e=c.resolve(e).substr(1);for(var r=n(t.split("/")),s=n(e.split("/")),o=Math.min(r.length,s.length),i=o,a=0;a<o;a++)if(r[a]!==s[a]){i=a;break}var l=[];for(a=i;a<r.length;a++)l.push("..");return(l=l.concat(s.slice(i))).join("/")},c._makeLong=function(t){return t},c.dirname=function(t){var e=l(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},c.basename=function(t,e){var n=l(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},c.extname=function(t){return l(t)[3]},c.format=function(t){if(!s.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!o(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return(t.dir?t.dir+c.sep:"")+(t.base||"")},c.parse=function(t){if(!o(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=l(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,e[1].length-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},c.sep="/",c.delimiter=":",t.exports=c},54298:(t,e,n)=>{var r=n(5623);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),m(function(t){return t.split("\\\\").join(s).split("\\{").join(o).split("\\}").join(i).split("\\,").join(a).split("\\.").join(c)}(t),!0).map(u)):[]};var s="\0SLASH"+Math.random()+"\0",o="\0OPEN"+Math.random()+"\0",i="\0CLOSE"+Math.random()+"\0",a="\0COMMA"+Math.random()+"\0",c="\0PERIOD"+Math.random()+"\0";function l(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function u(t){return t.split(s).join("\\").split(o).join("{").split(i).join("}").split(a).join(",").split(c).join(".")}function h(t){if(!t)return[""];var e=[],n=r("{","}",t);if(!n)return t.split(",");var s=n.pre,o=n.body,i=n.post,a=s.split(",");a[a.length-1]+="{"+o+"}";var c=h(i);return i.length&&(a[a.length-1]+=c.shift(),a.push.apply(a,c)),e.push.apply(e,a),e}function p(t){return"{"+t+"}"}function f(t){return/^-?0\d/.test(t)}function d(t,e){return t<=e}function g(t,e){return t>=e}function m(t,e){var n=[],s=r("{","}",t);if(!s)return[t];var o=s.pre,a=s.post.length?m(s.post,!1):[""];if(/\$$/.test(s.pre))for(var c=0;c<a.length;c++){var u=o+"{"+s.body+"}"+a[c];n.push(u)}else{var b,j,v=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),y=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),w=v||y,O=s.body.indexOf(",")>=0;if(!w&&!O)return s.post.match(/,.*\}/)?m(t=s.pre+"{"+s.body+i+s.post):[t];if(w)b=s.body.split(/\.\./);else if(1===(b=h(s.body)).length&&1===(b=m(b[0],!1).map(p)).length)return a.map((function(t){return s.pre+b[0]+t}));if(w){var x=l(b[0]),k=l(b[1]),S=Math.max(b[0].length,b[1].length),A=3==b.length?Math.abs(l(b[2])):1,E=d;k<x&&(A*=-1,E=g);var C=b.some(f);j=[];for(var P=x;E(P,k);P+=A){var M;if(y)"\\"===(M=String.fromCharCode(P))&&(M="");else if(M=String(P),C){var $=S-M.length;if($>0){var L=new Array($+1).join("0");M=P<0?"-"+L+M.slice(1):L+M}}j.push(M)}}else{j=[];for(var z=0;z<b.length;z++)j.push.apply(j,m(b[z],!1))}for(z=0;z<j.length;z++)for(c=0;c<a.length;c++)u=o+j[z]+a[c],(!e||w||u)&&n.push(u)}return n}}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return s[t].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=s,e=[],i.O=(t,n,r,s)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((t=>i.O[t](n[c])))?n.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,n)=>(i.f[n](t,e),e)),[])),i.u=t=>t+"-"+t+".js?v="+{1462:"03cc0c51ba09241e2635",4322:"412f17bea41d1e48d8f3",4720:"67ff1816113751e83e78",6318:"86e386ff1cd5ff5bd1f1",6512:"930a9f0a458cd206d9d1",6826:"69587a24c35e347a6006"}[t],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},r="nextcloud:",i.l=(t,e,s,o)=>{if(n[t])n[t].push(e);else{var a,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==t||h.getAttribute("data-webpack")==r+s){a=h;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",r+s),a.src=t),n[t]=[e];var p=(e,r)=>{a.onerror=a.onload=null,clearTimeout(f);var s=n[t];if(delete n[t],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((t=>t(r))),e)return e(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=576,(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={576:0};i.f.j=(e,n)=>{var r=i.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(((n,s)=>r=t[e]=[n,s]));n.push(r[2]=s);var o=i.p+i.u(e),a=new Error;i.l(o,(n=>{if(i.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,r[1](a)}}),"chunk-"+e,e)}},i.O.j=e=>0===t[e];var e=(e,n)=>{var r,s,o=n[0],a=n[1],c=n[2],l=0;if(o.some((e=>0!==t[e]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var u=c(i)}for(e&&e(n);l<o.length;l++)s=o[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var a=i.O(void 0,[7874],(()=>i(64578)));a=i.O(a)})();
//# sourceMappingURL=comments-comments-tab.js.map?v=818cb456426006fe37c2