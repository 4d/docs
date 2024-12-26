"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82502"],{927706:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>t,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-query-and-lock","title":"SET QUERY AND LOCK","description":"SET QUERY AND LOCK ( bloq )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-query-and-lock.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-and-lock","permalink":"/docs/es/commands/set-query-and-lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-and-lock.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-query-and-lock","title":"SET QUERY AND LOCK","slug":"/commands/set-query-and-lock","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY WITH ARRAY","permalink":"/docs/es/commands/query-with-array"},"next":{"title":"SET QUERY DESTINATION","permalink":"/docs/es/commands/set-query-destination"}}'),o=s("785893"),a=s("250065");let d={id:"set-query-and-lock",title:"SET QUERY AND LOCK",slug:"/commands/set-query-and-lock",displayed_sidebar:"docs"},l=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET QUERY AND LOCK"})," ( ",(0,o.jsx)(n.em,{children:"bloq"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"bloq"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"True = bloquear los registros encontrados por las b\xfasquedas False = No bloquear registros"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"El comando SET QUERY AND LOCK permite solicitar el bloqueo autom\xe1tico de los registros encontrados por todas las b\xfasquedas que siguen el llamado de este comando en la transacci\xf3n actual. Esto significa que los registros no pueden ser modificados por un proceso diferente al proceso actual entre una b\xfasqueda y la manipulaci\xf3n de resultados."}),"\n",(0,o.jsxs)(n.p,{children:["Por defecto, los registros encontrados por las b\xfasquedas no est\xe1n bloqueados. Pase ",(0,o.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," en el par\xe1metro ",(0,o.jsx)(n.em,{children:"bloq"})," para activar el bloqueo."]}),"\n",(0,o.jsx)(n.p,{children:"Este comando debe imperativamente utilizarse al interior de una transacci\xf3n. Si se llama fuera de este contexto, se genera un error. Esto permite un mejor control del bloqueo de registros. Los registros encontrados permanecer\xe1n bloqueados hasta que la transacci\xf3n termine (validada o cancelada). Despu\xe9s de que la transacci\xf3n se completa, todos los registros se desbloquean, excepto el registro actual."}),"\n",(0,o.jsx)(n.p,{children:"Los registros est\xe1n bloqueados para todas las tablas en la transacci\xf3n actual."}),"\n",(0,o.jsxs)(n.p,{children:["Cuando una instrucci\xf3n ",(0,o.jsx)(n.strong,{children:"SET QUERY AND LOCK"}),"(True) ha sido ejecutada, los comandos de b\xfasqueda (por ejemplo ",(0,o.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"}),") adoptan un funcionamiento espec\xedfico si se encuentra un registro bloqueado:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"La b\xfasqueda se detiene y la variable sistema OK toma el valor 0,"}),"\n",(0,o.jsx)(n.li,{children:"La selecci\xf3n actual queda vac\xeda,"}),"\n",(0,o.jsx)(n.li,{children:"El conjunto sistema LockedSet contiene el registro bloqueado que caus\xf3 que la b\xfasqueda se detuviera."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Por lo tanto, en este contexto es necesario probar el conjunto LockedSet definido despu\xe9s de una b\xfasqueda infructuosa (selecci\xf3n actual vac\xeda y/o variable OK en 0) para determinar la causa de la falla."}),"\n",(0,o.jsx)(n.p,{children:"Llame SET QUERY AND LOCK (False) con el fin de desactivar el mecanismo posteriormente."}),"\n",(0,o.jsx)(n.p,{children:"SET QUERY AND LOCK modifica \xfanicamente el comportamiento de los comandos de b\xfasqueda en otras palabras:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:['Sin embargo, SET QUERY AND LOCK no afecta los otros comandos que modifican la selecci\xf3n actual tales como #cmd id="47"/], ',(0,o.jsx)(n.a,{href:"/docs/es/commands/relate-many",children:"RELATE MANY"}),", etc."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["En este ejemplo, no es posible borrar un cliente que habr\xedas sido pasado de la categor\xeda \u201CC\u201D a la categor\xeda \u201CA\u201D en otro proceso entre ",(0,o.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/commands/delete-selection",children:"DELETE SELECTION"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0START TRANSACTION\n\xa0SET QUERY AND LOCK(True)\n\xa0QUERY([Clientes];[Clientes]Categoria=\u201CC\u201D)\n\xa0\xa0//En este momento, los registros encontrados son bloqueados autom\xe1ticamente para todos los otros procesos\n\xa0DELETE SELECTION([Clientes])\n\xa0SET QUERY AND LOCK(False)\n\xa0VALIDATE TRANSACTION\n"})}),"\n",(0,o.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,o.jsx)(n.p,{children:"Si el comando no se llama en el contexto de una transacci\xf3n, se genera un error."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"})}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"661"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let o={},a=r.createContext(o);function d(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);