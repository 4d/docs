"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62624"],{729652:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-query-destination","title":"GET QUERY DESTINATION","description":"GET QUERY DESTINATION ( destinoTipo ; destinoObjeto ; destinoPunt )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/get-query-destination","permalink":"/docs/es/commands/get-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-query-destination.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-query-destination","title":"GET QUERY DESTINATION","slug":"/commands/get-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in field","permalink":"/docs/es/commands/find-in-field"},"next":{"title":"Get query limit","permalink":"/docs/es/commands/get-query-limit"}}'),d=s("785893"),r=s("250065");let i={id:"get-query-destination",title:"GET QUERY DESTINATION",slug:"/commands/get-query-destination",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," ( ",(0,d.jsx)(n.em,{children:"destinoTipo"})," ; ",(0,d.jsx)(n.em,{children:"destinoObjeto"})," ; ",(0,d.jsx)(n.em,{children:"destinoPunt"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"destinoTipo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"0=selecci\xf3n actual, 1=conjunto, 2=selecci\xf3n temporal, 3=variable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"destinoObjeto"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nombre del conjunto o Nombre de la selecci\xf3n temporal o Cadena vac\xeda"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"destinoPunt"}),(0,d.jsx)(n.td,{children:"Pointer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Puntero a la variable local si destinoTipo=3"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," devuelve el destino actual de los resultados de las b\xfasquedas para el proceso en curso. Por defecto, los resultados de las b\xfasquedas modifican la selecci\xf3n actual, pero puede modificar este funcionamiento con la ayuda del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-query-destination",children:"SET QUERY DESTINATION"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["En el par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoTipo"}),", 4D devuelve un valor indicando el destino actual de las b\xfasquedas y en el par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoObjeto"})," devuelve el nombre del destino (si aplica). Puede comparar el valor del par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoTipo"})," con las constantes del tema ",(0,d.jsx)(n.em,{children:"Destinos de b\xfasqueda"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into current selection"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into named selection"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into set"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into variable"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["El valor devuelto en el par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoObjeto"})," depende del valor del par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoTipo"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Par\xe1metro destinoTipo"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Par\xe1metro destinoObjeto"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0 (selecci\xf3n actual)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," es una cadena vac\xeda"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1 (conjunto)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," contiene el nombre del conjunto"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2 (selecci\xf3n temporal)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," contiene el nombre de la selecci\xf3n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3 (variable)"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"destinoObjeto"})," es una cadena vac\xeda (utilizar el par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoPunt"}),")"]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Cuando el destino de las b\xfasquedas es una variable local (",(0,d.jsx)(n.em,{children:"destinoTipo"})," devuelve 3), 4D devuelve en el par\xe1metro ",(0,d.jsx)(n.em,{children:"destinoPunt"})," un puntero a esta variable."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Queremos modificar temporalmente el destino de b\xfasqueda y restablecer los par\xe1metros previos:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0GET QUERY DESTINATION($vType;$vName;$ptr)\n\xa0\xa0//recuperaci\xf3n de los par\xe1metros actuales\n\xa0SET QUERY DESTINATION(Into set;"$temp")\n\xa0\xa0//modificaci\xf3n temporal del destino\n\xa0QUERY(...)\xa0//b\xfasqueda\n\xa0SET QUERY DESTINATION($vType;$vName;$ptr)\n\xa0\xa0//restablecimiento de los par\xe1metros\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/set-query-destination",children:"SET QUERY DESTINATION"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1155"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);