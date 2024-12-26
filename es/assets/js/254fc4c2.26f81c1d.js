"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73176"],{216766:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/release-menu","title":"RELEASE MENU","description":"RELEASE MENU ( menu )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/release-menu.md","sourceDirName":"commands-legacy","slug":"/commands/release-menu","permalink":"/docs/es/commands/release-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelease-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"release-menu","title":"RELEASE MENU","slug":"/commands/release-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menu selected","permalink":"/docs/es/commands/menu-selected"},"next":{"title":"SET HELP MENU","permalink":"/docs/es/commands/set-help-menu"}}'),a=s("785893"),o=s("250065");let d={id:"release-menu",title:"RELEASE MENU",slug:"/commands/release-menu",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"RELEASE MENU"})," ( ",(0,a.jsx)(n.em,{children:"menu"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"menu"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia de men\xfa"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando RELEASE MENU borra de la memoria el men\xfa cuya referencia se pasa en ",(0,a.jsx)(n.em,{children:"menu"}),".. La regla es la siguiente: a cada ",(0,a.jsx)(n.a,{href:"/docs/es/commands/create-menu",children:"Create menu"})," debe corresponder un ",(0,a.jsx)(n.a,{href:"/docs/es/commands/release-menu",children:"RELEASE MENU"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El comando elimina todas las instancias de ",(0,a.jsx)(n.em,{children:"menu"})," en todas las barras de men\xfa y todos los procesos. Si el men\xfa pertenece a una barra de men\xfa en uso, continuar\xe1 funcionando pero no podr\xe1 ser modificada. S\xf3lo se borrar\xe1 realmente de la memoria cuando la \xfaltima barra de men\xfas en la que aparezca no est\xe9 m\xe1s en uso."]}),"\n",(0,a.jsx)(n.p,{children:"Este comando puede utilizarse con men\xfas usados como barras de men\xfas."}),"\n",(0,a.jsxs)(n.p,{children:["Los submen\xfas utilizados por ",(0,a.jsx)(n.em,{children:"menu"})," no se borran si fueron creados utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/create-menu",children:"Create menu"}),". En este caso, debe eliminarlos individualmente (ver la regla mencionada anteriormente). Sin embargo, si los submen\xfas vienen de la duplicaci\xf3n de un men\xfa existente, no llame ",(0,a.jsx)(n.a,{href:"/docs/es/commands/release-menu",children:"RELEASE MENU"})," con sus instancias porque 4D las borrar\xe1 autom\xe1ticamente."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Este ejemplo muestra las diferentes formas de utilizar este comando:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0newMenu:=Create menu\n\xa0APPEND MENU ITEM(newMenu;"Test1")\n\xa0subMenu:=Create menu\n\xa0APPEND MENU ITEM(subMenu;"SubTest1")\n\xa0APPEND MENU ITEM(subMenu;"SubTest2")\xa0// Creaci\xf3n de elementos en el submen\xfa\n\xa0\n\xa0APPEND MENU ITEM(newMenu;"Test2";subMenu)\xa0// Asociar los submen\xfas al men\xfa\n\xa0\n\xa0\xa0//En este momento, el submen\xfa se asocia al men\xfa y si no lo necesitamos m\xe1s adelante, este es el momento adecuado para borrarlo.\n\xa0\xa0//Al borrrarlo no se borra inmediatamente subMenu ya que a\xfan est\xe1 siendo utilizado por newMenu. subMenu s\xf3lo se borra cuando se borra newMenu.\n\xa0\xa0//Borrar el submen\xfa en este momento le permite ahorrar memoria\n\xa0RELEASE MENU(subMenu)\n\xa0\n\xa0$result1:=Dynamic pop up menu(newMenu)\xa0//Uso de men\xfa\n\xa0copyMenu:=Create menu(newMenu)\xa0// Creaci\xf3n de un men\xfa por copia de newMenu (y duplicaci\xf3n de subMenu)\n\xa0RELEASE MENU(newMenu)\xa0// Ya no necesitamos a newMenu.\n\xa0\n\xa0$result2:=Dynamic pop up menu(copyMenu)\n\xa0RELEASE MENU(copyMenu)\n\xa0\xa0//No debe preocuparse por borrar los submen\xfas de copyMenu ya que no se cre\xf3 directamente utilizando Create menu\n\xa0\xa0//La regla a seguir es: cada Create menu debe tener un RELEASE MENU correspondiente\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/create-menu",children:"Create menu"})}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"978"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var r=s(667294);let a={},o=r.createContext(a);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);