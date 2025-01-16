"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2217"],{805630:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/form-set-entry-order","title":"FORM SET ENTRY ORDER","description":"FORM SET ENTRY ORDER ( objectNames {; pageNumber} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/form-set-entry-order.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-entry-order","permalink":"/docs/20-R7/commands/form-set-entry-order","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-entry-order.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-entry-order","title":"FORM SET ENTRY ORDER","slug":"/commands/form-set-entry-order","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SCREENSHOT","permalink":"/docs/20-R7/commands/form-screenshot"},"next":{"title":"FORM SET HORIZONTAL RESIZING","permalink":"/docs/20-R7/commands/form-set-horizontal-resizing"}}'),s=r("785893"),o=r("250065");let d={id:"form-set-entry-order",title:"FORM SET ENTRY ORDER",slug:"/commands/form-set-entry-order",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM SET ENTRY ORDER"})," ( ",(0,s.jsx)(n.em,{children:"objectNames"})," {; ",(0,s.jsx)(n.em,{children:"pageNumber"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectNames"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of object names in their expected entry order"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pageNumber"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of the page to set the entry order (current page if omitted)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"FORM SET ENTRY ORDER"})," command allows to set dynamically the entry order of the current form for the current process based upon the ",(0,s.jsx)(n.em,{children:"objectNames"})," array."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in ",(0,s.jsx)(n.em,{children:"objectNames"})," an array containing the names of form objects to include in the entry order. The order of objects in the array defines the form entry order. Any valid form objects belonging to the current form can be listed. An object is valid if:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["it has the focusable property(",(0,s.jsx)(n.strong,{children:"Note:"})," The command ignores the ",(0,s.jsx)(n.strong,{children:"Tabbable"})," object property),"]}),"\n",(0,s.jsx)(n.li,{children:"it exists in the form (its name is defined),"}),"\n",(0,s.jsxs)(n.li,{children:["it is used on the current page (or the ",(0,s.jsx)(n.em,{children:"pageNumber"})," page, see below). Keep in mind that a form page includes page 0 objects and inherited form objects."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If an invalid object is detected at runtime, it is simply ignored and 4D will try to use the next valid object in the ",(0,s.jsx)(n.em,{children:"objectNames"})," array. You can know the actual entry order of the current page (based upon valid objects) using the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-get-entry-order",children:"FORM GET ENTRY ORDER"})," command with the * parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["Optionnally, you can pass the ",(0,s.jsx)(n.em,{children:"pageNumber"})," for which to set the entry order. If omitted, the command is applied to the current page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The entry order of a subform is defined in the subform itself. You have to call the ",(0,s.jsx)(n.strong,{children:"FORM SET ENTRY ORDER"})," command in the subform context."]}),"\n",(0,s.jsxs)(n.li,{children:["This command does not define the first focused object in the form at runtime. If you want to set a first object in the entry order, you need to use the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/goto-object",children:"GOTO OBJECT"})," command in the On Load event of the form. If you used the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/object-duplicate",children:"OBJECT DUPLICATE"})," command, you can set the duplicated object as the first one by passing the Object First in entry order constant in the ",(0,s.jsx)(n.em,{children:"boundTo"})," parameter."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"About the data entry order"}),(0,s.jsx)(n.br,{}),"\nThe data entry order is the order in which fields, subforms, and all other active objects are selected as the user hits the ",(0,s.jsx)(n.strong,{children:"Tab"})," or the ",(0,s.jsx)(n.strong,{children:"Carriage return"})," key in a form. Reverse data entry order is also available by pressing the ",(0,s.jsx)(n.strong,{children:"Shift+Tab"})," or ",(0,s.jsx)(n.strong,{children:"Shift+Carriage return"})," keys. Entry order can be set by default or modified in the Form editor. For more information, please refer to the ",(0,s.jsx)(n.em,{children:"Modifying data entry order"})," section in the ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to set the entry order of objects in the form based upon their names:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabNames;0)\n\xa0\n\xa0FORM GET OBJECTS(tabNames;Form current page+Form inherited)\xa0//get form object names\n\xa0SORT ARRAY(tabNames;>)\xa0//sort the names in ascending order\n\xa0FORM SET ENTRY ORDER(tabNames)\xa0//use the alphabetical order for entry order\n\xa0\xa0//non-focusable objects are ignored\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-get-entry-order",children:"FORM GET ENTRY ORDER"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1468"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);