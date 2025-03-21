"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58900"],{41643:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/method-set-access-mode","title":"METHOD SET ACCESS MODE","description":"METHOD SET ACCESS MODE ( modo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-access-mode.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-access-mode","permalink":"/docs/es/20-R7/commands/method-set-access-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-access-mode.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-access-mode","title":"METHOD SET ACCESS MODE","slug":"/commands/method-set-access-mode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD RESOLVE PATH","permalink":"/docs/es/20-R7/commands/method-resolve-path"},"next":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/es/20-R7/commands/method-set-attribute"}}'),d=t("785893"),o=t("250065");let r={id:"method-set-access-mode",title:"METHOD SET ACCESS MODE",slug:"/commands/method-set-access-mode",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," ( ",(0,d.jsx)(n.em,{children:"modo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Modo de acceso a los objetos bloqueados"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," permite definir el comportamiento de 4D cuando intenta acceder en escritura a un objeto ya cargado en modificaci\xf3n por otro usuario o proceso. El alcance de este comando es la sesi\xf3n actual."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"modo"}),", pase una de las siguientes constantes del tema ",(0,d.jsx)(n.em,{children:"Acceso objetos dise\xf1o"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked abort"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"La carga del objeto se aborta (funcionamiento por defecto)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked confirm"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"4D muestra una caja de di\xe1logo permiti\xe9ndole elegir entre intentar nuevamente o abortar. En modo remoto, esta opci\xf3n no es soportada (la carga se abandona)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked retry"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"4D intenta cargar el objeto hasta que sea liberado"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1191"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let d={},o=s.createContext(d);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);