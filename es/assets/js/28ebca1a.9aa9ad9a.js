"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14119"],{16534:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/set-query-limit","title":"SET QUERY LIMIT","description":"SET QUERY LIMIT ( limite )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-query-limit.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-limit","permalink":"/docs/es/commands/set-query-limit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-limit.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-query-limit","title":"SET QUERY LIMIT","slug":"/commands/set-query-limit","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY DESTINATION","permalink":"/docs/es/commands/set-query-destination"},"next":{"title":"Quick Report","permalink":"/docs/es/category/quick-report"}}'),i=n("785893"),d=n("250065");let t={id:"set-query-limit",title:"SET QUERY LIMIT",slug:"/commands/set-query-limit",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SET QUERY LIMIT"})," ( ",(0,i.jsx)(s.em,{children:"limite"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"limite"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"N\xfamero l\xedmite de registros \xf3 0 para ilimitado"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["SET QUERY LIMIT permite pedirle a 4D detener todas la b\xfasquedas posteriores en el proceso actual tan pronto encuentre el n\xfamero de registros definido en ",(0,i.jsx)(s.em,{children:"limite"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si por ejemplo, ",(0,i.jsx)(s.em,{children:"limite"})," es igual a 1, las b\xfasquedas se detendr\xe1n tan pronto como un registro coincida con la condiciones de la b\xfasqueda."]}),"\n",(0,i.jsxs)(s.p,{children:["Para que las b\xfasquedas sean ilimitadas de nuevo, llame SET QUERY LIMIT nuevamente con ",(0,i.jsx)(s.em,{children:"limite"})," igual a 0."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Advertencia:"})," SET QUERY LIMIT afecta todas las b\xfasquedas posteriores en el proceso actual. RECUERDE siempre asociar una llamada a SET QUERY LIMIT(limite) (donde ",(0,i.jsx)(s.em,{children:"limite>0"}),") con una llamada a SET QUERY LIMIT(0) para restablecer las b\xfasquedas ilimitadas."]}),"\n",(0,i.jsx)(s.p,{children:"SET QUERY LIMIT cambia el comportamiento de los comandos de b\xfasqueda:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query",title:"QUERY",children:"QUERY"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-selection",title:"QUERY SELECTION",children:"QUERY SELECTION"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-example",title:"QUERY BY EXAMPLE",children:"QUERY BY EXAMPLE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-formula",title:"QUERY BY FORMULA",children:"QUERY BY FORMULA"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-sql",title:"QUERY BY SQL",children:"QUERY BY SQL"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-selection-by-formula",title:"QUERY SELECTION BY FORMULA",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-selection-with-array",title:"QUERY SELECTION WITH ARRAY",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-with-array",title:"QUERY WITH ARRAY",children:"QUERY WITH ARRAY"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/es/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Por otra parte, SET QUERY LIMIT no afecta los otros comandos que puedan modificar la selecci\xf3n actual de una tabla como ",(0,i.jsx)(s.a,{href:"/docs/es/commands/all-records",title:"ALL RECORDS",children:"ALL RECORDS"}),", ",(0,i.jsx)(s.a,{href:"/docs/es/commands/relate-many",title:"RELATE MANY",children:"RELATE MANY"}),", etc."]}),"\n",(0,i.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(s.p,{children:"Para efectuar una b\xfasqueda que corresponda a la f\xf3rmula \u201C...encontrar diez clientes cuyas ventas sean superiores a $1 M...\u201D, escriba el siguiente c\xf3digo:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0SET QUERY LIMIT(10)\n\xa0QUERY([Clientes];[Clientes]Ventas>1000000)\n\xa0SET QUERY LIMIT(0)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(s.p,{children:["Ver el segundo ejemplo del comando ",(0,i.jsx)(s.a,{href:"/docs/es/commands/set-query-destination",title:"SET QUERY DESTINATION",children:"SET QUERY DESTINATION"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/commands/get-query-limit",children:"Get query limit"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query",children:"QUERY"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query-by-sql",children:"QUERY BY SQL"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query-selection",children:"QUERY SELECTION"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/set-query-destination",children:"SET QUERY DESTINATION"})]}),"\n",(0,i.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero de comando"}),(0,i.jsx)(s.td,{children:"395"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hilo seguro"}),(0,i.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return t}});var r=n(667294);let i={},d=r.createContext(i);function t(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);