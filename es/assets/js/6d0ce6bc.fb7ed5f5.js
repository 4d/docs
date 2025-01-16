"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46186"],{714906:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"REST/queryplan","title":"$queryplan","description":"Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (\\\\por ejemplo, \\\\, $queryplan=true)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/REST/$queryplan.md","sourceDirName":"REST","slug":"/REST/queryplan","permalink":"/docs/es/REST/queryplan","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24queryplan.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"queryplan","title":"$queryplan"},"sidebar":"docs","previous":{"title":"$querypath","permalink":"/docs/es/REST/querypath"},"next":{"title":"$savedfilter","permalink":"/docs/es/REST/savedfilter"}}'),s=t("785893"),l=t("250065");let i={id:"queryplan",title:"$queryplan"},a=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Respuesta:",id:"respuesta",level:4}];function d(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (*por ejemplo, *, ",(0,s.jsx)(n.code,{children:"$queryplan=true"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"$queryplan devuelve el plan de la petici\xf3n tal y como se pas\xf3 a 4D Server."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"item"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Petici\xf3n ejecutada"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subquery"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"Si hay una subconsulta, un objeto adicional que contiene una propiedad de elemento (como la anterior)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los planes de petici\xf3n, consulte ",(0,s.jsx)(n.a,{href:"/docs/es/REST/genInfo#querypath-and-queryplan",children:"queryPlan y queryPath"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Si pasas la siguiente petici\xf3n:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true'})}),"\n",(0,s.jsx)(n.h4,{id:"respuesta",children:"Respuesta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company. ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let s={},l=r.createContext(s);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);