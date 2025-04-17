"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99641"],{751814:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/screen-coordinates","title":"SCREEN COORDINATES","description":"SCREEN COORDINATES ( izquierda ; superior ; derecha ; inferior {; IDpantalla {; areaPantalla}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/screen-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/screen-coordinates","permalink":"/docs/es/20-R8/commands/screen-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-coordinates.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"screen-coordinates","title":"SCREEN COORDINATES","slug":"/commands/screen-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN FONT PICKER","permalink":"/docs/es/20-R8/commands/open-font-picker"},"next":{"title":"SCREEN DEPTH","permalink":"/docs/es/20-R8/commands/screen-depth"}}'),d=r("785893"),a=r("250065");let l={id:"screen-coordinates",title:"SCREEN COORDINATES",slug:"/commands/screen-coordinates",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SCREEN COORDINATES"})," ( ",(0,d.jsx)(n.em,{children:"izquierda"})," ; ",(0,d.jsx)(n.em,{children:"superior"})," ; ",(0,d.jsx)(n.em,{children:"derecha"})," ; ",(0,d.jsx)(n.em,{children:"inferior"})," {; ",(0,d.jsx)(n.em,{children:"IDpantalla"})," {; ",(0,d.jsx)(n.em,{children:"areaPantalla"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"izquierda"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordenada izquierda del \xe1rea de pantalla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"superior"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordenada superior del \xe1rea de la pantalla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"derecha"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordenada derecha del \xe1rea de la pantalla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"inferior"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordenada inferior del \xe1rea de la pantalla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"IDpantalla"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de la pantalla, o pantalla principal si se omite"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"areaPantalla"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Pantalla completa (por defecto) o \xe1rea de trabajo"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando SCREEN COORDINATES devuelve en los par\xe1metros ",(0,d.jsx)(n.em,{children:"izquierda"}),", ",(0,d.jsx)(n.em,{children:"arriba"}),", ",(0,d.jsx)(n.em,{children:"derecha,"})," y ",(0,d.jsx)(n.em,{children:"abajo"})," las coordenadas de la pantalla especificada por ",(0,d.jsx)(n.em,{children:"IDpantalla"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"IDpantalla"}),", el comando devuelve las coordenadas de la pantalla principal."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"areaPantalla"})," le permite especificar si desea las coordenadas para toda el \xe1rea de la pantalla (predeterminado) o solo para el \xe1rea utilizable disponible. Hay dos selectores disponibles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Screen size"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Las coordenadas de toda la pantalla. (valor por defecto)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Screen work area"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Las coordenadas del \xe1rea de pantalla disponible que se pueden usar (es decir, no est\xe1n ocupadas por la barra de tareas de Windows o la barra de men\xfas y el dock de masOS)."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Las siguientes im\xe1genes demuestran las diferencias entre el tama\xf1o de la pantalla y el \xe1rea de trabajo:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(55682).Z+"",width:"730",height:"201"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Si la barra de tareas o el dock se ocultan autom\xe1ticamente, ",(0,d.jsx)(n.strong,{children:"SCREEN COORDINATES"})," siempre devuelve el tama\xf1o completo de la pantalla."]}),"\n",(0,d.jsxs)(n.li,{children:["Si se ofrece un valor no v\xe1lido en ",(0,d.jsx)(n.em,{children:"IDpantalla"}),", se devuelve un cero para todas las coordenadas."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/count-screens",children:"Count screens"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/menu-bar-screen",children:"Menu bar screen"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/screen-depth",children:"SCREEN DEPTH"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"438"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},55682:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4800387.en-09828b7fbc78891e9652bec39c1f7008.png"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return l}});var s=r(667294);let d={},a=s.createContext(d);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);