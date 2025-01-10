"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18858"],{27941:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/set-application-color-scheme","title":"SET APPLICATION COLOR SCHEME","description":"SET APPLICATION COLOR SCHEME ( esquemaColor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-application-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/set-application-color-scheme","permalink":"/docs/es/commands/set-application-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-application-color-scheme.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-application-color-scheme","title":"SET APPLICATION COLOR SCHEME","slug":"/commands/set-application-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ABOUT","permalink":"/docs/es/commands/set-about"},"next":{"title":"SET CURSOR","permalink":"/docs/es/commands/set-cursor"}}'),c=s("785893"),o=s("250065");let i={id:"set-application-color-scheme",title:"SET APPLICATION COLOR SCHEME",slug:"/commands/set-application-color-scheme",displayed_sidebar:"docs"},l=void 0,t={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"SET APPLICATION COLOR SCHEME"})," ( ",(0,c.jsx)(n.em,{children:"esquemaColor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"esquemaColor"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:'"claro", "oscuro" o "heredado"'})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"SET APPLICATION COLOR SCHEME"})," define el esquema de color a utilizar a nivel de la aplicaci\xf3n para la sesi\xf3n actual. Este esquema se aplicar\xe1 a los formularios que no declaren ya un esquema espec\xedfico (un esquema de color definido a nivel de formulario tiene prioridad sobre el nivel de aplicaci\xf3n)."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"}),' este comando s\xf3lo funciona en macOS. En Windows, el \xfanico esquema disponible es "claro".']}),"\n",(0,c.jsxs)(n.p,{children:["En el par\xe1metro ",(0,c.jsx)(n.em,{children:"esquemaColor"}),", pase un esquema de color a aplicar:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:'"claro"'})," - la aplicaci\xf3n utilizar\xe1 el tema claro por defecto"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:'"oscuro"'})," - la aplicaci\xf3n utilizar\xe1 el tema oscuro por defecto"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:'"'})," ",(0,c.jsx)(n.strong,{children:'heredado"'})," - la aplicaci\xf3n heredar\xe1 del nivel de prioridad m\xe1s alto (es decir, en Configuraci\xf3n)"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Forzar la aplicaci\xf3n actual a oscuro\n\xa0SET APPLICATION COLOR SCHEME("dark")\n'})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/form-get-color-scheme",children:"FORM Get color scheme"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/get-application-color-scheme",children:"Get application color scheme"})]}),"\n",(0,c.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"1762"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let c={},o=r.createContext(c);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);