"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22651"],{459960:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>a,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-about","title":"SET ABOUT","description":"SET ABOUT ( textoElem ; metodo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-about.md","sourceDirName":"commands-legacy","slug":"/commands/set-about","permalink":"/docs/es/commands/set-about","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-about.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-about","title":"SET ABOUT","slug":"/commands/set-about","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDRAW","permalink":"/docs/es/commands/redraw"},"next":{"title":"SET APPLICATION COLOR SCHEME","permalink":"/docs/es/commands/set-application-color-scheme"}}'),d=o("785893"),t=o("250065");let c={id:"set-about",title:"SET ABOUT",slug:"/commands/set-about",displayed_sidebar:"docs"},r=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET ABOUT"})," ( ",(0,d.jsx)(n.em,{children:"textoElem"})," ; ",(0,d.jsx)(n.em,{children:"metodo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"textoElem"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nueva l\xednea de men\xfa Acerca de"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"metodo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre del m\xe9todo a ejecutar cuando se elije la l\xednea"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"SET ABOUT"})," cambia el comando de men\xfa ",(0,d.jsx)(n.strong,{children:"Acerca de 4D"})," del men\xfa ",(0,d.jsx)(n.strong,{children:"Ayuda"})," (Windows) o del men\xfa ",(0,d.jsx)(n.strong,{children:"Aplicaci\xf3n"})," (Mac OS X) por ",(0,d.jsx)(n.em,{children:"textoElem"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Despu\xe9s de llamar este comando, cuando el usuario selecciona esta l\xednea de men\xfa en el entorno Dise\xf1o o Aplicaci\xf3n, se llama ",(0,d.jsx)(n.em,{children:"metodo"}),". Generalmente, este m\xe9todo muestra una caja de di\xe1logo que da informaci\xf3n sobre la versi\xf3n de su aplicaci\xf3n."]}),"\n",(0,d.jsx)(n.p,{children:"Este comando se utiliza con 4D (todos los modos), 4D Desktop y 4D Server. Su ejecuci\xf3n en el equipo servidor provoca la creaci\xf3n de un nuevo proceso."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"}),' en Windows, este comando modifica la l\xednea "Acerca de 4D" en el men\xfa Ayuda creado por el comando ',(0,d.jsx)(n.a,{href:"/docs/es/commands/set-help-menu",children:"SET HELP MENU"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo reemplaza el comando de men\xfa Acerca de 4D por el comando de men\xfa Acerca del programador. El m\xe9todo ACERCA DE muestra una caja Acerca de personalizada:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET ABOUT(\u201CAcerca del programador\u2026\u201D;\u201CACERCA DE\u201D)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo reinicializa el comando de men\xfa Acerca de 4D:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET ABOUT("Acerca de 4D";"")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/set-help-menu",children:"SET HELP MENU"})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return c}});var s=o(667294);let d={},t=s.createContext(d);function c(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);