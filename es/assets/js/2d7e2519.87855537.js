"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27552"],{371674:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/ob-is-empty","title":"OB Is empty","description":"OB Is empty ( objeto ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-is-empty.md","sourceDirName":"commands-legacy","slug":"/commands/ob-is-empty","permalink":"/docs/es/20-R7/commands/ob-is-empty","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-is-empty.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-is-empty","title":"OB Is empty","slug":"/commands/ob-is-empty","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Is defined","permalink":"/docs/es/20-R7/commands/ob-is-defined"},"next":{"title":"OB Is shared","permalink":"/docs/es/20-R7/commands/ob-is-shared"}}'),t=s("785893"),o=s("250065");let i={id:"ob-is-empty",title:"OB Is empty",slug:"/commands/ob-is-empty",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Is empty"})," ( ",(0,t.jsx)(n.em,{children:"objeto"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"Object, Campo Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objeto estructurado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True si objeto est\xe1 vac\xedo o indefinido, de lo contrario False"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"OB Is empty"})," devuelve ",(0,t.jsx)(n.strong,{children:"True"})," si ",(0,t.jsx)(n.em,{children:"objeto"})," no est\xe1 definido o est\xe1 vac\xedo, y ",(0,t.jsx)(n.strong,{children:"False"})," si ",(0,t.jsx)(n.em,{children:"objeto"})," est\xe1 definido (inicializado) y contiene al menos una propiedad.debe haber sido creado con el comando ",(0,t.jsx)(n.em,{children:"C_OBJECT"})," o designar un campo objeto 4D."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Estos son los diferentes resultados de este comando como tambi\xe9n del comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/ob-is-defined",children:"OB Is defined"}),", dependiendo del contexto:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0$empty:=OB Is empty($ref)\xa0// True\n\xa0$def:=OB Is defined($ref)\xa0// False\n\xa0\n\xa0OB SET($ref;"nombre";"Susie";"edad";4)\n\xa0\xa0// $ref="{"nombre":"Susie","edad":4}"\n\xa0$empty:=OB Is empty($ref)\xa0// False\n\xa0$def:=OB Is defined($ref)\xa0// True\n\xa0\n\xa0OB REMOVE($ref;"nombre")\n\xa0OB REMOVE($ref;"edad")\n\xa0$empty:=OB Is empty($ref)\xa0// True\n\xa0$def:=OB Is defined($ref)\xa0// True\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/ob-is-defined",children:"OB Is defined"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1297"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var d=s(667294);let t={},o=d.createContext(t);function i(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);