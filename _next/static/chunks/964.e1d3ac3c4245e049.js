"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{964:(t,e,a)=>{async function s(t,e,a,s){let r=new URLSearchParams;r.set("query",t),e&&r.set("locale",e),a&&r.set("tag",a);let c=await fetch(`${s.api??"/api/search"}?${r.toString()}`);if(!c.ok)throw Error(await c.text());return await c.json()}a.d(e,{fetchDocs:()=>s}),a(5379)}}]);