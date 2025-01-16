"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89582"],{122308:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/is-window-maximized","title":"Is window maximized","description":"Is window maximized ( window ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-window-maximized.md","sourceDirName":"commands-legacy","slug":"/commands/is-window-maximized","permalink":"/docs/fr/20-R7/commands/is-window-maximized","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-window-maximized.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-window-maximized","title":"Is window maximized","slug":"/commands/is-window-maximized","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HIDE WINDOW","permalink":"/docs/fr/20-R7/commands/hide-window"},"next":{"title":"Is window reduced","permalink":"/docs/fr/20-R7/commands/is-window-reduced"}}'),d=i("785893"),r=i("250065");let t={id:"is-window-maximized",title:"Is window maximized",slug:"/commands/is-window-maximized",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Is window maximized"})," ( ",(0,d.jsx)(n.em,{children:"window"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Vrai si la fen\xeatre est maximis\xe9e, sinon Faux"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"Is window maximized"})," retourne ",(0,d.jsx)(n.strong,{children:"Vrai"})," si la fen\xeatre dont le num\xe9ro de r\xe9f\xe9rence est pass\xe9 dans ",(0,d.jsx)(n.em,{children:"window"})," est actuellement maximis\xe9e, et ",(0,d.jsx)(n.strong,{children:"Faux"})," dans le cas contraire."]}),"\n",(0,d.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Vous souhaitez passer entre l'\xe9tat maximis\xe9 et l'\xe9tat pr\xe9c\xe9dent :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(Is window maximized($winRef))\n\xa0\xa0\xa0\xa0MINIMIZE WINDOW($winRef)\n\xa0Else\n\xa0\xa0\xa0\xa0MAXIMIZE WINDOW($winRef)\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/is-window-reduced",children:"Is window reduced"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/maximize-window",children:"MAXIMIZE WINDOW"})]}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1830"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var s=i(667294);let d={},r=s.createContext(d);function t(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);