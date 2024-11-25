"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70645"],{609173:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>a,default:()=>p,assets:()=>o,toc:()=>l,frontMatter:()=>i});var d=JSON.parse('{"id":"commands-legacy/qr-get-document-property","title":"QR Get document property","description":"QR Get document property ( area ; propiedad ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-document-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-document-property","permalink":"/docs/es/commands/qr-get-document-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-document-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-document-property","title":"QR Get document property","slug":"/commands/qr-get-document-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET DESTINATION","permalink":"/docs/es/commands/qr-get-destination"},"next":{"title":"QR Get drop column","permalink":"/docs/es/commands/qr-get-drop-column"}}'),t=r("785893"),s=r("250065");let i={id:"qr-get-document-property",title:"QR Get document property",slug:"/commands/qr-get-document-property",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Get document property"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"propiedad"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propiedad"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"1 = Di\xe1logo de impresi\xf3n, 2 = Unidad del documento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor de la propiedad"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando QR Get document property permite recuperar el estado mostrado para la caja de di\xe1logo de impresi\xf3n o la unidad utilizada para el documento presente en ",(0,t.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"propiedad"})," puede utilizar una de las constantes del tema :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr field separator"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"C\xf3digo de caracteres del separador de campos. El valor por defecto es la variable del sistema FldDelimit (Tab por defecto)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr printing dialog"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Visualizaci\xf3n de la caja de di\xe1logo de impresi\xf3n:",(0,t.jsx)(n.br,{}),"Si valor = 0, la caja de di\xe1logo de impresi\xf3n no se muestra antes de la impresi\xf3n.Si valor = 1, la caja de di\xe1logo de impresi\xf3n se muestra antes de la impresi\xf3n (valor por defecto)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr record separator"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"C\xf3digo de caracteres del separador de registros. El valor por defecto es la variable del sistema RecDelimit (Retorno de carro por defecto)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr unit"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["Unidad del documento: ",(0,t.jsx)(n.br,{}),"Si valor = 0, la unidad del documento es el punto.Si valor = 1, la unidad del documento es el cent\xedmetro.Si valor = 2, la unidad del documento es la pulgada."]})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"propiedad"})," es igual a 1, el comando aplica a la visualizaci\xf3n de la caja de di\xe1logo de impresi\xf3n."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["- Si valor es igual a 1, la caja de di\xe1logo de impresi\xf3n se muestra antes de la impresi\xf3n.",(0,t.jsx)(n.br,{}),"\n- Si valor es igual a 0, la caja de di\xe1logo de impresi\xf3n no se muestra antes de la impresi\xf3n.",(0,t.jsx)(n.br,{}),"\nEl valor por defecto es 1."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"propiedad"})," es igual a 2, el comando aplica a la unidad del documento.",(0,t.jsx)(n.br,{}),"\n- Si valor es igual a 0, la unidad del documento es el punto.",(0,t.jsx)(n.br,{}),"\n- Si valor es igual a 1, la unidad del documento es el cent\xedmetro.",(0,t.jsx)(n.br,{}),"\n- Si valor es igual a 2, la unidad del documento es la pulgada."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,t.jsx)(n.br,{}),"\nSi pasa un valor incorrecto del par\xe1metro ",(0,t.jsx)(n.em,{children:"propiedad"}),", se genera el error -9852."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-set-document-property",children:"QR SET DOCUMENT PROPERTY"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var d=r(667294);let t={},s=d.createContext(t);function i(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);