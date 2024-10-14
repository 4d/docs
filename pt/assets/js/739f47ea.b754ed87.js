"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38401],{251714:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>m});var i=o(474848),n=o(28453);const d={id:"timeout",title:"$timeout"},s=void 0,r={id:"REST/timeout",title:"$timeout",description:"Define o n\xfamero de segundos para guardar um conjunto de entidades na cache do 4D Server (e.g., $timeout=1800)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/pt/20/REST/timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/pt/20/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/pt/20/REST/top_$limit"}},c={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Define o n\xfamero de segundos para guardar um conjunto de entidades na cache do 4D Server (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(t.p,{children:["Para definir um timeout para um conjunto de entidades criado com ",(0,i.jsx)(t.a,{href:"/docs/pt/20/REST/method#methodentityset",children:(0,i.jsx)(t.code,{children:"$method=entityset"})}),", passar o n\xfamero de segundos para ",(0,i.jsx)(t.code,{children:"$timeout"}),". Por exemplo, se pretender definir o tempo limite para 20 minutos, introduza 1200. Por defeito, o tempo limite \xe9 de duas (2) horas."]}),"\n",(0,i.jsxs)(t.p,{children:["Uma vez definido o tempo limite, sempre que um conjunto de entidades \xe9 chamado (utilizando ",(0,i.jsx)(t.code,{children:"$method=entityset"}),"), o tempo limite \xe9 recalculado com base na hora atual e no tempo limite."]}),"\n",(0,i.jsxs)(t.p,{children:["Se um conjunto de entidades for removido e depois recriado utilizando ",(0,i.jsx)(t.code,{children:"$method=entityset"})," com ",(0,i.jsx)(t.a,{href:"/docs/pt/20/REST/savedfilter",children:(0,i.jsx)(t.code,{children:"$savedfilter"})}),", o novo tempo limite predefinido \xe9 de 10 minutos, independentemente do tempo limite definido ao chamar ",(0,i.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(t.p,{children:"No nosso conjunto de entidades que criamos, definimos o tempo limite para 20 minutos:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var i=o(296540);const n={},d=i.createContext(n);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);