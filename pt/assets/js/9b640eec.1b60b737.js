"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67306"],{115945:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"REST/querypath","title":"$querypath","description":"Devuelve la petici\xf3n tal y como se ejecut\xf3 por 4D Server (\\\\por ejemplo, \\\\, $querypath=true)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/$querypath.md","sourceDirName":"REST","slug":"/REST/querypath","permalink":"/docs/pt/20-R6/REST/querypath","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"querypath","title":"$querypath"},"sidebar":"docs","previous":{"title":"$orderby","permalink":"/docs/pt/20-R6/REST/orderby"},"next":{"title":"$queryplan","permalink":"/docs/pt/20-R6/REST/queryplan"}}'),r=t("785893"),o=t("250065");let d={id:"querypath",title:"$querypath"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Devuelve la petici\xf3n tal y como se ejecut\xf3 por 4D Server (*por ejemplo, *, ",(0,r.jsx)(n.code,{children:"$querypath=true"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$querypath"})," devuelve la petici\xf3n tal y como fue ejecutada por 4D Server. Se, por exemplo, uma parte da consulta passada n\xe3o devolver nenhuma entidade, o resto da consulta n\xe3o \xe9 executada. La petici\xf3n de consulta est\xe1 optimizada como se puede ver en este ",(0,r.jsx)(n.code,{children:"$querypath"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre las rutas de petici\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/REST/genInfo#querypath-and-queryplan",children:"queryPlan y queryPath"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Na cole\xe7\xe3o de etapas, existe um objeto com as seguintes propriedades que definem a consulta executada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Consulta executada ou "AND" quando existem v\xe1rias etapas'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de milissegundos necess\xe1rios para executar a consulta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recordsfounds"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"N\xfamero de registos encontrados"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"steps"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"Uma cole\xe7\xe3o com um objeto que define a etapa subsequente do caminho da consulta"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se passou a seguinte consulta:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"E n\xe3o foram encontradas entidades, seria devolvido o seguinte caminho de consulta, se escrever o seguinte:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:" GET  /rest/$querypath"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Se, por outro lado, a primeira consulta devolver mais do que uma entidade, ser\xe1 executada a segunda. Se executarmos a seguinte consulta:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"Se pelo menos uma entidade for encontrada, ser\xe1 devolvido o seguinte caminho de consulta, se escrever o seguinte:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/$querypath"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);