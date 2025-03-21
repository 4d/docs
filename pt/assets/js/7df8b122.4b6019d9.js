"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99307"],{215771:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>t,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/resource-type-list","title":"RESOURCE TYPE LIST","description":"RESOURCE TYPE LIST ( resTipos {; resArquivo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resource-type-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-type-list","permalink":"/docs/pt/20-R7/commands/resource-type-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-type-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resource-type-list","title":"RESOURCE TYPE LIST","slug":"/commands/resource-type-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE LIST","permalink":"/docs/pt/20-R7/commands/resource-list"},"next":{"title":"STRING LIST TO ARRAY","permalink":"/docs/pt/20-R7/commands/string-list-to-array"}}'),n=s("785893"),i=s("250065");let t={id:"resource-type-list",title:"RESOURCE TYPE LIST",slug:"/commands/resource-type-list",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"RESOURCE TYPE LIST"})," ( ",(0,n.jsx)(r.em,{children:"resTipos"})," {; ",(0,n.jsx)(r.em,{children:"resArquivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resTipos"}),(0,n.jsx)(r.td,{children:"Text array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Lista de tipos resources dispon\xedveis"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resArquivo"}),(0,n.jsx)(r.td,{children:"Time"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"N\xfamero de refer\xeancia do arquivo Resource, ou todos os arquivos de refer\xeancia abertos, se omitido"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O comando RESOURCE TYPE LIST preenche o array ",(0,n.jsx)(r.em,{children:"resTipos"})," com os tipos de recursos presentes no(os) arquivo(s) de recursos aberto(s)."]}),"\n",(0,n.jsxs)(r.p,{children:["Se passa um n\xfamero de refer\xeancia de arquivo de recursos v\xe1lido no par\xe2metro opcional ",(0,n.jsx)(r.em,{children:"resArquivo"}),", apenas s\xe3o listados os recursos desse arquivo. Se n\xe3o passa ",(0,n.jsx)(r.em,{children:"resArquivo"}),", s\xe3o listados todos os recursos dos arquivos de recursos abertos."]}),"\n",(0,n.jsxs)(r.p,{children:["Pode pr\xe9-declarar o array ",(0,n.jsx)(r.em,{children:"resTipos"})," como um array tipo Alfa ou Texto antes de chamar a RESOURCE TYPE LIST. Se n\xe3o pr\xe9-declarar o array, o comando cria ",(0,n.jsx)(r.em,{children:"resTipos"})," como um array tipo Texto."]}),"\n",(0,n.jsxs)(r.p,{children:["Depois da chamada, pode testar o n\xfamero de tipo de recursos encontrados aplicando o comando ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/size-of-array",title:"Size of Array",children:"Size of Array"})," ao array ",(0,n.jsx)(r.em,{children:"resTipos"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(r.p,{children:["O exemplo a seguir preenche o array ",(0,n.jsx)(r.em,{children:"atResTipo"})," com os tipos de recursos presentes nos arquivos de recursos abertos:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0RESOURCE TYPE LIST(atResTipo)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(r.p,{children:"O arquivo mostra se o arquivo de estrutura Mac OS usa o conte\xfado dos antigos plug-ins 4D, que dever\xe3o ser atualizados para usar o banco em Windows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArquivo:=Open resource file(Structure file)\n\xa0RESOURCE TYPE LIST(atResTipo;$vhResArquivo)\n\xa0If(Find in array(atResTipo;"4DEX")>0)\n\xa0\xa0\xa0\xa0ALERT("Este banco cont\xe9m os plug-ins 4D do modelo antigo."+(Char(13)*2)+\n\xa0\xa0\xa0\xa0"Ter\xe1 que atualiz\xe1-los para utilizar este banco em Windows.")\n\xa0End if\n'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," O arquivo de estrutura n\xe3o \xe9 o \xfanico arquivo no qual os plug-ins da vers\xe3o anterior podem ser armazenados. O banco tamb\xe9m pode incluir um arquivo Proc.Ext."]}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(r.p,{children:"O m\xe9todo de projeto a seguir retorna o n\xfamero de recursos presentes em um arquivo de recursos:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto Contar recursos\n\xa0\xa0// Contar recursos ( Hora) -> Intero longo\n\xa0\xa0// Contar recursos ( DocRef ) -> N\xfamero de recursos\n\xa0\n\xa0var $0 : Integer\n\xa0var $1 : Time\n\xa0\n\xa0$0:=0\n\xa0RESOURCE TYPE LIST($atResTipo;$1)\n\xa0For($vlElem;1;Size of array($atResTipo))\n\xa0\xa0\xa0\xa0RESOURCE LIST($atResTipo{$vlElem};$alResNum;$atResNom;$1)\n\xa0\xa0\xa0\xa0$0:=$0+Size of array($alResNum)\n\xa0End for\n"})}),"\n",(0,n.jsx)(r.p,{children:"Quando este m\xe9todo de projeto for implementado em um banco, pode escrever:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("O arquivo \u201C"+Document+"\u201D cont\xe9m "+String(Count resources($vhResArquivo))+" recurso(s).")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResArquivo)\n\xa0End if\n'})}),"\n",(0,n.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/resource-list",children:"RESOURCE LIST"})}),"\n",(0,n.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"499"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return t}});var o=s(667294);let n={},i=o.createContext(n);function t(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);