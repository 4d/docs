"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44940"],{950801:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","description":"DOM SET XML ELEMENT NAME ( elementRef ; nomElement )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-set-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-element-name","permalink":"/docs/es/commands/dom-set-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-element-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","slug":"/commands/dom-set-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML DECLARATION","permalink":"/docs/es/commands/dom-set-xml-declaration"},"next":{"title":"DOM SET XML ELEMENT VALUE","permalink":"/docs/es/commands/dom-set-xml-element-value"}}'),r=l("785893"),d=l("250065");let t={id:"dom-set-xml-element-name",title:"DOM SET XML ELEMENT NAME",slug:"/commands/dom-set-xml-element-name",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM SET XML ELEMENT NAME"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," ; ",(0,r.jsx)(n.em,{children:"nomElement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomElement"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nuevo nombre del elemento"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando DOM SET XML ELEMENT NAME  permite modificar el nombre del elemento designado por ",(0,r.jsx)(n.em,{children:"refElement"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"refElement"})," la referencia del elemento a renombrar y en ",(0,r.jsx)(n.em,{children:"nomElement"})," el nuevo nombre del elemento. El comando tambi\xe9n se encarga de actualizar las etiquetas de apertura y cierre del elemento."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"En el siguiente recurso XML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>El mejor vendedor</Title>\n</Book>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Si se ejecuta el siguiente c\xf3digo, suponiendo que ",(0,r.jsx)(n.em,{children:"vRefElem"})," contiene la referencia del elemento \u2018Book\u2019:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML ELEMENT NAME(vRefElem;"MejorVendedor")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Obtenemos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<MejorVendedor>\n\xa0\xa0\xa0<Title>El mejor vendedor</Title>\n</MejorVendedor>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario toma el valor 0 y se genera un error."}),"\n",(0,r.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,r.jsx)(n.p,{children:"Se genera un error cuando:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"La referencia del elemento no es v\xe1lida"}),"\n",(0,r.jsx)(n.li,{children:"El nuevo nombre del elemento a crear no es v\xe1lido (por ejemplo, si comienza con un n\xfamero)."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"867"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return t}});var s=l(667294);let r={},d=s.createContext(r);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);