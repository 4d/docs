"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62346"],{980195:function(e,n,s){s.r(n),s.d(n,{metadata:()=>c,contentTitle:()=>l,default:()=>m,assets:()=>i,toc:()=>r,frontMatter:()=>d});var c=JSON.parse('{"id":"commands-legacy/cut-named-selection","title":"CUT NAMED SELECTION","description":"CUT NAMED SELECTION ( {tabla ;} nombre )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/cut-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/cut-named-selection","permalink":"/docs/es/commands/cut-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcut-named-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"cut-named-selection","title":"CUT NAMED SELECTION","slug":"/commands/cut-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY NAMED SELECTION","permalink":"/docs/es/commands/copy-named-selection"},"next":{"title":"USE NAMED SELECTION","permalink":"/docs/es/commands/use-named-selection"}}'),t=s("785893"),a=s("250065");let d={id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},l=void 0,i={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ( {",(0,t.jsx)(n.em,{children:"tabla"})," ;} ",(0,t.jsx)(n.em,{children:"nombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla de la cual cortar selecci\xf3n, o Tabla por defecto, si se omite"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de la selecci\xf3n temporal a crear"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["CUT NAMED SELECTION crea una selecci\xf3n temporal ",(0,t.jsx)(n.em,{children:"temp"})," y coloca all\xed la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"}),". A diferencia de ",(0,t.jsx)(n.a,{href:"/docs/es/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),", este comando no copia la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"}),", si no que la desplaza."]}),"\n",(0,t.jsxs)(n.p,{children:["Despu\xe9s de ejecutar el comando, la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"})," en el proceso actual queda vac\xeda. Por lo tanto, CUT NAMED SELECTION no debe ser utilizado cuando un registro est\xe1 siendo modificado."]}),"\n",(0,t.jsxs)(n.p,{children:["CUT NAMED SELECTION es m\xe1s eficiente en t\xe9rminos de utilizaci\xf3n de memoria, que ",(0,t.jsx)(n.a,{href:"/docs/es/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),". ",(0,t.jsx)(n.a,{href:"/docs/es/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),", utiliza 4 bytes de memoria por cada registro de la selecci\xf3n. CUT NAMED SELECTION, s\xf3lo se desplaza la referencia a la lista."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["El m\xe9todo siguiente vac\xeda la selecci\xf3n actual de una tabla ",(0,t.jsx)(n.em,{children:"[Clientes]"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CUT NAMED SELECTION([Clientes];"ABorrar")\n\xa0CLEAR NAMED SELECTION("ABorrar")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/use-named-selection",children:"USE NAMED SELECTION"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var c=s(667294);let t={},a=c.createContext(t);function d(e){let n=c.useContext(a);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);