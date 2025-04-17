"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13980"],{121193:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/wa-set-preference","title":"WA SET PREFERENCE","description":"WA SET PREFERENCE ( { ;} object ; selector ; value* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/wa-set-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-preference","permalink":"/docs/20-R8/commands/wa-set-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-preference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-set-preference","title":"WA SET PREFERENCE","slug":"/commands/wa-set-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PAGE CONTENT","permalink":"/docs/20-R8/commands/wa-set-page-content"},"next":{"title":"WA SET URL FILTERS","permalink":"/docs/20-R8/commands/wa-set-url-filters"}}'),s=t("785893"),d=t("250065");let i={id:"wa-set-preference",title:"WA SET PREFERENCE",slug:"/commands/wa-set-preference",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA SET PREFERENCE"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"selector"})," ; ",(0,s.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Preference to be modified"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Value of the preference (True = allowed,  False = not allowed)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The WA SET PREFERENCE command sets different preferences for the Web area designated by the ",(0,s.jsx)(n.em,{children:"*"})," and ",(0,s.jsx)(n.em,{children:"object"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the preference to be modified in the ",(0,s.jsx)(n.em,{children:"selector"})," parameter and the value to be assigned to it in the ",(0,s.jsx)(n.em,{children:"value"})," parameter. In ",(0,s.jsx)(n.em,{children:"selector"}),", you can pass one of the following constants, found in the ",(0,s.jsx)(n.em,{children:"Web Area"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable contextual menu"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Allow the display of a standard contextual menu in the Web area. Default (any engine) = False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable URL drop"}),(0,s.jsx)(n.td,{children:"101"}),(0,s.jsxs)(n.td,{children:["Change drop icon and call ",(0,s.jsx)(n.em,{children:"On Window Opening Denied"})," event when URLs or files are dropped in the Web area. Default (any engine) = False"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable Web inspector"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"Allow the display of the Web inspector in the area. Default (any engine) = False"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For each preference, pass ",(0,s.jsx)(n.strong,{children:"True"})," in ",(0,s.jsx)(n.em,{children:"value"})," to activate it and ",(0,s.jsx)(n.strong,{children:"False"})," to deactivate it."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"To enable URL drops in the 'myarea' Web area:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//in the form method\n\xa0WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//in web area object method\n\xa0If(FORM Event.code=On Window Opening Denied)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/wa-get-preference",children:"WA GET PREFERENCE"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1041"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);