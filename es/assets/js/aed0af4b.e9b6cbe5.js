"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86186],{575944:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=n(474848),i=n(28453);const t={id:"load-list",title:"Load list",slug:"/commands/load-list",displayed_sidebar:"docs"},l=void 0,r={id:"commands-legacy/load-list",title:"Load list",description:"Load list ( nomLista ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-list.md",sourceDirName:"commands-legacy",slug:"/commands/load-list",permalink:"/docs/es/commands/load-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"load-list",title:"Load list",slug:"/commands/load-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LIST OF CHOICE LISTS",permalink:"/docs/es/commands/list-of-choice-lists"},next:{title:"New list",permalink:"/docs/es/commands/new-list"}},o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Load list"})," ( ",(0,s.jsx)(a.em,{children:"nomLista"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"nomLista"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Nombre de una lista creada en el Editor de listas del entorno Dise\xf1o"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Resultado"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"N\xfamero de referencia de la lista creada recientemente"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["Load list crea una lista jer\xe1rquica cuyo contenido se copia de la lista pasada en ",(0,s.jsx)(a.em,{children:"nomLista"}),". Luego devuelve el n\xfamero de referencia de la lista creada recientemente."]}),"\n",(0,s.jsxs)(a.p,{children:["Para asegurarse de que la lista especificada por ",(0,s.jsx)(a.em,{children:"nomLista"})," existe, utilice la funci\xf3n ",(0,s.jsx)(a.a,{href:"/docs/es/commands/is-a-list",title:"Is a list",children:"Is a list"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Note que la nueva lista es una copia de la lista definida en el entorno Dise\xf1o. Por lo tanto, cualquier modificaci\xf3n realizada a la nueva lista no afectar\xe1 la lista definida en el entorno Dise\xf1o. Igualmente, toda modificaci\xf3n posterior a la lista definida en el entorno Dise\xf1o no afectar\xe1 la lista que acaba de crear."}),"\n",(0,s.jsxs)(a.p,{children:["Si modifica la lista creada recientemente y quiere guardar los cambios de forma permanente, llame al comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/save-list",title:"SAVE LIST",children:"SAVE LIST"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["Recuerde llamar ",(0,s.jsx)(a.a,{href:"/docs/es/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"})," para borrar la lista creada cuando haya terminado. De lo contrario, permanecer\xe1 en memoria hasta el final de la sesi\xf3n de trabajo o hasta que el proceso en el cual fue creada termine o sea abortado."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Consejo:"})," si asocia una lista a un objeto de formulario (lista jer\xe1rquica, pesta\xf1a, o men\xfa jer\xe1rquico) utilizando Lista de valores en la ventana de Lista de propiedades, no necesita llamar Load list o ",(0,s.jsx)(a.a,{href:"/docs/es/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"})," en el m\xe9todo del objeto. 4D carga y borra la lista autom\xe1ticamente por usted."]}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(a.p,{children:["Usted crea una base para el mercado internacional y necesita cambiar a los diferentes idiomas mientras utiliza la base. En un formulario, presenta una lista jer\xe1rquica, llamada ",(0,s.jsx)(a.em,{children:"hlList"}),", que ofrece una lista de opciones est\xe1ndar. En el entorno Dise\xf1o, usted prepar\xf3 varias listas, tales como \u201cOpciones EN\u201d para la versi\xf3n en ingl\xe9s, \u201cOpciones FR\u201d para la versi\xf3n en franc\xe9s, \u201cOpciones ES\u201d para la versi\xf3n en espa\xf1ol, etc. Adicionalmente, usted mantiene una variable interproceso llamada\u25ca",(0,s.jsx)(a.em,{children:"gsIdiomaActual"}),", donde almacena un c\xf3digo de lenguaje de 2 caracteres, como \u201cEN\u201d para la versi\xf3n en ingl\xe9s, \u201cFR\u201d para la versi\xf3n en franc\xe9s, \u201cES\u201d para la versi\xf3n en espa\xf1ol, etc. Para asegurarse de que se cargue la lista correcta utilizando el idioma seleccionado actualmente, puede escribir:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto de la lista jer\xe1rquica hlList\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var hlList : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlList:=Load list("Std Options"+\u25cagsIdiomaActual)\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0End case\n'})}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/commands/clear-list",children:"CLEAR LIST"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/is-a-list",children:"Is a list"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/save-list",children:"SAVE LIST"})]})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>r});var s=n(296540);const i={},t=s.createContext(i);function l(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);