"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79450"],{128417:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/dom-export-to-file","title":"DOM EXPORT TO FILE","description":"DOM EXPORT TO FILE ( refElemento ; viaArquivo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-export-to-file.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-file","permalink":"/docs/pt/20-R8/commands/dom-export-to-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-export-to-file","title":"DOM EXPORT TO FILE","slug":"/commands/dom-export-to-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Create XML Ref","permalink":"/docs/pt/20-R8/commands/dom-create-xml-ref"},"next":{"title":"DOM EXPORT TO VAR","permalink":"/docs/pt/20-R8/commands/dom-export-to-var"}}'),n=r("785893"),a=r("250065");let d={id:"dom-export-to-file",title:"DOM EXPORT TO FILE",slug:"/commands/dom-export-to-file",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Notas sobre o processamento de caracteres de fim de linha",id:"notas-sobre-o-processamento-de-caracteres-de-fim-de-linha",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"DOM EXPORT TO FILE"})," ( ",(0,n.jsx)(o.em,{children:"refElemento"})," ; ",(0,n.jsx)(o.em,{children:"viaArquivo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"refElemento"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Refer\xeancia do elemento Root XMLK"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"viaArquivo"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Acesso de rota completo do arquivo"})]})]})]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"O comando DOM EXPORT TO FILE permite guardar uma \xe1rvore XML em um arquivo no disco."}),"\n",(0,n.jsxs)(o.p,{children:["Passe em ",(0,n.jsx)(o.em,{children:"refElemento"})," a refer\xeancia do elemento raiz a exportar."]}),"\n",(0,n.jsxs)(o.p,{children:["Passe em ",(0,n.jsx)(o.em,{children:"rotaArquivo"})," a rota de acesso completa do arquivo de exporta\xe7\xe3o a utilizar ou a criar. Se o arquivo n\xe3o existir, ele \xe9 criado."]}),"\n",(0,n.jsx)(o.p,{children:"Se passar unicamente um nome de arquivo (sem rota de acesso), ser\xe1 pesquisado o arquivo ou ser\xe1 criado ao lado do arquivo de estrutura."}),"\n",(0,n.jsx)(o.p,{children:'Se passar uma cadeia vazia (""), aparece uma caixa de di\xe1logo padr\xe3o de abertura e cria\xe7\xe3o de arquivos.'}),"\n",(0,n.jsx)(o.h3,{id:"notas-sobre-o-processamento-de-caracteres-de-fim-de-linha",children:"Notas sobre o processamento de caracteres de fim de linha"}),"\n",(0,n.jsx)(o.p,{children:"Em XML, os saltos de linha n\xe3o s\xe3o significativos, independentemente se encontram dentro ou entre os elementos XML. Internamente, XML utiliza caracteres estandarte LF como separadores de linhas. Durante as opera\xe7\xf5es de importa\xe7\xe3o e exporta\xe7\xe3o, os caracteres de salto de linha se podem converter. Durante uma importa\xe7\xe3o, o analisador XML substitui os caracteres CRLF (rupturas de linha estandarte em Windows) por caracteres de LF. Durante a exporta\xe7\xe3o, os caracteres LF se substituem por caracteres CR em caracteres macOS e CRLF em Windows."}),"\n",(0,n.jsxs)(o.p,{children:['Nota: Se deseja manter os retornos de carro, deve incluir em um elemento XML CDATA de forma que n\xe3o seja processado pelo analisador XML. Em lugar de caracteres CRLF, tamb\xe9m pode utilizar o caractere "',(0,n.jsx)(o.br,{}),'", que \xe9 um retorno de carro expl\xedcito que n\xe3o ser\xe1 processado pelo analisador.']}),"\n",(0,n.jsx)(o.p,{children:"Como padr\xe3o, arquivos XML s\xe3o escritos sem BOM (Byte order mask)."}),"\n",(0,n.jsxs)(o.p,{children:["Pode controlar o final de linha de XML e gerenciamento BOM com o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota de compatibilidade"}),": em bancos de dados/projetos criados com vers\xf5es 4D anteriores a v19.x, como padr\xe3o 4D usava CR como caracteres de final de linha em macOS e BOM. Para ativar as novas configura\xe7\xf5es padr\xe3o, marque as configura\xe7\xf5es de compatibilidade (ver ",(0,n.jsx)(o.em,{children:"P\xe1gina Compatibilidade"}),") ou use o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(o.p,{children:["Este exemplo guarda a \xe1rvore ",(0,n.jsx)(o.em,{children:"vRefElem"})," no arquivo MeuDoc.xml:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0DOM EXPORT TO FILE(vRefElem;"C:\\\\pasta\\MeuDoc.xml")\n'})}),"\n",(0,n.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(o.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0 e \xe9 gerado um erro."}),"\n",(0,n.jsx)(o.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,n.jsx)(o.p,{children:"Se gera um erro quando:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"A refer\xeancia do elemento n\xe3o for v\xe1lida,"}),"\n",(0,n.jsx)(o.li,{children:"A rota de acesso especificada n\xe3o for v\xe1lida,"}),"\n",(0,n.jsx)(o.li,{children:"O volume de armazenamento retorna um erro (disco cheio, etc.)."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/20-R8/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R8/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,n.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"862"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(o.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return t},a:function(){return d}});var s=r(667294);let n={},a=s.createContext(n);function d(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);