(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{2356:(e,t,r)=>{Promise.resolve().then(r.bind(r,1542)),Promise.resolve().then(r.bind(r,5050)),Promise.resolve().then(r.bind(r,6218)),Promise.resolve().then(r.bind(r,7903)),Promise.resolve().then(r.bind(r,9337)),Promise.resolve().then(r.bind(r,228)),Promise.resolve().then(r.bind(r,6430)),Promise.resolve().then(r.bind(r,2052))},1542:(e,t,r)=>{"use strict";r.d(t,{Configurator:()=>l});var a=r(3530),n=r(5094),s=r(6962),o=r.n(s);let l=e=>{let{args:t,template:r,env:s}=e,l=Object.entries(s).map(e=>{var t;let[r,a]=e;return{key:r,name:"".concat(r," (").concat(a.tip,")"),defaultVal:null===(t=a.default)||void 0===t?void 0:t.toString()}}),[i,c]=(0,n.useState)(l.map(e=>e.defaultVal||""));return(0,a.jsxs)("div",{className:"border rounded-lg p-4 bg-gray-50 dark:bg-gray-900",children:[(0,a.jsx)("div",{className:"space-y-4",children:l.map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4",children:[(0,a.jsx)("span",{className:"text-sm sm:w-1/3",children:e.name}),(0,a.jsx)("input",{type:"password"===s[e.key].type?"password":"text",className:"w-full sm:flex-1 border rounded px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700",value:i[t],onChange:e=>{let r=[...i];r[t]=e.target.value,c(r)},placeholder:e.defaultVal})]},e.key))}),(0,a.jsx)("button",{onClick:()=>{l.map((e,t)=>"".concat(e.key,"=").concat(i[t])).join("\n"),t.join(" ");let e=r;l.forEach((t,r)=>{e=e.replace(RegExp("process.env.".concat(t.key),"g"),i[r])}),o()(e)},className:"mt-4 w-full bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800",children:"复制配置"})]})}},5050:(e,t,r)=>{"use strict";r.r(t),r.d(t,{EnvVariableConfig:()=>l});var a=r(3530),n=r(5094),s=r(6962),o=r.n(s);function l(e){let{variableNames:t,format:r}=e,[s,l]=(0,n.useState)(t.map(e=>e.defaultVal||"")),i=(e,t)=>{let r=[...s];r[e]=t,l(r)};return(0,a.jsxs)("div",{className:"p-4 mt-2 rounded-lg border dark:bg-gray-900 dark:border-gray-800",children:[t.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center space-x-4 mb-4",children:[(0,a.jsx)("input",{type:"text",className:"border rounded-lg px-2 py-2 w-1/2 bg-transparent focus:outline-none focus:border-black hover:border-white-400 transition duration-300 font-[400] font-sans text-sm cursor-not-allowed dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",value:e.name||e.key,"data-tip":e.key,onMouseOver:e=>{e.target.style.color="transparent",setTimeout(()=>{e.target.style.color="inherit",e.target.value=e.target.dataset.tip},300)},onMouseLeave:t=>{t.target.style.color="transparent",setTimeout(()=>{t.target.style.color="inherit",t.target.value=e.name||e.key},300)},disabled:!0}),(0,a.jsx)("input",{type:"text",className:"border rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:border-black hover:border-gray-400 transition duration-300 font-[400] font-sans text-sm dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800",style:{outline:"none",boxShadow:"none"},placeholder:"Enter value...",value:s[t],onChange:e=>i(t,e.target.value)})]},"".concat(e.key))),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsx)("h2",{className:"sr-only",children:"环境变量配置"}),(0,a.jsx)("button",{type:"button",className:"border bg-black w-full text-white px-4 py-2 rounded-lg text-sm transform transition-all duration-300 focus:outline-none hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800",onClick:()=>{if("yaml"===r){let e=t.map((e,t)=>"- ".concat(e.key,"=").concat(s[t])).join("\n");o()(e);return}let e=t.map((e,t)=>"".concat(e.key,"=").concat(s[t])).join("\n");o()(e)},children:"复制"})]})]})}},6218:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(3530);r(5094);var n=r(4042),s=r(3239),o=r(1007);let l=e=>{let{title:t,preview:r,href:l,github:i}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute top-4 right-4 z-10",children:(0,a.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",onClick:e=>e.stopPropagation(),children:(0,a.jsx)(o.Z,{size:16})})}),(0,a.jsx)(s.Z,{title:t,href:l,className:"overflow-hidden",children:(0,a.jsx)("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-neutral-800",children:(0,a.jsx)(n.default,{src:r,alt:"".concat(t," 预览图"),fill:!0,className:"object-scale-down",style:{transform:"translateY(-30px)"},priority:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 40vw"})})})]})},i=()=>(0,a.jsx)(s.o,{children:[{title:"Shiro (@innei)",preview:"/assets/images/preview/shiro.png",href:"/docs/themes/shiro/deploy",github:"https://github.com/innei/shiro"},{title:"Kami (@innei)",preview:"/assets/images/preview/kami.png",href:"/docs/themes/kami",github:"https://github.com/mx-space/kami"},{title:"Yun (@innei)",preview:"/assets/images/preview/yun.png",href:"/docs/themes/yun",github:"https://github.com/mx-space/mx-web-yun"}].map(e=>(0,a.jsx)(l,{...e},e.title))})},7903:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ToGitHub:()=>o});var a=r(3530),n=r(1820),s=r(3239);function o(e){let{repo:t}=e;return(0,a.jsx)(s.o,{className:"gap-6",children:(0,a.jsx)(s.Z,{className:"m-2 break-words",style:{maxWidth:"100%"},href:"https://github.com/".concat(t),title:"".concat(t," - GitHub"),icon:(0,a.jsx)(n.Z,{}),external:!0})})}},9337:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(3530),n=r(5094);let s={root:null,rootMargin:"0px",threshold:.5};function o(e){let{src:t}=e,r=(0,n.useRef)(null),o=(0,n.useRef)(null);(0,n.useEffect)(()=>(o.current=new IntersectionObserver(l,s),r.current&&o.current.observe(r.current),()=>{r.current&&o.current&&o.current.unobserve(r.current)}),[t]);let l=e=>{e.forEach(e=>{e.isIntersecting&&r.current?(r.current.src||(r.current.src=t),r.current.play()):r.current&&r.current.pause()})};return(0,a.jsx)("video",{ref:r,muted:!0,autoPlay:!0,playsInline:!0,loop:!0,controls:!0,className:"mt-6 rounded-xl border dark:border-zinc-800"})}},7684:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var a=r(8763),n=r.n(a)},2052:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/_next/static/media/status.c2de24b0.png",height:246,width:488,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUhISMcHSAuLi8nJyhJSEltamY8PD2noZ9UXJ3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBgQEAMAiDMGjV/f/xEvYtqtxcAJGZpELTIh8FzQBG1Jzn9QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},5392:(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var a=r(5094),n=r(102),s=r(9831),o=r(2187),l=r(3530);function i(e){let t=e+"CollectionProvider",[r,i]=(0,n.b)(t),[c,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:r}=e,n=a.useRef(null),s=a.useRef(new Map).current;return(0,l.jsx)(c,{scope:t,itemMap:s,collectionRef:n,children:r})};d.displayName=t;let m=e+"CollectionSlot",p=a.forwardRef((e,t)=>{let{scope:r,children:a}=e,n=u(m,r),i=(0,s.e)(t,n.collectionRef);return(0,l.jsx)(o.g7,{ref:i,children:a})});p.displayName=m;let f=e+"CollectionItemSlot",h="data-radix-collection-item",g=a.forwardRef((e,t)=>{let{scope:r,children:n,...i}=e,c=a.useRef(null),d=(0,s.e)(t,c),m=u(f,r);return a.useEffect(()=>(m.itemMap.set(c,{ref:c,...i}),()=>void m.itemMap.delete(c))),(0,l.jsx)(o.g7,{[h]:"",ref:d,children:n})});return g.displayName=f,[{Provider:d,Slot:p,ItemSlot:g},function(t){let r=u(e+"CollectionConsumer",t);return a.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}},102:(e,t,r)=>{"use strict";r.d(t,{b:()=>s});var a=r(5094),n=r(3530);function s(e,t=[]){let r=[],o=()=>{let t=r.map(e=>a.createContext(e));return function(r){let n=r?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return o.scopeName=e,[function(t,s){let o=a.createContext(s),l=r.length;function i(t){let{scope:r,children:s,...i}=t,c=r?.[e][l]||o,u=a.useMemo(()=>i,Object.values(i));return(0,n.jsx)(c.Provider,{value:u,children:s})}return r=[...r,s],i.displayName=t+"Provider",[i,function(r,n){let i=n?.[e][l]||o,c=a.useContext(i);if(c)return c;if(void 0!==s)return s;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:a})=>{let n=r(e)[`__scope${a}`];return{...t,...n}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(o,...t)]}},9691:(e,t,r)=>{"use strict";r.d(t,{_9:()=>o,gm:()=>l});var a=r(5094),n=r(3530),s=a.createContext(void 0),o=e=>{let{dir:t,children:r}=e;return(0,n.jsx)(s.Provider,{value:t,children:r})};function l(e){let t=a.useContext(s);return e||t||"ltr"}},5379:(e,t,r)=>{},7436:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(7684),n=r(5094),s=r(3530),o=(0,n.forwardRef)(({href:e="#",external:t=!(e.startsWith("/")||e.startsWith("#")||e.startsWith(".")),prefetch:r,replace:n,...o},l)=>t?(0,s.jsx)("a",{ref:l,href:e,rel:"noreferrer noopener",target:"_blank",...o,children:o.children}):(0,s.jsx)(a.default,{ref:l,href:e,prefetch:r,replace:n,...o}));o.displayName="Link",r(5379)},6101:(e,t,r)=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[618,973,772,897,610,744],()=>t(2356)),_N_E=e.O()}]);