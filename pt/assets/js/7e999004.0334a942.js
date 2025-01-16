"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18298"],{898162:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/dom-insert-xml-element","title":"DOM Insert XML element","description":"DOM Insert XML element ( tarfetElementRef ; sourceElementRef ; childIndex ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-insert-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-insert-xml-element","permalink":"/docs/pt/20-R7/commands/dom-insert-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-insert-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-insert-xml-element","title":"DOM Insert XML element","slug":"/commands/dom-insert-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML information","permalink":"/docs/pt/20-R7/commands/dom-get-xml-information"},"next":{"title":"DOM Parse XML source","permalink":"/docs/pt/20-R7/commands/dom-parse-xml-source"}}'),o=t("785893"),s=t("250065");let d={id:"dom-insert-xml-element",title:"DOM Insert XML element",slug:"/commands/dom-insert-xml-element",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DOM Insert XML element"})," ( ",(0,o.jsx)(n.em,{children:"tarfetElementRef"})," ; ",(0,o.jsx)(n.em,{children:"sourceElementRef"})," ; ",(0,o.jsx)(n.em,{children:"childIndex"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tarfetElementRef"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Elemento de refer\xeancia do pai XML"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sourceElementRef"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"XML element reference to insert"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"childIndex"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Index of child of target element above which the new element must be inserted"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Reference of new XML element"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"O comando DOM Insert XML element se utiliza para inserir um novo elemento XML entre os filhos do elemento XML cuja refer\xeancia for passada no par\xe2metro refElementTarget."}),"\n",(0,o.jsx)(n.p,{children:"Passe o elemento a inserir em refElementFonte. Este elemento deve ser passado como a refer\xeancia de um elemento XML existente em uma \xe1rvore DOM."}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.em,{children:"indiceFilho"})," se pode utilizar para designar ao filho do elemento pai antes do qual se deve inserir o novo elemento. Passe um n\xfamero de \xedndice neste par\xe2metro. Se o valor n\xe3o for v\xe1lido (por exemplo, n\xe3o h\xe1 nenhum elemento filho deste \xedndice), o novo elemento \xe9 agregado antes do primeiro filho do elemento pai."]}),"\n",(0,o.jsx)(n.p,{children:"O comando retorna a refer\xeancia do elemento XML obtido."}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Na estrutura abaixo, n\xf3s queremos inverter o primeiro e o segundo livro:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n\n<BookCatalog>\n\xa0 <Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Title>Open Source Web Services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Author>Collective</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Date>2003</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <ISBN>2-7440-1507-5</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Publisher>Wrox</Publisher>\n\xa0\xa0\xa0 </Book>\n<Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Title>Building XML Web services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Author>Scott Short</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Date>2002</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <ISBN>2-10-006476-2</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Publisher>Microsoft Press</Publisher>\n\xa0\xa0\xa0 </Book>\n</BookCatalog> \n\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Para fazer isso, simplesmente execute o c\xf3digo abaixo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $rootRef : Text\n\xa0\n\xa0$rootRef:=DOM Parse XML source("")\xa0//selection of XML document\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0var $newStruct : Text\n\xa0\xa0\xa0\xa0$newStruct:=DOM Create XML Ref("BookCatalog")\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[1]")\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Append XML element($newStruct;$bookRef)\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[2]")\n\xa0\xa0\xa0\xa0var $newElementRef : Text\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Insert XML element($newStruct;$bookRef;1)\n\xa0\n\xa0\xa0\xa0\xa0DOM CLOSE XML($newStruct)\n\xa0\xa0\xa0\xa0DOM CLOSE XML($rootRef)\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/dom-append-xml-element",children:"DOM Append XML element"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1083"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let o={},s=r.createContext(o);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);