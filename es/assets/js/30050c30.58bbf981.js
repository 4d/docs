"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45682"],{96123:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/accumulate","title":"ACCUMULATE","description":"ACCUMULATE ( objeto {; objeto2 ; ... ; objetoN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/accumulate.md","sourceDirName":"commands-legacy","slug":"/commands/accumulate","permalink":"/docs/es/commands/accumulate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faccumulate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"accumulate","title":"ACCUMULATE","slug":"/commands/accumulate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Printing","permalink":"/docs/es/category/printing"},"next":{"title":"BLOB to print settings","permalink":"/docs/es/commands/blob-to-print-settings"}}'),o=t("785893"),a=t("250065");let c={id:"accumulate",title:"ACCUMULATE",slug:"/commands/accumulate",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ACCUMULATE"})," ( ",(0,o.jsx)(n.em,{children:"objeto"})," {; ",(0,o.jsx)(n.em,{children:"objeto2"})," ; ... ; ",(0,o.jsx)(n.em,{children:"objetoN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"Field, Variable"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Campo o variable de tipo num\xe9rico a acumular"})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["ACCUMULATE especifica los campos o variables a acumular en un informe realizado utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debe"})," ejecutar ",(0,o.jsx)(n.a,{href:"/docs/es/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"})," y ACCUMULATE antes de cada informe para el cual quiera utilizar rupturas. Estos comandos activan el proceso de rupturas para un informe. Ver la explicaci\xf3n del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/subtotal",title:"Subtotal",children:"Subtotal"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Utilice ACCUMULATE cuando quiera incluir subtotales para tal los campos o variables num\xe9ricas en un informe. ACCUMULATE le indica a 4D que almacene los subtotales para cada elemento especificado en ",(0,o.jsx)(n.em,{children:"objeto"}),". Los subtotales se acumulan para cada nivel de ruptura especificado por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Ejecute ACCUMULATE antes de imprimir un informe con ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Utilice la funci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/es/commands/subtotal",title:"Subtotal",children:"Subtotal"})," en el m\xe9todo de formulario o en un m\xe9todo de objeto para devolver el subtotal de uno de los objetos especificados en ",(0,o.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/break-level",children:"BREAK LEVEL"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/order-by",children:"ORDER BY"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/subtotal",children:"Subtotal"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(667294);let o={},a=s.createContext(o);function c(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);