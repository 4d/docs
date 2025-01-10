"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54339"],{313894:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/dom-parse-xml-source","title":"DOM Parse XML source","description":"DOM Parse XML source ( documento {; valida\xe7ao {; dtd|schmea}} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-parse-xml-source.md","sourceDirName":"commands-legacy","slug":"/commands/dom-parse-xml-source","permalink":"/docs/pt/commands/dom-parse-xml-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-parse-xml-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-parse-xml-source","title":"DOM Parse XML source","slug":"/commands/dom-parse-xml-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Insert XML element","permalink":"/docs/pt/commands/dom-insert-xml-element"},"next":{"title":"DOM Parse XML variable","permalink":"/docs/pt/commands/dom-parse-xml-variable"}}'),n=a("785893"),s=a("250065");let d={id:"dom-parse-xml-source",title:"DOM Parse XML source",slug:"/commands/dom-parse-xml-source",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"DOM Parse XML source"})," ( ",(0,n.jsx)(o.em,{children:"documento"})," {; ",(0,n.jsx)(o.em,{children:"valida\xe7ao"})," {; dtd|schmea}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"documento"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Rota documentos"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"valida\xe7ao"}),(0,n.jsx)(o.td,{children:"Boolean"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"True = Valida\xe7\xe3o; False = sem valida\xe7\xe3o"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"dtd|schmea"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Localiza\xe7\xe3o do schema DTD ou XML"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Refer\xeancia do elemento XML"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"O comando DOM Parse XML source analisa um documento que cont\xe9m uma estrutura XML e retorna uma refer\xeancia para este documento. O comando pode validar ou n\xe3o o documento atrav\xe9s de uma DTD ou de um esquema XML (documento XSD, XML Schema Definitiom)."}),"\n",(0,n.jsx)(o.p,{children:"O documento pode estar no disco ou em Internet/Intranet."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," A execu\xe7\xe3o do comando ",(0,n.jsx)(o.strong,{children:"DOM Parse XML source"})," \xe9 s\xedncrona."]}),"\n",(0,n.jsxs)(o.p,{children:["No par\xe2metro ",(0,n.jsx)(o.em,{children:"documento"})," pode passar:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Uma rota de acesso completa padr\xe3o (do tipo C:\\\\Pasta\\\\Arquivo\\\\... em Windows e MacintoshHD:Pasta:Arquivo em Mac OS),"}),"\n",(0,n.jsx)(o.li,{children:"Ou uma rota Unix em Mac OS (a qual deve come\xe7ar por /)."}),"\n",(0,n.jsxs)(o.li,{children:["Ou uma rota red de tipo ",(0,n.jsx)(o.a,{href:"http://www.site.com/Arquivo",children:"http://www.site.com/Arquivo"})," ou ftp://publico.ftp.com...\nO par\xe2metro booleano ",(0,n.jsx)(o.em,{children:"valida\xe7ao"})," permite indicar se validar ou n\xe3o a estrutura."]}),"\n",(0,n.jsx)(o.li,{children:"Se valida\xe7\xe3o for igual a True, a estrutura se validar\xe1. Neste caso, o analisador tentar\xe1 validar a estrutura XML do documento baseado na refer\xeancia DTD ou o esquema XML inclu\xedda no documento, ou atrav\xe9s da DTD ou o esquema XML designado pelo terceiro par\xe2metro, se for passada."}),"\n",(0,n.jsxs)(o.li,{children:["Se valida\xe7\xe3o for igual a False, a estrutura n\xe3o se validar\xe1.\nSe passar True em ",(0,n.jsx)(o.em,{children:"valida\xe7ao"})," e omitir o terceiro par\xe2metro, o comando tentar\xe1 validar a estrutura XML atrav\xe9s de uma refer\xeancia DTD ou XSD que se encontra na estrutura mesma. A valida\xe7\xe3o pode ser indireta: se a estrutura contiver uma refer\xeancia a um arquivo DTD que contenha uma refer\xeancia a um arquivo XSD, o comando tentar\xe1 realizar as duas valida\xe7\xf5es."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"O terceiro par\xe2metro permite designar uma DTD espec\xedfica ou um esquema XML para a an\xe1lise do documento. Se utiliza este par\xe2metro, o comando n\xe3o considera a DTD referenciada no documento XML."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Valida\xe7\xe3o por DTD"})}),"\n",(0,n.jsx)(o.p,{children:"H\xe1 duas formas de especificar uma DTD:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Como uma refer\xeancia. Para faz\xea-lo, passe a rota de acesso completa da nova DTD (extens\xe3o \u201Cdtd\u201D) no par\xe2metro dtd. Se o documento indicado n\xe3o contiver uma DTD v\xe1lida, o par\xe2metro ",(0,n.jsx)(o.em,{children:"dtd"})," \xe9 ignorado e um erro \xe9 gerado."]}),"\n",(0,n.jsxs)(o.li,{children:["Diretamente em um texto. Neste caso, se os conte\xfados do par\xe2metro come\xe7am por \u201C<?xml\u201D, 4D considerar\xe1 que essa \xe9 a DTD; do contr\xe1rio, 4D o considerar\xe1 como uma rota de acesso.\n",(0,n.jsx)(o.strong,{children:"Valida\xe7\xe3o por esquema"})]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Para validar o documento atrav\xe9s de um esquema XML, apenas necessita passar no terceiro par\xe2metro um arquivo ou uma URL de extens\xe3o \u201Cxsd\u201D ao inv\xe9s de um \u201Cdtd\u201D. A valida\xe7\xe3o por esquema XML \xe9 considerada mais flex\xedvel e poderosa que a valida\xe7\xe3o por DTD. A linguagem dos documentos XSD est\xe1 baseada na linguagem XML. Em especial, os esquemas XML s\xe3o compat\xedveis com tipos de dados. Para maior informa\xe7\xe3o sobre os esquemas XML, por favor consulte a seguinte dire\xe7\xe3o: ",(0,n.jsx)(o.em,{children:(0,n.jsx)(o.a,{href:"http://www.w3.org/XML/Schema",children:"http://www.w3.org/XML/Schema"})}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Se a valida\xe7\xe3o n\xe3o puder ser realizada (n\xe3o DTD ou XSD, URL incorreto, etc.), um erro \xe9 gerado. A vari\xe1vel sistema Erro indica o n\xfamero do erro. Pode interceptar este erro utilizando um m\xe9todo instalado pelo comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"O comando retorna uma cadeia de 16 caracteres (RefElement) constituindo a refer\xeancia em mem\xf3ria da estrutura virtual do documento. Esta refer\xeancia deve ser utilizada com os outros comandos de an\xe1lise XML."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Importante"}),": Quando n\xe3o precisar mais dele, lembre de chamar ao comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/dom-close-xml",children:"DOM CLOSE XML"})," com esta refer\xeancia com o objetivo de liberar mem\xf3ria."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(o.p,{children:"Abertura sem valida\xe7\xe3o de um documento XML em disco:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("C:\\\\importar.xml")\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(o.p,{children:"Abertura sem valida\xe7\xe3o de um documento XML localizado junto ao arquivo de estrutura do banco:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("importar.xml")\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(o.p,{children:"Abertura de um documento XML localizado no disco e valida\xe7\xe3o utilizando um DTD que fica no disco:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("C:\\\\importar.xml";True;"C:\\\\importar_dtd.xml")\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,n.jsx)(o.p,{children:"Abertura sem valida\xe7\xe3o de um documento XML localizado em uma URL espec\xedfica:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("http://www.4DHispano.com/xml/importar.xml")\n'})}),"\n",(0,n.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(o.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/commands/dom-close-xml",children:"DOM CLOSE XML"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/dom-parse-xml-variable",children:"DOM Parse XML variable"})]}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"719"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return d}});var r=a(667294);let n={},s=r.createContext(n);function d(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);