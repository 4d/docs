"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32585"],{395464:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/is-in-print-preview","title":"Is in print preview","description":"Is in print preview  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-in-print-preview.md","sourceDirName":"commands-legacy","slug":"/commands/is-in-print-preview","permalink":"/docs/fr/20-R8/commands/is-in-print-preview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-in-print-preview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-in-print-preview","title":"Is in print preview","slug":"/commands/is-in-print-preview","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get printed height","permalink":"/docs/fr/20-R8/commands/get-printed-height"},"next":{"title":"Level","permalink":"/docs/fr/20-R8/commands/level"}}'),s=i("785893"),t=i("250065");let d={id:"is-in-print-preview",title:"Is in print preview",slug:"/commands/is-in-print-preview",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is in print preview"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai = Impression \xe0 l\u2019\xe9cran, Faux = Pas d\u2019impression \xe9cran"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Is in print preview"})," retourne Vrai si l\u2019option ",(0,s.jsx)(n.strong,{children:"Aper\xe7u avant impression"})," est coch\xe9e dans la bo\xeete de dialogue d\u2019impression, et Faux sinon. Ce param\xe9trage est local au process."]}),"\n",(0,s.jsxs)(n.p,{children:["A la diff\xe9rence de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-print-preview",children:"Get print preview"}),", ",(0,s.jsx)(n.strong,{children:"Is in print preview"}),' retourne la valeur finale de l\u2019option, apr\xe8s validation de la bo\xeete de dialogue par l\u2019utilisateur. Cette commande vous permet donc de d\xe9terminer avec certitude si l\u2019impression a effectivement lieu en mode "aper\xe7u".']}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Cet exemple permet de prendre en compte tous les types d\u2019impressions :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SET PRINT PREVIEW(True)\xa0//Impression \xe9cran par d\xe9faut\n\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0//L\u2019utilisateur peut avoir chang\xe9 la destination d\u2019impression\n\xa0\xa0\xa0\xa0If(Is in print preview)\xa0\xa0// Vrai si aper\xe7u\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET OUTPUT([Factures];"versEcran")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET OUTPUT([Factures];"versImprimante")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0ALL RECORDS([Factures])\n\xa0\xa0\xa0\xa0PRINT SELECTION([Factures];>)\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-print-preview",children:"Get print preview"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-print-preview",children:"SET PRINT PREVIEW"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1198"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return d}});var r=i(667294);let s={},t=r.createContext(s);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);