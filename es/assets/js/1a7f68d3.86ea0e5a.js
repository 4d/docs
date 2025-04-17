"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69377"],{929432:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>A,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-text","title":"WP SET TEXT","description":"WP SET TEXT ( objRango ; nuevoTexto ; posicionTexto {; alcanceRango} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-set-text.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-text","permalink":"/docs/es/20-R8/WritePro/commands/wp-set-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-set-text","title":"WP SET TEXT","slug":"/WritePro/commands/wp-set-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET LINK","permalink":"/docs/es/20-R8/WritePro/commands/wp-set-link"},"next":{"title":"WP SET VIEW PROPERTIES","permalink":"/docs/es/20-R8/WritePro/commands/wp-set-view-properties"}}'),t=s("785893"),i=s("250065");let o={id:"wp-set-text",title:"WP SET TEXT",slug:"/WritePro/commands/wp-set-text",displayed_sidebar:"docs"},d=void 0,A={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP SET TEXT"})," ( ",(0,t.jsx)(n.em,{children:"objRango"})," ; ",(0,t.jsx)(n.em,{children:"nuevoTexto"})," ; ",(0,t.jsx)(n.em,{children:"posicionTexto"})," {; ",(0,t.jsx)(n.em,{children:"alcanceRango"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objRango"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objeto de rango"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nuevoText"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Texto a insertar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posicionTexto"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posici\xf3n de inserci\xf3n (reemplazar, antes, despu\xe9s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"alcanceRango"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Incluye o excluye el contenido insertado dentro del rango"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WP SET TEXT"})," inserta el texto pasado en el par\xe1metro ",(0,t.jsx)(n.em,{children:"nuevoTexto"})," como texto sin formato en ",(0,t.jsx)(n.em,{children:"objRango"})," en la posici\xf3n espec\xedfica designada por el par\xe1metro ",(0,t.jsx)(n.em,{children:"posicionTexto"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"objRango"}),", pase un objeto para designar la posici\xf3n donde se insertar\xe1 el texto. El rango puede ser una ubicaci\xf3n expl\xedcita en el documento 4D Write Pro o puede basarse en la selecci\xf3n de un usuario. Puede pasar:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un rango, o"}),"\n",(0,t.jsx)(n.li,{children:"un elemento (tabla / fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,t.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"nuevoTexto"})," contiene el texto a insertar dentro de ",(0,t.jsx)(n.em,{children:"objRango"}),". ",(0,t.jsx)(n.strong,{children:"WP SET TEXT"})," inserta solo texto sin formato, exactamente como est\xe1 escrito, pero sin etiquetas de estilo."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"posicionTexto"}),", la ubicaci\xf3n del texto insertado se puede especificar pasando uno de los siguientes selectores:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk append"}),(0,t.jsx)(n.td,{children:"Inserta contenidos al final del rango"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk prepend"}),(0,t.jsx)(n.td,{children:"Insertar contenidos al principio del rango"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk replace"}),(0,t.jsx)(n.td,{children:"Remplazar el contenido de la p\xe1gina"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"objRango"})," es un rango, puede utilizar el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"alcanceRango"})," para pasar una de las siguientes constantes para especificar si los contenidos insertados se incluyen o no en el rango resultante::"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk exclude from range"}),(0,t.jsx)(n.td,{children:"Contenidos insertados no incluidos en el rango actualizado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk include in range"}),(0,t.jsx)(n.td,{children:"Contenido insertado incluido en el rango actualizado (predeterminado)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si no pasa un par\xe1metro ",(0,t.jsx)(n.em,{children:"alcanceRango"}),", de forma predeterminada, los contenidos insertados se incluyen en el rango resultante."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"objRango"})," no es un rango, se ignora ",(0,t.jsx)(n.em,{children:"alcanceRango"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Desea agregar texto a este documento:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(468928).Z+"",width:"535",height:"163"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"objRango"})," es un documento 4D Write Pro:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0WP SET TEXT(myDoc;"Hello world";wk append)\n\xa0\xa0//escribe "The quick brown fox jumps over the lazy dog. Hello world!"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"objRango"})," es un rango:"]}),"\n",(0,t.jsx)(n.p,{children:"Antes del texto existente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Create range(myDoc;wk start text;wk end text)\n\xa0WP SET TEXT($range;" Hello world!";wk prepend)\n\xa0\xa0//escribe " Hello world! The quick brown fox jumps over the lazy dog."\n'})}),"\n",(0,t.jsx)(n.p,{children:"Despu\xe9s del texto existente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Create range(myDoc;wk start text;wk end text)\n\xa0WP SET TEXT($range;" Hello world!";wk append)\n\xa0\xa0//escribe "The quick brown fox jumps over the lazy dog. Hello world!"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Reemplaza el texto existente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Create range(myDoc;wk start text;wk end text)\n\xa0WP SET TEXT($range;" Hello world!";wk replace)\n\xa0\xa0//escribe " Hello world!"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-text",children:"WP Get text"})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},468928:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);