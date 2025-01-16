"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16190"],{963932:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands/license-info","title":"License info","description":"License info : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/license-info.md","sourceDirName":"commands","slug":"/commands/license-info","permalink":"/docs/pt/commands/license-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Flicense-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"license-info","title":"License info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is license available","permalink":"/docs/pt/commands/is-license-available"},"next":{"title":"License usage","permalink":"/docs/pt/commands/license-usage"}}'),r=s("785893"),i=s("250065");let d={id:"license-info",title:"License info",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"License info"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe2metro"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Resultado"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Information about the active licence"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"License info"})," command returns an object providing detailed information about the active license."]}),"\n",(0,r.jsx)(e.p,{children:"If the command is executed on a 4D application that does not use locally a license (e.g. 4D remote), the command returns a Null object."}),"\n",(0,r.jsx)(e.p,{children:"O objeto retornado cont\xe9m as propriedades abaixo:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "name": "string",\n    "key": 0,\n    "licenseNumber": "string",\n    "version": "string",\n    "attributes": ["string1", "string2"], // optional\n    "userName": "string",\n    "userMail": "string",\n    "companyName": "string",\n    "platforms": ["string1", "string2"],\n    "expirationDate": { \n        // details here \n    }, // optional\n    "renewalFailureCount": 0, // optional\n    "products": [\n        { // for each registered expansion product\n            "id": 0,\n            "name": "string",\n            "usedCount": 0,\n            "allowedCount": 0,\n            "rights": [\n                {\n                    "count": 0,\n                    "expirationDate": { \n                        // details here \n                    } // optional\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Property"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Tipo"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Exemplo"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"name"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Nome comercial"}),(0,r.jsx)(e.td,{children:'"4D Developer Professional vXX"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"|"}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"ID of the installed product. A unique number is associated to a 4D application (such as 4D Server, 4D in local mode, 4D Desktop, etc.) installed on a machine. Esse n\xfamero \xe9 criptografado."}),(0,r.jsx)(e.td,{children:"12356789"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"licenseNumber"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"License number"}),(0,r.jsx)(e.td,{children:'"4DDP16XXXXX1123456789"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"version"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Product version number"}),(0,r.jsx)(e.td,{children:'"16", "16R2"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"attributes"}),(0,r.jsx)(e.td,{children:"collection of strings"}),(0,r.jsx)(e.td,{children:"License type(s) when applicable (optional)"}),(0,r.jsx)(e.td,{children:'["application","OEM"]'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"userName"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Name of 4D store account"}),(0,r.jsx)(e.td,{children:'"John Smith"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"userMail"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Mail of 4D store account"}),(0,r.jsxs)(e.td,{children:['"',(0,r.jsx)(e.a,{href:"mailto:john.smith@gmail.com",children:"john.smith@gmail.com"}),'"']})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"companyName"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Company name of 4D store account"}),(0,r.jsx)(e.td,{children:'"Alpha Cie"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"platforms"}),(0,r.jsx)(e.td,{children:"collection of strings"}),(0,r.jsx)(e.td,{children:"License platform(s)"}),(0,r.jsx)(e.td,{children:'["macOS", "windows"]'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"expirationDate"}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"Date of expiration (optional)"}),(0,r.jsx)(e.td,{children:'{"day":2, "month":6, "year":2018}'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"renewalFailureCount"}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"Number of unsuccessful automatic renewal attempts for at least one of the product licenses (optional)"}),(0,r.jsx)(e.td,{children:"3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"products"}),(0,r.jsx)(e.td,{children:"uma cole\xe7\xe3o de objetos"}),(0,r.jsx)(e.td,{children:"Description of product license (one element per product license). Ver abaixo."}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["Each object of the ",(0,r.jsx)(e.code,{children:"products"})," collection can have the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Property"})}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Tipo"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Exemplo"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"id"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"License number"}),(0,r.jsxs)(e.td,{children:["Para saber os valores dispon\xedveis, consulte o comando ",(0,r.jsx)(e.a,{href:"/docs/pt/commands/is-license-available",children:"Is license available"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"name"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"License name"}),(0,r.jsx)(e.td,{children:'"4D Write - 4D Write Pro"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"usedCount"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"Number of consumed connections"}),(0,r.jsx)(e.td,{children:"8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"allowedCount"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"Total connections allowed for the product against the expiry dates"}),(0,r.jsx)(e.td,{children:"15"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rights"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"uma cole\xe7\xe3o de objetos"}),(0,r.jsx)(e.td,{children:"Rights for the product (one element per expiration date)"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].count"}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"Number of allowed connections"}),(0,r.jsx)(e.td,{children:"15 (32767 significa ilimitado)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].expirationDate"}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"Date of expiration (optional, same format as above)"}),(0,r.jsx)(e.td,{children:'{"day":1, "month":11, "year":2017}'})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(e.p,{children:"You want to get information on your current 4D Server license:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0var $obj : Object\n\xa0$obj:=License info\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"$obj"})," can contain, for example:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "name": "4D Server v16 R3",\n\xa0\xa0\xa0 "key": 123456789,\n\xa0\xa0\xa0 "licenseNumber": "xxxx",\n\xa0\xa0\xa0 "version": "16R3",\n\xa0\xa0\xa0 "userName": "John DOE",\n\xa0\xa0\xa0 "userMail": "john.doe@alpha.com",\n\xa0\xa0\xa0 "companyName": "Alpha",\n\xa0\xa0\xa0 "platforms": ["macOS", "windows"],\n\xa0\xa0\xa0 "expirationDate": {"day":1, "month":1, "year":2018},\n\xa0\xa0\xa0 "products":[\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "allowedCount": 15,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 808464697,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "name": "4D Write - 4D Write Pro",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 5,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":2, "year":2018}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 10,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":11, "year":2017}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 10,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":11, "year":2015} //expired, not counted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ],\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "usedCount": 12\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {...}\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,r.jsx)(e.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/pt/commands/change-licenses",children:"CHANGE LICENSES"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/pt/commands/is-license-available",children:"Is license available"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/pt/commands/web-get-server-info",children:"WEB Get server info"})]}),"\n",(0,r.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Command number"}),(0,r.jsx)(e.td,{children:"1489"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"&check;"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);