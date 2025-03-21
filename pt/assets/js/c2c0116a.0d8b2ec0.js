"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49850"],{177683:function(n,e,t){t.r(e),t.d(e,{default:()=>m,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/dom-get-xml-information","title":"DOM Get XML information","description":"DOM Get XML information ( refElemento ; xmlInfo ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-information.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-information","permalink":"/docs/pt/20-R7/commands/dom-get-xml-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-information.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-information","title":"DOM Get XML information","slug":"/commands/dom-get-xml-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/pt/20-R7/commands/dom-get-xml-element-value"},"next":{"title":"DOM Insert XML element","permalink":"/docs/pt/20-R7/commands/dom-insert-xml-element"}}'),r=t("785893"),i=t("250065");let s={id:"dom-get-xml-information",title:"DOM Get XML information",slug:"/commands/dom-get-xml-information",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(n){let e={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"DOM Get XML information"})," ( ",(0,r.jsx)(e.em,{children:"refElemento"})," ; ",(0,r.jsx)(e.em,{children:"xmlInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe2metro"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"refElemento"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Elemento de refer\xeancia raiz XML"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"xmlInfo"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Tipo de informa\xe7\xe3o a conseguir"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Resultado"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Valor da informa\xe7\xe3o XML"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(e.p,{children:["O comando DOM Get XML information permite recuperar diversas informa\xe7\xf5es sobre o elemento XML designado por ",(0,r.jsx)(e.em,{children:"refElemento"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Em ",(0,r.jsx)(e.em,{children:"xmlInfo"}),", passe um c\xf3digo indicando o tipo de informa\xe7\xe3o a ser recuperado. Pode utilizar as seguintes constantes predefinidas, localizadas no tema ",(0,r.jsx)(e.em,{children:"XML"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Constante"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{children:"Valor"}),(0,r.jsx)(e.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DOCTYPE Name"}),(0,r.jsx)(e.td,{children:"Inteiro longo"}),(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"Nome de elemento raiz tal como foi definido no marcador DOCTYPE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Document URI"}),(0,r.jsx)(e.td,{children:"Inteiro longo"}),(0,r.jsx)(e.td,{children:"6"}),(0,r.jsx)(e.td,{children:"URI da DTD"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Encoding"}),(0,r.jsx)(e.td,{children:"Inteiro longo"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"Codifica\xe7\xe3o utilizada (UTF-8, ISO...)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PUBLIC ID"}),(0,r.jsx)(e.td,{children:"Inteiro longo"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Identificador p\xfablico (FPI) da DTD que o documento segue (se a etiqueta DOCTYPE xxx PUBLIC estiver presente)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SYSTEM ID"}),(0,r.jsx)(e.td,{children:"Inteiro longo"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Identificador de sistema"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Version"}),(0,r.jsx)(e.td,{children:"Inteiro longo"}),(0,r.jsx)(e.td,{children:"5"}),(0,r.jsx)(e.td,{children:"Vers\xe3o XML aceita"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/xml-get-error",children:"XML GET ERROR"})}),"\n",(0,r.jsx)(e.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"N\xfamero do comando"}),(0,r.jsx)(e.td,{children:"721"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread-seguro"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return s}});var d=t(667294);let r={},i=d.createContext(r);function s(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);