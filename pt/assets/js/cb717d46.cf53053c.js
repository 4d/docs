/*! For license information please see cb717d46.cf53053c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12895],{979392:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(474848),s=r(28453);const o={id:"querypath",title:"$querypath"},d=void 0,a={id:"REST/querypath",title:"$querypath",description:"Devuelve la petici\xf3n tal y como se ejecut\xf3 por 4D Server (\\por ejemplo, \\, $querypath=true)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$querypath.md",sourceDirName:"REST",slug:"/REST/querypath",permalink:"/docs/pt/REST/querypath",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"querypath",title:"$querypath"},sidebar:"docs",previous:{title:"$orderby",permalink:"/docs/pt/REST/orderby"},next:{title:"$queryplan",permalink:"/docs/pt/REST/queryplan"}},i={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo",id:"Exemplo",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Devuelve la petici\xf3n tal y como se ejecut\xf3 por 4D Server (*por ejemplo, *, ",(0,t.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$querypath"})," devuelve la petici\xf3n tal y como fue ejecutada por 4D Server. Se, por exemplo, uma parte da consulta passada n\xe3o devolver nenhuma entidade, o resto da consulta n\xe3o \xe9 executada. La petici\xf3n de consulta est\xe1 optimizada como se puede ver en este ",(0,t.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre las rutas de petici\xf3n, consulte ",(0,t.jsx)(n.a,{href:"/docs/pt/REST/genInfo#querypath-and-queryplan",children:"queryPlan y queryPath"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Na cole\xe7\xe3o de etapas, existe um objeto com as seguintes propriedades que definem a consulta executada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:'Consulta executada ou "AND" quando existem v\xe1rias etapas'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"N\xfamero de milissegundos necess\xe1rios para executar a consulta"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recordsfounds"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"N\xfamero de registos encontrados"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"steps"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Uma cole\xe7\xe3o com um objeto que define a etapa subsequente do caminho da consulta"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"Exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se passou a seguinte consulta:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,t.jsx)(n.p,{children:"E n\xe3o foram encontradas entidades, seria devolvido o seguinte caminho de consulta, se escrever o seguinte:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:" GET  /rest/$querypath"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Se, por outro lado, a primeira consulta devolver mais do que uma entidade, ser\xe1 executada a segunda. Se executarmos a seguinte consulta:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,t.jsx)(n.p,{children:"Se pelo menos uma entidade for encontrada, ser\xe1 devolvido o seguinte caminho de consulta, se escrever o seguinte:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,t)&&!i.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(296540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);