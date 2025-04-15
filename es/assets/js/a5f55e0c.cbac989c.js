"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92273"],{777974:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/use-set","title":"USE SET","description":"USE SET ( conjunto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/use-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-set","permalink":"/docs/es/commands/use-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"use-set","title":"USE SET","slug":"/commands/use-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"UNION","permalink":"/docs/es/commands/union"},"next":{"title":"Corrector ortogr\xe1fico","permalink":"/docs/es/commands/theme/Spell-Checker"}}'),r=s("785893"),o=s("250065");let c={id:"use-set",title:"USE SET",slug:"/commands/use-set",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"USE SET"})," ( ",(0,r.jsx)(n.em,{children:"conjunto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del conjunto a utilizar"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["USE SET crea, con los registros de ",(0,r.jsx)(n.em,{children:"conjunto,"})," una nueva selecci\xf3n actual para la tabla a la cual pertenece ",(0,r.jsx)(n.em,{children:"conjunto"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cuando crea un conjunto, la posici\xf3n del registro actual se guarda. USE SET recupera esta informaci\xf3n y hace del registro el nuevo registro actual. Si borra este registro antes de ejecutar USE SET, 4D selecciona como registro actual el primer registro del conjunto. Los comandos de Conjuntos ",(0,r.jsx)(n.a,{href:"/docs/es/commands/intersection",title:"INTERSECTION",children:"INTERSECTION"}),", ",(0,r.jsx)(n.a,{href:"/docs/es/commands/union",title:"UNION",children:"UNION"}),", ",(0,r.jsx)(n.a,{href:"/docs/es/commands/difference",title:"DIFFERENCE",children:"DIFFERENCE"}),", y ",(0,r.jsx)(n.a,{href:"/docs/es/commands/add-to-set",title:"ADD TO SET",children:"ADD TO SET"})," reinicializan el registro actual. Igualmente, si usted crea un conjunto que no contiene la posici\xf3n del registro actual, USE SET selecciona el primer registro en el conjunto como registro actual."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," recuerde que un conjunto es la representaci\xf3n de una selecci\xf3n de registros en un momento dado, el momento de la creaci\xf3n del conjunto. Si los registros que el conjunto representa se modifican, el conjunto podr\xeda no ser v\xe1lido. Por lo tanto, un conjunto guardado en el disco debe representar a un grupo de registros que no cambia frecuentemente. Muchos eventos pueden invalidar la validez de un conjunto, como por ejemplo la supresi\xf3n o modificaci\xf3n de un registro del conjunto, o la modificaci\xf3n de los criterios de creaci\xf3n del conjunto."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo utiliza ",(0,r.jsx)(n.a,{href:"/docs/es/commands/load-set",title:"LOAD SET",children:"LOAD SET"})," para cargar un conjunto de sitios de la empresa Acme ubicada en Nueva York. Luego utiliza USE SET para hacer del conjunto la selecci\xf3n actual:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOAD SET([Empresas];"NY Acme";"NYAcmeSt")\xa0// Cargar el conjunto en memoria\n\xa0USE SET("NY Acme")\xa0// Cambiar la selecci\xf3n actual a NY Acme\n\xa0CLEAR SET("NY Acme")\xa0// Borrar el conjunto de la memoria\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-set",children:"CLEAR SET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/load-set",children:"LOAD SET"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"118"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica el registro actual"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica la selecci\xf3n actual"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},o=t.createContext(r);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);