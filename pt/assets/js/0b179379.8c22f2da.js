"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70503"],{850648:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/generate-uuid","title":"Generate UUID","description":"Generate UUID : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-uuid.md","sourceDirName":"commands-legacy","slug":"/commands/generate-uuid","permalink":"/docs/pt/20-R7/commands/generate-uuid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-uuid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-uuid","title":"Generate UUID","slug":"/commands/generate-uuid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Generate password hash","permalink":"/docs/pt/20-R7/commands/generate-password-hash"},"next":{"title":"GET MACRO PARAMETER","permalink":"/docs/pt/20-R7/commands/get-macro-parameter"}}'),s=r("785893"),d=r("250065");let o={id:"generate-uuid",title:"Generate UUID",slug:"/commands/generate-uuid",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Generate UUID"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Novo UUID como um texto n\xe3o can\xf4nico (32 caracteres)"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"Generate UUID retorna um novo identificador UUID de 32 caracteres em forma n\xe3o can\xf4nica."}),"\n",(0,s.jsx)(n.p,{children:"Um UUID \xe9 um n\xfamero de 16 bytes (128 bits). Cont\xe9m 32 caracteres hexadecimais. Pode ser expresso de forma n\xe3o can\xf4nica (s\xe9ries de 32 letras [A-F, a-f] e/ou n\xfameros [0-9], por exemplo 550e8400e29b41d4a716446655440000) ou em forma can\xf4nica (grupos de 8,4,4,4,12, por exemplo 550e8400-e29b-41d4-a716-446655440000)."}),"\n",(0,s.jsx)(n.p,{children:"Em 4D, os n\xfameros UUID podem ser guardados em campos. Para maior informa\xe7\xe3o, por favor consulte o manual de Desenho."}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Gera\xe7\xe3o de um UUID em uma vari\xe1vel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var MyUUID : Text\n\xa0MyUUID:=Generate UUID\n"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1066"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);