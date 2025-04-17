"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4001"],{781504:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/intersection","title":"INTERSECTION","description":"INTERSECTION ( conjunto1 ; conjunto2 ; resultado )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/intersection.md","sourceDirName":"commands-legacy","slug":"/commands/intersection","permalink":"/docs/es/commands/intersection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fintersection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"intersection","title":"INTERSECTION","slug":"/commands/intersection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIFFERENCE","permalink":"/docs/es/commands/difference"},"next":{"title":"Is in set","permalink":"/docs/es/commands/is-in-set"}}'),r=s("785893"),o=s("250065");let c={id:"intersection",title:"INTERSECTION",slug:"/commands/intersection",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INTERSECTION"})," ( ",(0,r.jsx)(n.em,{children:"conjunto1"})," ; ",(0,r.jsx)(n.em,{children:"conjunto2"})," ; ",(0,r.jsx)(n.em,{children:"resultado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto1"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Primer conjunto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto2"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Segundo conjunto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Conjunto resultante"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["INTERSECTION compara ",(0,r.jsx)(n.em,{children:"conjunto1"})," y ",(0,r.jsx)(n.em,{children:"conjunto2"})," y selecciona \xfanicamente los registros que est\xe1n en ambos conjuntos. La siguiente tabla lista todos los resultados posibles de una operaci\xf3n de intersecci\xf3n de conjuntos."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Conjunto1"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Conjunto2"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Conjunto resultante"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"S\xed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"El resultado gr\xe1fico de una operaci\xf3n de intersecci\xf3n se muestra a continuaci\xf3n. El \xe1rea de color el el conjunto resultante."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(23085).Z+"",width:"201",height:"146"})}),"\n",(0,r.jsxs)(n.p,{children:["El conjunto ",(0,r.jsx)(n.em,{children:"resultado"})," se crea por INTERSECTION. El conjunto ",(0,r.jsx)(n.em,{children:"resultado"})," reemplaza todo conjunto que exista con el mismo nombre, incluyendo ",(0,r.jsx)(n.em,{children:"conjunto1"})," y ",(0,r.jsx)(n.em,{children:"conjunto2"}),". Los conjuntos ",(0,r.jsx)(n.em,{children:"conjunto1"})," y ",(0,r.jsx)(n.em,{children:"conjunto2"})," deben ser de la misma tabla. El conjunto ",(0,r.jsx)(n.em,{children:"resultado"})," pertenece a la misma tabla que ",(0,r.jsx)(n.em,{children:"conjunto1"})," y ",(0,r.jsx)(n.em,{children:"conjunto2"}),". Si el mismo registro actual se define en ",(0,r.jsx)(n.em,{children:"conjunto1"})," y ",(0,r.jsx)(n.em,{children:"conjunto2"}),", permanece memorizado en ",(0,r.jsx)(n.em,{children:"resultado"}),". De lo contrario, ",(0,r.jsx)(n.em,{children:"resultado"})," no tiene un registro actual."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"})," en modo cliente/Servidor, los conjuntos interprocesos y procesos se conservan en el equipo servidor, mientras que los conjuntos locales se mantiene en los equipos cliente. INTERSECTION requiere que los tres conjuntos est\xe9n en el mismo equipo. Por lo tanto, todos los conjuntos deben ser locales o ninguno de ellos debe ser local. Para mayor informaci\xf3n consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"4D Server, conjuntos y selecciones temporales"})," en el manual de referencia de 4D Server."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo busca los clientes que son atendidos por dos representantes de ventas, Juan y Ariel. Cada representante de ventas tiene un conjunto con sus clientes. Los clientes que se encuentran en ambos conjuntos son los que est\xe1n en contacto con Juan y Ariel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0INTERSECTION("Juan";"Ariel";"Ambos")\xa0// Coloque los clientes de ambos conjuntos en Ambos\n\xa0USE SET("Ambos")\xa0// Utilizaci\xf3n del conjunto\n\xa0CLEAR SET("Ambos")\xa0// Borrado de este conjunto pero se guardan los otros\n\xa0DISPLAY SELECTION([Clientes])\xa0// Muestra los clientes en contacto con los dos representantes de ventas\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/difference",children:"DIFFERENCE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/union",children:"UNION"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"121"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},23085:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var t=s(667294);let r={},o=t.createContext(r);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);