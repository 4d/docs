"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30179"],{445906:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-formulas","title":"WP Get formulas","description":"WP Get formulas ( targetObj ) : Collection","source":"@site/versioned_docs/version-20-R9/WritePro/commands-legacy/wp-get-formulas.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-formulas","permalink":"/docs/WritePro/commands/wp-get-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-formulas.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-formulas","title":"WP Get formulas","slug":"/WritePro/commands/wp-get-formulas","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get footer","permalink":"/docs/WritePro/commands/wp-get-footer"},"next":{"title":"WP Get frame","permalink":"/docs/WritePro/commands/wp-get-frame"}}'),s=r("785893"),o=r("250065");let l={id:"wp-get-formulas",title:"WP Get formulas",slug:"/WritePro/commands/wp-get-formulas",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get formulas"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Collection of formulas"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP Get formulas"})," command returns a collection of all formulas defined in ",(0,s.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"targetObj"})," parameter, you can pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline or anchored picture / text box), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When you pass a section in ",(0,s.jsx)(n.em,{children:"targetObj"}),", only image formulas or formulas in text boxes anchored to this section or all sections are returned. If anchored to a page or to the embedded view, their formulas are not returned. Pass the document in ",(0,s.jsx)(n.em,{children:"targetObj"})," to get all anchored element formulas."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returned value"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get formulas"})," returns a collection of formula objects, each of them containing one or more of the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].formula"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsxs)(n.td,{children:["The formula string is available through ",(0,s.jsx)(n.strong,{children:"[ ].formula.source"}),". The formula is a ",(0,s.jsx)(n.strong,{children:"copy"})," of the formula found in the target. If you want to modify the formula, it must be re-inserted in the document to be taken into account"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].range"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"Range of the formula (not returned for anchored picture formulas)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].anchoredID"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"ID of anchored picture (returned for anchored picture formulas only)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Name of the formula, if a name was defined (not returned otherwise). Names can be defined using ",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].owner"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"4D Write Pro document"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you passed a subsection as target, formulas of the parent section are returned."}),"\n",(0,s.jsx)(n.li,{children:"If several formulas are returned, the collection is ordered with respect to the formula order in the target, except for targets of type document and section (any order in this case)."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"To get all formulas in a document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $formulas : Collection\n\xa0$formulas:=WP Get formulas(WriteProArea)\n"})}),"\n",(0,s.jsx)(n.p,{children:"To get all formulas in the first section of a document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $formulas : Collection\n\xa0$formulas:=WP Get formulas(WP Get section(WriteProArea;1))\n"})}),"\n",(0,s.jsx)(n.p,{children:"To get the formulas of all anchored pictures in a document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $formulas : Collection\n\xa0$formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Managing formulas"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-compute-formulas",children:"WP COMPUTE FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-freeze-formulas",children:"WP FREEZE FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-links",children:"WP Get links"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let s={},o=t.createContext(s);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);