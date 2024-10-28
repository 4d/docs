"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33372],{917925:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=o(474848),t=o(28453);const s={id:"web-service-authenticate",title:"WEB SERVICE AUTHENTICATE",slug:"/commands/web-service-authenticate",displayed_sidebar:"docs"},i=void 0,r={id:"commands-legacy/web-service-authenticate",title:"WEB SERVICE AUTHENTICATE",description:"WEB SERVICE AUTHENTICATE ( nome ; senha {; metAutentica\xe7ao} {; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-authenticate.md",sourceDirName:"commands-legacy",slug:"/commands/web-service-authenticate",permalink:"/docs/pt/commands/web-service-authenticate",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-authenticate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-service-authenticate",title:"WEB SERVICE AUTHENTICATE",slug:"/commands/web-service-authenticate",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB Validate digest",permalink:"/docs/pt/commands/web-validate-digest"},next:{title:"WEB SERVICE CALL",permalink:"/docs/pt/commands/web-service-call"}},c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," ( ",(0,a.jsx)(n.em,{children:"nome"})," ; ",(0,a.jsx)(n.em,{children:"senha"})," {; ",(0,a.jsx)(n.em,{children:"metAutentica\xe7ao"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nome"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"nome de usu\xe1rio"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"senha"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"senha de usu\xe1rio"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"metAutentica\xe7ao"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"M\xe9todo autentica\xe7\xe3o 0 ou omitido = n\xe3o especificado; 1= BASIC; 2=DIGEST"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Se passado: autentica\xe7\xe3o por proxy"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," permite utilizar os servi\xe7os web que necessitem da autentica\xe7\xe3o da aplica\xe7\xe3o cliente (autentica\xe7\xe3o simples). Os m\xe9todos BASIC e DIGEST s\xe3o compat\xedveis, assim como a presen\xe7a de um proxy."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": para mais informa\xe7\xe3o sobre os m\xe9todos de autentica\xe7\xe3o BASIC e DIGEST, revise a se\xe7\xe3o ",(0,a.jsx)(n.em,{children:"Conex\xf5es de Seguran\xe7a"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Nos par\xe2metros ",(0,a.jsx)(n.em,{children:"nome"})," e ",(0,a.jsx)(n.em,{children:"senha"}),", passe a informa\xe7\xe3o de identifica\xe7\xe3o requerida (nome de usu\xe1rio e senha). Esta informa\xe7\xe3o ser\xe1 codificada e adicionada \xe0 peti\xe7\xe3o HTTP enviada ao servi\xe7o web utilizando o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),". \xc9 ent\xe3o necess\xe1rio chamar ao comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de chamar ao comando ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(n.em,{children:"metAutentica\xe7ao"})," permite indicar o m\xe9todo de autentica\xe7\xe3o a utilizar para a pr\xf3xima chamada do comando ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"})}),". Pode passar um dos seguintes valores:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"2 = utilizar o m\xe9todo de autentica\xe7\xe3o DIGEST"}),"\n",(0,a.jsx)(n.li,{children:"1 = utilizar o m\xe9todo de autentica\xe7\xe3o BASIC"}),"\n",(0,a.jsx)(n.li,{children:"0 (ou omitir o par\xe2metro) = utilizar o m\xe9todo apropriado. Neste caso, 4D envia uma peti\xe7\xe3o adicional para negociar o m\xe9todo de autentica\xe7\xe3o."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Se passar o par\xe2metro *, voc\xea indica que a informa\xe7\xe3o de autentica\xe7\xe3o \xe9 para ser enviada a um proxy HTTP. Essa configura\xe7\xe3o deve ser implementada quando houver um proxy que exige autentica\xe7\xe3o entre o cliente Web Service client e o pr\xf3prio Web Service. Se o Web Service for autenticado, uma autentica\xe7\xe3o dupla for exigida (ver o exemplo)."}),"\n",(0,a.jsxs)(n.p,{children:["Como padr\xe3o, a informa\xe7\xe3o de autentica\xe7\xe3o se reinicia depois de cada peti\xe7\xe3o. Portanto, deve utilizar o comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de cada comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),". Entretanto \xe9 poss\xedvel conservar temporariamente esta informa\xe7\xe3o utilizando uma op\xe7\xe3o do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),". Neste caso, n\xe3o \xe9 necess\xe1rio executar o comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de cada ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Se a autentica\xe7\xe3o fracassar, o servidor SOAP devolve um erro que pode identificar utilizando o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-get-info",children:"WEB SERVICE Get info"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(n.p,{children:"Autentica\xe7\xe3o com um servi\xe7o web localizado atr\xe1s de um proxy:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Autentica\xe7\xe3o ao servi\xe7o web em modo DIGEST\n\xa0AUTHENTICATE WEB SERVICE("SoapUser";"123";2)\n\xa0\xa0//Autentica\xe7\xe3o ao proxy em modo default\n\xa0AUTHENTICATE WEB SERVICE("ProxyUser";"456";*)\n\xa0CALL WEB SERVICE(...)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/web-service-get-info",children:"WEB SERVICE Get info"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var a=o(296540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);