(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{5303:(e,t,r)=>{Promise.resolve().then(r.bind(r,7510)),Promise.resolve().then(r.bind(r,222)),Promise.resolve().then(r.bind(r,1192)),Promise.resolve().then(r.bind(r,2266)),Promise.resolve().then(r.bind(r,4794)),Promise.resolve().then(r.bind(r,33)),Promise.resolve().then(r.bind(r,2586)),Promise.resolve().then(r.bind(r,2841)),Promise.resolve().then(r.bind(r,3518)),Promise.resolve().then(r.bind(r,6872)),Promise.resolve().then(r.bind(r,7576)),Promise.resolve().then(r.bind(r,2539)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,912)),Promise.resolve().then(r.bind(r,5025)),Promise.resolve().then(r.bind(r,4312))},7510:(e,t,r)=>{"use strict";r.d(t,{Configurator:()=>a});var n=r(7437),l=r(2265),s=r(42),o=r.n(s);let a=e=>{let{args:t,template:r,env:s}=e,a=Object.entries(s).map(e=>{var t;let[r,n]=e;return{key:r,name:"".concat(r," (").concat(n.tip,")"),defaultVal:null===(t=n.default)||void 0===t?void 0:t.toString()}}),[i,c]=(0,l.useState)(a.map(e=>e.defaultVal||""));return(0,n.jsxs)("div",{className:"border rounded-lg p-4 bg-gray-50 dark:bg-gray-900",children:[(0,n.jsx)("div",{className:"space-y-4",children:a.map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4",children:[(0,n.jsx)("span",{className:"text-sm sm:w-1/3",children:e.name}),(0,n.jsx)("input",{type:"password"===s[e.key].type?"password":"text",className:"w-full sm:flex-1 border rounded px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700",value:i[t],onChange:e=>{let r=[...i];r[t]=e.target.value,c(r)},placeholder:e.defaultVal})]},e.key))}),(0,n.jsx)("button",{onClick:()=>{a.map((e,t)=>"".concat(e.key,"=").concat(i[t])).join("\n"),t.join(" ");let e=r;a.forEach((t,r)=>{e=e.replace(RegExp("process.env.".concat(t.key),"g"),i[r])}),o()(e)},className:"mt-4 w-full bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800",children:"复制配置"})]})}},222:(e,t,r)=>{"use strict";r.r(t),r.d(t,{EnvVariableConfig:()=>a});var n=r(7437),l=r(2265),s=r(42),o=r.n(s);function a(e){let{variableNames:t,format:r}=e,[s,a]=(0,l.useState)(t.map(e=>e.defaultVal||"")),i=(e,t)=>{let r=[...s];r[e]=t,a(r)};return(0,n.jsxs)("div",{className:"p-4 mt-2 rounded-lg border dark:bg-gray-900 dark:border-gray-800",children:[t.map((e,t)=>(0,n.jsxs)("div",{className:"flex items-center space-x-4 mb-4",children:[(0,n.jsx)("input",{type:"text",className:"border rounded-lg px-2 py-2 w-1/2 bg-transparent focus:outline-none focus:border-black hover:border-white-400 transition duration-300 font-[400] font-sans text-sm cursor-not-allowed dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",value:e.name||e.key,"data-tip":e.key,onMouseOver:e=>{e.target.style.color="transparent",setTimeout(()=>{e.target.style.color="inherit",e.target.value=e.target.dataset.tip},300)},onMouseLeave:t=>{t.target.style.color="transparent",setTimeout(()=>{t.target.style.color="inherit",t.target.value=e.name||e.key},300)},disabled:!0}),(0,n.jsx)("input",{type:"text",className:"border rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:border-black hover:border-gray-400 transition duration-300 font-[400] font-sans text-sm dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",style:{outline:"none",boxShadow:"none"},placeholder:"Enter value...",value:s[t],onChange:e=>i(t,e.target.value)})]},"".concat(e.key))),(0,n.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,n.jsx)("h2",{className:"sr-only",children:"环境变量配置"}),(0,n.jsx)("button",{type:"button",className:"border bg-black w-full text-white px-4 py-2 rounded-lg text-sm transform transition-all duration-300 focus:outline-none hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800",onClick:()=>{if("yaml"===r){let e=t.map((e,t)=>"- ".concat(e.key,"=").concat(s[t])).join("\n");o()(e);return}let e=t.map((e,t)=>"".concat(e.key,"=").concat(s[t])).join("\n");o()(e)},children:"复制"})]})]})}},1192:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(7437);r(2265);var l=r(6648),s=r(765),o=r(3513);let a=e=>{let{title:t,preview:r,href:a,github:i}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute top-4 right-4 z-10",children:(0,n.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",onClick:e=>e.stopPropagation(),children:(0,n.jsx)(o.Z,{size:16})})}),(0,n.jsx)(s.Z,{title:t,href:a,className:"overflow-hidden",children:(0,n.jsx)("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-neutral-800",children:(0,n.jsx)(l.default,{src:r,alt:"".concat(t," 预览图"),fill:!0,className:"object-scale-down",style:{transform:"translateY(-30px)"},priority:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 40vw"})})})]})},i=()=>(0,n.jsx)(s.o,{children:[{title:"Shiro (@innei)",preview:"/assets/images/preview/shiro.png",href:"/docs/themes/shiro/deploy",github:"https://github.com/innei/shiro"},{title:"Kami (@innei)",preview:"/assets/images/preview/kami.png",href:"/docs/themes/kami",github:"https://github.com/mx-space/kami"},{title:"Yun (@innei)",preview:"/assets/images/preview/yun.png",href:"/docs/themes/yun",github:"https://github.com/mx-space/mx-web-yun"}].map(e=>(0,n.jsx)(a,{...e},e.title))})},2266:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ToGitHub:()=>o});var n=r(7437),l=r(9760),s=r(765);function o(e){let{repo:t}=e;return(0,n.jsx)(s.o,{className:"gap-6",children:(0,n.jsx)(s.Z,{className:"m-2 break-words",style:{maxWidth:"100%"},href:"https://github.com/".concat(t),title:"".concat(t," - GitHub"),icon:(0,n.jsx)(l.Z,{}),external:!0})})}},4794:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(7437),l=r(2265);let s={root:null,rootMargin:"0px",threshold:.5};function o(e){let{src:t}=e,r=(0,l.useRef)(null),o=(0,l.useRef)(null);(0,l.useEffect)(()=>(o.current=new IntersectionObserver(a,s),r.current&&o.current.observe(r.current),()=>{r.current&&o.current&&o.current.unobserve(r.current)}),[t]);let a=e=>{e.forEach(e=>{e.isIntersecting&&r.current?(r.current.src||(r.current.src=t),r.current.play()):r.current&&r.current.pause()})};return(0,n.jsx)("video",{ref:r,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,controls:!0,className:"mt-6 rounded-xl border dark:border-zinc-800"})}},4312:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/_next/static/media/status.c2de24b0.png",height:246,width:488,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUhISMcHSAuLi8nJyhJSEltamY8PD2noZ9UXJ3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBgQEAMAiDMGjV/f/xEvYtqtxcAJGZpELTIh8FzQBG1Jzn9QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},33:(e,t,r)=>{"use strict";r.d(t,{AnchorProvider:()=>v,ID:()=>x,FU:()=>b,tD:()=>p,_z:()=>g});var n=r(7655);r(7067);var l=r(2265);let s=e=>"object"==typeof e&&null!=e&&1===e.nodeType,o=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,a=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},i=(e,t,r,n,l,s,o,a)=>s<e&&o>t||s>e&&o<t?0:s<=e&&a<=r||o>=t&&a>=r?s-e-n:o>t&&a<r||s<e&&a>r?o-t+l:0,c=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},d=(e,t)=>{var r,n,l,o;if("undefined"==typeof document)return[];let{scrollMode:d,block:u,inline:h,boundary:f,skipOverflowHiddenElements:m}=t,p="function"==typeof f?f:e=>e!==f;if(!s(e))throw TypeError("Invalid target");let g=document.scrollingElement||document.documentElement,x=[],v=e;for(;s(v)&&p(v);){if((v=c(v))===g){x.push(v);break}null!=v&&v===document.body&&a(v)&&!a(document.documentElement)||null!=v&&a(v,m)&&x.push(v)}let b=null!=(n=null==(r=window.visualViewport)?void 0:r.width)?n:innerWidth,y=null!=(o=null==(l=window.visualViewport)?void 0:l.height)?o:innerHeight,{scrollX:w,scrollY:j}=window,{height:N,width:k,top:A,right:E,bottom:M,left:C}=e.getBoundingClientRect(),{top:P,right:R,bottom:H,left:T}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),I="start"===u||"nearest"===u?A-P:"end"===u?M+H:A+N/2-P+H,S="center"===h?C+k/2-T+R:"end"===h?E+R:C-T,z=[];for(let e=0;e<x.length;e++){let t=x[e],{height:r,width:n,top:l,right:s,bottom:o,left:a}=t.getBoundingClientRect();if("if-needed"===d&&A>=0&&C>=0&&M<=y&&E<=b&&A>=l&&M<=o&&C>=a&&E<=s)break;let c=getComputedStyle(t),f=parseInt(c.borderLeftWidth,10),m=parseInt(c.borderTopWidth,10),p=parseInt(c.borderRightWidth,10),v=parseInt(c.borderBottomWidth,10),P=0,R=0,H="offsetWidth"in t?t.offsetWidth-t.clientWidth-f-p:0,T="offsetHeight"in t?t.offsetHeight-t.clientHeight-m-v:0,W="offsetWidth"in t?0===t.offsetWidth?0:n/t.offsetWidth:0,F="offsetHeight"in t?0===t.offsetHeight?0:r/t.offsetHeight:0;if(g===t)P="start"===u?I:"end"===u?I-y:"nearest"===u?i(j,j+y,y,m,v,j+I,j+I+N,N):I-y/2,R="start"===h?S:"center"===h?S-b/2:"end"===h?S-b:i(w,w+b,b,f,p,w+S,w+S+k,k),P=Math.max(0,P+j),R=Math.max(0,R+w);else{P="start"===u?I-l-m:"end"===u?I-o+v+T:"nearest"===u?i(l,o,r,m,v+T,I,I+N,N):I-(l+r/2)+T/2,R="start"===h?S-a-f:"center"===h?S-(a+n/2)+H/2:"end"===h?S-s+p+H:i(a,s,n,f,p+H,S,S+k,k);let{scrollLeft:e,scrollTop:c}=t;P=0===F?0:Math.max(0,Math.min(c+P/F,t.scrollHeight-r/F+T)),R=0===W?0:Math.max(0,Math.min(e+R/W,t.scrollWidth-n/W+H)),I+=c-P,S+=e-R}z.push({el:t,top:P,left:R})}return z},u=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};var h=r(7437),f=(0,l.createContext)([]),m=(0,l.createContext)({current:null});function p(){return(0,l.useContext)(f).at(-1)}function g(){return(0,l.useContext)(f)}function x(e){let{containerRef:t,children:r}=e;return(0,h.jsx)(m.Provider,{value:t,children:r})}function v(e){let{toc:t,single:r=!0,children:n}=e,s=(0,l.useMemo)(()=>t.map(e=>e.url.split("#")[1]),[t]);return(0,h.jsx)(f.Provider,{value:function(e,t){let[r,n]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let r=[],l=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&!r.includes(t.target.id)?r=[...r,t.target.id]:!t.isIntersecting&&r.includes(t.target.id)&&(r=r.filter(e=>e!==t.target.id));r.length>0&&n(r)},{rootMargin:t?"-80px 0% -70% 0%":"-20px 0% -40% 0%",threshold:1});function s(){let r=document.scrollingElement;r&&(0===r.scrollTop&&t?n(e.slice(0,1)):r.scrollTop+r.clientHeight>=r.scrollHeight-6&&n(r=>r.length>0&&!t?e.slice(e.indexOf(r[0])):e.slice(-1)))}for(let t of e){let e=document.getElementById(t);e&&l.observe(e)}return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),l.disconnect()}},[t,e]),t?r.slice(0,1):r}(s,r),children:n})}var b=(0,l.forwardRef)((e,t)=>{let{onActiveChange:r,...s}=e,o=(0,l.useContext)(m),a=g(),i=(0,l.useRef)(null),c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach(t=>{"function"==typeof t?t(e):null!==t&&(t.current=e)})}}(i,t),f=a.includes(s.href.slice(1));return(0,n.p)(f,e=>{let t=i.current;t&&(e&&o.current&&function(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;let r=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(d(e,t));let n="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:l,top:s,left:o}of d(e,u(t))){let e=s-r.top+r.bottom,t=o-r.left+r.right;l.scroll({top:e,left:t,behavior:n})}}(t,{behavior:"smooth",block:"center",inline:"center",scrollMode:"always",boundary:o.current}),null==r||r(e))}),(0,h.jsx)("a",{ref:c,"data-active":f,...s,children:s.children})});b.displayName="TOCItem"},3770:(e,t,r)=>{"use strict";r.d(t,{F:()=>c});var n=r(2265),l=r(33),s=r(3547),o=r(7437);function a(e,t){if(0===t.length||0===e.clientHeight)return[0,0];let r=Number.MAX_VALUE,n=0;for(let l of t){let t=e.querySelector(`a[href="#${l}"]`);if(!t)continue;let s=getComputedStyle(t);r=Math.min(r,t.offsetTop+parseFloat(s.paddingTop)),n=Math.max(n,t.offsetTop+t.clientHeight-parseFloat(s.paddingBottom))}return[r,n-r]}function i(e,t){e.style.setProperty("--fd-top",`${t[0]}px`),e.style.setProperty("--fd-height",`${t[1]}px`)}function c({containerRef:e,...t}){let r=l._z(),c=(0,n.useRef)(null),d=(0,n.useRef)(r);return d.current=r,(0,n.useEffect)(()=>{if(!e.current)return;let t=e.current,r=()=>{c.current&&i(c.current,a(t,d.current))};r();let n=new ResizeObserver(r);return n.observe(t),()=>{n.disconnect()}},[e]),(0,s.p)(r,()=>{e.current&&c.current&&i(c.current,a(e.current,r))}),(0,o.jsx)("div",{ref:c,role:"none",...t})}},3518:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(3950),l=r(3592),s=r(6164),o=r(9145);r(894);var a=r(2265),i=r(7437),c=(0,a.forwardRef)((e,t)=>{let{owner:r,repo:a,sha:c="main",path:d,...u}=e,{text:h}=(0,o.Q)();return(0,i.jsxs)("a",{ref:t,href:"https://github.com/".concat(r,"/").concat(a,"/blob/").concat(c,"/").concat(d.startsWith("/")?d.slice(1):d),target:"_blank",rel:"noreferrer noopener",...u,className:(0,s.m6)((0,n.d)({color:"secondary",className:"gap-1.5 py-1 text-fd-muted-foreground"}),u.className),children:[(0,i.jsx)(l.m7,{className:"size-3.5"}),h.editOnGithub]})});c.displayName="EditOnGitHub";var d=c},6872:(e,t,r)=>{"use strict";r.d(t,{Pre:()=>f});var n=r(8692),l=r(3950),s=r(9744),o=r(3592),a=r(6164),i=r(2265),c=r(7437),d=(0,i.forwardRef)(({className:e,...t},r)=>(0,c.jsx)("pre",{ref:r,className:(0,a.m6)("max-h-[400px] p-4",e),...t,children:t.children}));d.displayName="Pre";var u=(0,i.forwardRef)(({title:e,allowCopy:t=!0,keepBackground:r=!1,icon:n,className:l,...o},d)=>{let u=(0,i.useRef)(null),f=(0,i.useCallback)(()=>{let e=u.current?.getElementsByTagName("pre").item(0);if(!e)return;let t=e.cloneNode(!0);t.querySelectorAll(".nd-copy-ignore").forEach(e=>{e.remove()}),navigator.clipboard.writeText(t.textContent??"")},[]);return(0,c.jsxs)("figure",{ref:d,className:(0,a.m6)("not-prose group fd-codeblock relative my-6 overflow-hidden rounded-lg border bg-fd-secondary/50 text-sm",r&&"bg-[var(--shiki-light-bg)] dark:bg-[var(--shiki-dark-bg)]",l),...o,children:[e?(0,c.jsxs)("div",{className:"flex flex-row items-center gap-2 border-b bg-fd-muted px-4 py-1.5",children:[n?(0,c.jsx)("div",{className:"text-fd-muted-foreground [&_svg]:size-3.5",..."string"==typeof n?{dangerouslySetInnerHTML:{__html:n}}:{children:n}}):null,(0,c.jsx)("figcaption",{className:"flex-1 truncate text-fd-muted-foreground",children:e}),t?(0,c.jsx)(h,{className:"-me-2",onCopy:f}):null]}):t&&(0,c.jsx)(h,{className:"absolute right-2 top-2 z-[2] backdrop-blur-md",onCopy:f}),(0,c.jsxs)(s.xr,{ref:u,dir:"ltr",children:[(0,c.jsx)(s.fK,{children:o.children}),(0,c.jsx)(s.Bl,{orientation:"horizontal"})]})]})});function h({className:e,onCopy:t,...r}){let[s,i]=(0,n.v)(t);return(0,c.jsxs)("button",{type:"button",className:(0,a.m6)((0,l.d)({color:"ghost",className:"transition-all group-hover:opacity-100"}),!s&&"opacity-0",e),"aria-label":"Copy Text",onClick:i,...r,children:[(0,c.jsx)(o.Jr,{className:(0,a.m6)("size-3.5 transition-transform",!s&&"scale-0")}),(0,c.jsx)(o.CK,{className:(0,a.m6)("absolute size-3.5 transition-transform",s&&"scale-0")})]})}function f(e){return(0,c.jsx)(u,{...e,children:(0,c.jsx)(d,{children:e.children})})}u.displayName="CodeBlock",r(894)},7576:(e,t,r)=>{"use strict";r.d(t,{Breadcrumb:()=>N,Footer:()=>M,LastUpdate:()=>k,TOCItems:()=>w,Toc:()=>v,TocPopover:()=>y});var n=r(3770),l=r(9471),s=r(7076),o=r(9744),a=r(3592),i=r(6164),c=r(5763),d=r(7753),u=r(9145);r(894);var h=r(2265),f=r(7138),m=r(3525),p=r(33),g=r(7437),x=r(5772);function v(e){let{header:t,footer:r,children:n}=e,{text:l}=(0,u.Q)();return(0,g.jsx)("div",{"data-toc":"",className:"sticky top-fd-layout-top h-[var(--fd-toc-height)] flex-1 pb-2 pt-12 max-lg:hidden",style:{"--fd-toc-height":"calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"},children:(0,g.jsxs)("div",{className:"flex h-full w-[var(--fd-toc-width)] flex-col gap-3 pe-2",children:[t,(0,g.jsxs)("h3",{className:"-ms-0.5 inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",children:[(0,g.jsx)(a.xv,{className:"size-4"}),l.toc]}),n,r]})})}function b(e){let{open:t}=(0,d.A)(),{isTransparent:r}=(0,h.useContext)(l.Ly);return(0,g.jsx)("div",{id:"nd-tocnav",className:(0,i.m6)("sticky top-fd-layout-top z-10 border-b border-fd-foreground/10 text-sm transition-colors md:top-[var(--fd-toc-top-with-offset)] md:mx-3 md:rounded-full md:border",!r&&"bg-fd-background/80 backdrop-blur-md md:shadow-md",t&&"opacity-0",e.className),style:{"--fd-toc-top-with-offset":"calc(4px + var(--fd-banner-height) + var(--fd-nav-height))"},children:e.children})}function y(e){let{items:t,...r}=e,{text:n}=(0,u.Q)(),l=p.tD(),o=(0,h.useMemo)(()=>{var e;return null===(e=t.find(e=>l===e.url.slice(1)))||void 0===e?void 0:e.title},[t,l]);return(0,g.jsx)(b,{...r,children:(0,g.jsxs)(s.J2,{children:[(0,g.jsxs)(s.xo,{className:"inline-flex size-full items-center gap-2 text-nowrap px-4 py-2 text-left md:px-3",children:[(0,g.jsx)(a.xv,{className:"size-4 shrink-0"}),n.toc,o?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a._Q,{className:"-mx-1.5 size-4 shrink-0 text-fd-muted-foreground"}),(0,g.jsx)("span",{className:"truncate text-fd-muted-foreground",children:o})]}):null]}),(0,g.jsxs)(s.yk,{hideWhenDetached:!0,alignOffset:16,align:"start",side:"bottom",className:"flex max-h-[var(--radix-popover-content-available-height)] w-[260px] flex-col gap-4 p-3","data-toc-popover":"",children:[r.header,r.children,r.footer]})]})})}function w(e){let{items:t,isMenu:r=!1}=e,{text:l}=(0,u.Q)(),s=(0,h.useRef)(null),a=(0,h.useRef)(null);return 0===t.length?(0,g.jsx)("div",{className:"rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",children:l.tocNoHeadings}):(0,g.jsx)(o.xr,{className:(0,i.m6)("flex flex-col",r&&"-ms-3"),children:(0,g.jsx)(p.ID,{containerRef:a,children:(0,g.jsxs)(o.fK,{className:"relative min-h-0 text-sm",ref:a,children:[(0,g.jsx)(n.F,{containerRef:s,className:"absolute start-0 mt-[var(--fd-top)] h-[var(--fd-height)] w-px bg-fd-primary transition-all"}),(0,g.jsx)("div",{ref:s,className:(0,i.m6)("flex flex-col",!r&&"border-s border-fd-foreground/10"),children:t.map(e=>(0,g.jsx)(j,{item:e},e.url))})]})})})}function j(e){let{item:t}=e;return(0,g.jsx)(p.FU,{href:t.url,className:(0,i.m6)("prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",t.depth<=2&&"ps-3.5",3===t.depth&&"ps-6",t.depth>=4&&"ps-8"),children:t.title})}function N(e){let{full:t=!1,...r}=e,{path:n,root:l}=(0,c.W)(),s=(0,h.useMemo)(()=>(0,x.bi)(l,n,{includePage:t,...r}),[t,r,n,l]);return 0===s.length?null:(0,g.jsx)("div",{className:"-mb-3 flex flex-row items-center gap-1 text-sm font-medium text-fd-muted-foreground",children:s.map((e,t)=>(0,g.jsxs)(h.Fragment,{children:[0!==t&&(0,g.jsx)(a._Q,{className:"size-4 shrink-0 rtl:rotate-180"}),e.url?(0,g.jsx)(f.default,{href:e.url,className:"truncate hover:text-fd-accent-foreground",children:e.name}):(0,g.jsx)("span",{className:"truncate",children:e.name})]},t))})}function k(e){let{text:t}=(0,u.Q)(),[r,n]=(0,h.useState)("");return(0,h.useEffect)(()=>{n(e.date.toLocaleDateString())},[e.date]),(0,g.jsxs)("p",{className:"text-sm text-fd-muted-foreground",children:[t.lastUpdate," ",r]})}var A=(0,m.j)("flex w-full flex-col gap-2 rounded-lg border bg-fd-card p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground"),E=(0,m.j)("inline-flex items-center gap-0.5 text-fd-muted-foreground");function M(e){let{items:t}=e,r=(0,c.W)(),{text:n}=(0,u.Q)(),{previous:l,next:s}=(0,h.useMemo)(()=>{if(t)return t;let e=r.getNeighbours();return{previous:e[0],next:e[1]}},[t,r]);return(0,g.jsxs)("div",{className:"grid grid-cols-2 gap-4 pb-6",children:[l?(0,g.jsxs)(f.default,{href:l.url,className:(0,i.m6)(A()),children:[(0,g.jsxs)("div",{className:(0,i.m6)(E()),children:[(0,g.jsx)(a.s$,{className:"-ms-1 size-4 shrink-0 rtl:rotate-180"}),(0,g.jsx)("p",{children:n.previousPage})]}),(0,g.jsx)("p",{className:"font-medium",children:l.name})]}):null,s?(0,g.jsxs)(f.default,{href:s.url,className:(0,i.m6)(A({className:"col-start-2 text-end"})),children:[(0,g.jsxs)("div",{className:(0,i.m6)(E({className:"flex-row-reverse"})),children:[(0,g.jsx)(a._Q,{className:"-me-1 size-4 shrink-0 rtl:rotate-180"}),(0,g.jsx)("p",{children:n.nextPage})]}),(0,g.jsx)("p",{className:"font-medium",children:s.name})]}):null]})}},2539:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(3770),l=r(9744),s=r(6164),o=r(9145);r(894);var a=r(33),i=r(2265),c=r(7437);function d(e){let{items:t,isMenu:r=!1}=e,{text:d}=(0,o.Q)(),f=(0,i.useRef)(null),m=(0,i.useRef)(null),[p,g]=(0,i.useState)();return((0,i.useEffect)(()=>{if(!m.current)return;let e=m.current;function r(){if(0===e.clientHeight)return;let r=0,n=0,l=[];for(let s=0;s<t.length;s++){let o=e.querySelector('a[href="#'.concat(t[s].url.slice(1),'"]'));if(!o)continue;let a=getComputedStyle(o),i=u(t[s].depth)+1,c=o.offsetTop+parseFloat(a.paddingTop),d=o.offsetTop+o.clientHeight-parseFloat(a.paddingBottom);r=Math.max(i,r),n=Math.max(n,d),l.push("".concat(0===s?"M":"L").concat(i," ").concat(c)),l.push("L".concat(i," ").concat(d))}g({path:l.join(" "),width:r+1,height:n})}let n=new ResizeObserver(r);return r(),n.observe(e),()=>{n.disconnect()}},[t]),0===t.length)?(0,c.jsx)("div",{className:"rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",children:d.tocNoHeadings}):(0,c.jsx)(l.xr,{className:(0,s.m6)("flex flex-col",r&&"-ms-3"),children:(0,c.jsxs)(l.fK,{className:"relative min-h-0",ref:f,children:[p?(0,c.jsx)("div",{className:"absolute start-0 top-0 rtl:-scale-x-100",style:{width:p.width,height:p.height,maskImage:'url("data:image/svg+xml,'.concat(encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(p.width," ").concat(p.height,'"><path d="').concat(p.path,'" stroke="black" stroke-width="1" fill="none" /></svg>')),'")')},children:(0,c.jsx)(n.F,{containerRef:m,className:"mt-[var(--fd-top)] h-[var(--fd-height)] bg-fd-primary transition-all"})}):null,(0,c.jsx)(a.ID,{containerRef:f,children:(0,c.jsx)("div",{className:"flex flex-col",ref:m,children:t.map((e,r)=>{var n,l;return(0,c.jsx)(h,{item:e,upper:null===(n=t[r-1])||void 0===n?void 0:n.depth,lower:null===(l=t[r+1])||void 0===l?void 0:l.depth},e.url)})})})]})})}function u(e){return e>=3?12:0}function h(e){var t;let{item:r,upper:n=r.depth,lower:l=r.depth}=e,o=u(r.depth),i=u(n),d=u(l);return(0,c.jsxs)(a.FU,{href:r.url,style:{paddingInlineStart:(t=r.depth)<=2?16:3===t?32:48},className:"prose relative py-2 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",children:[o!==i?(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",className:"absolute -top-2 start-0 size-4 rtl:-scale-x-100",children:(0,c.jsx)("line",{x1:i,y1:"0",x2:o,y2:"16",className:"stroke-fd-foreground/10",strokeWidth:"1"})}):null,(0,c.jsx)("div",{className:(0,s.m6)("absolute inset-y-0 w-px bg-fd-foreground/10",o!==i&&"top-2",o!==d&&"bottom-2"),style:{insetInlineStart:o}}),r.title]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[30,49,811,569,343,40,867,130,215,744],()=>t(5303)),_N_E=e.O()}]);