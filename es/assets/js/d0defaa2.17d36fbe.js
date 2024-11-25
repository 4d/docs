"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57504"],{58163:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>m,assets:()=>s,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/object-get-placeholder","title":"OBJECT Get placeholder","description":"OBJECT Get placeholder ( { ;} objeto* ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-placeholder.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-placeholder","permalink":"/docs/es/commands/object-get-placeholder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-placeholder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-placeholder","title":"OBJECT Get placeholder","slug":"/commands/object-get-placeholder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get name","permalink":"/docs/es/commands/object-get-name"},"next":{"title":"OBJECT Get pointer","permalink":"/docs/es/commands/object-get-pointer"}}'),a=o("785893"),d=o("250065");let r={id:"object-get-placeholder",title:"OBJECT Get placeholder",slug:"/commands/object-get-placeholder",displayed_sidebar:"docs"},c=void 0,s={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"OBJECT Get placeholder"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o  Campo o variable (si se omite *)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Texto de ejemplo asociado al objeto"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"OBJECT Get placeholder"})," devuelve el texto de ejemplo asociado al objeto o a los objetos designado(s) por los par\xe1metros ",(0,a.jsx)(n.em,{children:"objeto"})," y ",(0,a.jsx)(n.em,{children:"*"}),". Si no hay ning\xfan texto del marcador asociado con el objeto, el comando devuelve una cadena vac\xeda."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede definir el texto del marcador, ya sea usando la lista de propiedades o utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/object-set-placeholder",children:"OBJECT SET PLACEHOLDER"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable de objeto \xfanicamente)."]}),"\n",(0,a.jsx)(n.p,{children:'Si el marcador es una referencia xliff definida por la lista de propiedades, el comando devuelve la referencia original en el formulario ":xliff:resname", y no a su valor calculado.'}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Si quiere recibir el texto del marcador de campo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0$txt:=OBJECT Get placeholder([People]LastName)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/object-set-placeholder",children:"OBJECT SET PLACEHOLDER"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return r}});var t=o(667294);let a={},d=t.createContext(a);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);