"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45803"],{376511:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-add-formula-name","title":"VP ADD FORMULA NAME","description":"VP ADD FORMULA NAME ( vpAreaName Text ; name Object } )","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-add-formula-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-formula-name","permalink":"/docs/ViewPro/commands/vp-add-formula-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-formula-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-add-formula-name","title":"VP ADD FORMULA NAME"},"sidebar":"docs","previous":{"title":"A","permalink":"/docs/commands-legacy/A"},"next":{"title":"VP ADD RANGE NAME","permalink":"/docs/ViewPro/commands/vp-add-range-name"}}'),t=r("785893"),o=r("250065");let d={id:"vp-add-formula-name",title:"VP ADD FORMULA NAME"},a=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP ADD FORMULA NAME"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"vpFormula"})," : Text ; ",(0,t.jsx)(n.em,{children:"name"})," : Text { ; ",(0,t.jsx)(n.em,{children:"options"})," : Object } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpFormula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro formula"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Name for the formula"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Options for the named formula"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP ADD FORMULA NAME"})," command creates or modifies a named formula in the open document."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Named formulas created by this command are saved with the document."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass the 4D View Pro formula that you want to name in ",(0,t.jsx)(n.em,{children:"vpFormula"}),". For detailed information about formula syntax, see ",(0,t.jsx)(n.a,{href:"/docs/ViewPro/formulas",children:"Formulas and Functions"})," page."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass the new name for the formula in ",(0,t.jsx)(n.em,{children:"name"}),". If the name is already used within the same scope, the new named formula replaces the existing one. Note that you can use the same name for different scopes (see below)."]}),"\n",(0,t.jsxs)(n.p,{children:["You can pass an object with additional properties for the named formula in ",(0,t.jsx)(n.em,{children:"options"}),". The following properties are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Scope for the formula. You can pass the sheet index (counting begins at 0) or use the following constants: ",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"The scope determines whether a formula name is local to a given worksheet (",(0,t.jsx)(n.em,{children:"scope"}),"=sheet index or ",(0,t.jsx)(n.code,{children:"vk current sheet"}),"), or global across the entire workbook (",(0,t.jsx)(n.em,{children:"scope"}),"=",(0,t.jsx)(n.code,{children:"vk workbook"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Comment associated to named formula"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ViewPro/formulas#cell-references",children:"Cell references"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-formula-by-name",children:"VP Get formula by name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-names",children:"VP Get names"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var s=r(667294);let t={},o=s.createContext(t);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);