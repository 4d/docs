"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15889"],{920346:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","description":"QUERY SELECTION BY ATTRIBUTE ( {;}{conjOp ;} campoObjeto ; rutaAtributo ; opBusq ; valor {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/query-selection-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection-by-attribute","permalink":"/docs/es/commands/query-selection-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection-by-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","slug":"/commands/query-selection-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION","permalink":"/docs/es/commands/query-selection"},"next":{"title":"QUERY SELECTION BY FORMULA","permalink":"/docs/es/commands/query-selection-by-formula"}}'),t=s("785893"),d=s("250065");let i={id:"query-selection-by-attribute",title:"QUERY SELECTION BY ATTRIBUTE",slug:"/commands/query-selection-by-attribute",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," ( {",(0,t.jsx)(n.em,{children:"tabla"}),"}{;}{",(0,t.jsx)(n.em,{children:"conjOp"})," ;} ",(0,t.jsx)(n.em,{children:"campoObjeto"})," ; ",(0,t.jsx)(n.em,{children:"rutaAtributo"})," ; ",(0,t.jsx)(n.em,{children:"opBusq"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla para la cual devolver una selecci\xf3n de registros o tabla por defecto si se omite"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conjOp"}),(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Operador de conjunci\xf3n a utilizar ara unir m\xfaltiples b\xfasquedas (si las hay)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"campoObjeto"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Campo objeto para buscar atributos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rutaAtributo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre o ruta de atributo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"opBusq"}),(0,t.jsx)(n.td,{children:"*, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Operador de b\xfasqueda (comparador)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Text, Number, Date, Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor a comparar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Continuar bandera de b\xfasqueda"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," trabaja y realiza las mismas acciones que ",(0,t.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),". La diferencia entre estos dos comandos es el alcance de la b\xfasqueda:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," busca los registros entre todos los registros de la tabla."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," busca los registros entre los registros seleccionados actualmente en la tabla."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," busca los registros en ",(0,t.jsx)(n.em,{children:"tabla"}),". El comando ",(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," cambia la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"})," para el proceso actual y vuelve el primer registro de la nueva selecci\xf3n el registro actual."]}),"\n",(0,t.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," es \xfatil cuando una b\xfasqueda no se puede definir mediante una combinaci\xf3n de ",(0,t.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," (e incluso ",(0,t.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"}),") llamadas junto con el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),". Por lo general, este es el caso cuando se desea consultar una selecci\xf3n actual que no sea resultado de una b\xfasqueda previa, pero a partir de un comando como ",(0,t.jsx)(n.a,{href:"/docs/es/commands/use-set",children:"USE SET"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Usted quiere encontrar personas con una edad entre 20 y 30, entre los registros que anteriormente fueron resaltados por el usuario:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0USE SET("UserSet")\xa0//crea una nueva selecci\xf3n actual\n\xa0QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)\n\xa0QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30)\xa0//dispara la b\xfasqueda\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1424"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica el registro actual"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica la selecci\xf3n actual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);