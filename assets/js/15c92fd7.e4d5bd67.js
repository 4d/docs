"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65428"],{544152:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/listbox-select-rows","title":"LISTBOX SELECT ROWS","description":"LISTBOX SELECT ROWS ( { ;} object ; selection {; action*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-select-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-rows","permalink":"/docs/20-R7/commands/listbox-select-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-select-rows","title":"LISTBOX SELECT ROWS","slug":"/commands/listbox-select-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT ROW","permalink":"/docs/20-R7/commands/listbox-select-row"},"next":{"title":"LISTBOX SET ARRAY","permalink":"/docs/20-R7/commands/listbox-set-array"}}'),i=t("785893"),o=t("250065");let l={id:"listbox-select-rows",title:"LISTBOX SELECT ROWS",slug:"/commands/listbox-select-rows",displayed_sidebar:"docs"},c=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SELECT ROWS"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"selection"})," {; ",(0,i.jsx)(n.em,{children:"action"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"selection"}),(0,i.jsx)(n.td,{children:"Object, Collection"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object or collection describing the rows to select"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"lk replace selection (default if omitted), lk add to selection, lk remove from selection"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"LISTBOX SELECT ROWS"})," command selects the rows of an entity selection or collection list box that correspond to the entities or objects in the ",(0,i.jsx)(n.em,{children:"selection"})," parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,i.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"selection"})," parameter, pass an ",(0,i.jsx)(n.a,{href:"#",title:"Data structured as a native 4D object",children:"Object"})," or a ",(0,i.jsx)(n.a,{href:"#",title:"Array of object property values",children:"Collection"})," depending on the list box type:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Entity selection list box"})}),"\n",(0,i.jsxs)(n.p,{children:["For an ",(0,i.jsx)(n.strong,{children:"entity selection list box"}),", pass an entity selection object containing entities of the same dataclass as the list box. If ",(0,i.jsx)(n.em,{children:"selection"})," is an entity selection object from a different dataclass than the list box, an error is returned."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Collection list box"})}),"\n",(0,i.jsxs)(n.p,{children:["For a ",(0,i.jsx)(n.strong,{children:"collection list box"}),", pass a subcollection of objects belonging to the list box. If your list box contains scalar values, pass a subcollection of values."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"selection"})," is not a valid entity selection object / collection, an error is returned."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"selection"}),' is an empty entity selection / collection, by default (with "replace" action, see below) all the rows of the list box are deselected. For other actions, the command does nothing.']}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"selection"})," contains entities / elements that are not displayed in the list box, they are ignored."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"action"})," parameter, if passed, is used to define the selection action to execute when a selection of rows already exists in the list box. You can pass a value or one of the following constants (located in the \u201C",(0,i.jsx)(n.em,{children:"List Box"}),"\u201D theme):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk add to selection"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"The row selected is added to the existing selection. If the row specified already belongs to the existing selection, the command does nothing."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk remove from selection"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"The row selected is removed from the existing selection. If the row specified does not belong to the existing selection, the command does nothing."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk replace selection"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["The row selected becomes the new selection and replaces the existing selection. The command has the same effect as a user click on a row (however, the On Clicked event is not generated). This is the default action (if the ",(0,i.jsx)(n.em,{children:"action"})," parameter is omitted)."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, if the ",(0,i.jsx)(n.em,{children:"action"})," parameter is omitted, the command replaces the row(s) defined by the ",(0,i.jsx)(n.em,{children:"selection"})," parameter."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The command assumes that each object or entity is displayed only once in the list box."]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"This code allows you to select invoices in an entity selection using only a single server request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//On the On Load event of the form we have: Form.invoices:=ds.Invoices.all()\n\xa0\xa0//The ListBox "Invoices" displays the entity selection Form.invoices\n\xa0\n\xa0var $cash : Object\n\xa0var $card : Object\n\xa0\n\xa0\xa0//Select invoices paid with cash\n\xa0$cash:=Form.invoices.query("paymentMethod=:1";"Cash")\n\xa0LISTBOX SELECT ROWS(*;"Invoices";$cash;lk replace selection)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"Example with a collection of objects:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $name : Text\n\xa0$name:=Request("Enter a name")\n\xa0If(OK=1)\n\xa0\xa0// Form.studentsColl is a collection of objects\n\xa0\xa0\xa0\xa0$selection:=Form.studentsColl.query("lastname = :1";$name)\n\xa0\xa0\xa0\xa0LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk add selection)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-select-row",children:"LISTBOX SELECT ROW"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1715"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},o=s.createContext(i);function l(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);