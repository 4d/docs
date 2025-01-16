"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65645"],{770872:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-frozen-panes","title":"VP SET FROZEN PANES","description":"VP SET FROZEN PANES ( vpAreaName Object { ; sheet : Integer } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-frozen-panes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-frozen-panes","permalink":"/docs/es/20-R7/ViewPro/commands/vp-set-frozen-panes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-frozen-panes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-frozen-panes","title":"VP SET FROZEN PANES"},"sidebar":"docs","previous":{"title":"VP SET FORMULAS","permalink":"/docs/es/20-R7/ViewPro/commands/vp-set-formulas"},"next":{"title":"VP SET NUM VALUE","permalink":"/docs/es/20-R7/ViewPro/commands/vp-set-num-value"}}'),s=a("785893"),l=a("250065");let d={id:"vp-set-frozen-panes",title:"VP SET FROZEN PANES"},i=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET FROZEN PANES"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"paneObj"})," : Object { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paneObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto que contiene la informaci\xf3n de las columnas y l\xedneas congeladas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP SET FROZEN PANES"})," define el estado congelado de las columnas y filas del ",(0,s.jsx)(n.em,{children:"paneObj"})," para que se muestren siempre en el ",(0,s.jsx)(n.em,{children:"vpAreaName"}),". . Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Columnas a la izquierda o a la derecha"}),": para las columnas a la izquierda de la hoja, la l\xednea se muestra a la derecha de la \xfaltima columna congelada. Para las columnas situadas a la derecha de la hoja, la l\xednea se muestra a la izquierda de la primera columna congelada."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"L\xedneas en la parte superior o inferior"}),": para las l\xedneas en la parte superior de la hoja, la l\xednea se muestra debajo de la \xfaltima l\xednea congelada. Para las l\xedneas situadas en la parte inferior de la hoja, la l\xednea se muestra sobre la primera l\xednea congelada."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar un objeto que defina las columnas y l\xedneas a congelar en el par\xe1metro ",(0,s.jsx)(n.em,{children:"paneObj"}),". Al definir el valor de una propiedad de columna o de l\xednea en cero, se restablece (descongela) la propiedad. Si una propiedad est\xe1 definida como menor que cero, el comando no hace nada. Puede pasar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"El n\xfamero de columnas congeladas a la izquierda de la hoja"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"trailingColumnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"El n\xfamero de columnas congeladas a la derecha de la hoja"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"El n\xfamero de l\xedneas congeladas en la parte superior de la hoja"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"trailingRowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"El n\xfamero de l\xedneas congeladas en la parte inferior de la hoja"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango (la numeraci\xf3n comienza en 0). Si se omite, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual con la siguiente constante:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Quiere congelar las tres primeras columnas de la izquierda, dos columnas de la derecha y la primera l\xednea:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($panes)\n \n$panes:=New object\n$panes.columnCount:=3\n$panes.trailingColumnCount:=2\n$panes.rowCount:=1\n \nVP SET FROZEN PANES("ViewProArea";$panes)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(367694).Z+"",width:"897",height:"234"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-get-frozen-panes",children:"VP Get frozen panes"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},367694:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/cmd_vpSetFrozenPanes-96df239cfd6abd118d629eff64976791.PNG"},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return d}});var r=a(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);