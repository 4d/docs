"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86931],{64166:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(474848),i=n(28453);const o={id:"reduce-selection",title:"REDUCE SELECTION",slug:"/commands/reduce-selection",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/reduce-selection",title:"REDUCE SELECTION",description:"REDUCE SELECTION ( {tabla ;} Numero )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/reduce-selection.md",sourceDirName:"commands-legacy",slug:"/commands/reduce-selection",permalink:"/docs/es/commands/reduce-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freduce-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"reduce-selection",title:"REDUCE SELECTION",slug:"/commands/reduce-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Records in selection",permalink:"/docs/es/commands/records-in-selection"},next:{title:"SCAN INDEX",permalink:"/docs/es/commands/scan-index"}},t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"REDUCE SELECTION"})," ( {",(0,r.jsx)(s.em,{children:"tabla"})," ;} ",(0,r.jsx)(s.em,{children:"Numero"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabla"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Tabla de la cual reducir la selecci\xf3n, o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Numero"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de registros a conservar seleccionados"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["REDUCE SELECTION crea una nueva selecci\xf3n de registros para ",(0,r.jsx)(s.em,{children:"tabla"}),". El comando devuelve el primer n\xfamero de registros de la selecci\xf3n actual de ",(0,r.jsx)(s.em,{children:"tabla"}),". REDUCE SELECTION se aplica a la selecci\xf3n actual de ",(0,r.jsx)(s.em,{children:"tabla"})," en el proceso actual. El primer registro de la nueva selecci\xf3n actual es el registro actual."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," si se ejecuta la instrucci\xf3n REDUCE SELECTION(tabla;0), no hay m\xe1s selecci\xf3n ni registro actual en ",(0,r.jsx)(s.em,{children:"tabla"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(s.p,{children:"El siguiente ejemplo busca las estad\xedsticas correctas para una competencia mundial entre los distribuidores de m\xe1s de 20 pa\xedses. Por cada pa\xeds, los 3 mejores distribuidores que han vendido m\xe1s de $50 000 de productos est\xe1n entre los 100 mejores distribuidores en el mundo y reciben un premio. Con unas pocas l\xedneas de c\xf3digo, esta petici\xf3n compleja se puede ejecutar utilizando b\xfasquedas indexadas:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0CREATE EMPTY SET([Distribuidores];"Ganadores")\xa0// Crear un conjunto vac\xedo\n\xa0SCAN INDEX([Distribuidores]Cantidad ventas;100;<)\xa0// Buscar desde el final del \xedndice\n\xa0CREATE SET([Distribuidores];"100 mejores distribuidores")\xa0// Colocar los registros seleccionados en un conjunto\n\xa0For($Pais;1;Records in table([Paises]))\xa0// Por cada pa\xeds\n\xa0\xa0// Buscar los distribuidores en este pa\xeds\n\xa0\xa0\xa0\xa0QUERY([Distribuidores];[Distribuidores]Pa\xeds=[Pa\xedses]Nombre;*)\xa0// ...que vendieron m\xe1s de $50 000\n\xa0\xa0\xa0\xa0QUERY([Distribuidores];&;[Distribuidores]Cantidad ventas>=50000)\n\xa0\xa0\xa0\xa0CREATE SET([Distribuidores];"DistribuidoresGanadores")\xa0// Colocarlos en un conjunto\n\xa0\xa0// Deben estar en el gurpo de los 100 mejores distribuidores\n\xa0\xa0\xa0\xa0INTERSECTION("DistribuidoresGanadores";"100 mejores distribuidores";"DistribuidoresGanadores")\n\xa0\xa0\xa0\xa0USE SET("DistribuidoresGanadores")\xa0// Ganadores potenciales por pa\xeds\n\xa0\xa0// Ordenarlos por los resultados en orden descendente\n\xa0\xa0\xa0\xa0ORDER BY([Distribuidores];[Distribuidores]Cantidad ventas;<)\n\xa0\xa0\xa0\xa0REDUCE SELECTION([Distribuidores];3)\xa0// Tomar los tres mejores distribuidores\n\xa0\xa0\xa0\xa0CREATE SET([Distribuidores];"DistribuidoresGanadores")\xa0// Ganadores por pa\xeds\n\xa0\xa0// Colocarlos en la lista de ganadores por pa\xeds\n\xa0\xa0\xa0\xa0UNION("DistribuidoresGanadores";"Ganadores";"Ganadores")\n\xa0End for\n\xa0CLEAR SET("100 mejores distribuidores")\xa0//No necesitamos m\xe1s este conjunto\n\xa0CLEAR SET("DistribuidoresGanadores")\xa0// No necesitamos m\xe1s este conjunto\n\xa0USE SET("Ganadores")\xa0// Ac\xe1 tiene los ganadores\n\xa0CLEAR SET("Ganadores")\xa0// No necesitamos m\xe1s este conjunto\n\xa0OUTPUT FORM([Distribuidores];"Carta de ganadores")\xa0// Seleccionar la carta\n\xa0PRINT SELECTION([Distribuidores])\xa0// Imprimir las cartas\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Conjuntos"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/query",children:"QUERY"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/scan-index",children:"SCAN INDEX"})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var r=n(296540);const i={},o=r.createContext(i);function d(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);