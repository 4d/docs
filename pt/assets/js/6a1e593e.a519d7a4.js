"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91265"],{100522:function(e,a,r){r.r(a),r.d(a,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>t,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/dom-parse-xml-variable","title":"DOM Parse XML variable","description":"DOM Parse XML variable ( vari\xe1vel {; valida\xe7ao {; dtd|schema}} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-parse-xml-variable.md","sourceDirName":"commands-legacy","slug":"/commands/dom-parse-xml-variable","permalink":"/docs/pt/commands/dom-parse-xml-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-parse-xml-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-parse-xml-variable","title":"DOM Parse XML variable","slug":"/commands/dom-parse-xml-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Parse XML source","permalink":"/docs/pt/commands/dom-parse-xml-source"},"next":{"title":"DOM REMOVE XML ATTRIBUTE","permalink":"/docs/pt/commands/dom-remove-xml-attribute"}}'),n=r("785893"),s=r("250065");let d={id:"dom-parse-xml-variable",title:"DOM Parse XML variable",slug:"/commands/dom-parse-xml-variable",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"DOM Parse XML variable"})," ( ",(0,n.jsx)(a.em,{children:"vari\xe1vel"})," {; ",(0,n.jsx)(a.em,{children:"valida\xe7ao"})," {; dtd|schema}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"vari\xe1vel"}),(0,n.jsx)(a.td,{children:"Blob, Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Nome da variavel"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"valida\xe7ao"}),(0,n.jsx)(a.td,{children:"Boolean"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"True = valida\xe7\xe3o do DTD; False = sem valida\xe7\xe3o"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"dtd|schema"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Localiza\xe7\xe3o do DTD ou do schema XML"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Resultado"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"Refer\xeancia do elemento XML"})]})]})]}),"\n",(0,n.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(a.p,{children:"O comando DOM Parse XML variable analisa uma vari\xe1vel de tipo BLOB ou Texto que contenha uma estrutura XML e retorna uma refer\xeancia para esta vari\xe1vel. O comando pode validar ou n\xe3o a estrutura atrav\xe9s de um DTD ou de um esquema XML (XML Schema Definition (XSD) document)."}),"\n",(0,n.jsxs)(a.p,{children:["Passe no par\xe2metro vari\xe1vel o nome da ",(0,n.jsx)(a.em,{children:"variavel"})," BLOB ou o Texto que contenha o objeto XML."]}),"\n",(0,n.jsxs)(a.p,{children:["O par\xe2metro booleano ",(0,n.jsx)(a.em,{children:"valida\xe7ao"})," permite indicar se validar ou n\xe3o a estrutura utilizando a DTD."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Se ",(0,n.jsx)(a.em,{children:"valida\xe7ao"})," for igual a True, a estrutura se validar\xe1. Neste caso, o analisador tentar\xe1 validar a estrutura XML do documento baseado na refer\xeancia DTD ou XSD inclu\xedda no documento, ou atrav\xe9s a DTD ou o esquema XML designado pelo terceiro par\xe2metro quando for passado."]}),"\n",(0,n.jsxs)(a.li,{children:["Se ",(0,n.jsx)(a.em,{children:"valida\xe7ao"})," for igual a False, a estrutura n\xe3o se validar\xe1.\nSe passar True em ",(0,n.jsx)(a.em,{children:"valida\xe7ao"})," e omitir o terceiro par\xe2metro, o comando tentar\xe1 validar a estrutura XML atrav\xe9s de uma refer\xeancia DTD ou XSD que se encontre na estrutura mesma. A valida\xe7\xe3o pode ser indireta: se a estrutura contiver uma refer\xeancia a um arquivo DTD que contenha a refer\xeancia a um arquivo XSD, o comando tentar\xe1 realizar ambas valida\xe7\xf5es."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"O terceiro par\xe2metro dtd, permite indicar uma DTD espec\xedfica ou um esquema XML para a an\xe1lise do documento. Se utilizar este par\xe2metro, o comando n\xe3o considerar\xe1 a DTD referenciada no documento XML."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Valida\xe7\xe3o por DTD"})}),"\n",(0,n.jsx)(a.p,{children:"H\xe1 duas formas de especificar um DTD:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:['como uma refer\xeancia. Para fazer isto, passe a rota de acesso completa da nova DTD (extens\xe3o "dtd) no par\xe2metro ',(0,n.jsx)(a.em,{children:"dtd"}),". Se o documento indicado n\xe3o contiver uma DTD v\xe1lida, o par\xe2metro ",(0,n.jsx)(a.em,{children:"dtd"})," \xe9 ignorado e um erro gerado."]}),"\n",(0,n.jsxs)(a.li,{children:["diretamente em um texto. Neste caso, se o conte\xfado do par\xe2metro come\xe7ar por \u201C<?xml\u201D, 4D o considerar\xe1 como a DTD; do contr\xe1rio, 4D o considerar\xe1 como uma rota de acesso.\n",(0,n.jsx)(a.strong,{children:"Valida\xe7\xe3o por esquema"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:['Para validar o documento atrav\xe9s de um esquema XML, apenas deve passar um arquivo ou URL com uma extens\xe3o "xsd" ao inv\xe9s de uma "dtd" no terceiro par\xe2metro. A valida\xe7\xe3o por esquema XML \xe9 considerada mais flex\xedvel e poderosa que a valida\xe7\xe3o por DTD. A linguagem de documentos XSD est\xe1 baseada em linguagem XML. Os esquemas XML s\xe3o compat\xedveis particularmente tipos de dados. Para maior informa\xe7\xe3o sobre os esquemas XML, consulte o seguinte endere\xe7o: ',(0,n.jsx)(a.a,{href:"http://www.w3.org/XML/Schema",children:"http://www.w3.org/XML/Schema"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Se n\xe3o puder realizar a valida\xe7\xe3o (n\xe3o DTD ou XSD, URL incorreto, etc.), um erro \xe9 gerado. A vari\xe1vel sistema Erro indica o n\xfamero do erro. Pode interceptar este erro com a ajuda de um m\xe9todo instalado pelo comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,n.jsx)(a.p,{children:"O comando retorna uma cadeia de caracteres (RefElement) que constitui a refer\xeancia em mem\xf3ria da estrutura virtual da vari\xe1vel. Esta refer\xeancia deve ser utilizada com outros comandos de an\xe1lise XML."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Importante"}),": quando n\xe3o tiver mais necessidade dele, lembre de chamar o comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/dom-close-xml",children:"DOM CLOSE XML"})," com essa refer\xeancia para liberar mem\xf3ria."]}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(a.p,{children:"Abertura sem valida\xe7\xe3o de um objeto XML localizado em uma vari\xe1vel Texto 4D:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0var myTextVar : Text\n\xa0var vDoc : Time\n\xa0var $xml_Estruct_Ref : Text\n\xa0\n\xa0vDoc:=Open document("Document.xml")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE PACKET(vDoc;myTextVar;32000)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\n\xa0\xa0\xa0\xa0$xml_Estruct_Ref:=DOM Parse XML variable(myTextVar)\n\xa0End if\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(a.p,{children:"Abertura sem valida\xe7\xe3o de um documento XML localizado em um BLOB 4D:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"\xa0var myBlobVar : Blob\n\xa0var $xml_Estruct_Ref : Text\n\xa0\n\xa0DOCUMENT TO BLOB(\u201Cc:\\\\importar.xml\u201D;myBlobVar)\n\xa0$xml_Estruct_Ref:=DOM Parse XML variable(myBlobVar)\n"})}),"\n",(0,n.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(a.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,n.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/pt/commands/dom-close-xml",children:"DOM CLOSE XML"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/commands/dom-parse-xml-source",children:"DOM Parse XML source"})]}),"\n",(0,n.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"720"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2713"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(a.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return d}});var o=r(667294);let n={},s=o.createContext(n);function d(e){let a=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);