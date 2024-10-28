"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59809],{788722:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=n(474848),r=n(28453);const l={id:"query-by-example",title:"QUERY BY EXAMPLE",slug:"/commands/query-by-example",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/query-by-example",title:"QUERY BY EXAMPLE",description:"QUERY BY EXAMPLE ( {;}{*} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-by-example.md",sourceDirName:"commands-legacy",slug:"/commands/query-by-example",permalink:"/docs/es/commands/query-by-example",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-example.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"query-by-example",title:"QUERY BY EXAMPLE",slug:"/commands/query-by-example",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QUERY BY ATTRIBUTE",permalink:"/docs/es/commands/query-by-attribute"},next:{title:"QUERY BY FORMULA",permalink:"/docs/es/commands/query-by-formula"}},t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"QUERY BY EXAMPLE"})," ( {",(0,s.jsx)(a.em,{children:"tabla"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tabla"}),(0,s.jsx)(a.td,{children:"Table"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Tabla de la cual debe devolverse una selecci\xf3n de  registros , o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"*"}),(0,s.jsx)(a.td,{children:"Operador"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Si se pasa, no se muestra la barra de desplazamiento"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["QUERY BY EXAMPLE efect\xfaa la misma acci\xf3n que el comando de men\xfa B\xfasqueda por formulario... en el entorno Dise\xf1o. Este comando muestra el formulario de entrada actual como ventana de b\xfasqueda. QUERY BY EXAMPLE busca en ",(0,s.jsx)(a.em,{children:"tabla"})," los datos que el usuario introduce en la ventana de b\xfasqueda. El formulario debe contener los campos que usted quiere utilizar para efectuar la b\xfasqueda. La b\xfasqueda se optimiza; los campos indexados se utilizan autom\xe1ticamente para optimizar la b\xfasqueda."]}),"\n",(0,s.jsx)(a.p,{children:"Ver el manual de Dise\xf1o de 4D para mayor informaci\xf3n sobre la utilizaci\xf3n del comando de men\xfa B\xfasqueda por formulario... del entorno Dise\xf1o."}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(a.p,{children:"El m\xe9todo en este ejemplo muestra el formulario miBusqueda. Si el usuario acepta el formulario y ejecuta la b\xfasqueda (es decir, si la variable sistema OK toma el valor 1), se muestran los registros que cumplen con el criterio de b\xfasqueda:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Personas];"miBusqueda")\xa0// Pasar al formulario de entrada\n\xa0QUERY BY EXAMPLE([Personas])\xa0// Mostrar el formulario y realizar la b\xfasqueda\n\xa0If(OK=1)\xa0// Si el usuario valida la b\xfasqueda\n\xa0\xa0\xa0\xa0DISPLAY SELECTION([Personas])\xa0// Mostrar los registros\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(a.p,{children:"Si el usuario hace clic en el bot\xf3n Aceptar o presionan la tecla Enter, la variable sistema OK toma el valor 1 y la b\xfasqueda se realiza. Si el usuario hace clic en el bot\xf3n Cancelar o presiona la tecla de anulaci\xf3n, la variable sistema OK toma el valor 0 y la b\xfasqueda se cancela."}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/commands/order-by",children:"ORDER BY"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/query",children:"QUERY"})]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var s=n(296540);const r={},l=s.createContext(r);function o(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);