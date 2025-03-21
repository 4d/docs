"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95736"],{438450:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/xml-decode","title":"XML DECODE","description":"XML DECODE ( valorXML ; objeto4D )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/xml-decode.md","sourceDirName":"commands-legacy","slug":"/commands/xml-decode","permalink":"/docs/pt/commands/xml-decode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fxml-decode.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"xml-decode","title":"XML DECODE","slug":"/commands/xml-decode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML","permalink":"/docs/pt/commands/theme/XML"},"next":{"title":"XML GET ERROR","permalink":"/docs/pt/commands/xml-get-error"}}'),d=r("785893"),s=r("250065");let o={id:"xml-decode",title:"XML DECODE",slug:"/commands/xml-decode",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",double:"double",em:"em",h2:"h2",p:"p",pre:"pre",price:"price",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"XML DECODE"})," ( ",(0,d.jsx)(n.em,{children:"valorXML"})," ; ",(0,d.jsx)(n.em,{children:"objeto4D"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valorXML"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valor do tipo Texto que vem de uma estrutura XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto4D"}),(0,d.jsx)(n.td,{children:"Field, Variable"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Vari\xe1vel 4D ou campo que recebe o valor XML convertido"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando XML DECODE converte um valor salvado como uma string XML em um valor 4D. A convers\xe3o se realiza automaticamente dependendo das seguintes regras:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Valor"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Exemplos"})}),(0,d.jsx)(n.th,{children:"Convers\xe3o em sistema ingl\xeas"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"num\xe9rico"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.price,{children:"8,5"}),(0,d.jsx)(n.price,{children:"8.5"})]}),(0,d.jsx)(n.td,{children:"Real: 8.5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.double,{children:"1"})," ",(0,d.jsx)(n.double,{children:"0"})," ou ",(0,d.jsx)(n.double,{children:"true"})," ",(0,d.jsx)(n.double,{children:"false"})]}),(0,d.jsx)(n.td,{children:"Boolean: True/False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BLOB"}),(0,d.jsx)(n.td,{children:"Base64 decoding"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Imagens"}),(0,d.jsx)(n.td,{children:"Base64 decoding + BLOB to picture command"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Datas"}),(0,d.jsx)(n.td,{children:"2009-10-25T01:03:20+01:00"}),(0,d.jsx)(n.td,{children:"Elimina a parte hora e a zona hor\xe1ria: !10/25/2009!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Horas"}),(0,d.jsx)(n.td,{children:"2009-10-25T01:03:20+01:00"}),(0,d.jsxs)(n.td,{children:["Elimina a parte data e a zona hor\xe1ria: ?01:03:20? ",(0,d.jsx)(n.em,{children:"Aviso"}),': zona hor\xe1ria \xe9 usada se for diferente da hora local. Por exemplo: "2009-10-25T01:03:20+05:00" ser\xe1 decodificado ?21:03:20? em UTC+1 hora local']})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Se o par\xe2metro tipo ",(0,d.jsx)(n.em,{children:"4Dvar"})," n\xe3o for definido, o tipo texto \xe9 usado como padr\xe3o."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Importa\xe7\xe3o de dados desde um documento XML no qual os valores s\xe3o guardados como atributos.",(0,d.jsx)(n.br,{}),"\nExemplo do documento XML:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:'<CD Date="2003-01-01T00:00:00Z" Description="This double CD reissued by EMI in 1995 combines 4 Stabat mater hymns. One by Rossini interpreted by the Berlin Symphony Orchestra, directed by Karl Forster. Followed by a work of Verdi, by the Philharmonic Orchestra, directed by Carlo Maria Giulini. On the second CD, you will find Francis Poulenc interpreted by R\xe9gine Crespin. This compilation ends with a little-known version, that of the Polish composer Karol Szymanowski. Polish National Radio Symphony Orchestra directed by Antoni Wit" Double="true" Duration="7246" Type="Sacred music" CD_ID="5" Performer="Various" Price="8.5" Title="4 Stabat mater"/>\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0Repeat\n\xa0\xa0\xa0\xa0MyEvent:=SAX Get XML node(DocRef)\n\xa0\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(MyEvent=XML Start Element)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrAttrNames;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrAttrValues;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAX GET XML ELEMENT(DocRef;vName;vPrefix;arrAttrNames;arrAttrValues)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vName="CD")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([CD])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($i;1;Size of array(arrAttrNames))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$attrName:=arrAttrNames{$i}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="CD_ID")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]CD_ID)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Title")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CD]Work:=arrAttrValues{$i}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Price")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Price)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Date")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Date entered)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Duration")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Total_duration)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Double")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Double_CD)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0End case\n\xa0Until(MyEvent=XML End Document)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/base64-decode",children:"BASE64 DECODE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/base64-encode",children:"BASE64 ENCODE"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1091"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let d={},s=t.createContext(d);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);