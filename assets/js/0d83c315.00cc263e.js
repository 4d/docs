"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10259"],{351356:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-font-style","title":"OBJECT SET FONT STYLE","description":"OBJECT SET FONT STYLE ( { ;} object ; styles* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-font-style.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font-style","permalink":"/docs/commands/object-set-font-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-font-style","title":"OBJECT SET FONT STYLE","slug":"/commands/object-set-font-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FONT SIZE","permalink":"/docs/commands/object-set-font-size"},"next":{"title":"OBJECT SET FORMAT","permalink":"/docs/commands/object-set-format"}}'),r=t("785893"),i=t("250065");let d={id:"object-set-font-style",title:"OBJECT SET FONT STYLE",slug:"/commands/object-set-font-style",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET FONT STYLE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"styles"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object Name (if * is specified), or Field or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styles"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Font style"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET FONT STYLE"})," sets the form objects specified by ",(0,r.jsx)(n.em,{children:"object"})," to be displayed using the font style you pass in ",(0,r.jsx)(n.em,{children:"styles"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you specify the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, you indicate an object name (a string) in ",(0,r.jsx)(n.em,{children:"object"}),". If you omit the optional * parameter, you indicate a field or a variable in ",(0,r.jsx)(n.em,{children:"object"}),". In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the ",(0,r.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,r.jsxs)(n.p,{children:["You pass in ",(0,r.jsx)(n.em,{children:"styles"})," a sum of the constants describing your font style selection. The following are the predefined constants provided by 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["This example sets the font style for a button named ",(0,r.jsx)(n.em,{children:"bAddNew"}),". The font style is set to bold italic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0OBJECT SET FONT STYLE(bAddNew;Bold+Italic)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"This example sets the font style to Plain for all form objects with names starting with \u201Cvt\u201D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT STYLE(*;"vt@";Plain)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/object-get-font-style",children:"OBJECT Get font style"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-font",children:"OBJECT SET FONT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Programming Notes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"166"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);