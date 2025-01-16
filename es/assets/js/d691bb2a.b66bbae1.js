"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41803"],{110897:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","description":"DISTINCT ATTRIBUTE PATHS ( campoObjeto ; arrayRuta )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/distinct-attribute-paths.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-paths","permalink":"/docs/es/20-R7/commands/distinct-attribute-paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-paths.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","slug":"/commands/distinct-attribute-paths","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM ARRAY","permalink":"/docs/es/20-R7/commands/delete-from-array"},"next":{"title":"DISTINCT ATTRIBUTE VALUES","permalink":"/docs/es/20-R7/commands/distinct-attribute-values"}}'),r=t("785893"),d=t("250065");let i={id:"distinct-attribute-paths",title:"DISTINCT ATTRIBUTE PATHS",slug:"/commands/distinct-attribute-paths",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," ( ",(0,r.jsx)(n.em,{children:"campoObjeto"})," ; ",(0,r.jsx)(n.em,{children:"arrayRuta"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campoObjeto"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo objeto indexado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrayRuta"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array para recibir la lista de rutas diferentes"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," devuelve la lista de rutas distintas que se encuentran en el campo objeto indexado pasado en ",(0,r.jsx)(n.em,{children:"campoObjeto"})," para la selecci\xf3n actual de la tabla a la que pertenece el campo."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"campoObjeto"}),", debe pasar un campo de tipo Objeto indexado; de lo contrario se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["Despu\xe9s de la llamada, el tama\xf1o de ",(0,r.jsx)(n.em,{children:"arrayRuta"}),' es igual al n\xfamero de rutas distintas que se encuentran en la selecci\xf3n. Las rutas a atributos de objetos anidados se devuelven utilizando la notaci\xf3n est\xe1ndar punto, por ejemplo "empresa.direccion.numero". Tenga en cuenta que los nombres de atributo de objeto son sensibles a las may\xfasculas y min\xfasculas. El comando no cambia la selecci\xf3n actual o el registro actual.']}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"arrayRuta"}),", se devuelve la lista de rutas distintas en orden alfab\xe9tico (diacr\xedtico)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"los registros con un valor indefinido en campoObjeto no se tienen en cuenta."}),"\n",(0,r.jsx)(n.li,{children:"Las rutas de atributos creadas durante una transacci\xf3n son tenidas en cuenta por el comando. Es importante se\xf1alar que estas rutas se conservan en el \xedndice del campo objeto, incluso si la transacci\xf3n ha sido cancelada."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Su base contiene un campo objeto [Customer]full_Data (indexado) con 15 registros:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(963549).Z+"",width:"892",height:"416"})}),"\n",(0,r.jsx)(n.p,{children:"Si ejecuta este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(aTPaths;0)\n\xa0ALL RECORDS([Customer])\n\xa0DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["El array ",(0,r.jsx)(n.em,{children:"aTPaths"})," obtiene los siguientes elementos:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Elemento"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Valor"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'"age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Children"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Children[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Children[].age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Children[].Name"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:'"Children.length"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:'"client"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:'"FirstName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:'"LastName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:'"Sex"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:'"telephone"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:'"telephone[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:'"telephone.length"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' "length" es una ',(0,r.jsx)(n.em,{children:"propiedad virtual"})," que est\xe1 disponible autom\xe1ticamente para todos los atributos de tipo array. Ofrece el tama\xf1o del array, es decir, el n\xfamero de elementos,y puede ser utilizado en las peticiones. Para mayor informaci\xf3n, consulte el p\xe1rrafo ",(0,r.jsx)(n.em,{children:"Utilizaci\xf3n de la propiedad virtual .length"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/distinct-attribute-values",children:"DISTINCT ATTRIBUTE VALUES"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1395"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},963549:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);