"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5776],{419007:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>t});var s=r(474848),o=r(28453);const a={id:"before-selection",title:"Before selection",slug:"/commands/before-selection",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/before-selection",title:"Before selection",description:"Before selection {( tabla )} -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/before-selection.md",sourceDirName:"commands-legacy",slug:"/commands/before-selection",permalink:"/docs/es/commands/before-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbefore-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"before-selection",title:"Before selection",slug:"/commands/before-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"APPLY TO SELECTION",permalink:"/docs/es/commands/apply-to-selection"},next:{title:"CREATE SELECTION FROM ARRAY",permalink:"/docs/es/commands/create-selection-from-array"}},d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before selection"})," {( ",(0,s.jsx)(n.em,{children:"tabla"})," )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla para la cual probar si el puntero se encuentra antes del primer registro seleccionado o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"S\xed (TRUE) o No (FALSE)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before selection"})," devuelve TRUE cuando el puntero del registro actual se encuentra antes del primer registro de la selecci\xf3n actual de ",(0,s.jsx)(n.em,{children:"tabla"}),".",(0,s.jsx)(n.strong,{children:"Before selection"})," generalmente es utilizado para verificar si el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/previous-record",children:"PREVIOUS RECORD"})," ha movido el puntero del registro actual antes del primer registro. Si la selecci\xf3n actual est\xe1 vac\xeda, ",(0,s.jsx)(n.strong,{children:"Before selection"})," devuelve TRUE."]}),"\n",(0,s.jsxs)(n.p,{children:["Para mover el puntero del registro actual a la selecci\xf3n, utilice los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/commands/first-record",children:"FIRST RECORD"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/commands/last-record",children:"LAST RECORD"})," o ",(0,s.jsx)(n.a,{href:"/docs/es/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,s.jsx)(n.a,{href:"/docs/es/commands/next-record",children:"NEXT RECORD"})," no mueve el puntero a la selecci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before selection"})," devuelve TRUE en el encabezado cuando un informe est\xe1 imprimi\xe9ndose con ",(0,s.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"})," o a partir del comando de men\xfa Imprimir. Puede utilizar el siguiente c\xf3digo para probar el primer encabezado e imprimir un encabezado especial para la primera p\xe1gina:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de un formulario de salida utilizado para un informe\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0// El \xe1rea encabezado va a imprimirse\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0// El c\xf3digo para la primera ruptura del encabezado va ac\xe1\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Este m\xe9todo de formulario se utiliza durante la impresi\xf3n de un informe. Define una variable, ",(0,s.jsx)(n.em,{children:"vTitle"}),", para imprimir en el \xe1rea del encabezado en la primera p\xe1gina:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de formulario [Finances];"Summary"\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection([Finances))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitle:="Informe de finanzas de 1997"\xa0// Definir el t\xedtulo para la primera p\xe1gina\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitle:=""\xa0// Borrar el t\xedtulo para todas las otras p\xe1ginas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/end-selection",children:"End selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/first-record",children:"FIRST RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/previous-record",children:"PREVIOUS RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(296540);const o={},a=s.createContext(o);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);