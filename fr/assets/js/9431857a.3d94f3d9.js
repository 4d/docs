"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72311"],{939742:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-text-value","title":"VP SET TEXT VALUE","description":"VP SET TEXT VALUE ( rangeObj Text { ; formatPattern : Text }  )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-text-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-text-value","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-text-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-text-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-text-value","title":"VP SET TEXT VALUE"},"sidebar":"docs","previous":{"title":"VP SET TABLE THEME","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-table-theme"},"next":{"title":"VP SET TIME VALUE","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-time-value"}}'),s=n("785893"),l=n("250065");let i={id:"vp-set-text-value",title:"VP SET TEXT VALUE"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP SET TEXT VALUE"})," ( ",(0,s.jsx)(t.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(t.em,{children:"textValue"})," : Text { ; ",(0,s.jsx)(t.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tres"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rangeObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Objet plage"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textValue"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Valeur texte \xe0 fixer"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"formatPattern"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Format de la valeur"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP SET TEXT VALUE"})," command assigns a specified text value to a designated cell range."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-cell",children:(0,s.jsx)(t.code,{children:"VP Cell"})})," or ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-column",children:(0,s.jsx)(t.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,s.jsx)(t.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"textValue"})," parameter specifies a text value to be assigned to the ",(0,s.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"formatPattern"})," defines a ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R7/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,s.jsx)(t.em,{children:"textValue"})," parameter."]}),"\n",(0,s.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")\n'})}),"\n",(0,s.jsx)(t.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/20-R7/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var r=n(667294);let s={},l=r.createContext(s);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);