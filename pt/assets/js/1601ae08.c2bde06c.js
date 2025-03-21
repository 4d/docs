"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66509"],{506003:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-get-action","title":"OBJECT Get action","description":"OBJECT Get action ( { ;} objeto* ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-action.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-action","permalink":"/docs/pt/commands/object-get-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-action.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-action","title":"OBJECT Get action","slug":"/commands/object-get-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT DUPLICATE","permalink":"/docs/pt/commands/object-duplicate"},"next":{"title":"OBJECT Get auto spellcheck","permalink":"/docs/pt/commands/object-get-auto-spellcheck"}}'),s=n("785893"),r=n("250065");let a={id:"object-get-action",title:"OBJECT Get action",slug:"/commands/object-get-action",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT Get action"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se for especificado, objeto \xe8 um nome de objeto (string). Se omitido, objeto \xe9 um campo ou vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de Objeto (se * for especificado) ou Campo ou vari\xe1vel (se * for omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Nome da a\xe7\xe3o padr\xe3o associada e (se houver) par\xe2metro string"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT Get action"})," devolve o nome e (se for o caso) o par\xe2metro da a\xe7\xe3o padr\xe3o associada com o objeto designado pelos par\xe2metros ",(0,s.jsx)(o.em,{children:"objeto e"})," ",(0,s.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Passar o par\xe1metro opcional ",(0,s.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto \xe9"})," um nome de objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," for um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel ao inv\xe9s de uma string (s\xf3 objeto campo ou vari\xe1vel)."]}),"\n",(0,s.jsxs)(o.p,{children:["Pode estabelecer uma a\xe7\xe3o padr\xe3o para um objeto no Editor de formul\xe1rios utilizando a lista de propriedades ou utilizando o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-action",children:"OBJECT SET ACTION"}),". ",(0,s.jsx)(o.strong,{children:"OBJECT Get action"})," devolve uma string que contenha o nome da a\xe7\xe3o padr\xe3o associada ao objeto (assim como seu par\xe2metro, se existir)."]}),"\n",(0,s.jsxs)(o.p,{children:["Para obter uma lista completa de a\xe7\xf5es padr\xe3o, consulte a se\xe7\xe3o ",(0,s.jsx)(o.em,{children:"A\xe7\xf5es padr\xf5es"})," no manual de ",(0,s.jsx)(o.em,{children:"Desenho"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:'Se quiser associar a a\xe7\xe3o "Cancelar" com todos os objetos no formul\xe1rio que ainda n\xe3o t\xeam nenhuma a\xe7\xe3o associada:'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TEXT($arrObjects;0)\n\xa0\n\xa0FORM GET OBJECTS($arrObjects)\n\xa0For($i;1;Size of array($arrObjects))\n\xa0\xa0\xa0\xa0If(OBJECT Get action(*;$arrObjects{$i})=ak none)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-action",children:"OBJECT SET ACTION"})}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1457"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var t=n(667294);let s={},r=t.createContext(s);function a(e){let o=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);