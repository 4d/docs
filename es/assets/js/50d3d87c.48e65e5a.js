"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79621"],{398851:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>r,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/list-of-style-sheets","title":"LIST OF STYLE SHEETS","description":"LIST OF STYLE SHEETS ( arrHojasEstilo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/list-of-style-sheets.md","sourceDirName":"commands-legacy","slug":"/commands/list-of-style-sheets","permalink":"/docs/es/commands/list-of-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-of-style-sheets.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"list-of-style-sheets","title":"LIST OF STYLE SHEETS","slug":"/commands/list-of-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET STYLE SHEET INFO","permalink":"/docs/es/commands/get-style-sheet-info"},"next":{"title":"OBJECT DUPLICATE","permalink":"/docs/es/commands/object-duplicate"}}'),i=n("785893"),o=n("250065");let a={id:"list-of-style-sheets",title:"LIST OF STYLE SHEETS",slug:"/commands/list-of-style-sheets",displayed_sidebar:"docs"},d=void 0,l={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"LIST OF STYLE SHEETS"})," ( ",(0,i.jsx)(s.em,{children:"arrHojasEstilo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"arrHojasEstilo"}),(0,i.jsx)(s.td,{children:"Text array"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Nombres de las hojas de estilo definidas en la aplicaci\xf3n"})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["El comando ",(0,i.jsx)(s.strong,{children:"LIST OF STYLE SHEETS"})," devuelve la lista de hojas de estilo de la aplicaci\xf3n en el array ",(0,i.jsx)(s.em,{children:"arrHojasEstilo"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si no hubiera sido previamente definido, el array ",(0,i.jsx)(s.em,{children:"arrHojasEstilo"})," es creado por el comando. Se dimensiona autom\xe1ticamente de acuerdo con el n\xfamero de hojas de estilo definidas."]}),"\n",(0,i.jsx)(s.p,{children:'Despu\xe9s de ejecutar el comando, cada elemento del array contiene el nombre de una hoja de estilos. Estos nombres se ordenan alfab\xe9ticamente, como en el editor de hojas de estilo. El primer elemento del array contiene siempre "__automatic__", que representa la hoja de estilo "Autom\xe1tica".'}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota"}),': por razones de compatibilidad, las hojas de estilo autom\xe1ticas "__automatic_main_text__" y "__automatic_additional_text__" no son devueltas por este comando. Sin embargo, todav\xeda est\xe1n disponibles en los formularios.']}),"\n",(0,i.jsx)(s.h5,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,i.jsxs)(s.p,{children:["Este comando s\xf3lo puede utilizarse en ",(0,i.jsx)(s.strong,{children:"bases de datos binarias"}),". En la arquitectura de proyectos, el array no se llena."]}),"\n",(0,i.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(s.p,{children:"En su aplicaci\xf3n, se definen las siguientes hojas de estilo:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(143195).Z+"",width:"778",height:"204"})}),"\n",(0,i.jsx)(s.p,{children:"Si ejecuta el siguiente c\xf3digo:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0LIST OF STYLE SHEETS($arrStyles)\n\xa0\xa0// $arrStyles{1} contiene "__automatic__"\n\xa0\xa0// $arrStyles{2} contiene "Buttons"\n\xa0\xa0// $arrStyles{3} contiene "default"\n\xa0\xa0// $arrStyles{4} contiene "Input_fields"\n\xa0\xa0// $arrStyles{5} contiene "Labels"\n\xa0\xa0// $arrStyles{6} contiene "Variables"\n'})}),"\n",(0,i.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},143195:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict1206954.es-2ddd448dddde8add733a7bfa412ba7a8.png"},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return a}});var t=n(667294);let i={},o=t.createContext(i);function a(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);