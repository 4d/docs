"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81701],{965564:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var n=r(474848),t=r(28453);const o={id:"php-get-full-response",title:"PHP GET FULL RESPONSE",slug:"/commands/php-get-full-response",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/php-get-full-response",title:"PHP GET FULL RESPONSE",description:"PHP GET FULL RESPONSE ( stdOut {; etiquetaErr ; valoresErr} {; camposCabHttp {; valoresCabHttp}} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-get-full-response.md",sourceDirName:"commands-legacy",slug:"/commands/php-get-full-response",permalink:"/docs/pt/commands/php-get-full-response",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-get-full-response.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"php-get-full-response",title:"PHP GET FULL RESPONSE",slug:"/commands/php-get-full-response",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PHP Execute",permalink:"/docs/pt/commands/php-execute"},next:{title:"PHP GET OPTION",permalink:"/docs/pt/commands/php-get-option"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"PHP GET FULL RESPONSE"})," ( ",(0,n.jsx)(s.em,{children:"stdOut"})," {; ",(0,n.jsx)(s.em,{children:"etiquetaErr"})," ; ",(0,n.jsx)(s.em,{children:"valoresErr"}),"} {; ",(0,n.jsx)(s.em,{children:"camposCabHttp"})," {; ",(0,n.jsx)(s.em,{children:"valoresCabHttp"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stdOut"}),(0,n.jsx)(s.td,{children:"Text, Blob"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Conte\xfado do buffer stdOut"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"etiquetaErr"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Etiquetas dos erros"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"valoresErr"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Valores dos erros"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"camposCabHttp"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Nome dos cabe\xe7alhos HTTP"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"valoresCabHttp"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Valores dos cabe\xe7alhos HTTP"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(s.admonition,{title:"Compatibilidade",type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"PHP est\xe1 obsoleto em 4D"}),". Recomenda-se usar a classe ",(0,n.jsx)(s.a,{href:"/docs/pt/API/SystemWorkerClass",children:(0,n.jsx)(s.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(s.p,{children:"O comando PHP GET FULL RESPONSE permite obter informa\xe7\xe3o adicional sobre a resposta devolvida pelo int\xe9rprete PHP. Este comando \xe9 especialmente \xfatil no caso de que ocorra um erro durante a execu\xe7\xe3o do script."}),"\n",(0,n.jsxs)(s.p,{children:["O script PHP pode escrever dados no buffer stdOut (eco, print, etc.) O comando devolvido diretamente os dados na vari\xe1vel ",(0,n.jsx)(s.em,{children:"stdOut"})," e aplica os mesmos princ\xedpios de convers\xe3o descritos no comando ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/php-execute",title:"PHP Execute",children:"PHP Execute"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Os arrays texto sincronizados ",(0,n.jsx)(s.em,{children:"etiquetasErr"})," e ",(0,n.jsx)(s.em,{children:"valoresErr"})," se preenchem quando a execu\xe7\xe3o dos scripts PHP provoca erros. Estes arrays, em particular, proporcionam informa\xe7\xe3o sobre a origem, o script e a l\xednha de erro. Estes dois arrays s\xe3o insepar\xe1veis: se for passado ",(0,n.jsx)(s.em,{children:"etiquetasErr"}),", se deve passar tamb\xe9m ",(0,n.jsx)(s.em,{children:"valoresErr"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Dado que os interc\xe2mbios entre 4D e o int\xe9rprete PHP se realizam atrav\xe9s de FastCGI, o int\xe9rprete PHP funciona como se fosse chamado por um servidor HTTP e portanto, envia cabe\xe7alhos HTTP. Pode recuperar estes cabe\xe7alhos e seus valores nos arrays ",(0,n.jsx)(s.em,{children:"camposCabHttp"})," e ",(0,n.jsx)(s.em,{children:"valoresCabHttp"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/php-execute",children:"PHP Execute"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/php-get-option",children:"PHP GET OPTION"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>a});var n=r(296540);const t={},o=n.createContext(t);function d(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);