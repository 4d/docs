"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["396"],{850304:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-move-cells","title":"VP MOVE CELLS","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-move-cells.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-move-cells","permalink":"/docs/es/ViewPro/commands/vp-move-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-move-cells.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-move-cells","title":"VP MOVE CELLS"},"sidebar":"docs","previous":{"title":"M","permalink":"/docs/es/commands-legacy/M"},"next":{"title":"N","permalink":"/docs/es/commands-legacy/N"}}'),i=s("785893"),o=s("250065");let l={id:"vp-move-cells",title:"VP MOVE CELLS"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP MOVE CELLS"})," ( ",(0,i.jsx)(n.em,{children:"originRange"})," : Object ; ",(0,i.jsx)(n.em,{children:"targetRange"})," : Object ; ",(0,i.jsx)(n.em,{children:"options"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"originRange"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Rango de celdas desde donde copiar"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"targetRange"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Rango de destino para los valores, el formato y las f\xf3rmulas"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Opciones adicionales"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"VP MOVE CELLS"})," mueve o copia los valores, estilo y f\xf3rmulas de ",(0,i.jsx)(n.em,{children:"originRange"})," a ",(0,i.jsx)(n.em,{children:"targetRange"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"originRange"})," y ",(0,i.jsx)(n.em,{children:"targetRange"})," pueden referirse a diferentes \xe1reas View Pro."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"originRange"}),", pase un objeto rango que contenga los valores, el estilo y las celdas de la f\xf3rmula a copiar o mover. Si ",(0,i.jsx)(n.em,{children:"originRange"})," es un rango combinado, s\xf3lo se utiliza el primero."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"targetRange"}),", pase el rango de celdas donde se copiar\xe1n o mover\xe1n los valores de las celdas, el estilo y las f\xf3rmulas."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"options"})," tiene varias propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"copy"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsxs)(n.td,{children:["Determina si los valores, el formato y las f\xf3rmulas de las celdas de ",(0,i.jsx)(n.em,{children:"originRange"})," se eliminan despu\xe9s de ejecutar el comando:",(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"False"})," (por defecto) para eliminarlos"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"True"})," para mantenerlos"]})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pasteOptions"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsxs)(n.td,{children:["Especifica lo que se pega. Valores posibles: ",(0,i.jsx)(n.p,{}),(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"vk clipboard options all"})," (por defecto)"]}),(0,i.jsx)(n.td,{children:"Pega todos los objetos de datos, incluidos los valores, el formato y las f\xf3rmulas."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vk clipboard options formatting"})}),(0,i.jsx)(n.td,{children:"Pega s\xf3lo el formato."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vk clipboard options formulas"})}),(0,i.jsx)(n.td,{children:"Pega s\xf3lo las f\xf3rmulas."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vk clipboard options formulas and formatting"})}),(0,i.jsx)(n.td,{children:"Pega las f\xf3rmulas y el formato."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vk clipboard options values"})}),(0,i.jsx)(n.td,{children:"Pega s\xf3lo los valores."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vk clipboard options value and formatting"})}),(0,i.jsx)(n.td,{children:"Pega los valores y el formato."})]})]})}),(0,i.jsx)(n.p,{})]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Se tienen en cuenta las opciones de pegado definidas en las ",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-workbook-options",children:"opciones del libro de trabajo"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Para copiar el contenido, los valores, el formato y las f\xf3rmulas de un rango origen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $originRange; $targetRange; $options : Object\n\n$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)\n\n$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)\n\n$options:=New object\n$options.copy:=True\n$options.pasteOptions:=vk clipboard options all\n\nVP MOVE CELLS($originRange; $targetRange; $options)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-paste-from-object",children:"VP PASTE FROM OBJECT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let i={},o=r.createContext(i);function l(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);