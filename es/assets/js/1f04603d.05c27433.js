"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48481"],{635623:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-set-scrollbar","title":"OBJECT SET SCROLLBAR","description":"OBJECT SET SCROLLBAR ( { ;} objeto ; horizontal ; vertical* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-scrollbar","permalink":"/docs/es/20-R7/commands/object-set-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-scrollbar","title":"OBJECT SET SCROLLBAR","slug":"/commands/object-set-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/es/20-R7/commands/object-set-scroll-position"},"next":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/es/20-R7/commands/object-set-shortcut"}}'),t=s("785893"),o=s("250065");let d={id:"object-set-scrollbar",title:"OBJECT SET SCROLLBAR",slug:"/commands/object-set-scrollbar",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET SCROLLBAR"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"True = mostrar, False = ocultar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"True = mostrar, False = ocultar"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando OBJECT SET SCROLLBAR le permite mostrar u ocultar las barras de desplazamiento horizontal o vertical en el objeto designado por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa el par\xe1metro opcional *, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, no se pasa una cadena sino una referencia de una variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en los par\xe1metros ",(0,t.jsx)(n.em,{children:"horizontal"})," y ",(0,t.jsx)(n.em,{children:"vertical"})," los valores indicando si las barras de desplazamiento correspondientes deben ser mostrarse. Puede pasar valores booleanos (True=mostrado, False=oculto), o valores num\xe9ricos (0=oculto, 1=mostrado, 2=modo autom\xe1tico). El uso de valores num\xe9ricos le da acceso al modo autom\xe1tico, donde s\xf3lo se muestran las barras de desplazamiento cuando sea necesario."]}),"\n",(0,t.jsx)(n.p,{children:"."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Objetos con barras de desplazamiento"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Ocultar barra de desplazamiento"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Mostrar barra de desplazamiento"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Modo autom\xe1tico"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text object fields and variables"}),(0,t.jsx)(n.td,{children:"False o 0"}),(0,t.jsx)(n.td,{children:"True o 1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"no disponible"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Campos y variable objeto texto"}),(0,t.jsx)(n.td,{children:"False o 0"}),(0,t.jsx)(n.td,{children:"True o 1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"List boxes"}),(0,t.jsx)(n.td,{children:"False o 0"}),(0,t.jsx)(n.td,{children:"True o 1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Listas jer\xe1rquicas"}),(0,t.jsx)(n.td,{children:"False o 0"}),(0,t.jsx)(n.td,{children:"True o 1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Subformularios"}),(0,t.jsx)(n.td,{children:"False o 0"}),(0,t.jsx)(n.td,{children:"True o 1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"no disponible"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Por defecto, se muestran las barras de desplazamiento."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," para obtener m\xe1s informaci\xf3n sobre el modo autom\xe1tico, consulte ",(0,t.jsx)(n.em,{children:"Barras de desplazamiento"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-visible",children:"OBJECT SET VISIBLE"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"843"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);