"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80337"],{603595:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>d,assets:()=>t,toc:()=>l,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/expand-blob","title":"EXPAND BLOB","description":"EXPAND BLOB ( BLOB )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/expand-blob.md","sourceDirName":"commands-legacy","slug":"/commands/expand-blob","permalink":"/docs/pt/20-R7/commands/expand-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexpand-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"expand-blob","title":"EXPAND BLOB","slug":"/commands/expand-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENCRYPT BLOB","permalink":"/docs/pt/20-R7/commands/encrypt-blob"},"next":{"title":"INSERT IN BLOB","permalink":"/docs/pt/20-R7/commands/insert-in-blob"}}'),s=o("785893"),r=o("250065");let i={id:"expand-blob",title:"EXPAND BLOB",slug:"/commands/expand-blob",displayed_sidebar:"docs"},a=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EXPAND BLOB"})," ( ",(0,s.jsx)(n.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB a expandir"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando EXPAND BLOB expande o BLOB blob que anteriormente foi compactado usando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/compress-blob",title:"COMPRESS BLOB",children:"COMPRESS BLOB"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Ap\xf3s a chamada, a vari\xe1vel OK \xe9 definida como 1 se o BLOB foi expandido. Se a expans\xe3o n\xe3o pode ser realizada, a vari\xe1vel OK \xe9 definido como 0."}),"\n",(0,s.jsxs)(n.p,{children:["Se a expans\xe3o n\xe3o p\xf4de ser realizada devido \xe0 falta de mem\xf3ria, nenhum erro \xe9 gerado e o m\xe9todo continua a sua execu\xe7\xe3o.",(0,s.jsx)(n.br,{}),"\nEm qualquer outro caso (ou seja, o BLOB n\xe3o tenha sido comprimido ou est\xe1 danificado), o erro -10600 \xe9 gerado. Esse erro pode ser tratado usando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Para verificar se o BLOB foi compactado, use o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-properties",title:"BLOB PROPERTIES",children:"BLOB PROPERTIES"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Este exemplo testa se o BLOB ",(0,s.jsx)(n.em,{children:"vxMyBlob"})," \xe9 comprimido e, em caso afirmativo, expande-lo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMiBlob;$vlComprimido;$vlTamanhoExpandido;$vlTamanhoActual)\n\xa0If($vlComprimido#Is not compressed)\n\xa0\xa0\xa0\xa0EXPAND BLOB(vxMiBlob)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo testa se o BLOB vxMyBlob \xe9 comprimido e, em caso afirmativo, expande-lo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB PROPERTIES(vxBlob;$vlComprimido;$vlTamanhoExpandido;$vlTamahoActual)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlComprimido#Is not compressed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXPAND BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(n.p,{children:"A vari\xe1vel OK \xe9 definida como 1 se o BLOB foi expandido com \xeaxito, caso contr\xe1rio, \xe9 definido como 0."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/compress-blob",children:"COMPRESS BLOB"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"535"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return i}});var d=o(667294);let s={},r=d.createContext(s);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);