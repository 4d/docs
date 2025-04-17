"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61850"],{224347:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","description":"GET PASTEBOARD DATA TYPE ( assinaturas4D ; tiposNativos {; nomesFormatos} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-pasteboard-data-type.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data-type","permalink":"/docs/pt/20-R8/commands/get-pasteboard-data-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data-type.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","slug":"/commands/get-pasteboard-data-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA","permalink":"/docs/pt/20-R8/commands/get-pasteboard-data"},"next":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/pt/20-R8/commands/get-picture-from-pasteboard"}}'),o=n("785893"),a=n("250065");let r={id:"get-pasteboard-data-type",title:"GET PASTEBOARD DATA TYPE",slug:"/commands/get-pasteboard-data-type",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"GET PASTEBOARD DATA TYPE"})," ( ",(0,o.jsx)(s.em,{children:"assinaturas4D"})," ; ",(0,o.jsx)(s.em,{children:"tiposNativos"})," {; ",(0,o.jsx)(s.em,{children:"nomesFormatos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"assinaturas4D"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Assinaturas 4D de tipos de dados"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"tiposNativos"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Tipos de dados nativos"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"nomesFormatos"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes de formato (apenas Windows), strings vazias em MacOS"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(s.p,{children:"O comando GET PASTEBOARD DATA TYPE permite obter a lista dos tipos de dados presentes na \xe1rea de transfer\xeancia. Este comando geralmente deve ser utilizado no contexto de uma opera\xe7\xe3o arrastar e soltar, nos eventos de formul\xe1rio On Drop ou On Drag Over do objeto de destino. Mais particularmente, permite verificar a presen\xe7a de um tipo de dados espec\xedfico na \xe1rea de transfer\xeancia."}),"\n",(0,o.jsx)(s.p,{children:"Este comando devolve os tipos de dados em diferentes formas atrav\xe9s de dois (ou tr\xeas) arrays:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["O array ",(0,o.jsx)(s.em,{children:"assinaturas4D"})," cont\xe9m os tipos de dados expressos utilizando a assinatura 4D interna (por exemplo, \u201Ccom.4d.picture.gif\u201D). Se 4D n\xe3o reconhece um tipo de dados encontrado, uma cadeia vazia (\u201C\u201D) se devolve no array."]}),"\n",(0,o.jsxs)(s.li,{children:["O array ",(0,o.jsx)(s.em,{children:"tiposNativos"})," cont\xe9m os tipos de dados expressos utilizando seu tipo nativo. O formato dos tipos nativos difere entre Mac OS e Windows:"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"- Em Mac OS, os tipos nativos s\xe3o expressos como UTIs (Uniform Tipo Identifier)."}),"\n",(0,o.jsxs)(s.p,{children:["- Em Windows, os tipos nativos s\xe3o expressos como n\xfameros, cada n\xfamero est\xe1 associado a um nome de formato. O array ",(0,o.jsx)(s.em,{children:"tiposNativos"})," cont\xe9m estes n\xfameros em forma de cadeia (\u201C3\u201D, \u201C12\u201D, etc.). Se quer utilizar mais etiquetas expl\xedcitas, se recomenda utilizar o array opcional ",(0,o.jsx)(s.em,{children:"nomesFormatos"}),", que cont\xe9m o nome do formato dos tipos nativos em Windows."]}),"\n",(0,o.jsxs)(s.p,{children:["O array ",(0,o.jsx)(s.em,{children:"tiposNativos"})," permite suportar todo tipo de dados presentes na \xe1rea de transfer\xeancia, incluindo os dados cujo tipo n\xe3o est\xe1 referenciado por 4D."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Em Windows, tamb\xe9m pode passar o array ",(0,o.jsx)(s.em,{children:"nomesFormatos"}),", que recebe os nomes dos tipos de dados encontrados na \xe1rea de transfer\xeancia. Os valores devolvidos neste array podem ser utilizados por exemplo para construir um menu suspenso de sele\xe7\xe3o de formato. Em Mac OS, o array ",(0,o.jsx)(s.em,{children:"nomesFormatos"})," devolve as cadeias vazias."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Para maior informa\xe7\xe3o sobre os tipos de dados suportados, consulte a se\xe7\xe3o ",(0,o.jsx)(s.em,{children:"Gerenciar \xe1rea de transfer\xeancia"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"Gerenciar \xe1rea de transfer\xeancia"})}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"958"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var t=n(667294);let o={},a=t.createContext(o);function r(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);