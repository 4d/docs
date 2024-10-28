"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15744],{616205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(474848),o=t(28453);const s={id:"queryplan",title:"$queryplan"},a=void 0,l={id:"REST/queryplan",title:"$queryplan",description:"Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (\\por ejemplo, \\, $queryplan=true)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/pt/20-R6/REST/queryplan",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24queryplan.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/pt/20-R6/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/pt/20-R6/REST/savedfilter"}},i={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Responsa:",id:"responsa",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (*por ejemplo, *, ",(0,r.jsx)(n.code,{children:"$queryplan=true"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"$queryplan retorna o plano da consulta como foi passado para 4D Server."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"item"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Peti\xe7\xe3o executada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subquery"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"Se houver uma subconsulta, um objeto adicional contendo uma propriedade de item (como o anterior)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los planes de petici\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/REST/genInfo#querypath-and-queryplan",children:"queryPlan y queryPath"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se passar a seguinte consulta:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true'})}),"\n",(0,r.jsx)(n.h4,{id:"responsa",children:"Responsa:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(296540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);