"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62208"],{622621:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-num-value","title":"VP SET NUM VALUE","description":"VP SET NUM VALUE ( rangeObj Number { ; formatPattern : Text } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-set-num-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-num-value","permalink":"/docs/fr/ViewPro/commands/vp-set-num-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-num-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-set-num-value","title":"VP SET NUM VALUE"},"sidebar":"docs","previous":{"title":"VP SET FROZEN PANES","permalink":"/docs/fr/ViewPro/commands/vp-set-frozen-panes"},"next":{"title":"VP SET PRINT INFO","permalink":"/docs/fr/ViewPro/commands/vp-set-print-info"}}'),s=r("785893"),l=r("250065");let i={id:"vp-set-num-value",title:"VP SET NUM VALUE"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET NUM VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"numberValue"})," : Number { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numberValue"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valeur du nombre \xe0 fixer"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Format de la valeur"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET NUM VALUE"})," command assigns a specified numeric value to a designated cell range."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," or ",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"numberValue"})," parameter specifies a numeric value to be assigned to the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"formatPattern"})," defines a ",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,s.jsx)(n.em,{children:"numberValue"})," parameter."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//Set the cell value to 2\nVP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)\n \n//Set the cell value and format it in dollars\nVP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#cell-format",children:"Cell format"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);