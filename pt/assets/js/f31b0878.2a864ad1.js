"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6043"],{924014:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"commands-legacy/web-service-get-info","title":"WEB SERVICE Get info","description":"WEB SERVICE Get info ( tipoInfo ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-service-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-info","permalink":"/docs/pt/commands/web-service-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-service-get-info","title":"WEB SERVICE Get info","slug":"/commands/web-service-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE CALL","permalink":"/docs/pt/commands/web-service-call"},"next":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/pt/commands/web-service-get-result"}}'),t=n("785893"),d=n("250065");let i={id:"web-service-get-info",title:"WEB SERVICE Get info",slug:"/commands/web-service-get-info",displayed_sidebar:"docs"},s=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WEB SERVICE Get info"})," ( ",(0,t.jsx)(r.em,{children:"tipoInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tipoInfo"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Informa\xe7\xe3o a ser recuperada"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Informa\xe7\xe3o sobre o \xfaltimo erro SOAP"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O comando ",(0,t.jsx)(r.strong,{children:"WEB SERVICE Get info"})," retorna informa\xe7\xe3o de todo erro achado durante a execu\xe7\xe3o da \xfaltima peti\xe7\xe3o SOAP enviada at\xe9 um servi\xe7o web remoto.. Geralmente, este comando deve ser chamado em um m\xe9todo de gest\xe3o de erros instalado pelo comando ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["O par\xe2metro ",(0,t.jsx)(r.em,{children:"tipoinfo"})," permite indicar o tipo de informa\xe7\xe3o que quiser obter. Dever\xe1 passar uma das constantes listadas a seguir, localizada no tema ",(0,t.jsx)(r.em,{children:"Servi\xe7os Web (Cliente)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Constante"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{children:"Valor"}),(0,t.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Web Service detailed message"}),(0,t.jsx)(r.td,{children:"Inteiro longo"}),(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:'Mensagem detalhada que descreve o erro. O tipo de mensagem difere segundo o tipo de erro principal.- Se o erro principal = 9910 (Error Soap): \xe9 retornada a causa do erro SOAP (ex.: "o m\xe9todo remoto n\xe3o existe").- Se o erro principal = 9911 (Erro do analisador xml): \xe9 retornada a localiza\xe7\xe3o do erro no documento XML.- Se o erro principal = 9912 (Erro HTTP): - Se o erro HTTP est\xe1 localizado no intervalo [300-400] (problemas relacionados com a localiza\xe7\xe3o do documento solicitado), \xe9 retornada a nova localiza\xe7\xe3o da URL solicitada. - Para qualquer outro c\xf3digo de erro HTTP, \xe9 retornado o .- Se o erro principal = 9913 (Erro de rede): \xe9 retornada a causa do erro de rede (ex.: \u201CServerAddress: error DNS\u201D)- Se o erro principal = 9914 (Erro interno): \xe9 retornada a causa do erro interno.'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Web Service error code"}),(0,t.jsx)(r.td,{children:"Inteiro longo"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"C\xf3digo do erro principal (definido por 4D). Este c\xf3digo \xe9 tamb\xe9m retornado na vari\xe1vel sistema Erro.Lista de c\xf3digos que podem ser retornados:9910: Erro Soap (veja tamb\xe9m Web Service Fault Actor)9911: Erro de analisador xml9912: Erro HTTP (veja tamb\xe9m Web Service HTTP Error code)9913: Erro rede9914: Erro interno."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Web Service fault actor"}),(0,t.jsx)(r.td,{children:"Inteiro longo"}),(0,t.jsx)(r.td,{children:"3"}),(0,t.jsx)(r.td,{children:"Causa do erro (retornado pelo protocolo SOAP, a ser usado no caso de erro principal 9910)- Version Mismatch (a vers\xe3o n\xe3o corresponde)- Must Understand (um par\xe2metro definido como obrigat\xf3rio n\xe3o pode ser interpretado pelo servidor)- Client Fault (erro cliente)- Server Fault (erro servidor)- Encoding Unknown (codifica\xe7\xe3o desconhecida)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Web Service HTTP status code"}),(0,t.jsx)(r.td,{children:"Inteiro longo"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"C\xf3digo de erro HTTP (para ser usado no caso do erro principal 9912)."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Uma string vazia \xe9 retornada quando n\xe3o h\xe1 informa\xe7\xe3o dispon\xedvel, particularmente se a \xfaltima peti\xe7\xe3o SOAP n\xe3o gerou erros."}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"780"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var o=n(667294);let t={},d=o.createContext(t);function i(e){let r=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);