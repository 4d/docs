"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24579"],{966271:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/wa-get-url-history","title":"WA GET URL HISTORY","description":"WA GET URL HISTORY ( { ;} objeto ; arrUrls {; direccion {; arrTitulos*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-get-url-history.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-url-history","permalink":"/docs/es/commands/wa-get-url-history","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-url-history.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-get-url-history","title":"WA GET URL HISTORY","slug":"/commands/wa-get-url-history","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA GET URL FILTERS","permalink":"/docs/es/commands/wa-get-url-filters"},"next":{"title":"WA OPEN BACK URL","permalink":"/docs/es/commands/wa-open-back-url"}}'),i=s("785893"),t=s("250065");let d={id:"wa-get-url-history",title:"WA GET URL HISTORY",slug:"/commands/wa-get-url-history",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WA GET URL HISTORY"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"arrUrls"})," {; ",(0,i.jsx)(n.em,{children:"direccion"})," {; ",(0,i.jsx)(n.em,{children:"arrTitulos"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrUrls"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Array de los URLs visitados"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"direccion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"0 \xf3 si se omite=Lista de los URLs anteriores, 1=Lista de los URLs siguientes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrTitulos"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Array de t\xedtulos de ventanas"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando WA GET URL HISTORY devuelve uno o dos arrays que contienen los URLs visitados durante la sesi\xf3n en el \xe1rea web designada por los par\xe1metros ",(0,i.jsx)(n.em,{children:"*"})," y ",(0,i.jsx)(n.em,{children:"objeto"}),". Permite construir una interfaz de navegaci\xf3n personalizada."]}),"\n",(0,i.jsx)(n.p,{children:"La informaci\xf3n proporcionada hace referencia a la sesi\xf3n; es decir la navegaci\xf3n efectuada en una misma \xe1rea web siempre que no se haya cerrado el formulario."}),"\n",(0,i.jsxs)(n.p,{children:["El array ",(0,i.jsx)(n.em,{children:"arrayUrls"})," se llena con la lista de los URLs visitados. Dependiendo del valor del par\xe1metro ",(0,i.jsx)(n.em,{children:"direccion"})," (si se pasa), el array recupera la lista de los URLs precedentes (funcionamiento por defecto) o la lista de los URLs siguientes. Esta lista corresponde al contenido de los botones est\xe1ndar Anterior y Siguiente de los navegadores."]}),"\n",(0,i.jsx)(n.p,{children:"Los URLs son clasificados por orden cronol\xf3gico."}),"\n",(0,i.jsxs)(n.p,{children:["Pase en ",(0,i.jsx)(n.em,{children:"direccion"})," un valor indicando la lista a recuperar. Puede utilizar una de las siguientes constantes, que se encuentran en el tema ",(0,i.jsx)(n.em,{children:"Web Area"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WA next URLs"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WA previous URLs"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"direccion"}),", se utiliza el valor 0."]}),"\n",(0,i.jsxs)(n.p,{children:["Si se pasa, el par\xe1metro ",(0,i.jsx)(n.em,{children:"arrTitulos"})," contiene la lista de los nombres de ventanas asociados a los URLs. Este array est\xe1 sincronizado con el array ",(0,i.jsx)(n.em,{children:"arrUrls"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota de compatibilidad:"})," **a partir de 4D v19 R5, este comando s\xf3lo devuelve la URL actual en los arrays *arrayUrls y ",(0,i.jsx)(n.em,{children:"arrTitulos para las \xe1reas web que utilizan el motor de renderizado del sistema Windows."})]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/wa-create-url-history-menu",children:"WA Create URL history menu"})}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1048"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);