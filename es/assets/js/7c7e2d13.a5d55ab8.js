"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79180"],{34102:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"REST/querypath","title":"$querypath","description":"Devuelve la petici\xf3n tal y como se ejecut\xf3 por 4D Server (por ejemplo, , $querypath=true)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$querypath.md","sourceDirName":"REST","slug":"/REST/querypath","permalink":"/docs/es/18/REST/querypath","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"querypath","title":"$querypath"},"sidebar":"docs","previous":{"title":"$orderby","permalink":"/docs/es/18/REST/orderby"},"next":{"title":"$queryplan","permalink":"/docs/es/18/REST/queryplan"}}'),r=t("785893"),i=t("250065");let o={id:"querypath",title:"$querypath"},d=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Devuelve la petici\xf3n tal y como se ejecut\xf3 por 4D Server (*por ejemplo, *, ",(0,r.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$querypath"})," devuelve la petici\xf3n tal y como fue ejecutada por 4D Server. Si, por ejemplo, una parte de la petici\xf3n pasada no devuelve ninguna entidad, el resto de la petici\xf3n no se ejecuta. La petici\xf3n de consulta est\xe1 optimizada como se puede ver en este ",(0,r.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre las rutas de petici\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/es/18/REST/genInfo#querypath-and-queryplan",children:"queryPlan y queryPath"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"En la colecci\xf3n de pasos, hay un objeto con las siguientes propiedades que definen la petici\xf3n ejecutada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Petici\xf3n ejecutada o "AND" cuando hay varios pasos'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de milisegundos necesarios para ejecutar la petici\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recordsfounds"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de registros encontrados"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"steps"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Una colecci\xf3n con un objeto que define el siguiente paso de la ruta de la petici\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Si pas\xf3 la siguiente petici\xf3n:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"Y no se encontraron entidades, se devolver\xeda la siguiente ruta de petici\xf3n, si escribe lo siguiente:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'__queryPath: {\n\n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company. ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Si, por el contrario, la primera consulta devuelve m\xe1s de una entidad, se ejecutar\xe1 la segunda. Si ejecutamos la siguiente consulta:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"Si se encuentra al menos una entidad, se devolver\xe1 la siguiente ruta de consulta, si se escribe lo siguiente:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company. ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);