"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95226"],{677542:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>l,assets:()=>t,toc:()=>i,contentTitle:()=>s});var l=JSON.parse('{"id":"commands/new-collection","title":"Nova cole\xe7\xe3o","description":"New collection {( ...value Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/new-collection.md","sourceDirName":"commands","slug":"/commands/new-collection","permalink":"/docs/pt/commands/new-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-collection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-collection","title":"Nova cole\xe7\xe3o","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COLLECTION TO ARRAY","permalink":"/docs/pt/commands/collection-to-array"},"next":{"title":"New shared collection","permalink":"/docs/pt/commands/new-shared-collection"}}'),r=o("785893"),c=o("250065");let a={id:"new-collection",title:"Nova cole\xe7\xe3o",displayed_sidebar:"docs"},s=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New collection"})," {( ",(0,r.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor(es) de collection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nova cole\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"New collection"})," command creates a new empty or prefilled collection and returns its reference. Collections can be handled using properties and functions of the ",(0,r.jsx)(n.a,{href:"/docs/pt/API/CollectionClass",children:"Collection class API"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Se n\xe3o passar nenhum par\xe2metro, New collection cria uma cole\xe7\xe3o vazia e retorna sua refer\xeancia."}),"\n",(0,r.jsx)(n.p,{children:"Precisa atribuir a refer\xeancia devolvida \xe0 uma vari\xe1vel 4D de tipo Collection."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Keep in mind that ",(0,r.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,r.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Opcionalmente pode pr\xe9-preencher a nova cole\xe7\xe3o passando um ou mais par\xe2metros value."}),"\n",(0,r.jsx)(n.p,{children:"Pode tamb\xe9m adicionar ou modificar elementos subsequentemente atrav\xe9s de assigna\xe7\xe3o. Por exemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Se o  \xedndice do novo elemento estiver al\xe9m do \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o ser\xe1 redimensionada automaticamente e todos os novos elementos intermedi\xe1rios receber\xe3o um valor ",(0,r.jsx)(n.strong,{children:"nulo"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Pode passar qualquer n\xfamero de valores de qualquer tipo compat\xedvel (n\xfamero, texto, data, imagem, ponteiro, objeto, cole\xe7\xe3o....). Diferente de arrays, cole\xe7\xf5es podem misturar dados de tipos diferentes."}),"\n",(0,r.jsx)(n.p,{children:"Pode prestar aten\xe7\xe3o aos problemas de convers\xe3o abaixo:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Se voc\xea passar um ponteiro, ele ser\xe1 mantido "como est\xe1"; ele ser\xe1 avaliado usando o comando ',(0,r.jsx)(n.code,{children:"JSON Stringify"})]}),"\n",(0,r.jsxs)(n.li,{children:['Datas s\xe3o armazenadas no formato "aaaa-mm-dd" ou strings com o formato "AAAA-MM-DDTHH:mm:ss.SSSZ", de acordo com a configura\xe7\xe3o atual "dates inside objects"/datas dentro de objetos. Quando converter datas 4D em texto antes de armazen\xe1-las em uma cole\xe7\xe3o, como padr\xe3o o programa considera a zona hor\xe1ria local. Pode modificar esse valor usando o seletor ',(0,r.jsx)(n.code,{children:"Dates inside objects"})," do comando ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Se passar a hora, \xe9 armazenada como um n\xfamero de milissegundos (Real)."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser criar uma nova cole\xe7\xe3o vazia e atribu\xed-la \xe0 uma vari\xe1vel cole\xe7\xe3o 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" var $myCol : Collection\n $myCol:=New collection\n  //$myCol=[]\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser criar uma cole\xe7\xe3o pr\xe9-prenchida:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $filledColl : Collection\n $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)\n  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Pode criar uma nova cole\xe7\xe3o e adicionar um novo elemento:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $coll : Collection\n $coll:=New collection("a";"b";"c")\n  //$coll=["a","b","c"]\n $coll[9]:="z" //adicionar um 10\xba elemento com o valor "z"\n $vcolSize:=$coll.length //10\n  //$coll=["a","b","c",null,null,null,null,null,null,"z"]\n'})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/new-shared-collection",children:"New shared collection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/type",children:"Type"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1472"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"&check;"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var l=o(667294);let r={},c=l.createContext(r);function a(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);