"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59861"],{297901:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"ViewPro/commands/vp-add-range-name","title":"VP ADD RANGE NAME","description":"VP ADD RANGE NAME ( rangeObj Text { ; options : Object } )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-add-range-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-range-name","permalink":"/docs/20-R7/ViewPro/commands/vp-add-range-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-range-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-add-range-name","title":"VP ADD RANGE NAME"},"sidebar":"docs","previous":{"title":"VP ADD FORMULA NAME","permalink":"/docs/20-R7/ViewPro/commands/vp-add-formula-name"},"next":{"title":"VP ADD SELECTION","permalink":"/docs/20-R7/ViewPro/commands/vp-add-selection"}}'),s=r("785893"),d=r("250065");let o={id:"vp-add-range-name",title:"VP ADD RANGE NAME"},a=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP ADD RANGE NAME"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"name"})," : Text { ; ",(0,s.jsx)(n.em,{children:"options"})," : Object } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Range object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Name for the fomula"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Options for the named formula"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP ADD RANGE NAME"})," command creates or modifies a named range in the open document."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Named ranges created by this command are saved with the document."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass the range that you want to name and in ",(0,s.jsx)(n.em,{children:"name"}),", pass the new name for the range. If the name is already used within the same scope, the new named range replaces the existing one. Note that you can use the same name for different scopes (see below)."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass an object with additional properties for the named range in ",(0,s.jsx)(n.em,{children:"options"}),". The following properties are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsxs)(n.td,{children:["Scope for the range. You can pass the sheet index (counting begins at 0) or use the following constants: ",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"The scope determines whether a range name is local to a given worksheet (",(0,s.jsx)(n.em,{children:"scope"}),"=sheet index or ",(0,s.jsx)(n.code,{children:"vk current sheet"}),"), or global across the entire workbook (",(0,s.jsx)(n.em,{children:"scope"}),"=",(0,s.jsx)(n.code,{children:"vk workbook"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Comment associated to named range"})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A named range is actually a named formula containing coordinates. ",(0,s.jsx)(n.code,{children:"VP ADD RANGE NAME"})," facilitates the creation of named ranges, but you can also use the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-add-formula-name",children:(0,s.jsx)(n.code,{children:"VP ADD FORMULA NAME"})})," method to create named ranges."]}),"\n",(0,s.jsxs)(n.li,{children:["Formulas defining named ranges can be retrieved with the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-formula-by-name",children:(0,s.jsx)(n.code,{children:"VP Get formula by name"})})," method."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to create a named range for a cell range:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";2;10)\nVP ADD RANGE NAME($range;"Total1")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);