"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82982"],{837384:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>r,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/object-set-action","title":"OBJECT SET ACTION","description":"OBJECT SET ACTION ( {sup ;} objeto ; accion )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-action.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-action","permalink":"/docs/es/commands/object-set-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-action.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-action","title":"OBJECT SET ACTION","slug":"/commands/object-set-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT MOVE","permalink":"/docs/es/commands/object-move"},"next":{"title":"OBJECT SET AUTO SPELLCHECK","permalink":"/docs/es/commands/object-set-auto-spellcheck"}}'),a=s("785893"),o=s("250065");let c={id:"object-set-action",title:"OBJECT SET ACTION",slug:"/commands/object-set-action",displayed_sidebar:"docs"},i=void 0,r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"OBJECT SET ACTION"})," ( {",(0,a.jsx)(n.em,{children:"sup"})," ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"accion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"sup"}),(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,a.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica ) o ",(0,a.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"accion"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Acci\xf3n para asociar"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"OBJECT SET ACTION"})," modifica, para el proceso actual, la acci\xf3n est\xe1ndar asociada al objeto o a los objetos designado(s) por los par\xe1metros ",(0,a.jsx)(n.em,{children:"objeto"})," y ",(0,a.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," las acciones est\xe1ndar tambi\xe9n se pueden configurar para la sesi\xf3n en el editor de formularios usando la lista de propiedades (ver ",(0,a.jsx)(n.em,{children:"Acciones est\xe1ndar"})," en el manual de ",(0,a.jsx)(n.em,{children:"Dise\xf1o"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"acci\xf3n"}),", pase un cadena con el nombre de la acci\xf3n est\xe1ndar a asociar al objeto. Opcionalmente, la acci\xf3n puede tener par\xe1metros. Para mayor informaci\xf3n sobre nombres de acciones, consulte la secci\xf3n Acci\xf3n est\xe1ndar en el manual de ",(0,a.jsx)(n.em,{children:"Dise\xf1o 4D"}),'. Tambi\xe9n puede pasar una de las siguientes constantes, que se encuentran en el tema "',(0,a.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),'".']}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota de compatibilidad"}),": las constantes heredadas (prefijadas por _o_ en el tema) est\xe1n obsoletas a partir de 4D v16 R3. Sin embargo, todav\xeda son soportadas por compatibilidad."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(n.p,{children:["Usted desea asociar la acci\xf3n est\xe1ndar ",(0,a.jsx)(n.strong,{children:"Validate"})," con un bot\xf3n:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET ACTION(*;"bValidate";ak accept)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/object-get-action",children:"OBJECT Get action"})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1259"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let a={},o=t.createContext(a);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);