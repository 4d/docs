"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83228"],{550828:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands/new-shared-collection","title":"New shared collection","description":"New shared collection {( ...value Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/new-shared-collection.md","sourceDirName":"commands","slug":"/commands/new-shared-collection","permalink":"/docs/pt/commands/new-shared-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-shared-collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-shared-collection","title":"New shared collection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Nova cole\xe7\xe3o","permalink":"/docs/pt/commands/new-collection"},"next":{"title":"Communications","permalink":"/docs/pt/category/communications"}}'),r=o("785893"),t=o("250065");let l={id:"new-shared-collection",title:"New shared collection",displayed_sidebar:"docs"},i=void 0,a={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New shared collection"})," {( ",(0,r.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valores da collection compartida"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"New shared collection"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"New shared collection"}),"  cria uma nova cole\xe7\xe3o compartilhada vazia ou pr\xe9-preenchida e retorna sua refer\xeancia. Collections can be handled using properties and functions of the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/CollectionClass",children:"Collection class API"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Adding an element to this collection using the assignment operator must be surrounded by the ",(0,r.jsx)(n.a,{href:"/docs/pt/Concepts/shared#useend-use",children:(0,r.jsx)(n.code,{children:"Use...End use"})})," structure, otherwise an error is generated (this is not necessary when adding elements using functions such as ",(0,r.jsx)(n.a,{href:"/docs/pt/API/CollectionClass#push",children:(0,r.jsx)(n.code,{children:"push()"})})," or ",(0,r.jsx)(n.a,{href:"/docs/pt/API/CollectionClass#map",children:(0,r.jsx)(n.code,{children:"map()"})})," because they automatically trigger an internal ",(0,r.jsx)(n.em,{children:"Use...End use"}),"). A leitura de um elemento sem um ",(0,r.jsx)(n.em,{children:"Use... End use"})," estrutura \xe9, no entanto, poss\xedvel."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For more information on shared collections, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/pt/Concepts/shared",children:"Shared objects and collections"})," page."]})}),"\n",(0,r.jsxs)(n.p,{children:["Se n\xe3o quiser passar par\xe2metros, ",(0,r.jsx)(n.code,{children:"New shared collection"})," cria uma cole\xe7\xe3o vazia partilhada e retorna sua refer\xeancia."]}),"\n",(0,r.jsx)(n.p,{children:"Precisa atribuir a refer\xeancia devolvida \xe0 uma vari\xe1vel 4D de tipo Collection."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Keep in mind that ",(0,r.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,r.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente pode preencher automaticamente a nova cole\xe7\xe3o partilhada passando um ou v\xe1rios ",(0,r.jsx)(n.em,{children:"value"})," como par\xe2metros. Tamb\xe9m pode adicionar ou modificar elementos atrav\xe9s de atribui\xe7\xe3o de nota\xe7\xe3o de objetos (ver exemplo)."]}),"\n",(0,r.jsxs)(n.p,{children:["Se o novo \xedndice elemento for al\xe9m do \xfaltimo elemento existente da cole\xe7\xe3o partilhada, a cole\xe7\xe3o \xe9 automaticamente redimensionada e todos os novos elementos intermedi\xe1rios s\xe3o atribu\xeddos um valor ",(0,r.jsx)(n.strong,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Pode passar qualquer n\xfamero de valores dos tipos compat\xedveis abaixo:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"n\xfamero (real, longint....). Valores num\xe9ricos s\xe3o sempre armazenados como reais."}),"\n",(0,r.jsx)(n.li,{children:"text"}),"\n",(0,r.jsx)(n.li,{children:"boolean"}),"\n",(0,r.jsx)(n.li,{children:"date"}),"\n",(0,r.jsx)(n.li,{children:"hora (armazenada como n\xfamero de milissegundos - real)"}),"\n",(0,r.jsx)(n.li,{children:"null"}),"\n",(0,r.jsx)(n.li,{children:"objeto compartido"}),"\n",(0,r.jsx)(n.li,{children:"cole\xe7\xe3o compartilhada"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Diferente de cole\xe7\xf5es padr\xe3o (n\xe3o partilhadas), cole\xe7\xf5es partilhadas n\xe3o s\xe3o compat\xedveis com imagens, ponteiros e objetos ou cole\xe7\xe3o que n\xe3o forem partilhadas."})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $mySharedCol:=New shared collection("alpha";"omega")\n Use($mySharedCol)\n    $mySharedCol[1]:="beta"\n End use\n'})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/new-collection",children:"New collection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/new-shared-object",children:"New shared object"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Shared objects and shared collections"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1527"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"&check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return l}});var s=o(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);