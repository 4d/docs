"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53358"],{930745:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>d,assets:()=>o,toc:()=>c,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/day-number","title":"Day number","description":"Day number ( laDate ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/day-number.md","sourceDirName":"commands-legacy","slug":"/commands/day-number","permalink":"/docs/fr/20-R8/commands/day-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fday-number.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"day-number","title":"Day number","slug":"/commands/day-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/fr/20-R8/commands/date"},"next":{"title":"Day of","permalink":"/docs/fr/20-R8/commands/day-of"}}'),s=r("785893"),t=r("250065");let i={id:"day-number",title:"Day number",slug:"/commands/day-number",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(n){let e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Day number"})," ( ",(0,s.jsx)(e.em,{children:"laDate"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Param\xe8tre"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"laDate"}),(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Date dont vous souhaitez conna\xeetre le num\xe9ro du jour"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"R\xe9sultat"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Num\xe9ro repr\xe9sentant le jour de la semaine auquel date correspond"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["La fonction ",(0,s.jsx)(e.strong,{children:"Day number"})," retourne un num\xe9ro repr\xe9sentant le jour de la semaine auquel ",(0,s.jsx)(e.em,{children:"laDate"})," correspond.Si une date nulle est pass\xe9e \xe0 ",(0,s.jsx)(e.strong,{children:"Day number"}),", la fonction retourne 2."]}),"\n",(0,s.jsxs)(e.p,{children:['4D fournit les constantes pr\xe9d\xe9fines suivantes, plac\xe9es dans le th\xe8me "',(0,s.jsx)(e.em,{children:"Jours et mois"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Valeur"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Sunday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Monday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Tuesday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Wednesday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thursday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Friday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Saturday"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"7"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note :"})," ",(0,s.jsx)(e.strong,{children:"Day number"}),' retourne une valeur comprise entre 1 et 7. Pour obtenir le num\xe9ro du jour dans le sens "date du mois", utilisez la fonction ',(0,s.jsx)(e.a,{href:"/docs/fr/20-R8/commands/day-of",children:"Day of"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(e.p,{children:"L'exemple suivant est une fonction qui retourne le jour d'aujourd'hui sous forme de cha\xeene :"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0$Jour :=Day number(Current date)\xa0// $Jour prend comme valeur le num\xe9ro du jour courant\n\xa0Case of\n\xa0\xa0\xa0\xa0:($Jour =1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Dimanche"\n\xa0\xa0\xa0\xa0:($Jour =2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Lundi"\n\xa0\xa0\xa0\xa0:($Jour =3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Mardi"\n\xa0\xa0\xa0\xa0:($Jour =4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Mercredi"\n\xa0\xa0\xa0\xa0:($Jour =5)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Jeudi"\n\xa0\xa0\xa0\xa0:($Jour =6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Vendredi"\n\xa0\xa0\xa0\xa0:($Jour =7)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Samedi"\n\xa0End case\n'})}),"\n",(0,s.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/fr/20-R8/commands/day-of",children:"Day of"})}),"\n",(0,s.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(e.td,{children:"114"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread safe"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var d=r(667294);let s={},t=d.createContext(s);function i(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);