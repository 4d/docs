"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17284"],{193504:function(e,n,o){o.r(n),o.d(n,{metadata:()=>d,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>a});var d=JSON.parse('{"id":"commands-legacy/sax-get-xml-cdata","title":"SAX GET XML CDATA","description":"SAX GET XML CDATA ( documento ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-cdata","permalink":"/docs/pt/commands/sax-get-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-cdata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-cdata","title":"SAX GET XML CDATA","slug":"/commands/sax-get-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX CLOSE XML ELEMENT","permalink":"/docs/pt/commands/sax-close-xml-element"},"next":{"title":"SAX GET XML COMMENT","permalink":"/docs/pt/commands/sax-get-xml-comment"}}'),s=o("785893"),t=o("250065");let a={id:"sax-get-xml-cdata",title:"SAX GET XML CDATA",slug:"/commands/sax-get-xml-cdata",displayed_sidebar:"docs"},r=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX GET XML CDATA"})," ( ",(0,s.jsx)(n.em,{children:"documento"})," ; ",(0,s.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documento"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valor"}),(0,s.jsx)(n.td,{children:"Text, Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor do elemento"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SAX GET XML CDATA permite recuperar o ",(0,s.jsx)(n.em,{children:"valor"})," CDATA de um elemento XML existente no documento XML referenciado no par\xe2metro ",(0,s.jsx)(n.em,{children:"documento"}),". Este comando deve ser chamado com o evento SAX XML CDATA. Para maior informa\xe7\xe3o sobre eventos SAX, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe a vari\xe1vel ",(0,s.jsx)(n.em,{children:"valor"})," do tipo Texto se quiser recuperar dados que tenham um tamanho maior que 32Kb (o banco de dados deve rodar em modo Unicode)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota de compatibilidade:"})," A partir de 4D v12, os conte\xfados CDATA codificados em base64 s\xe3o decodificados automaticamente pelo comando ",(0,s.jsx)(n.strong,{children:"SAX GET XML CDATA"}),", de modo que n\xe3o \xe9 necess\xe1rio chamar ao comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/base64-decode",children:"BASE64 DECODE"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"No c\xf3digo XML abaixo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<ElementoRaiz>\n\xa0\xa0\xa0<Filho>Meu Texto<![CDATA[MyCData]]</Filho>\n</ElementoRaiz>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["O c\xf3digo 4D abaixo devolver\xe1 \u201CMeuCData\u201D em ",(0,s.jsx)(n.em,{children:"vDadosTexto"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var vDados : Blob\n\xa0var vDadosTexto : Text\n\xa0SAX GET XML CDATA(DocRef;vDados)\n\xa0vDadosTexto:=BLOB to text(vData;UTF8 C string)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/sax-add-xml-cdata",children:"SAX ADD XML CDATA"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"878"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return a}});var d=o(667294);let s={},t=d.createContext(s);function a(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);