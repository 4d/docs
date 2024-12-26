"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46303"],{793485:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>o,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/hide-menu-bar","title":"HIDE MENU BAR","description":"HIDE MENU BAR","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/hide-menu-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-menu-bar","permalink":"/docs/es/commands/hide-menu-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-menu-bar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"hide-menu-bar","title":"HIDE MENU BAR","slug":"/commands/hide-menu-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE TITLES","permalink":"/docs/es/commands/get-table-titles"},"next":{"title":"Macintosh command down","permalink":"/docs/es/commands/macintosh-command-down"}}'),d=s("785893"),r=s("250065");let i={id:"hide-menu-bar",title:"HIDE MENU BAR",slug:"/commands/hide-menu-bar",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"HIDE MENU BAR"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando HIDE MENU BAR vuelve invisible la barra de men\xfas."}),"\n",(0,d.jsx)(n.p,{children:"Si la barra de men\xfas ya est\xe1 oculta, el comando no hace nada."}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente m\xe9todo muestra un registro en toda la pantalla (Macintosh) hasta que haga clic:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0HIDE TOOL BAR\n\xa0HIDE MENU BAR\n\xa0Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)\n\xa0FORM SET INPUT([Pinturas];"Full Screen 800")\n\xa0DISPLAY RECORD([Pinturas])\n\xa0Repeat\n\xa0\xa0\xa0\xa0MOUSE POSITION($vlX;$vlY;$vlBoton)\n\xa0Until($vlBoton#0)\n\xa0CLOSE WINDOW\n\xa0SHOW MENU BAR\n\xa0SHOW TOOL BAR\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," en Windows, la ventana estar\xe1 limitada por los l\xedmites de la ventana de la aplicaci\xf3n."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/hide-tool-bar",children:"HIDE TOOL BAR"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/show-menu-bar",children:"SHOW MENU BAR"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/show-tool-bar",children:"SHOW TOOL BAR"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"432"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);