"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57420],{585262:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var o=s(474848),t=s(28453);const r={id:"method-set-comments",title:"METHOD SET COMMENTS",slug:"/commands/method-set-comments",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/method-set-comments",title:"METHOD SET COMMENTS",description:"METHOD SET COMMENTS ( ruta ; comentarios {; Operador} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-comments.md",sourceDirName:"commands-legacy",slug:"/commands/method-set-comments",permalink:"/docs/es/commands/method-set-comments",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-comments.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"method-set-comments",title:"METHOD SET COMMENTS",slug:"/commands/method-set-comments",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"METHOD SET CODE",permalink:"/docs/es/commands/method-set-code"},next:{title:"Drop position",permalink:"/docs/es/commands/drop-position"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"METHOD SET COMMENTS"})," ( ",(0,o.jsx)(n.em,{children:"ruta"})," ; ",(0,o.jsx)(n.em,{children:"comentarios"})," {; ",(0,o.jsx)(n.em,{children:"Operador"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ruta"}),(0,o.jsx)(n.td,{children:"Text, Text array"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Texto o array texto que contiene una o varias rutas de m\xe9todos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"comentarios"}),(0,o.jsx)(n.td,{children:"Text, Text array"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Comentarios de los m\xe9todos designados"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"METHOD SET COMMENTS"})," remplaza la documentaci\xf3n del(os) m\xe9todo(s) designados por el par\xe1metro ",(0,o.jsx)(n.em,{children:"ruta"})," por los definidos en el par\xe1metro ",(0,o.jsx)(n.em,{children:"comentarios"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"La documentaci\xf3n modificada por este comando se muestra en el explorador de 4D (no debe confundirse con l\xedneas de comentarios en el c\xf3digo). Contiene:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"texto markdown en bases proyecto,"}),"\n",(0,o.jsx)(n.li,{children:"texto con estilo en bases binarias."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Esta documentaci\xf3n se puede generar para m\xe9todos de tipo triggers, m\xe9todos proyecto, m\xe9todos formulario, m\xe9todos base y clases."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," los formularios y los m\xe9todos formulario comparten la misma documentaci\xf3n."]}),"\n",(0,o.jsx)(n.p,{children:"Puede utilizar dos tipos de sintaxis, basadas en arrays texto o variables texto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// variables texto\n\xa0var tVcomments : Text\n\xa0METHOD SET COMMENTS(tVpath;tVcomments)\xa0// documentaci\xf3n para un s\xf3lo m\xe9todo\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// arrays texto\n\xa0ARRAY TEXT(arrComments;0)\n\xa0METHOD SET COMMENTS(arrPaths;arrComments)\xa0// documentaci\xf3n para varios m\xe9todos\n"})}),"\n",(0,o.jsx)(n.p,{children:"No es posible combinar las dos sintaxis."}),"\n",(0,o.jsx)(n.p,{children:"Si pasa un nombre de ruta invalido, se genera un error."}),"\n",(0,o.jsxs)(n.p,{children:["Puede ejecutar este comando desde un componente, pero en este caso debe pasar el par\xe1metro ",(0,o.jsx)(n.em,{children:"*"})," porque el acceso en modo escritura al c\xf3digo del componente no es posible. Si omite el par\xe1metro ",(0,o.jsx)(n.em,{children:"*"})," en este contexto, se genera el error -9763."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"A\xf1adir una fecha de modificaci\xf3n a un comentario de trigger existente:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0METHOD GET COMMENTS("[trigger]/Table1";$comments)\n\xa0$comments:="Modif:"+String(Current date)+"\\r"+$comments\n\xa0METHOD SET COMMENTS("[trigger]/Table1";$comments)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/method-get-comments",children:"METHOD GET COMMENTS"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var o=s(296540);const t={},r=o.createContext(t);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);