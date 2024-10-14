"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83922],{608488:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(474848),n=r(28453);const i={id:"savedfilter",title:"$savedfilter"},l=void 0,d={id:"REST/savedfilter",title:"$savedfilter",description:"Enregistre le filtre d\xe9fini par $filter lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, $savedfilter=\"\")",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/fr/20/REST/savedfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/fr/20/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/fr/20/REST/savedorderby"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Enregistre le filtre d\xe9fini par $filter lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, ",(0,t.jsx)(s.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous cr\xe9ez un ensemble d'entit\xe9s, vous pouvez, par s\xe9curit\xe9, enregistrer le filtre utilis\xe9 pour sa cr\xe9ation. Si l'ensemble d'entit\xe9s que vous avez cr\xe9\xe9 est supprim\xe9 du cache de 4D Server (en raison du timeout, du besoin d'espace sur le serveur ou de la suppression apr\xe8s avoir appel\xe9 ",(0,t.jsx)(s.a,{href:"/docs/fr/20/REST/method#methodrelease",children:(0,t.jsx)(s.code,{children:"$method=release"})}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["Utilisez ",(0,t.jsx)(s.code,{children:"$savedfilter"})," pour enregistrer le filtre que vous avez d\xe9fini lors de la cr\xe9ation de votre ensemble d'entit\xe9s, puis passez ",(0,t.jsx)(s.code,{children:"$savedfilter"})," avec votre appel, pour r\xe9cup\xe9rer \xe0 chaque fois l'ensemble d'entit\xe9s."]}),"\n",(0,t.jsx)(s.p,{children:"Si l'ensemble d'entit\xe9s n'est plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. L'ensemble d'entit\xe9s sera actualis\xe9 (certaines entit\xe9s peuvent \xeatre incluses tandis que d'autres peuvent \xeatre supprim\xe9es) depuis la derni\xe8re fois qu'il a \xe9t\xe9 cr\xe9\xe9, s'il n'existait plus avant de le recr\xe9er."}),"\n",(0,t.jsxs)(s.p,{children:["Si vous avez utilis\xe9 \xe0 la fois ",(0,t.jsx)(s.code,{children:"$savedfilter"})," et"]}),"\n",(0,t.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20/REST/savedorderby",children:(0,t.jsx)(s.code,{children:"$savedorderby"})})," dans votre appel lors de la cr\xe9ation d'un ensemble d'entit\xe9s et que vous en omettez un, le nouvel ensemble d'entit\xe9s, qui aura le m\xeame num\xe9ro de r\xe9f\xe9rence, le refl\xe9tera."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,t.jsx)(s.p,{children:"Puis, lorsque vous acc\xe9dez \xe0 votre ensemble d'entit\xe9s, saisissez ce qui suit pour vous assurer que l'ensemble d'entit\xe9s est toujours valide :"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>d});var t=r(296540);const n={},i=t.createContext(n);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);