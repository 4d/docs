"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11515"],{50615:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-row","title":"VP Row","description":"VP Row ( vpAreaName Integer { ; rowCount Integer } } ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-row.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-row","permalink":"/docs/es/ViewPro/commands/vp-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-row","title":"VP Row"},"sidebar":"docs","previous":{"title":"VP RESUME COMPUTING","permalink":"/docs/es/ViewPro/commands/vp-resume-computing"},"next":{"title":"VP ROW AUTOFIT","permalink":"/docs/es/ViewPro/commands/vp-row-autofit"}}'),i=r("785893"),o=r("250065");let t={id:"vp-row",title:"VP Row"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP Row"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,i.jsx)(n.em,{children:"row"})," : Integer { ; ",(0,i.jsx)(n.em,{children:"rowCount"})," : Integer { ; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer } } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"row"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\xcdndice de la l\xednea"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rowCount"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"N\xfamero de l\xedneas"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Range object of row(s)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"VP Row"})," devuelve un nuevo objeto de rango que hace referencia a una fila o filas espec\xedficas."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"row"})," define la primera fila del rango de filas. Pase el \xedndice de la l\xednea (el conteo comienza en 0) en este par\xe1metro. Si el rango contiene varias columnas, tambi\xe9n debe utilizar el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"columnCount"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"rowCount"})," permite definir el n\xfamero total de l\xedneas del rango. ",(0,i.jsx)(n.em,{children:"rowCount"})," debe ser mayor que 0. Si se omite, el valor ser\xe1 1 por defecto."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango (la numeraci\xf3n comienza en 0). Si no se especifica, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual con la siguiente constante:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Desea definir un objeto rango para la l\xednea que se muestra a continuaci\xf3n (en la hoja de c\xe1lculo actual):"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(606969).Z+"",width:"517",height:"317"})}),"\n",(0,i.jsx)(n.p,{children:"Puede escribir:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$row:=VP Row("ViewProArea";9) // l\xednea 10\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-all",children:"VP All"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-column",children:"VP Column"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},606969:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/cmd_vpRow-17d159502d78c7ebad52f5f796faa8db.PNG"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var s=r(667294);let i={},o=s.createContext(i);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);