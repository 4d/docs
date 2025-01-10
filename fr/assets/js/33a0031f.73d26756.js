"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94887"],{147884:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/get-printed-height","title":"Get printed height","description":"Get printed height  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-printed-height.md","sourceDirName":"commands-legacy","slug":"/commands/get-printed-height","permalink":"/docs/fr/commands/get-printed-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-printed-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-printed-height","title":"Get printed height","slug":"/commands/get-printed-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PRINTABLE MARGIN","permalink":"/docs/fr/commands/get-printable-margin"},"next":{"title":"Is in print preview","permalink":"/docs/fr/commands/is-in-print-preview"}}'),i=t("785893"),s=t("250065");let d={id:"get-printed-height",title:"Get printed height",slug:"/commands/get-printed-height",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Get printed height"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Position du marqueur"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"Get printed height"})," retourne la hauteur globale (en pixels) de la section imprim\xe9e par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-form",children:"Print form"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["La valeur retourn\xe9e sera comprise entre 0 (le bord sup\xe9rieur de la page) et la hauteur globale retourn\xe9e par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-printable-area",children:"GET PRINTABLE AREA"})," (la taille maximum de la zone d\u2019impression)."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous imprimez une nouvelle section via la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-form",children:"Print form"}),", la hauteur de cette section est ajout\xe9e \xe0 cette valeur. Si la zone d\u2019impression disponible est insuffisante pour contenir cette section, une nouvelle page est g\xe9n\xe9r\xe9e et la valeur retourn\xe9e est 0."]}),"\n",(0,i.jsxs)(n.p,{children:["Les marges d\u2019impression gauche et droite n\u2019influent pas sur la valeur retourn\xe9e, \xe0 la diff\xe9rence des marges inf\xe9rieure et sup\xe9rieure (d\xe9finies \xe9ventuellement via la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-printable-area",children:"GET PRINTABLE AREA"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-form",children:"Print form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"702"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);