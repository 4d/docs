"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21814"],{99872:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/difference","title":"DIFFERENCE","description":"DIFFERENCE ( conjunto1 ; conjunto2 ; resultado )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/difference.md","sourceDirName":"commands-legacy","slug":"/commands/difference","permalink":"/docs/es/20-R7/commands/difference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdifference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"difference","title":"DIFFERENCE","slug":"/commands/difference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SET FROM ARRAY","permalink":"/docs/es/20-R7/commands/create-set-from-array"},"next":{"title":"INTERSECTION","permalink":"/docs/es/20-R7/commands/intersection"}}'),t=s("785893"),c=s("250065");let r={id:"difference",title:"DIFFERENCE",slug:"/commands/difference",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DIFFERENCE"})," ( ",(0,t.jsx)(n.em,{children:"conjunto1"})," ; ",(0,t.jsx)(n.em,{children:"conjunto2"})," ; ",(0,t.jsx)(n.em,{children:"resultado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto inicial"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjunto2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto a restar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conjunto resultante"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["DIFFERENCE fusiona ",(0,t.jsx)(n.em,{children:"conjunto1"})," y ",(0,t.jsx)(n.em,{children:"conjunto2"})," y excluye del conjunto ",(0,t.jsx)(n.em,{children:"resultado"})," todos los registros de ",(0,t.jsx)(n.em,{children:"conjunto2"}),". En otras palabras, un registro se incluye en el ",(0,t.jsx)(n.em,{children:"resultado"})," s\xf3lo si est\xe1 en ",(0,t.jsx)(n.em,{children:"conjunto1"}),", pero no en ",(0,t.jsx)(n.em,{children:"conjunto2"}),". La siguiente tabla muestra todos los resultados posibles de una operaci\xf3n de diferencia de conjuntos."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto1"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto2"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Conjunto resultante"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"S\xed"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"S\xed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"S\xed"}),(0,t.jsx)(n.td,{children:"S\xed"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"El esquema a continuaci\xf3n representa gr\xe1ficamente una operaci\xf3n de diferencia entre dos conjuntos. El \xe1rea de color es el conjunto resultante."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(740359).Z+"",width:"187",height:"149"}),(0,t.jsx)(n.br,{}),"\nEl conjunto ",(0,t.jsx)(n.em,{children:"resultado"})," se crea por DIFFERENCE. El conjunto ",(0,t.jsx)(n.em,{children:"resultado"})," reemplaza todo conjunto que exista con el mismo nombre, incluyendo ",(0,t.jsx)(n.em,{children:"conjunto1"})," y ",(0,t.jsx)(n.em,{children:"conjunto2"}),". Los conjuntos ",(0,t.jsx)(n.em,{children:"conjunto1"})," y ",(0,t.jsx)(n.em,{children:"conjunto2"})," deben ser de la misma tabla. El conjunto ",(0,t.jsx)(n.em,{children:"resultado"})," pertenece a la misma tabla que ",(0,t.jsx)(n.em,{children:"conjunto1"})," y ",(0,t.jsx)(n.em,{children:"conjunto2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server:"})," en modo cliente/Servidor, los conjuntos interprocesos y procesos se conservan en el equipo servidor, mientras que los conjuntos locales se mantiene en los equipos cliente. DIFFERENCE requiere que los tres conjuntos est\xe9n en el mismo equipo. Por lo tanto, todos los conjuntos deben ser locales o ninguno de ellos debe ser local. Para mayor informaci\xf3n consulte ",(0,t.jsx)(n.em,{children:"4D Server and Sets"})," en el manual de referencia de 4D Server."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo excluye los registros seleccionados por el usuario. Los registros se muestran en la pantalla con la siguiente instrucci\xf3n:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0DISPLAY SELECTION([Clientes])\xa0// Visualizaci\xf3n de los clientes en una lista\n"})}),"\n",(0,t.jsx)(n.p,{children:"Al final de la lista de registros hay un bot\xf3n con un m\xe9todo de objeto. El m\xe9todo de objeto excluye los registros seleccionados por el usuario (el conjunto sistema llamado \u201CUserSet\u201D), y muestra una selecci\xf3n reducida:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE SET([Clientes];"$Actual")\xa0// Creaci\xf3n de un conjunto a partir de la selecci\xf3n actual\n\xa0DIFFERENCE("$Actual";"UserSet";"$Actual")\xa0// Exclusi\xf3n de los registros seleccionados\n\xa0USE SET("$Actual")\xa0// Utilizaci\xf3n del nuevo conjunto\n\xa0CLEAR SET("$Actual")\xa0// Borrar el conjunto\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/intersection",children:"INTERSECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/union",children:"UNION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"122"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},740359:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var o=s(667294);let t={},c=o.createContext(t);function r(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);