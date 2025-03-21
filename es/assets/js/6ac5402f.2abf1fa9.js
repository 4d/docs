"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7214"],{207169:function(n,e,i){i.r(e),i.d(e,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/dom-get-xml-information","title":"DOM Get XML information","description":"DOM Get XML information ( elementRef ; infoXML ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-xml-information.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-information","permalink":"/docs/es/commands/dom-get-xml-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-information.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-xml-information","title":"DOM Get XML information","slug":"/commands/dom-get-xml-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/es/commands/dom-get-xml-element-value"},"next":{"title":"DOM Insert XML element","permalink":"/docs/es/commands/dom-insert-xml-element"}}'),d=i("785893"),r=i("250065");let s={id:"dom-get-xml-information",title:"DOM Get XML information",slug:"/commands/dom-get-xml-information",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(n){let e={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DOM Get XML information"})," ( ",(0,d.jsx)(e.em,{children:"elementRef"})," ; ",(0,d.jsx)(e.em,{children:"infoXML"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Par\xe1metro"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"elementRef"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Referencia del elemento XML ra\xedz"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"infoXML"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Tipo de informaci\xf3n a obtener"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Resultado"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"Valor de la informaci\xf3n XML"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["El comando DOM Get XML information permite recuperar diversa informaci\xf3n sobre el elemento XML designado por ",(0,d.jsx)(e.em,{children:"refElement"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["En ",(0,d.jsx)(e.em,{children:"infoXML"}),", pase un c\xf3digo indicando el tipo de informaci\xf3n a recuperar. Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema \u201C\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{children:"Valor"}),(0,d.jsx)(e.th,{children:"Comentario"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"PUBLIC ID"}),(0,d.jsx)(e.td,{children:"Entero largo"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"Identificador p\xfablico (FPI) de la DTD a la cual el documento es conforme (si la etiqueta DOCTYPE xxx PUBLIC est\xe1 presente)."})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SYSTEM ID"}),(0,d.jsx)(e.td,{children:"Entero largo"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"Identificador sistema"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DOCTYPE Name"}),(0,d.jsx)(e.td,{children:"Entero largo"}),(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:"Nombre del elemento ra\xedz tal como se defini\xf3 en el marcador DOCTYPE"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Encoding"}),(0,d.jsx)(e.td,{children:"Entero largo"}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:"Codificaci\xf3n utilizada (UTF-8, ISO...)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Version"}),(0,d.jsx)(e.td,{children:"Entero largo"}),(0,d.jsx)(e.td,{children:"5"}),(0,d.jsx)(e.td,{children:"Versi\xf3n de XML aceptada"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Document URI"}),(0,d.jsx)(e.td,{children:"Entero largo"}),(0,d.jsx)(e.td,{children:"6"}),(0,d.jsx)(e.td,{children:"URI de la DTD"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"Estas constantes indican la siguiente informaci\xf3n:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"PUBLIC ID: identificador p\xfablico (FPI) de la DTD a la cual el documento se conforma (si la etiqueta DOCTYPE xxx PUBLIC est\xe1 presente)."}),"\n",(0,d.jsx)(e.li,{children:"SYSTEM ID: identificador sistema."}),"\n",(0,d.jsx)(e.li,{children:"Nombre DOCTYPE: nombre del elemento ra\xedz tal como se defini\xf3 en la etiqueta DOCTYPE."}),"\n",(0,d.jsx)(e.li,{children:"Encoding: codificaci\xf3n utilizada (UTF-8, ISO...)."}),"\n",(0,d.jsx)(e.li,{children:"Version: versi\xf3n de XML aceptada."}),"\n",(0,d.jsx)(e.li,{children:"Document URI: URI de la DTD."}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/es/commands/xml-get-error",children:"XML GET ERROR"})}),"\n",(0,d.jsx)(e.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"N\xfamero de comando"}),(0,d.jsx)(e.td,{children:"721"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Hilo seguro"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return s}});var t=i(667294);let d={},r=t.createContext(d);function s(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);