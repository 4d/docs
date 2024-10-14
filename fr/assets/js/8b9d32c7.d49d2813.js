"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89279],{389245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(474848),l=t(28453);const s={id:"queryplan",title:"$queryplan"},i=void 0,o={id:"REST/queryplan",title:"$queryplan",description:"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 pass\xe9e au 4D Server (par exemple, $queryplan=true)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/fr/REST/queryplan",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24queryplan.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/fr/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/fr/REST/savedfilter"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"R\xe9ponse :",id:"r\xe9ponse-",level:4}];function u(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Retourne la requ\xeate telle qu'elle a \xe9t\xe9 pass\xe9e au 4D Server (par exemple, ",(0,r.jsx)(n.code,{children:"$queryplan=true"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"$queryplan retourne le plan de la requ\xeate telle qu'il a \xe9t\xe9 ex\xe9cut\xe9 par 4D Server."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"item"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Requ\xeate ex\xe9cut\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subquery"}),(0,r.jsx)(n.td,{children:"Tableau"}),(0,r.jsx)(n.td,{children:"S'il existe une sous-requ\xeate, un objet suppl\xe9mentaire contenant une propri\xe9t\xe9 d'\xe9l\xe9ment (comme celle indiqu\xe9e ci-dessus)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Pour plus d'informations sur les plans de requ\xeate, reportez-vous \xe0 ",(0,r.jsx)(n.a,{href:"/docs/fr/REST/genInfo#querypath-and-queryplan",children:"queryPlan ete queryPath"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Si vous passez la requ\xeate suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true'})}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9ponse-",children:"R\xe9ponse :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(296540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);