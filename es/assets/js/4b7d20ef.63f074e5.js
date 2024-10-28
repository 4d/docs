"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6563],{941715:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=d(474848),s=d(28453);const t={id:"get-window-rect",title:"GET WINDOW RECT",slug:"/commands/get-window-rect",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/get-window-rect",title:"GET WINDOW RECT",description:"GET WINDOW RECT ( izquierda ; superior ; derecha ; inferior {; ventana} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-window-rect.md",sourceDirName:"commands-legacy",slug:"/commands/get-window-rect",permalink:"/docs/es/commands/get-window-rect",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-window-rect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-window-rect",title:"GET WINDOW RECT",slug:"/commands/get-window-rect",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Frontmost window",permalink:"/docs/es/commands/frontmost-window"},next:{title:"Get window title",permalink:"/docs/es/commands/get-window-title"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET WINDOW RECT"})," ( ",(0,r.jsx)(n.em,{children:"izquierda"})," ; ",(0,r.jsx)(n.em,{children:"superior"})," ; ",(0,r.jsx)(n.em,{children:"derecha"})," ; ",(0,r.jsx)(n.em,{children:"inferior"})," {; ",(0,r.jsx)(n.em,{children:"ventana"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"izquierda"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Coordenada izquierda del interior de la ventana"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"superior"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Coordenada superior del interior de la ventana"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"derecha"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Coordenada derecha del interior de la ventana"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inferior"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Coordenada inferior del interior de la ventana"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ventana"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia de la ventana o Ventana del primer plano del proceso si se omite o Ventana MDI si -1 (Windows)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"GET WINDOW RECT"})," devuelve las coordenadas globales de la ventana cuyo n\xfamero de referencia se pasa en ",(0,r.jsx)(n.em,{children:"ventana"}),". Si la ventana no existe, las variables de los par\xe1metros no cambian."]}),"\n",(0,r.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"ventana"}),", ",(0,r.jsx)(n.strong,{children:"GET WINDOW RECT"})," se aplica a la ventana del primer plano del proceso actual."]}),"\n",(0,r.jsx)(n.p,{children:"Las coordenadas devueltas se expresan con relaci\xf3n a la esquina superior izquierda del \xe1rea de contenido de la ventana de aplicaci\xf3n (modo Windows MDI) o de la pantalla principal (macOS y modo Windows SDI). Las coordenadas devuelven el rect\xe1ngulo correspondiente al \xe1rea de contenido de la ventana (excluyendo las barras de t\xedtulos y los bordes)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," bajo Windows, si pasa -1 en ",(0,r.jsx)(n.em,{children:"ventana"}),", ",(0,r.jsx)(n.strong,{children:"GET WINDOW RECT"})," devuelve las coordenadas de la ventana de aplicaci\xf3n (ventana MDI). Estas coordenadas corresponden al \xe1rea de contenido de la ventana (excluyendo barras de men\xfas y bordes). En este caso en modo SDI, ",(0,r.jsx)(n.strong,{children:"GET WINDOW RECT"})," devuelve (0;0;0;0) como coordenadas."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/window-list",title:"WINDOW LIST",children:"WINDOW LIST"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-window-rect",children:"SET WINDOW RECT"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>o});var r=d(296540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);