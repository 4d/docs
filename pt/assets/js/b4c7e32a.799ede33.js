"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90736"],{820806:function(e,o,r){r.r(o),r.d(o,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>t});var n=JSON.parse('{"id":"commands-legacy/dom-export-to-var","title":"DOM EXPORT TO VAR","description":"DOM EXPORT TO VAR ( refElemento ; vXMLVar )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-export-to-var.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-var","permalink":"/docs/pt/commands/dom-export-to-var","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-var.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-export-to-var","title":"DOM EXPORT TO VAR","slug":"/commands/dom-export-to-var","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM EXPORT TO FILE","permalink":"/docs/pt/commands/dom-export-to-file"},"next":{"title":"DOM Find XML element","permalink":"/docs/pt/commands/dom-find-xml-element"}}'),a=r("785893"),s=r("250065");let t={id:"dom-export-to-var",title:"DOM EXPORT TO VAR",slug:"/commands/dom-export-to-var",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Notas sobre o processamento de caracteres de fim de linha",id:"notas-sobre-o-processamento-de-caracteres-de-fim-de-linha",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"DOM EXPORT TO VAR"})," ( ",(0,a.jsx)(o.em,{children:"refElemento"})," ; ",(0,a.jsx)(o.em,{children:"vXMLVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"refElemento"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Refer\xeancia do elemento Root XMLK"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"vXMLVar"}),(0,a.jsx)(o.td,{children:"Text, Blob"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Vari\xe1vel que recebe a \xe1rvore XML"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"O comando DOM EXPORT TO VAR permite salvar um \xe1rvore XML em uma vari\xe1vel texto ou BLOB."}),"\n",(0,a.jsxs)(o.p,{children:["Passe em ",(0,a.jsx)(o.em,{children:"refElemento"})," a refer\xeancia do elemento raiz a exportar."]}),"\n",(0,a.jsxs)(o.p,{children:["Passe em ",(0,a.jsx)(o.em,{children:"vXMLVar"})," o nome da vari\xe1vel que deve conter a \xe1rvore XML. Esta vari\xe1vel pode ser de tipo Texto ou BLOB. Pode selecionar o tipo em fun\xe7\xe3o das opera\xe7\xf5es a ser realizada ou do tamanho que a \xe1rvore possa alcan\xe7ar (lembre que em modo Unicode, as vari\xe1veis de tipo Texto est\xe3o limitadas a 32 K de texto, enquanto em modo Unicode, este limite \xe9 de 2 GB)."]}),"\n",(0,a.jsxs)(o.p,{children:["Lembre que se utilizar uma vari\xe1vel de tipo texto para armazenar o elemento ",(0,a.jsx)(o.em,{children:"refElemento"}),', em modo n\xe3o Unicode, ser\xe1 codificado utilizando o conjunto de caracteres Mac \u201Catual\u201D (\xe9 dizer, Mac Romam na maioria dos sistemas ocidentais). Isso significa que o texto retornado perder\xe1 sua codifica\xe7\xe3o original (encoding="xxx"). Neste caso, as vari\xe1veis ',(0,a.jsx)(o.em,{children:"vXMLVar"})," permite visualizar ou armazenar o c\xf3digo obtido mas N\xc3O para gerar um documento XML v\xe1lido (utilizando o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/send-packet",children:"SEND PACKET"})," por exemplo)."]}),"\n",(0,a.jsx)(o.p,{children:"Em modo Unicode, o c\xf3digo original se conserva na vari\xe1vel."}),"\n",(0,a.jsx)(o.h5,{id:"notas-sobre-o-processamento-de-caracteres-de-fim-de-linha",children:"Notas sobre o processamento de caracteres de fim de linha"}),"\n",(0,a.jsx)(o.p,{children:"Em XML, os saltos de linha n\xe3o s\xe3o significativos, independentemente se encontram dentro ou entre os elementos XML. Internamente, XML utiliza caracteres estandarte LF como separadores de linhas. Durante as opera\xe7\xf5es de importa\xe7\xe3o e exporta\xe7\xe3o, os caracteres de salto de linha se podem converter. Durante uma importa\xe7\xe3o, o analisador XML substitui os caracteres CRLF (rupturas de linha estandarte em Windows) por caracteres de LF. Durante a exporta\xe7\xe3o, os caracteres LF se substituem por caracteres CR em caracteres macOS e CRLF em Windows."}),"\n",(0,a.jsxs)(o.p,{children:['Nota: Se deseja manter os retornos de carro, deve incluir em um elemento XML CDATA de forma que n\xe3o seja processado pelo analisador XML. Em lugar de caracteres CRLF, tamb\xe9m pode utilizar o caractere "',(0,a.jsx)(o.br,{}),'", que \xe9 um retorno de carro expl\xedcito que n\xe3o ser\xe1 processado pelo analisador.']}),"\n",(0,a.jsx)(o.p,{children:"Como padr\xe3o, arquivos XML s\xe3o escritos sem BOM (Byte order mask)."}),"\n",(0,a.jsxs)(o.p,{children:["Pode controlar o final de linha de XML e gerenciamento BOM com o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota de compatibilidade"}),": em bancos de dados/projetos criados com vers\xf5es 4D anteriores a v19.x, como padr\xe3o 4D usava CR como caracteres de final de linha em macOS e BOM. Para ativar as novas configura\xe7\xf5es padr\xe3o, marque as configura\xe7\xf5es de compatibilidade (ver ",(0,a.jsx)(o.em,{children:"P\xe1gina Compatibilidade"}),") ou use o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(o.p,{children:"Este exemplo salva a \xe1rvore vRefElem em uma vari\xe1vel texto:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0var vtMeuTexto : Text\n\xa0DOM EXPORT TO VAR(vRefElem;vtMeuTexto)\n"})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0 e um erro \xe9 gerado (por exemplo, se a refer\xeancia do elemento n\xe3o for v\xe1lida)."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/dom-export-to-file",children:"DOM EXPORT TO FILE"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"863"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2713"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return t}});var n=r(667294);let a={},s=n.createContext(a);function t(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);