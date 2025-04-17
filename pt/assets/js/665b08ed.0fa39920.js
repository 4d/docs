"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31696"],{413380:function(e,a,r){r.r(a),r.d(a,{default:()=>l,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/use-character-set","title":"USE CHARACTER SET","description":"USE CHARACTER SET ( mapa {; mapaEntradaSaida} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/use-character-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-character-set","permalink":"/docs/pt/20-R8/commands/use-character-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-character-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"use-character-set","title":"USE CHARACTER SET","slug":"/commands/use-character-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TIMEOUT","permalink":"/docs/pt/20-R8/commands/set-timeout"},"next":{"title":"Compiler","permalink":"/docs/pt/20-R8/commands/theme/Compiler"}}'),n=r("785893"),o=r("250065");let d={id:"use-character-set",title:"USE CHARACTER SET",slug:"/commands/use-character-set",displayed_sidebar:"docs"},t=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"USE CHARACTER SET"})," ( ",(0,n.jsx)(a.em,{children:"mapa"})," {; ",(0,n.jsx)(a.em,{children:"mapaEntradaSaida"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"mapa"}),(0,n.jsx)(a.td,{children:"Text, *"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Nome do conjunto de caracteres a ser usado (modo Unicode), ou nome do Documento do mapa ASCII a ser usado (ASCII mode) ou * para reiniciar para o conjunto de caracteres/mapa ASCII padr\xe3o"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"mapaEntradaSaida"}),(0,n.jsx)(a.td,{children:"Integer"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"0 = Mapa de sa\xedda 1 = Mapa de entrada, se omitido, mapa de sa\xedda"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["USE CHARACTER SET modifica o conjunto de caracteres usado por 4D durante a transfer\xeancia de dados entre o banco de dados e um documento ou uma porta serial para o processo atual. As opera\xe7\xf5es de transfer\xeancia incluem a importa\xe7\xe3o e exporta\xe7\xe3o de texto (ASCII), DIF, e os arquivos SYLK. Um mapa de caracteres tamb\xe9m funciona com os dados enviados pelos comandos ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/send-packet",children:"SEND PACKET"}),", ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-packet",children:"RECEIVE PACKET"})," (para pacotes de tipo texto), e ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-buffer",children:"RECEIVE BUFFER"}),". N\xe3o tem efeito em transfer\xeancias de dados realizadas com ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/send-record",children:"SEND RECORD"}),", ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-record",children:"RECEIVE RECORD"}),", ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/send-packet",children:"SEND PACKET"}),", ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-packet",children:"RECEIVE PACKET"})," (para pacotes tipo BLOB) e ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-variable",children:"RECEIVE VARIABLE"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["O par\xe2metro ",(0,n.jsx)(a.em,{children:"mapa"}),' deve corresponder ao nome do conjunto de caracteres "IANA" a ser utilizado, ou a um dos seus apelidos. Por exemplo, os nomes "iso-8859-1" ou "UTF-8" s\xe3o nomes v\xe1lidos, bem como os apelidos "latin1" ou "L1". Para mais informa\xe7\xf5es sobre esses nomes, consulte o seguinte endere\xe7o:',(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.em,{children:(0,n.jsx)(a.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"})}),". Tamb\xe9m se apresentam exemplos de nomes IANA na descri\xe7\xe3o do comando ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Se ",(0,n.jsx)(a.em,{children:"mapaEntradaSaida"})," for 0, o mapa \xe9 definido para a exporta\xe7\xe3o. Se ",(0,n.jsx)(a.em,{children:"mapaEntradaSaida"})," for 1, o mapa \xe9 definido para a importa\xe7\xe3o. Se voc\xea n\xe3o passar o par\xe2metro ",(0,n.jsx)(a.em,{children:"mapaEntradaSaida"}),", o mapa de exporta\xe7\xe3o \xe9 usado por padr\xe3o."]}),"\n",(0,n.jsxs)(a.p,{children:["Quando o par\xe2metro ",(0,n.jsx)(a.em,{children:"*"})," \xe9 passado, o conjunto de caracteres padr\xe3o \xe9 restaurado (mapa de importa\xe7\xe3o ou exporta\xe7\xe3o dependendo do valor de ",(0,n.jsx)(a.em,{children:"mapaEntradaSaida"}),")",(0,n.jsx)(a.em,{children:"."})]}),"\n",(0,n.jsx)(a.p,{children:"Em 4D v11, o conjunto de caracteres por padr\xe3o \xe9 UTF-8."}),"\n",(0,n.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(a.p,{children:"O exemplo a seguir (modo Unicode) usa o caracteres UTF-16 para exportar um texto, ent\xe3o o conjunto de caracteres padr\xe3o \xe9 restaurado:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0USE CHARACTER SET("UTF-16LE";0)\xa0// Use o conjunto de caracteres UTF-16 "Little Endian"\n\xa0EXPORT TEXT([MiTabla];"MiTexto")\xa0// Exportar dados atrav\xe9s do mapa\n\xa0USE CHARACTER SET(*;0)\xa0// Restaure o conjunto de caracteres padr\xe3o\n'})}),"\n",(0,n.jsx)(a.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(a.p,{children:"A vari\xe1vel de sistema OK \xe9 definida como 1 se o mapa \xe9 carregado corretamente. Caso contr\xe1rio, \xe9 definido como 0."}),"\n",(0,n.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/export-dif",children:"EXPORT DIF"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/export-sylk",children:"EXPORT SYLK"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/export-text",children:"EXPORT TEXT"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/import-dif",children:"IMPORT DIF"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/import-sylk",children:"IMPORT SYLK"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/import-text",children:"IMPORT TEXT"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/receive-packet",children:"RECEIVE PACKET"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/20-R8/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,n.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"205"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2713"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(a.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return t},a:function(){return d}});var s=r(667294);let n={},o=s.createContext(n);function d(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);