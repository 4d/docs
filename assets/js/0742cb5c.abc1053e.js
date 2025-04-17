"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97208"],{340133:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-time-value","title":"VP SET TIME VALUE","description":"VP SET TIME VALUE ( rangeObj Text { ; formatPattern : Text }  )","source":"@site/versioned_docs/version-20-R9/ViewPro/commands/vp-set-time-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-time-value","permalink":"/docs/ViewPro/commands/vp-set-time-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-time-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-set-time-value","title":"VP SET TIME VALUE"},"sidebar":"docs","previous":{"title":"VP SET TEXT VALUE","permalink":"/docs/ViewPro/commands/vp-set-text-value"},"next":{"title":"VP SET VALUE","permalink":"/docs/ViewPro/commands/vp-set-value"}}'),s=t("785893"),i=t("250065");let l={id:"vp-set-time-value",title:"VP SET TIME VALUE"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET TIME VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"timeValue"})," : Text { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Range object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeValue"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Time value to set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Format of value"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET TIME VALUE"})," command assigns a specified time value to a designated cell range."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," or ",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"timeValue"})," parameter specifies a time expressed in seconds to be assigned to the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"formatPattern"})," defines a ",(0,s.jsx)(n.a,{href:"/docs/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,s.jsx)(n.em,{children:"timeValue"})," parameter."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//Set the value to the current time\nVP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)\n \n//Set the value to a specific time with a designated format\nVP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);