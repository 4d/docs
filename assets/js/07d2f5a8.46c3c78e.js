"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51259"],{299350:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-filter","title":"OBJECT SET FILTER","description":"OBJECT SET FILTER ( { ;} object ; entryFilter* )","source":"@site/versioned_docs/version-20-R9/commands-legacy/object-set-filter.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-filter","permalink":"/docs/commands/object-set-filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-filter.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-filter","title":"OBJECT SET FILTER","slug":"/commands/object-set-filter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET EVENTS","permalink":"/docs/commands/object-set-events"},"next":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/commands/object-set-focus-rectangle-invisible"}}'),r=n("785893"),i=n("250065");let l={id:"object-set-filter",title:"OBJECT SET FILTER",slug:"/commands/object-set-filter",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT SET FILTER"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ; ",(0,r.jsx)(t.em,{children:"entryFilter"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object Name (if * is specified), or Field or Variable (if * is omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entryFilter"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"New data entry filter for the enterable area"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT SET FILTER"})," sets the entry filter for the objects specified by ",(0,r.jsx)(t.em,{children:"object"})," to the filter you pass in ",(0,r.jsx)(t.em,{children:"entryFilter"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you specify the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, you indicate an object name (a string) in ",(0,r.jsx)(t.em,{children:"object"}),". If you omit the optional * parameter, you indicate a field or a variable in ",(0,r.jsx)(t.em,{children:"object"}),". In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the ",(0,r.jsx)(t.em,{children:"Object Properties"})," section."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT SET FILTER"})," can be used for input and dialog forms and can be applied to fields and enterable variables that accept an entry filter in the Design environment."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing an empty string in ",(0,r.jsx)(t.em,{children:"entryFilter"})," removes the current entry filter for the objects."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," This command cannot be used with fields located in a subform\u2019s list form."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," In ",(0,r.jsx)(t.em,{children:"entryFilter"}),", to use entry filters you may have predefined using the Tool Box, prefix the name of the filter with a vertical bar (|)."]}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"The following example sets the entry filter for a postal code field. If the address is in the U.S., the filter is set to ZIP codes. Otherwise, it is set to allow any entry:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0If([Companies]Country="US")\xa0// Set the filter to a ZIP code format\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Companies]ZIP Code;"&9###")\n\xa0Else\xa0// Set the filter to accept alpha and numeric and uppercase the alpha\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Companies]ZIP Code;"~@")\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"The following example allows only the letters \u201Ca,\u201D \u201Cb,\u201D \u201Cc,\u201D or \u201Cg\u201D to be entered in two places in the field Field:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT SET FILTER([Table]Field ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," This example sets the entry filter to ",(0,r.jsx)(t.em,{children:'&"a;b;c;g"##'}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/object-get-filter",children:"OBJECT Get filter"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"235"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);