"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54062"],{415607:function(e,n,t){t.r(n),t.d(n,{metadata:()=>d,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>l});var d=JSON.parse('{"id":"commands-legacy/is-data-file-locked","title":"Is data file locked","description":"Is data file locked  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-data-file-locked.md","sourceDirName":"commands-legacy","slug":"/commands/is-data-file-locked","permalink":"/docs/fr/commands/is-data-file-locked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-data-file-locked.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-data-file-locked","title":"Is data file locked","slug":"/commands/is-data-file-locked","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is compiled mode","permalink":"/docs/fr/commands/is-compiled-mode"},"next":{"title":"NOTIFY RESOURCES FOLDER MODIFICATION","permalink":"/docs/fr/commands/notify-resources-folder-modification"}}'),s=t("785893"),i=t("250065");let l={id:"is-data-file-locked",title:"Is data file locked",slug:"/commands/is-data-file-locked",displayed_sidebar:"docs"},r=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function c(e){let n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is data file locked"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai = fichier/segment verrouill\xe9 Faux = fichier/segment non verrouill\xe9"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Is data file locked"})," retourne Vrai si le fichier de donn\xe9es de la base ouverte ou l\u2019un de ses segments au moins est verrouill\xe9 \u2014 c\u2019est-\xe0-dire, prot\xe9g\xe9 en \xe9criture."]}),"\n",(0,s.jsx)(n.p,{children:"Plac\xe9e par exemple dans la , cette commande permet de pr\xe9venir tout risque d\u2019ouverture fortuite d\u2019un fichier de donn\xe9es verrouill\xe9."}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Cette m\xe9thode emp\xeachera l\u2019ouverture de la base si le fichier de donn\xe9es est verrouill\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is data file locked)\n\xa0\xa0\xa0\xa0ALERT("Le fichier de donn\xe9es est verrouill\xe9. Impossible d\u2019ouvrir la base.")\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var d=t(667294);let s={},i=d.createContext(s);function l(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);