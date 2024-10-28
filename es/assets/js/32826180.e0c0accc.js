"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23345],{34805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"queryplan",title:"$queryplan"},l=void 0,a={id:"REST/queryplan",title:"$queryplan",description:"Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (\\por ejemplo, \\, $queryplan=true)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/es/20-R6/REST/queryplan",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24queryplan.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/es/20-R6/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/es/20-R6/REST/savedfilter"}},o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Respuesta:",id:"respuesta",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (*por ejemplo, *, ",(0,r.jsx)(n.code,{children:"$queryplan=true"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"$queryplan devuelve el plan de la petici\xf3n tal y como se pas\xf3 a 4D Server."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"item"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Petici\xf3n ejecutada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subquery"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"Si hay una subconsulta, un objeto adicional que contiene una propiedad de elemento (como la anterior)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los planes de petici\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/REST/genInfo#querypath-and-queryplan",children:"queryPlan y queryPath"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Si pasas la siguiente petici\xf3n:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true'})}),"\n",(0,r.jsx)(n.h4,{id:"respuesta",children:"Respuesta:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company. ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(296540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);