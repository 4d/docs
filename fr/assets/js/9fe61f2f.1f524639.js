"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50282],{386113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(474848),i=n(28453);const r={id:"distinct",title:"$distinct"},o=void 0,c={id:"REST/distinct",title:"$distinct",description:'Retourne les diff\xe9rentes valeurs d\'un attribut sp\xe9cifique dans une collection (par exemple, Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/fr/19/REST/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/fr/19/REST/compute"},next:{title:"$entityset",permalink:"/docs/fr/19/REST/entityset"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Retourne les diff\xe9rentes valeurs d'un attribut sp\xe9cifique dans une collection (par exemple, ",(0,s.jsx)(t.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$distinct"})," vous permet de retourner une collection contenant les diff\xe9rentes valeurs d'une requ\xeate sur un attribut sp\xe9cifique. Un seul attribut dans la dataclass peut \xeatre sp\xe9cifi\xe9. G\xe9n\xe9ralement, le type Cha\xeene est id\xe9al; cependant, vous pouvez \xe9galement l'utiliser sur n'importe quel type d'attribut pouvant contenir plusieurs valeurs."]}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez \xe9galement utiliser ",(0,s.jsx)(t.code,{children:"$skip"})," et ",(0,s.jsx)(t.code,{children:"$top/$limit"})," si vous souhaitez parcourir la s\xe9lection avant qu'elle ne soit plac\xe9e dans un tableau."]}),"\n",(0,s.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Dans l'exemple ci-dessous, nous souhaitons r\xe9cup\xe9rer les diff\xe9rentes valeurs d'un nom de soci\xe9t\xe9 commen\xe7ant par la lettre \"a\" :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(296540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);