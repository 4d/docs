"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54401"],{960993:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>c,assets:()=>d,toc:()=>r,contentTitle:()=>s});var c=JSON.parse('{"id":"commands-legacy/contextual-click","title":"Contextual click","description":"Contextual click  : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/contextual-click.md","sourceDirName":"commands-legacy","slug":"/commands/contextual-click","permalink":"/docs/es/commands/contextual-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcontextual-click.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"contextual-click","title":"Contextual click","slug":"/commands/contextual-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Clickcount","permalink":"/docs/es/commands/clickcount"},"next":{"title":"Deactivated","permalink":"/docs/es/commands/deactivated"}}'),l=t("785893"),o=t("250065");let i={id:"contextual-click",title:"Contextual click",slug:"/commands/contextual-click",displayed_sidebar:"docs"},s=void 0,d={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Contextual click"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Verdadero si se detecta un clic contextual, de lo contrario Falso"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"El comando Contextual click devuelve Verdadero si un se ha efectuado un clic contextual:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bajo Windows y Mac OS, los clics contextuales se efect\xfaan con el bot\xf3n derecho del rat\xf3n."}),"\n",(0,l.jsxs)(n.li,{children:["Bajo Mac OS, los clics contextuales tambi\xe9n pueden generarse utilizando la combinaci\xf3n ",(0,l.jsx)(n.strong,{children:"Control+clic"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Este comando debe utilizarse s\xf3lo en el contexto del evento de formulario On clicked. Por lo tanto es necesario verificar en modo Dise\xf1o que el evento haya sido seleccionado correctamente en las propiedades del formulario y/o del objeto espec\xedfico."}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:"Este m\xe9todo, combinado con un \xe1rea desplegable, le permite cambiar el valor de un elemento array utilizando un men\xfa contextual:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0If(Contextual click)\n\xa0\xa0\xa0\xa0If(Pop up menu("True;False")=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0miArray{miArray}:="True"\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0miArray{miArray}:="False"\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/right-click",children:"Right click"})]}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var c=t(667294);let l={},o=c.createContext(l);function i(e){let n=c.useContext(o);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);