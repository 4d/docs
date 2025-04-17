"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30207"],{411473:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>l});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-is-font-style-supported","title":"WP Is font style supported","description":"WP Is font style supported  ( rangoObj ; estiloFuenteWP ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-is-font-style-supported.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-is-font-style-supported","permalink":"/docs/es/20-R8/WritePro/commands/wp-is-font-style-supported","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-is-font-style-supported.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-is-font-style-supported","title":"WP Is font style supported","slug":"/WritePro/commands/wp-is-font-style-supported","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert table","permalink":"/docs/es/20-R8/WritePro/commands/wp-insert-table"},"next":{"title":"WP New","permalink":"/docs/es/20-R8/WritePro/commands/wp-new"}}'),o=s("785893"),d=s("250065");let r={id:"wp-is-font-style-supported",title:"WP Is font style supported",slug:"/WritePro/commands/wp-is-font-style-supported",displayed_sidebar:"docs"},l=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP Is font style supported"}),"  ( ",(0,o.jsx)(n.em,{children:"rangoObj"})," ; ",(0,o.jsx)(n.em,{children:"estiloFuenteWP"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangoObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Rango o referencia del elemento"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"estiloFuenteWP"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Constante de estilo de fuente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"True si alguna parte de rangoObj soporta estiloFuenteWP; False en caso contrario"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El nuevo comando ",(0,o.jsx)(n.strong,{children:"WP Is font style supported"}),"  devuelve True si el estilo ",(0,o.jsx)(n.em,{children:"estiloFuenteWP"})," es soportado por alguna parte del texto en ",(0,o.jsx)(n.em,{children:"rangoObj"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"rangoObj"}),", puede pasar:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"un rango, o"}),"\n",(0,o.jsx)(n.li,{children:"un elemento (tabla / l\xednea / p\xe1rrafo / imagen en l\xednea / cuerpo / encabezado / pie de p\xe1gina)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"estiloFuenteWP"}),', pase una de las siguientes constantes de estilo del tema de constantes "4D Write Pro":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Comentario"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk font bold"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"fontBold"}),(0,o.jsxs)(n.td,{children:["Especifica el grosor del texto (depende de los estilos de fuente disponibles). Valores posibles: wk true para pasar los caracteres seleccionados en negrita; con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk true se devuelve si al menos un car\xe1cter seleccionado soporta el estilo de fuente negrita. wk false (por defecto) para eliminar el estilo de fuente negrita de los caracteres seleccionados si los hay; con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk false se devuelve si ninguno de los caracteres seleccionados soporta el estilo de fuente negrita."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk font italic"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"fontItalic"}),(0,o.jsxs)(n.td,{children:["Define el estilo it\xe1lica del texto (depende de los estilos de fuente disponibles). Valores posibles: wk true para pasar a estilo it\xe1lica u oblicua los caracteres seleccionados; con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk true se devuelve si al menos un car\xe1cter seleccionado soporta el estilo de fuente it\xe1lica u oblicua. wk false (por defecto) para eliminar el estilo it\xe1lica u oblicua de los caracteres seleccionados si los hay; con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk false se devuelve si ninguno de los caracteres seleccionados soporta el estilo de fuente it\xe1lica u oblicua."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk text linethrough style"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"textLinethroughStyle"}),(0,o.jsx)(n.td,{children:"Especifica el estilo de tachado de texto (si la hay). Valores posibles:wk none (por defecto): no hay efecto de tachadowk solid: dibuja una l\xednea continua en el texto seleccionadowk dotted: dibuja una l\xednea de puntos en el texto seleccionadowk dashed: dibuja una l\xednea discontinua en el texto seleccionadowk double: dibuja una l\xednea doble en el texto seleccionadowk semi transparent: l\xednea atenuada en el texto seleccionado. Se puede combinar con otro estilo de l\xednea. wk word: dibuja una l\xednea en palabras solamente (excluye los espacios en blanco). Se puede combinar con otro estilo de l\xednea."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk text underline style"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"textUnderlineStyle"}),(0,o.jsx)(n.td,{children:"Especifica el estilo de subrayado de texto (si lo hay). Valores posibles:wk none (predeterminado): no subrayadowk solid: dibuja un subrayado continuowk dotted: dibuja un subrayado punteadowk dashed: dibuja un subrayado discontinuowk double: dibuja un subrayado doble wk semi transparent: subrayado atenuado. Se puede combinar con otro estilo de l\xednea.wk word: dibuja un subrayado para palabras solamente (no incluye espacios en blanco). Se puede combinar con otro estilo de l\xednea."})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Por lo general, este comando se ofrece para permitir a los desarrolladores implementar objetos de interfaz personalizada, como un men\xfa pop-up que ofrece opciones de estilo basadas en el texto seleccionado."})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let o={},d=t.createContext(o);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);