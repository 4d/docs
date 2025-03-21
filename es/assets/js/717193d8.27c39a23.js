"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11454"],{758711:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"ViewPro/commands/vp-column","title":"VP Column","description":"VP Column ( vpAreaName Integer ; columnCount Integer } ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-column.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-column","permalink":"/docs/es/20-R7/ViewPro/commands/vp-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-column","title":"VP Column"},"sidebar":"docs","previous":{"title":"VP Cells","permalink":"/docs/es/20-R7/ViewPro/commands/vp-cells"},"next":{"title":"VP COLUMN AUTOFIT","permalink":"/docs/es/20-R7/ViewPro/commands/vp-column-autofit"}}'),o=r("785893"),c=r("250065");let l={id:"vp-column",title:"VP Column"},t=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Column"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,o.jsx)(n.em,{children:"column"}),": Integer ; ",(0,o.jsx)(n.em,{children:"columnCount"})," : Integer { ; ",(0,o.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"column"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"\xcdndice de la columna"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"columnCount"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"N\xfamero de columnas"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheet"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"Objeto rango de celdas"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.code,{children:"VP Column"})," devuelve un nuevo objeto de rango que hace referencia a una columna o columnas espec\xedficas."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"column"})," define la primera columna del rango. Pase el \xedndice de la columna (el conteo comienza en 0) en este par\xe1metro. Si el rango contiene varias columnas, tambi\xe9n debe utilizar el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"columnCount"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"columnCount"})," permite definir el n\xfamero total de columnas en las que se encuentra el rango. ",(0,o.jsx)(n.em,{children:"columnCount"})," debe ser mayor que 0. Si se omite, el valor se establecer\xe1 en 1 por defecto y se crear\xe1 un rango de tipo de columna."]}),"\n",(0,o.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango (la numeraci\xf3n comienza en 0). Si se omite o si se pasa ",(0,o.jsx)(n.code,{children:"vk current sheet"}),", se utiliza la hoja de c\xe1lculo actual por defecto."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Desea definir un objeto rango para la columna mostrada abajo (en la hoja actual):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(423738).Z+"",width:"379",height:"195"})}),"\n",(0,o.jsx)(n.p,{children:"El c\xf3digo es el siguiente:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $column:=VP Column("ViewProArea";3) // columna D\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-all",children:"VP All"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-name",children:"VP Name"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-row",children:"VP Row"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},423738:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/cmd_vpColumn-ae7b6c9ee31383d694ba627d58f6842f.PNG"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return l}});var s=r(667294);let o={},c=s.createContext(o);function l(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);