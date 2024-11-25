"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87261"],{302568:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>c});var n=JSON.parse('{"id":"commands-legacy/set-application-color-scheme","title":"SET APPLICATION COLOR SCHEME","description":"SET APPLICATION COLOR SCHEME ( esquemaCor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-application-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/set-application-color-scheme","permalink":"/docs/pt/commands/set-application-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-application-color-scheme.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-application-color-scheme","title":"SET APPLICATION COLOR SCHEME","slug":"/commands/set-application-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ABOUT","permalink":"/docs/pt/commands/set-about"},"next":{"title":"SET CURSOR","permalink":"/docs/pt/commands/set-cursor"}}'),r=s("785893"),a=s("250065");let c={id:"set-application-color-scheme",title:"SET APPLICATION COLOR SCHEME",slug:"/commands/set-application-color-scheme",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function d(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"SET APPLICATION COLOR SCHEME"})," ( ",(0,r.jsx)(o.em,{children:"esquemaCor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"esquemaCor"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:'"light/claro", "dark/escuro" ou "inherited/herdado"'})]})})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"SET APPLICATION COLOR SCHEME"})," define o esquema de cores a usar no n\xedvel da aplica\xe7\xe3o para a sess\xe3o atual. Este esquema ser\xe1 aplicado a formul\xe1rios que n\xe3o declaram um esquema espec\xedfico (um esquema de cores definido no n\xedvel do formul\xe1rio tem prioridade sobre o n\xedvel da aplica\xe7\xe3o)."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"}),' Este comando s\xf3 funciona em macOS. Em Windows, o \xfanico esquema dispon\xedvel \xe9 "light/claro".']}),"\n",(0,r.jsxs)(o.p,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"esquemaCor"}),", passe um esquema de cores a aplicar:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:'"light/claro"'})," - a aplica\xe7\xe3o vai usar o tema padr\xe3o claro"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:'"dark/escuro"'})," - a aplica\xe7\xe3o vai usar o tema padr\xe3o escuro"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:'"inherited/herdado"'})," - a aplica\xe7\xe3o vai herdar a partir do n\xedvel superior (das Configura\xe7\xf5es)"]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// For\xe7a a aplica\xe7\xe3o atual para escuro\n\xa0SET APPLICATION COLOR SCHEME("dark")\n'})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/form-get-color-scheme",children:"FORM Get color scheme"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/get-application-color-scheme",children:"Get application color scheme"})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return c}});var n=s(667294);let r={},a=n.createContext(r);function c(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);