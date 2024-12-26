"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4817"],{329321:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>l});var r=JSON.parse('{"id":"commands-legacy/set-application-color-scheme","title":"SET APPLICATION COLOR SCHEME","description":"SET APPLICATION COLOR SCHEME ( schemaCouleur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-application-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/set-application-color-scheme","permalink":"/docs/fr/commands/set-application-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-application-color-scheme.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-application-color-scheme","title":"SET APPLICATION COLOR SCHEME","slug":"/commands/set-application-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ABOUT","permalink":"/docs/fr/commands/set-about"},"next":{"title":"SET CURSOR","permalink":"/docs/fr/commands/set-cursor"}}'),i=s("785893"),t=s("250065");let l={id:"set-application-color-scheme",title:"SET APPLICATION COLOR SCHEME",slug:"/commands/set-application-color-scheme",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET APPLICATION COLOR SCHEME"})," ( ",(0,i.jsx)(n.em,{children:"schemaCouleur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"schemaCouleur"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:'"light", "dark", ou "inherited"'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET APPLICATION COLOR SCHEME"})," d\xe9finit le sch\xe9ma de couleurs \xe0 utiliser au niveau de l'application pour la session courante. Ce sch\xe9ma sera appliqu\xe9 aux formulaires qui ne d\xe9clarent pas d\xe9j\xe0 un sch\xe9ma sp\xe9cifique (un sch\xe9ma de couleurs d\xe9fini au niveau du formulaire est prioritaire sur le niveau de l'application)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement sur macOS. Sous Windows, le seul sch\xe9ma disponible est \xablight\xbb."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Dans le param\xe8tre schemaCouleur"}),", passez un sch\xe9ma de couleurs \xe0 appliquer :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'"light"'})," - l'application utilisera le th\xe8me Default Light"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'"dark"'})," - l'application utilisera le th\xe8me Default Dark Theme"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'"inherited"'})," - l'application h\xe9ritera du niveau de priorit\xe9 le plus \xe9lev\xe9 (c'est-\xe0-dire dans les Param\xe8tres)"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Forcer l\'application courante en mode "dark"\n\xa0SET APPLICATION COLOR SCHEME("dark")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/form-get-color-scheme",children:"FORM Get color scheme"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-application-color-scheme",children:"Get application color scheme"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1762"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var r=s(667294);let i={},t=r.createContext(i);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);