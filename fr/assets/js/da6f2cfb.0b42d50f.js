"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54260"],{551012:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/year-of","title":"Year of","description":"Year of ( date ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/year-of.md","sourceDirName":"commands-legacy","slug":"/commands/year-of","permalink":"/docs/fr/commands/year-of","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fyear-of.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"year-of","title":"Year of","slug":"/commands/year-of","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Timestamp","permalink":"/docs/fr/commands/timestamp"},"next":{"title":"Acc\xe8s objets d\xe9veloppement","permalink":"/docs/fr/commands/theme/Design-Object-Access"}}'),s=t("785893"),d=t("250065");let a={id:"year-of",title:"Year of",slug:"/commands/year-of",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Year of"})," ( ",(0,s.jsx)(n.em,{children:"date"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"date"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Date dont vous voulez extraire l'ann\xe9e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre indiquant l'ann\xe9e de date"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Year of"})," retourne un nombre indiquant l'ann\xe9e de ",(0,s.jsx)(n.em,{children:"laDate"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsxs)(n.p,{children:["L'exemple suivant illustre l'utilisation de ",(0,s.jsx)(n.strong,{children:"Year of"}),". Les r\xe9sultats sont assign\xe9s \xe0 la variable ",(0,s.jsx)(n.em,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0R\xe9sultat:=Year of(!25/12/96!)\xa0// R\xe9sultat prend la valeur 1996\n\xa0R\xe9sultat:=Year of(!25/12/1996!)\xa0// R\xe9sultat prend la valeur 1996\n\xa0R\xe9sultat:=Year of(!25/12/1896!)\xa0// R\xe9sultat prend la valeur 1896\n\xa0R\xe9sultat:=Year of(!25/12/2096!)\xa0// R\xe9sultat prend la valeur 2096\n\xa0R\xe9sultat:=Year of(Current date)\xa0// R\xe9sultat prend comme valeur l'ann\xe9e de la date d'aujourd'hui\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la fonction ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/current-date",children:"Current date"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/day-of",children:"Day of"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/month-of",children:"Month of"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"25"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(667294);let s={},d=r.createContext(s);function a(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);