"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76847"],{622989:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"WritePro/commands/wp-insert-formula","title":"WP Insert formula","description":"WP Insert formula ( targetObj ; formula ; mode {; rangeUpdate} ) : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands/wp-insert-formula.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-insert-formula","permalink":"/docs/WritePro/commands/wp-insert-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-insert-formula.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-insert-formula","title":"WP Insert formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert document body","permalink":"/docs/WritePro/commands/wp-insert-document-body"},"next":{"title":"WP Insert picture","permalink":"/docs/WritePro/commands/wp-insert-picture"}}'),s=r("785893"),d=r("250065");let a={id:"wp-insert-formula",title:"WP Insert formula",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Insert formula"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ; ",(0,s.jsx)(n.em,{children:"formula"})," ; ",(0,s.jsx)(n.em,{children:"mode"})," {; ",(0,s.jsx)(n.em,{children:"rangeUpdate"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Formula object OR Object with formula and name properties"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mode"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Insertion mode"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeUpdate"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Includes or excludes the inserted content within the range"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Text range object reprsenting the result of the formula"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP Insert formula"})," command inserts a ",(0,s.jsx)(n.em,{children:"formula"})," in ",(0,s.jsx)(n.em,{children:"targetObj"})," according to the specified insertion ",(0,s.jsx)(n.em,{children:"mode"})," and returns the resulting text range."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"targetObj"})," parameter, you can pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline picture), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"formula"})," parameter, pass the 4D formula to evaluate. You can pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["either a ",(0,s.jsx)(n.a,{href:"../../commands/formula.md-objects",children:"formula object"})," created by the ",(0,s.jsx)(n.a,{href:"/docs/commands/formula",children:(0,s.jsx)(n.strong,{children:"Formula"})})," or ",(0,s.jsx)(n.a,{href:"../../commands/formula.md-from-string",children:(0,s.jsx)(n.strong,{children:"Formula from string"})})," command,"]}),"\n",(0,s.jsx)(n.li,{children:"or an object containing two properties:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name to display for the formula in the document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../../commands/formula.md-objects",children:"formula object"})," created by the ",(0,s.jsx)(n.a,{href:"/docs/commands/formula",children:(0,s.jsx)(n.strong,{children:"Formula"})})," or ",(0,s.jsx)(n.a,{href:"../../commands/formula.md-from-string",children:(0,s.jsx)(n.strong,{children:"Formula from string"})})," command"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["When you use an object with a formula ",(0,s.jsx)(n.em,{children:"name"}),", this name is displayed in the document instead of the formula reference when formulas are displayed as reference, and in the formula tip when displayed as value or symbols. If the ",(0,s.jsx)(n.em,{children:"name"})," property contains an empty string or is omitted, it is removed from the object and the formula is displayed by default. For more information, see the ",(0,s.jsx)(n.a,{href:"/docs/WritePro/managing-formulas",children:"Managing formulas"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"mode"})," parameter, pass one of the following constants to indicate the insertion mode to be used:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk append"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Insert contents at end of target"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk prepend"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Insert contents at beginning of target"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk replace"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Replace target contents"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," is a range, you can use the optional ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," parameter to pass one of the following constants to specify whether or not the inserted ",(0,s.jsx)(n.em,{children:"formula"})," is included in the resulting range:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk exclude from range"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Inserted contents not included in updated range"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk include in range"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Inserted contents included in updated range (default)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If you do not pass a ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," parameter, by default the inserted ",(0,s.jsx)(n.em,{children:"formula"})," is included in the resulting range."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," is not a range, ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," is ignored."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Keep in mind that, when called, the formula object is evaluated within the context of the database or component that created it."})}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"To replace all current date formulas with formatted strings:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $_formulas : Collection\n var $find;$newFormula : Object\n \n  // define the formula to find\n $find:=Formula(Current date)\n \n  // define the replacement formula\n $newFormula:=Formula(String(Current date;System date long))\n \n  // find all formulas in the document\n $_formulas:=WP Get formulas(WriteProArea)\n \n  // query the collection from WP Get formulas\n $_formulas:=$_formulas.query("formula.source =:1";$find.source)\n \n  // then replace each formula\n For each($formula;$_formulas)\n    WP Insert formula($formula.range;$newFormula;wk replace)\n End for each\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to use a formula name for the customer name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //add some data\n $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))\n WP SET DATA CONTEXT(WPArea;$data)\n \n  //create a formula object with a name\n $o:=New object\n $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)\n $o.name:="Customer name"\n \n  //inserts as text\n $range:=WP Text range(WPArea;wk start text;wk end text)\n WP SET TEXT($range;"Dear ";wk append)\n WP Insert formula($range;$o;wk append)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(253132).Z+"",width:"119",height:"33"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"You want to highlight a formula in yellow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'WParea:=WP New\nWP SET TEXT(WParea; "The project was completed on: "; wk append)\n$range1:=WP Insert formula(WParea; Formula(Current date); wk append)\n\nWP SET ATTRIBUTES($range1; wk background color; "yellow")\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(147458).Z+"",width:"288",height:"38"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Managing formulas"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-compute-formulas",children:"WP COMPUTE FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-freeze-formulas",children:"WP FREEZE FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-formulas",children:"WP Get formulas"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},147458:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},253132:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAhCAIAAABsjKM3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJLSURBVGhD7ZbLbcMwDECzlE+eR3cDGSALeAOP4B16zBQ+d42UpEhKimNFdWKiSPmAJpJIffgsOD3dnONxyxa4ZQvcsgVu2QK3bIFbtsAtW+CWLXDLL3G5XLhV5VjL35/O6dQk0C2/xD7LXwPMK+inhWM74LPMgRcLM7Th42OAmrjUKuskEJ3MkvX9ouEc17EjuwTpbrN8HcN45fbf5T2WARQ9fHHnl0SvhdZGe/Bwuv9kOdNMNxtg6dKlPnX6Yejzu7+WHKE7jRbppscManbjDE9hplGEIvkLR+fGHFwjhvWZSDYmx9wQaGV5ZsUCcjqZlU1r2QI+uNQqDZaXqUeP8BXH7/swgbTjeDlz0zIdlA8NLcyIdxxV03i6y3PgRh6LJVNDvJTTMBSX5Uk5ukDanKdxP2VQY3uL91nGWwoa6bIKkoFmAbF8J7liWc+qhWFqytW4hBEudD1Xh2gRoczNeLAAAKM4i/qtWwBcapXnllkyfpNMBQOYKYFHlulMWgcxj3jWx4VSOo1rPA/DILbrCsrdUm7GegHZV/qtW7zHMprkbvZCWKZhWtR61TIerryi5ZmpPhzSSHxDaFwTUgqMbCmAb4npK4j7GasFdB1prDI2tthnmawW5PdXozjILwum77mX5/P/y3guJlUsgyGARRiHK04tUQrVSTs273txItDBzNhaZWsuLcno4MhH0F9Cpuu493wL+ONSqzQl7SaW9cG4ZQvcsgXn85lLrXKsZSfili1wyxa4ZQvcsgVu2QK3bIFbtsAtH8/t9gPxbrckFSamGwAAAABJRU5ErkJggg=="},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(667294);let s={},d=t.createContext(s);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);