"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54062"],{415607:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/is-data-file-locked","title":"Is data file locked","description":"Is data file locked  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-data-file-locked.md","sourceDirName":"commands-legacy","slug":"/commands/is-data-file-locked","permalink":"/docs/fr/20-R7/commands/is-data-file-locked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-data-file-locked.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-data-file-locked","title":"Is data file locked","slug":"/commands/is-data-file-locked","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is compiled mode","permalink":"/docs/fr/20-R7/commands/is-compiled-mode"},"next":{"title":"NOTIFY RESOURCES FOLDER MODIFICATION","permalink":"/docs/fr/20-R7/commands/notify-resources-folder-modification"}}'),d=t("785893"),i=t("250065");let r={id:"is-data-file-locked",title:"Is data file locked",slug:"/commands/is-data-file-locked",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Is data file locked"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Vrai = fichier/segment verrouill\xe9 Faux = fichier/segment non verrouill\xe9"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"Is data file locked"})," retourne Vrai si le fichier de donn\xe9es de la base ouverte ou l\u2019un de ses segments au moins est verrouill\xe9 \u2014 c\u2019est-\xe0-dire, prot\xe9g\xe9 en \xe9criture."]}),"\n",(0,d.jsx)(n.p,{children:"Plac\xe9e par exemple dans la , cette commande permet de pr\xe9venir tout risque d\u2019ouverture fortuite d\u2019un fichier de donn\xe9es verrouill\xe9."}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Cette m\xe9thode emp\xeachera l\u2019ouverture de la base si le fichier de donn\xe9es est verrouill\xe9 :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is data file locked)\n\xa0\xa0\xa0\xa0ALERT("Le fichier de donn\xe9es est verrouill\xe9. Impossible d\u2019ouvrir la base.")\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"716"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let d={},i=s.createContext(d);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);