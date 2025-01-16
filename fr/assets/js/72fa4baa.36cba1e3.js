"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72228"],{788698:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/month-of","title":"Month of","description":"Month of ( laDate ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/month-of.md","sourceDirName":"commands-legacy","slug":"/commands/month-of","permalink":"/docs/fr/20-R7/commands/month-of","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmonth-of.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"month-of","title":"Month of","slug":"/commands/month-of","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Milliseconds","permalink":"/docs/fr/20-R7/commands/milliseconds"},"next":{"title":"SET DEFAULT CENTURY","permalink":"/docs/fr/20-R7/commands/set-default-century"}}'),r=t("785893"),d=t("250065");let l={id:"month-of",title:"Month of",slug:"/commands/month-of",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Month of"})," ( ",(0,r.jsx)(e.em,{children:"laDate"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Param\xe8tre"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"laDate"}),(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Date dont vous voulez extraire le mois"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"R\xe9sultat"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Nombre indiquant le mois de date"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Month of"})," retourne un nombre repr\xe9sentant le num\xe9ro du mois de ",(0,r.jsx)(e.em,{children:"laDate"}),".C'est le num\xe9ro du mois est retourn\xe9, et non son nom (reportez-vous \xe0 l'exemple ci-dessous)."]}),"\n",(0,r.jsxs)(e.p,{children:['Pour comparer la valeur retourn\xe9e par cette fonction, 4D fournit les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(e.em,{children:"Jours et mois"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Constante"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Valeur"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"January"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"February"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"March"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"April"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"May"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"5"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"June"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"July"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"August"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"September"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"October"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"10"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"November"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"11"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"December"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"12"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(e.p,{children:["L'exemple suivant illustre l'utilisation de ",(0,r.jsx)(e.strong,{children:"Month of"}),". Les valeurs retourn\xe9es sont assign\xe9es \xe0 la variable R\xe9sultat. Les commentaires fournissent les valeurs de R\xe9sultat :"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0R\xe9sultat:=Month of(!25/12/96!)\xa0// R\xe9sultat vaut 12\n\xa0R\xe9sultat:=Month of(Current date)\xa0// R\xe9sultat prend la valeur du mois d'aujourd'hui\n"})}),"\n",(0,r.jsx)(e.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(e.p,{children:["Reportez-vous \xe0 l'exemple de la fonction ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R7/commands/current-date",children:"Current date"}),"."]}),"\n",(0,r.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/fr/20-R7/commands/day-of",children:"Day of"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/fr/20-R7/commands/year-of",children:"Year of"})]}),"\n",(0,r.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(e.td,{children:"24"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);