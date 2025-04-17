"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85130"],{426998:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>i,toc:()=>m,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/ob-get-array","title":"OB GET ARRAY","description":"OB GET ARRAY ( objeto ; propriedade ; array )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/ob-get-array.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-array","permalink":"/docs/pt/commands/ob-get-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ob-get-array","title":"OB GET ARRAY","slug":"/commands/ob-get-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Get","permalink":"/docs/pt/commands/ob-get"},"next":{"title":"OB GET PROPERTY NAMES","permalink":"/docs/pt/commands/ob-get-property-names"}}'),s=n("785893"),a=n("250065");let t={id:"ob-get-array",title:"OB GET ARRAY",slug:"/commands/ob-get-array",displayed_sidebar:"docs"},o=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"OB GET ARRAY"})," ( ",(0,s.jsx)(r.em,{children:"objeto"})," ; ",(0,s.jsx)(r.em,{children:"propriedade"})," ; ",(0,s.jsx)(r.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"objeto"}),(0,s.jsx)(r.td,{children:"Object, Campo Object"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Objeto estruturado"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"propriedade"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Nome da propriedade a ler"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"array"}),(0,s.jsx)(r.td,{children:"Text array, Real array, Boolean array, Object array, Pointer array, Integer array"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Array valor da propriedade"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando ",(0,s.jsx)(r.strong,{children:"OB GET ARRAY"})," recupera em ",(0,s.jsx)(r.em,{children:"array"}),", o array de valores armazenados na ",(0,s.jsx)(r.em,{children:"propriedade"})," do objeto de linguagem designado pelo par\xe2metro ",(0,s.jsx)(r.em,{children:"objeto"}),".deve ter sido definido com o comando ",(0,s.jsx)(r.em,{children:"C_OBJECT"})," ou designar um campo objeto 4D."]}),"\n",(0,s.jsxs)(r.p,{children:["No par\xe2metro ",(0,s.jsx)(r.em,{children:"propriedade"}),", passe a etiqueta da propriedade a ler. Tenha em conta que o par\xe2metro ",(0,s.jsx)(r.em,{children:"propriedade"})," leva em conta as mai\xfasculas e min\xfasculas."]}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(r.p,{children:["Dado um objeto array definido no exemplo do comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/ob-set-array",children:"OB SET ARRAY"}),":"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(250766).Z+"",width:"680",height:"139"})}),"\n",(0,s.jsx)(r.p,{children:"Queremos recuperar estes valores:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($result;0)\n\xa0OB GET ARRAY($Children;"Children";$result)\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(953535).Z+"",width:"332",height:"178"})}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(r.p,{children:"Queremos mudar um valor no primeiro elemento do array:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// Mudar o valor de "age":\n\xa0ARRAY OBJECT($refs)\n\xa0OB GET ARRAY($refEmployees;"__ENTITIES";$refs)\n\xa0OB SET($refs{1};"age";25)\n'})}),"\n",(0,s.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Convers\xf5es de Tipo entre cole\xe7\xf5es e arrays 4D"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/ob-set-array",children:"OB SET ARRAY"})]}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"1229"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250766:function(e,r,n){n.d(r,{Z:function(){return d}});let d=n.p+"assets/images/pict1211436.pt-61a194f69a15631e732e997378d41bd4.png"},953535:function(e,r,n){n.d(r,{Z:function(){return d}});let d="data:image/png;base64,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"},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return t}});var d=n(667294);let s={},a=d.createContext(s);function t(e){let r=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(a.Provider,{value:r},e.children)}}}]);