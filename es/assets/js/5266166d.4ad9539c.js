"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55347"],{802324:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>t,metadata:()=>d,assets:()=>c,toc:()=>a,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/object-set-coordinates","title":"OBJECT SET COORDINATES","description":"OBJECT SET COORDINATES ( { ;} objeto ; izquierda ; sup {; derecha ; inf*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-coordinates","permalink":"/docs/es/20-R8/commands/object-set-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-coordinates.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-coordinates","title":"OBJECT SET COORDINATES","slug":"/commands/object-set-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET CONTEXT MENU","permalink":"/docs/es/20-R8/commands/object-set-context-menu"},"next":{"title":"OBJECT SET CORNER RADIUS","permalink":"/docs/es/20-R8/commands/object-set-corner-radius"}}'),o=s("785893"),i=s("250065");let t={id:"object-set-coordinates",title:"OBJECT SET COORDINATES",slug:"/commands/object-set-coordinates",displayed_sidebar:"docs"},r=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET COORDINATES"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"izquierda"})," ; ",(0,o.jsx)(n.em,{children:"sup"})," {; ",(0,o.jsx)(n.em,{children:"derecha"})," ; ",(0,o.jsx)(n.em,{children:"inf"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,o.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o ",(0,o.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"izquierda"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Coordenada izquierda del objeto en p\xedxeles"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sup"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Coordenada superior del objeto en p\xedxeles"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"derecha"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Coordenada derecha del objeto en p\xedxeles"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"inf"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Coordenada iinferior del objeto en p\xedxeles"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OBJECT SET COORDINATES"})," modifica la ubicaci\xf3n y, opcionalmente, el tama\xf1o del objeto o de los objetos designados por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"})," para el proceso actual."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," este comando es equivalente a utilizar el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-move",children:"OBJECT MOVE"})," y pasar el segundo par\xe1metro ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de  objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,o.jsxs)(n.p,{children:["En los par\xe1metros ",(0,o.jsx)(n.em,{children:"izquierda"})," y ",(0,o.jsx)(n.em,{children:"sup"}),", pase las nuevas coordenadas absolutas del objeto en el formulario. Estas coordenadas deben expresarse en p\xedxeles con respecto a la esquina superior izquierda del formulario."]}),"\n",(0,o.jsxs)(n.p,{children:["Tambi\xe9n puede pasar los valores de coordenadas absolutas en los par\xe1metros ",(0,o.jsx)(n.em,{children:"derecha"})," e ",(0,o.jsx)(n.em,{children:"inf"}),", que indican la esquina inferior derecha del objeto. Si esta esquina no corresponde a la esquina del objeto despu\xe9s de la aplicaci\xf3n de los par\xe1metros ",(0,o.jsx)(n.em,{children:"izquierda"})," y ",(0,o.jsx)(n.em,{children:"sup"}),", el objeto cambia de tama\xf1o en consecuencia."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," si desea mover un objeto con respecto a su posici\xf3n inicial, se recomienda utilizar el comando existente ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-move",children:"OBJECT MOVE"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Este comando s\xf3lo funciona en los siguientes contextos:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Los formularios de entrada en el modo entrada,"}),"\n",(0,o.jsxs)(n.li,{children:["Formulario mostrados usando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/dialog",children:"DIALOG"}),","]}),"\n",(0,o.jsxs)(n.li,{children:["Encabezados y pies de p\xe1gina de formularios de salida mostrados por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/modify-selection",children:"MODIFY SELECTION"})," o ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/display-selection",children:"DISPLAY SELECTION"}),","]}),"\n",(0,o.jsx)(n.li,{children:"Los formularios en impresi\xf3n."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:'La siguiente declaraci\xf3n ubica el objeto "button_1" en las coordenadas (10,20) (30,40):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET COORDINATES(*;"button_1";10;20;30;40)\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(296593).Z+"",width:"219",height:"186"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-move",children:"OBJECT MOVE"})]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1248"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},296593:function(e,n,s){s.d(n,{Z:function(){return d}});let d="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var d=s(667294);let o={},i=d.createContext(o);function t(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);