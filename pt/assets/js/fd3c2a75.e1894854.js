"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53628"],{192476:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>t,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>i});var n=JSON.parse('{"id":"commands-legacy/resource-list","title":"RESOURCE LIST","description":"RESOURCE LIST ( resTipo ; resNum ; resNomes {; resArquivo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resource-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-list","permalink":"/docs/pt/commands/resource-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resource-list","title":"RESOURCE LIST","slug":"/commands/resource-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Open resource file","permalink":"/docs/pt/commands/open-resource-file"},"next":{"title":"RESOURCE TYPE LIST","permalink":"/docs/pt/commands/resource-type-list"}}'),o=r("785893"),d=r("250065");let i={id:"resource-list",title:"RESOURCE LIST",slug:"/commands/resource-list",displayed_sidebar:"docs"},t=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"RESOURCE LIST"})," ( ",(0,o.jsx)(s.em,{children:"resTipo"})," ; ",(0,o.jsx)(s.em,{children:"resNum"})," ; ",(0,o.jsx)(s.em,{children:"resNomes"})," {; ",(0,o.jsx)(s.em,{children:"resArquivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resTipo"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Tipo de resource de 4 caracteres"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resNum"}),(0,o.jsx)(s.td,{children:"Integer array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"N\xba de resources para recursos desse tipo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resNomes"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes de resouces para recursos desse tipo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resArquivo"}),(0,o.jsx)(s.td,{children:"Time"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de refer\xeancia do arquivo Resource, ou todos os arquivos de refer\xeancia abertos, se omitido"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando RESOURCE LIST preenche os arrays ",(0,o.jsx)(s.em,{children:"resNum"})," e ",(0,o.jsx)(s.em,{children:"resNomes"})," com os n\xfameros e os nomes dos recursos cujo tipo se passa em ",(0,o.jsx)(s.em,{children:"resTipo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Importante"}),": deve passar uma cadeia de 4 caracteres em ",(0,o.jsx)(s.em,{children:"resTipo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Se passa um n\xfamero de refer\xeancia de arquivo de recursos v\xe1lido no par\xe2metro opcional ",(0,o.jsx)(s.em,{children:"resArquivo"}),", apenas os recursos presentes nesse arquivo s\xe3o listados. Se n\xe3o passa ",(0,o.jsx)(s.em,{children:"resArquivo"}),", todos os recursos dos arquivos de recursos abertos s\xe3o listados."]}),"\n",(0,o.jsxs)(s.p,{children:["Se pr\xe9-declara os arrays antes de chamar a RESOURCE LIST, deve pr\xe9-declarar ",(0,o.jsx)(s.em,{children:"resNum"})," como um array de tipo Inteiro longo e ",(0,o.jsx)(s.em,{children:"resNomes"})," como um array de tipo Alfa ou Texto. Se n\xe3o pr\xe9-declara os arrays, o comando cria ",(0,o.jsx)(s.em,{children:"resNum"})," como um array de tipo Inteiro longo e ",(0,o.jsx)(s.em,{children:"resNomes"})," como um array de tipo Texto."]}),"\n",(0,o.jsxs)(s.p,{children:["Depois da chamada, pode testar o n\xfamero de recursos encontrados aplicando o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/size-of-array",title:"Size of Array",children:"Size of Array"})," ao array ",(0,o.jsx)(s.em,{children:"resNum"})," ou ",(0,o.jsx)(s.em,{children:"resNomes"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(s.p,{children:["O exemplo a seguir preenche os arrays ",(0,o.jsx)(s.em,{children:"$alResNum"})," e ",(0,o.jsx)(s.em,{children:"$atResNom"})," com os n\xfameros e os nomes de recursos de tipo lista de cadeias presentes no arquivo de estrutura do banco:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0If(On Windows)\n\xa0\xa0\xa0\xa0$vhEstruturaResArquivo:=Open resource file(Replace string(Structure file;".4DB";".RSR"))\n\xa0Else\n\xa0\xa0\xa0\xa0$vhEstruturaResArquivo:=Open resource file(Structure file)\n\xa0End if\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RESOURCE LIST("STR#";$alResNum;$atResNom;$vhEstruturaResArquivo)\n\xa0End if\n'})}),"\n",(0,o.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(s.p,{children:"O exemplo a seguir copia os recursos imagem presentes em todos os arquivos de recursos abertos na biblioteca de imagens do banco:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0RESOURCE LIST("PICT";$alResNum;$atResNom)\n\xa0Open window(50;50;550;120;5;"C\xf3pia dos recursos PICT...")\n\xa0For($vlElem;1;Size of array($alResNum))\n\xa0\xa0\xa0\xa0GET PICTURE RESOURCE($alResNum{$vlElem};$vgImagem)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNome:=$atResNom{$vlElem}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vsNome="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNome:="PICT resNum="+Cadeia($alResNum{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ERASE WINDOW\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY(2;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Adiciona a imagem \u201C"+$vsNome+"\u201D\xe0 biblioteca de imagens do banco.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgImagem;$alResNum{$vlElem};$vsNome)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/pt/commands/resource-type-list",children:"RESOURCE TYPE LIST"})}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"500"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return t},a:function(){return i}});var n=r(667294);let o={},d=n.createContext(o);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);