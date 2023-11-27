"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"querypath",title:"$querypath"},p=void 0,i={unversionedId:"REST/querypath",id:"version-20-R3/REST/querypath",title:"$querypath",description:"Retorna a consulta como foi executada pelo 4D Server (por exemplo, $querypath=true)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/REST/$querypath.md",sourceDirName:"REST",slug:"/REST/querypath",permalink:"/docs/pt/REST/querypath",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24querypath.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"querypath",title:"$querypath"},sidebar:"docs",previous:{title:"$orderby",permalink:"/docs/pt/REST/orderby"},next:{title:"$queryplan",permalink:"/docs/pt/REST/queryplan"}},s={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],c={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Retorna a consulta como foi executada pelo 4D Server (",(0,r.kt)("em",{parentName:"p"},"por exemplo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$querypath=true"),")"),(0,r.kt)("h2",a({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$querypath")," retorna a consulta como foi executada pelo 4D Server. Se, por exemplo, uma parte da consulta passada n\xe3o devolver nenhuma entidade, o resto da consulta n\xe3o \xe9 executada. A consulta solicitada \xe9 optimizada, como se pode ver em ",(0,r.kt)("inlineCode",{parentName:"p"},"$querypath"),"."),(0,r.kt)("p",null,"Para mais informa\xe7\xf5es sobre os caminhos de consulta, consultar ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/REST/genInfo#querypath-and-queryplan"}),"queryPlan e queryPath"),"."),(0,r.kt)("p",null,"Na cole\xe7\xe3o de etapas, existe um objeto com as seguintes propriedades que definem a consulta executada:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propriedade"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"description"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'Consulta executada ou "AND" quando existem v\xe1rias etapas')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"time"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"N\xfamero de milissegundos necess\xe1rios para executar a consulta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"recordsfounds"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"N\xfamero de registos encontrados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"steps"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Uma cole\xe7\xe3o com um objeto que define a etapa subsequente do caminho da consulta")))),(0,r.kt)("h2",a({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"Se passou a seguinte consulta:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true')),(0,r.kt)("p",null,"E n\xe3o foram encontradas entidades, seria devolvido o seguinte caminho de consulta, se escrever o seguinte:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/$querypath")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'__queryPath: {\n\n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n\n}\n')),(0,r.kt)("p",null,"Se, por outro lado, a primeira consulta devolver mais do que uma entidade, ser\xe1 executada a segunda. Se executarmos a seguinte consulta:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true')),(0,r.kt)("p",null,"Se pelo menos uma entidade for encontrada, ser\xe1 devolvido o seguinte caminho de consulta, se escrever o seguinte:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/$querypath")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respose"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);