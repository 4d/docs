"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25508"],{462214:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-font-size","title":"OBJECT SET FONT SIZE","description":"OBJECT SET FONT SIZE ( { ;} object ; size* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-font-size.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font-size","permalink":"/docs/commands/object-set-font-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-font-size","title":"OBJECT SET FONT SIZE","slug":"/commands/object-set-font-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FONT","permalink":"/docs/commands/object-set-font"},"next":{"title":"OBJECT SET FONT STYLE","permalink":"/docs/commands/object-set-font-style"}}'),i=t("785893"),r=t("250065");let o={id:"object-set-font-size",title:"OBJECT SET FONT SIZE",slug:"/commands/object-set-font-size",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FONT SIZE"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"size"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object Name (if * is specified), or Field or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Font size in points"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FONT SIZE"})," sets the form objects specified by ",(0,i.jsx)(n.em,{children:"object"})," to be displayed using the font size you pass in ",(0,i.jsx)(n.em,{children:"size"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you specify the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate an object name (a string) in ",(0,i.jsx)(n.em,{children:"object"}),". If you omit the optional * parameter, you indicate a field or a variable in ",(0,i.jsx)(n.em,{children:"object"}),". In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the ",(0,i.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"size"})," is any integer between 1 and 255. If the exact font size does not exist, characters are scaled."]}),"\n",(0,i.jsx)(n.p,{children:"The area for the object, as defined in the form, must be large enough to display the data in the new size. Otherwise, the text may be truncated or not displayed at all."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If you use this command on an ",(0,i.jsx)(n.em,{children:"object"})," that was using a style sheet, the reference to the style sheet is automatically deleted from the object -- even if you assign the same attributes as those of the style sheet."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["The following example sets the font size for a variable named ",(0,i.jsx)(n.em,{children:"vtInfo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0OBJECT SET FONT SIZE(vtInfo;14)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:'The following example sets the font size for all the form objects whose name starts with "hl":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT SIZE(*;"hl@";14)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/object-get-font-size",children:"OBJECT Get font size"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-font",children:"OBJECT SET FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Programming Notes"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"165"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);