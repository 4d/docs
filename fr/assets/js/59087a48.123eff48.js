"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52391"],{981541:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-value","title":"VP SET VALUE","description":"VP SET VALUE ( rangeObj Object )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-value","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-value","title":"VP SET VALUE"},"sidebar":"docs","previous":{"title":"VP SET TIME VALUE","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-time-value"},"next":{"title":"VP SET VALUES","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-values"}}'),s=r("785893"),l=r("250065");let a={id:"vp-set-value",title:"VP SET VALUE"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"valueObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valueObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valeurs de la cellule et options de formatage"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET VALUE"})," command assigns a specified value to a designated cell range."]}),"\n",(0,s.jsxs)(n.p,{children:["The command allows you to use a generic code to set and format the types of values in ",(0,s.jsx)(n.em,{children:"rangeObj"}),", whereas other commands, such as ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-text-value",children:(0,s.jsx)(n.code,{children:"VP SET TEXT VALUE"})})," and ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-num-value",children:(0,s.jsx)(n.code,{children:"VP SET NUM VALUE"})}),", reduce the values to specific types."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,s.jsx)(n.a,{href:"vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," or ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(n.p,{children:["The parameter ",(0,s.jsx)(n.em,{children:"valueObj"})," is an object that includes properties for the value and the ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/configuring#cell-format",children:"format"})," to assign to ",(0,s.jsx)(n.em,{children:"rangeObj"}),". Il peut contenir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,s.jsxs)(n.td,{children:["Value to assign to ",(0,s.jsx)(n.em,{children:"rangeObj"})," (except- time). Passez null pour effacer le contenu de la cellule."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsxs)(n.td,{children:["Time value (in seconds) to assign to ",(0,s.jsx)(n.em,{children:"rangeObj"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Mod\xe8le pour la propri\xe9t\xe9 value/time. For information on patterns and formatting characters, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/configuring#cell-format",children:"Cell Format"})," paragraph."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//Set the cell value as False\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))\n \n//Set the cell value as 2\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))\n \n//Set the cell value as $125,571.35\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))\n \n//Set the cell value as Hello World!\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))\n \n//Set the cell value as current date\nVP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))\n \n//Set the cell value as current hour\nVP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))\n \n//Set the cell value as specific date and time\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))\n \n//Erase cell content\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-get-value",children:"VP Get values"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-boolean-value",children:"VP SET BOOLEAN VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-field",children:"VP SET FIELD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-num-value",children:"VP SET NUM VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-text-value",children:"VP SET TEXT VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var t=r(667294);let s={},l=t.createContext(s);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);