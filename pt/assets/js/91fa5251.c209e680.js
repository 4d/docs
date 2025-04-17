"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65032"],{643760:function(e,a,o){o.r(a),o.d(a,{default:()=>m,frontMatter:()=>n,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/pasteboard-data-size","title":"Pasteboard data size","description":"Pasteboard data size ( tipoDados ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/pasteboard-data-size.md","sourceDirName":"commands-legacy","slug":"/commands/pasteboard-data-size","permalink":"/docs/pt/20-R8/commands/pasteboard-data-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpasteboard-data-size.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"pasteboard-data-size","title":"Pasteboard data size","slug":"/commands/pasteboard-data-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get text from pasteboard","permalink":"/docs/pt/20-R8/commands/get-text-from-pasteboard"},"next":{"title":"SET FILE TO PASTEBOARD","permalink":"/docs/pt/20-R8/commands/set-file-to-pasteboard"}}'),s=o("785893"),r=o("250065");let n={id:"pasteboard-data-size",title:"Pasteboard data size",slug:"/commands/pasteboard-data-size",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Pasteboard data size"})," ( ",(0,s.jsx)(a.em,{children:"tipoDados"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tipoDados"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Tipo de dados a adicionar"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Resultado"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"Tamanho (em bytes) dos dados armazenados na \xe1rea de transfer\xeancia ou ent\xe3o c\xf3digo do erro"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["O comando Pasteboard data size permite testar se hay dados do tipo ",(0,s.jsx)(a.em,{children:"tipoDatos"})," na \xe1rea de transfer\xeancia."]}),"\n",(0,s.jsx)(a.p,{children:"Se a \xe1rea de transfer\xeancia est\xe1 vazio ou n\xe3o cont\xe9m dados de tipo especifico, o comando devolve um erro -102 (ver a tabela de constantes predefinidas). Se a \xe1rea de transfer\xeancia cont\xe9m dados do tipo especificado, o comando devolve o tamanho em bytes destes dados."}),"\n",(0,s.jsxs)(a.p,{children:["Passe em ",(0,s.jsx)(a.em,{children:"tipodados"})," um valor que defina o tipo de dados a extrair. Pode passar uma firma 4D, um tipo UTI (macOS), um nome/n\xfamero de formato (Windows), ou um tipo de 4 caracteres (compatibilidade). Para maior informa\xe7\xe3o sobre estes tipos, consulte a se\xe7\xe3o ",(0,s.jsx)(a.em,{children:"Gerenciar \xe1rea de transfer\xeancia"})]}),"\n",(0,s.jsx)(a.p,{children:"Depois de verificar que a \xe1rea de transfer\xeancia cont\xe9m dados do tipo que desejar, pode extrair essa informa\xe7\xe3o da \xe1rea de transfer\xeancia utilizando um dos seguintes comandos:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Se a \xe1rea de transfer\xeancia cont\xe9m dados de tipo TEXT, pode obter essa informa\xe7\xe3o utilizando o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),", o qual devolve um valor texto, ou o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),", que devolve o texto em um BLOB."]}),"\n",(0,s.jsxs)(a.li,{children:["Se a \xe1rea de transfer\xeancia cont\xe9m dados de tipo PICT, pode obter esses dados utilizando o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),", que devolve a imagem em um campo ou uma vari\xe1vel ou o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),", que devolve a imagem em um BLOB."]}),"\n",(0,s.jsxs)(a.li,{children:["Se o clipboard cont\xe9m uma rota de acesso ao arquivo, pode extra\xed-la utilizando o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})," , que devolve a rota de acesso do arquivo."]}),"\n",(0,s.jsxs)(a.li,{children:["Para qualquer outro tipo de dados, utilize o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),", o qual devolve os dados em um BLOB."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(a.p,{children:"O c\xf3digo a seguir prova se a \xe1rea de transfer\xeancia cont\xe9m uma imagem jpeg e se for assim, copia a imagem em uma vari\xe1vel 4D:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0If(Pasteboard data size(Picture data)>0)\xa0// H\xe1 uma imagem na \xe1rea de transfer\xeancia?\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD($vPicVariable)\xa0// Si houver, extrair a imagem da \xe1rea de transfer\xeancia\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("N\xe3o h\xe1 imagem na \xe1rea de transfer\xeancia.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(a.p,{children:"Geralmente, as aplica\xe7\xf5es cortam e copiam dados de tipo TEXT ou PICT na \xe1rea de transfer\xeancia, porque a maioria das aplica\xe7\xf5es reconhecem estes dois tipos de dados padr\xe3o. Entretanto, uma aplica\xe7\xe3o pode colocar na \xe1rea de transfer\xeancia v\xe1rias inst\xe2ncias dos mesmos dados em formatos diferentes. Por exemplo, cada vez que corta ou copia parte de uma folha de c\xe1lculo, a aplica\xe7\xe3o da folha de c\xe1lculo pode colocar os dados em um formato hipot\xe9tico \u2018SPSH\u2019, como tamb\xe9m nos formatos SYLK e TEXT. A inst\xe2ncia \u2018SPSH\u2019 cont\xe9m os dados estruturados no formato utilizado pela aplica\xe7\xe3o. A c\xf3pia SYLK cont\xe9m os mesmos dados, mas no formato SYLK, reconhecido pela maioria dos outros programas de folhas de c\xe1lculo. Por \xfaltimo, o formato TEXT cont\xe9m os mesmos dados, sem a informa\xe7\xe3o extra inclu\xedda no formato SYLK ou no formato hipot\xe9tico \u2018SPSH\u2019. Neste ponto, quando escreva rotinas de Cortar/Copiar/Colar entre 4D e uma aplica\xe7\xe3o de folha de c\xe1lculo hipot\xe9tica, assumindo que conhece a descri\xe7\xe3o do formato \u2018SPSH\u2019 e que est\xe1 preparado para analizar os dados SYLK, pode escrever o c\xf3digo a seguir:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0// Primeiro, verificar se a \xe1rea de transfer\xeancia cont\xe9m os dados da aplica\xe7\xe3o da folha de c\xe1lculo hipot\xe9tica.\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SPSH')>0)\n\xa0\xa0// ...\n\xa0\xa0// Segundo, verificar se a \xe1rea de transfer\xeancia cont\xe9m dados em formato Sylk\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SYLK')>0)\n\xa0\xa0// ...\n\xa0\xa0// Por \xfaltimo, verificar se a \xe1rea de transfer\xeancia cont\xe9m dados em formato Text\n\xa0\xa0\xa0\xa0:(Pasteboard data size('TEXT')>0)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,s.jsx)(a.p,{children:"Em outras palavras, voc\xea tenta extrair da \xe1rea de transfer\xeancia a inst\xe2ncia de dados que tenha mais informa\xe7\xe3o original."}),"\n",(0,s.jsx)(a.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(a.p,{children:"Se quiser arrastar alguns dados privados de diferentes objetos em seu formul\xe1rio pode escrever:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0//objeto origem\n\xa0If(FORM Event=On Begin Drag Over)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("some.private.data";$data)\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0//objeto destino\n\xa0If(FORM Event=On Drag Over)\n\xa0\xa0\xa0\xa0$0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsxs)(a.p,{children:["Ver o exemplo do comando ",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"\xc1rea de trabalho"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/20-R8/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,s.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero do comando"}),(0,s.jsx)(a.td,{children:"400"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Thread-seguro"}),(0,s.jsx)(a.td,{children:"\u2717"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(a.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return t},a:function(){return n}});var d=o(667294);let s={},r=d.createContext(s);function n(e){let a=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(r.Provider,{value:a},e.children)}}}]);