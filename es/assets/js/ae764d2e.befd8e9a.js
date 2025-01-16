"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80112"],{450706:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-field","title":"VP SET FIELD","description":"VP SET FIELD ( rangeObj Pointer { ; formatPattern : Text } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-field.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-field","permalink":"/docs/es/20-R7/ViewPro/commands/vp-set-field","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-field.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-field","title":"VP SET FIELD"},"sidebar":"docs","previous":{"title":"VP SET DEFAULT STYLE","permalink":"/docs/es/20-R7/ViewPro/commands/vp-set-default-style"},"next":{"title":"VP SET FORMULA","permalink":"/docs/es/20-R7/ViewPro/commands/vp-set-formula"}}'),s=r("785893"),d=r("250065");let i={id:"vp-set-field",title:"VP SET FIELD"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET FIELD"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"field"})," : Pointer { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"campo"}),(0,s.jsx)(n.td,{children:"Puntero"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Referencia al campo en la estructura virtual"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Formato del campo"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP SET FIELD"})," asigna un campo virtual de base de datos 4D a un rango de celdas designado."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pase un rango de la(s) celda(s) cuyo valor desea indicar. En ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pase un rango de la(s) celda(s) cuyo valor desea indicar."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"field"})," especifica un ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/formulas#referencing-fields-using-the-virtual-structure",children:"campo virtual"})," de la base de datos 4D que se asignar\xe1 a ",(0,s.jsx)(n.em,{children:"rangeObj"}),". El nombre de la estructura virtual para el ",(0,s.jsx)(n.em,{children:"field"})," se puede ver en la barra de f\xf3rmulas. Si alguna de las celdas de ",(0,s.jsx)(n.em,{children:"rangeObj"})," tiene contenido, se sustituir\xe1 por ",(0,s.jsx)(n.em,{children:"field"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"formatPattern"})," define un modelo para el par\xe1metro ",(0,s.jsx)(n.em,{children:"field"}),". Puede pasar cualquier [formato personalizado] v\xe1lido(../configuring.md#cell-format)."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);