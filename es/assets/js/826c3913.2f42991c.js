"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20079"],{9613:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands/new-shared-collection","title":"New shared collection","description":"New shared collection {( ...value Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/new-shared-collection.md","sourceDirName":"commands","slug":"/commands/new-shared-collection","permalink":"/docs/es/commands/new-shared-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-shared-collection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-shared-collection","title":"New shared collection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Nueva colecci\xf3n","permalink":"/docs/es/commands/new-collection"},"next":{"title":"Comunicaciones","permalink":"/docs/es/commands/theme/Communications"}}'),c=o("785893"),l=o("250065");let i={id:"new-shared-collection",title:"New shared collection",displayed_sidebar:"docs"},r=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"New shared collection"})," {( ",(0,c.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metros"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"value"}),(0,c.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Valor(es) de la collection compartida"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Resultado"}),(0,c.jsx)(n.td,{children:"Collection"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"New shared collection"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.code,{children:"New shared collection"}),"  crea una nueva colecci\xf3n compartida vac\xeda o precargada y devuelve su referencia. Collections can be handled using properties and functions of the ",(0,c.jsx)(n.a,{href:"/docs/es/API/CollectionClass",children:"Collection class API"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["La adici\xf3n de un elemento a esta colecci\xf3n utilizando el operador de asignaci\xf3n debe estar rodeada por la estructura ",(0,c.jsx)(n.a,{href:"/docs/es/Concepts/shared#useend-use",children:(0,c.jsx)(n.code,{children:"Use...End use"})}),", de lo contrario se genera un error (esto no es necesario cuando se a\xf1aden elementos utilizando funciones como ",(0,c.jsx)(n.a,{href:"/docs/es/API/CollectionClass#push",children:(0,c.jsx)(n.code,{children:"push()"})})," o ",(0,c.jsx)(n.a,{href:"/docs/es/API/CollectionClass#map",children:(0,c.jsx)(n.code,{children:"map()"})})," porque activan autom\xe1ticamente una estructura interna ",(0,c.jsx)(n.em,{children:"Use...End use"}),"). Sin embargo, es posible leer un elemento sin una estructura ",(0,c.jsx)(n.em,{children:"Use...End use"}),"."]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre las colecciones compartidas, por favor consulte la p\xe1gina ",(0,c.jsx)(n.a,{href:"/docs/es/Concepts/shared",children:"Objetos y colecciones compartidas"}),"."]})}),"\n",(0,c.jsxs)(n.p,{children:["Si no se pasa ning\xfan par\xe1metro, ",(0,c.jsx)(n.code,{children:"New shared collection"})," crea una colecci\xf3n compartida vac\xeda y devuelve su referencia."]}),"\n",(0,c.jsx)(n.p,{children:"Debe asignar la referencia devuelta a una variable 4D del tipo Collection."}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Keep in mind that ",(0,c.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,c.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Opcionalmente, puedes precargar la nueva colecci\xf3n compartida pasando uno o varios ",(0,c.jsx)(n.em,{children:"valor(es)"})," como par\xe1metro(s). De lo contrario, puede a\xf1adir o modificar elementos posteriormente por asignaci\xf3n notaci\xf3n objeto (ver ejemplo)."]}),"\n",(0,c.jsxs)(n.p,{children:["Si el nuevo \xedndice del elemento est\xe1 m\xe1s all\xe1 del \xfaltimo elemento existente de la colecci\xf3n compartida, la colecci\xf3n se redimensiona autom\xe1ticamente y a todos los nuevos elementos intermedios se les asigna un valor ",(0,c.jsx)(n.strong,{children:"null"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"Puede pasar cualquier n\xfamero de valores de los siguientes tipos soportados:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"number (real, longint...). Los valores num\xe9ricos se almacenan siempre como reales."}),"\n",(0,c.jsx)(n.li,{children:"text"}),"\n",(0,c.jsx)(n.li,{children:"boolean"}),"\n",(0,c.jsx)(n.li,{children:"date"}),"\n",(0,c.jsx)(n.li,{children:"time (almacenado como n\xfamero de milisegundos - real)"}),"\n",(0,c.jsx)(n.li,{children:"null"}),"\n",(0,c.jsx)(n.li,{children:"objeto compartido"}),"\n",(0,c.jsx)(n.li,{children:"colecci\xf3n compartida"}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"Esta funci\xf3n modifica la colecci\xf3n original."})}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:' $mySharedCol:=New shared collection("alpha";"omega")\n Use($mySharedCol)\n    $mySharedCol[1]:="beta"\n End use\n'})}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/new-collection",children:"New collection"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/new-shared-object",children:"New shared object"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.em,{children:"Shared objects and shared collections"})]}),"\n",(0,c.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"1527"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return i}});var s=o(667294);let c={},l=s.createContext(c);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);