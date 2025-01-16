"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55878"],{701369:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-insert-xml-element","title":"DOM Insert XML element","description":"DOM Insert XML element ( refElementTarget ; refElementFuente ; indiceHijo ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-insert-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-insert-xml-element","permalink":"/docs/es/20-R7/commands/dom-insert-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-insert-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-insert-xml-element","title":"DOM Insert XML element","slug":"/commands/dom-insert-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML information","permalink":"/docs/es/20-R7/commands/dom-get-xml-information"},"next":{"title":"DOM Parse XML source","permalink":"/docs/es/20-R7/commands/dom-parse-xml-source"}}'),l=t("785893"),s=t("250065");let o={id:"dom-insert-xml-element",title:"DOM Insert XML element",slug:"/commands/dom-insert-xml-element",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Insert XML element"})," ( ",(0,l.jsx)(n.em,{children:"refElementTarget"})," ; ",(0,l.jsx)(n.em,{children:"refElementFuente"})," ; ",(0,l.jsx)(n.em,{children:"indiceHijo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"refElementTarget"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Referencia del elemento XML padre"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"refElementFuente"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Referencia del elemento XML a insertar"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"indiceHijo"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\xcdndice del hijo del elemento objetivo antes del cual se debe insertar el nuevo elemento"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Referencia del nuevo elemento XML"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando DOM Insert XML element se utiliza para insertar un nuevo elemento XML entre los hijos del elemento XML cuya referencia se pasa en el par\xe1metro ",(0,l.jsx)(n.em,{children:"refElementTarget"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Pase el elemento a insertar en ",(0,l.jsx)(n.em,{children:"refElementFuente"}),". Este elemento se debe pasar como la referencia de un elemento XML existente en un \xe1rbol DOM."]}),"\n",(0,l.jsxs)(n.p,{children:["El par\xe1metro ",(0,l.jsx)(n.em,{children:"indiceHijo"})," se puede utilizar para designar al hijo del elemento padre antes del cual se debe insertar el nuevo elemento. Pase un n\xfamero de \xedndice en este par\xe1metro. Si el valor no es v\xe1lido (por ejemplo, no hay ning\xfan elemento hijo de este \xedndice), el nuevo elemento se agrega antes del primer hijo del elemento padre."]}),"\n",(0,l.jsx)(n.p,{children:"El comando devuelve la referencia del elemento XML obtenido."}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:"En la siguiente estructura, queremos invertir el primer y segundo libro:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n\n<BookCatalog>\n\xa0 <Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Title>Open Source Web Services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Author>Collective</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Date>2003</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <ISBN>2-7440-1507-5</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Publisher>Wrox</Publisher>\n\xa0\xa0\xa0 </Book>\n<Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Title>Building XML Web services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Author>Scott Short</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Date>2002</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <ISBN>2-10-006476-2</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Publisher>Microsoft Press</Publisher>\n\xa0\xa0\xa0 </Book>\n</BookCatalog> \n\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"Para hacerlo, simplemente ejecutamos el siguiente c\xf3digo:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $rootRef : Text\n\xa0\n$rootRef:=DOM Parse XML source("")\xa0//selecci\xf3n de documento XML\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0var $newStruct : Text\n\xa0\xa0\xa0\xa0$newStruct:=DOM Create XML Ref("BookCatalog")\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[1]")\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Append XML element($newStruct;$bookRef)\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[2]")\n\xa0\xa0\xa0\xa0var $newElementRef : Text\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Insert XML element($newStruct;$bookRef;1)\n\xa0\n\xa0\xa0\xa0\xa0DOM CLOSE XML($newStruct)\n\xa0\xa0\xa0\xa0DOM CLOSE XML($rootRef)\n\xa0End if\n\n\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/dom-append-xml-element",children:"DOM Append XML element"})}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1083"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let l={},s=r.createContext(l);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);