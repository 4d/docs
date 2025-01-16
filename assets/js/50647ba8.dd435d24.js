"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55258"],{465749:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/object-set-list-by-name","title":"OBJECT SET LIST BY NAME","description":"OBJECT SET LIST BY NAME ( { ;} object {; listType}; list* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-set-list-by-name.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-list-by-name","permalink":"/docs/commands/object-set-list-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-list-by-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-list-by-name","title":"OBJECT SET LIST BY NAME","slug":"/commands/object-set-list-by-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET KEYBOARD LAYOUT","permalink":"/docs/commands/object-set-keyboard-layout"},"next":{"title":"OBJECT SET LIST BY REFERENCE","permalink":"/docs/commands/object-set-list-by-reference"}}'),i=n("785893"),l=n("250065");let r={id:"object-set-list-by-name",title:"OBJECT SET LIST BY NAME",slug:"/commands/object-set-list-by-name",displayed_sidebar:"docs"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"OBJECT SET LIST BY NAME"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"object"})," {; ",(0,i.jsx)(s.em,{children:"listType"}),"}; ",(0,i.jsx)(s.em,{children:"list"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Operator"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"If specified, object is an Object Name (String) If omitted, object is a Field or a Variable"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"object"}),(0,i.jsx)(s.td,{children:"any"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Object Name (if * is specified), or Field or Variable (if * is omitted)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"listType"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Type of list: Choice list, Required list or Excluded list"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"list"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:'Name of the list to use as Choice list or "" to disassociate the list'})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The OBJECT SET LIST BY NAME command sets, replaces or disassociates the ",(0,i.jsx)(s.em,{children:"list"})," associated with the object or group of objects specified by ",(0,i.jsx)(s.em,{children:"object"}),". The list whose name is passed in the ",(0,i.jsx)(s.em,{children:"list"})," parameter must have been created using the List Editor in the Design environment."]}),"\n",(0,i.jsx)(s.p,{children:"This command can be applied in an input or dialog form, to fields and enterable variables whose value can be entered as text."}),"\n",(0,i.jsxs)(s.p,{children:["If you specify the optional ",(0,i.jsx)(s.em,{children:"*"})," parameter, you indicate an object name (a string) in ",(0,i.jsx)(s.em,{children:"object"}),". If you omit the optional ",(0,i.jsx)(s.em,{children:"*"})," parameter, you indicate a field or a variable in ",(0,i.jsx)(s.em,{children:"object"}),". In this case, you specify a field or variable reference (field or variable objects only) instead of a string."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," This command cannot be used with fields located in a subform\u2019s list form."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"OBJECT SET LIST BY NAME"})," command now allows you to set or replace all the types of lists associated with the object(s) designated by the ",(0,i.jsx)(s.em,{children:"object"})," and ",(0,i.jsx)(s.em,{children:"*"})," parameters: choice lists, list of required values, and lists of excluded values. To do this, in the ",(0,i.jsx)(s.em,{children:"listType"}),' parameter you pass one of the following constants, found in the "',(0,i.jsx)(s.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Constant"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Value"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Choice list"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:'Simple list of values to choose from ("Choice List" option in the Property List) (default)'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Excluded list"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:'Lists values not accepted for entry ("Excluded List" option in the Property List)'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Required list"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:'Lists only values accepted for entry ("Required List" option in the Property List)'})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"If you omit this parameter, value 0 (Choice list) is used by default."}),"\n",(0,i.jsxs)(s.p,{children:["In the current process, to disassociate a list that was associated with the ",(0,i.jsx)(s.em,{children:"object"}),', pass an empty string ("") in the ',(0,i.jsx)(s.em,{children:"list"})," parameter for the type of list concerned."]}),"\n",(0,i.jsx)(s.p,{children:"Existing list of values are replaced depending on how the list is associated to the form object:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"using a choice list: the list itself is replaced."}),"\n",(0,i.jsx)(s.li,{children:"using an array: the list is copied in array elements."}),"\n",(0,i.jsxs)(s.li,{children:["using an object (",(0,i.jsx)(s.em,{children:"not supported in binary databases"}),"): the list is copied as collection elements in the ",(0,i.jsx)(s.em,{children:"values"})," property of the object."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(s.p,{children:"The following example sets a choice list for a shipping field. If the shipping is overnight, then the choice list is set to shippers who can ship overnight. Otherwise, it is set to the standard shippers:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0If([Shipments]Overnight)\n\xa0\xa0\xa0\xa0OBJECT SET LIST BY NAME([Shipments]Shipper;"Fast Shippers")\n\xa0Else\n\xa0\xa0\xa0\xa0OBJECT SET LIST BY NAME([Shipments]Shipper;"Normal Shippers")\n\xa0End if\n'})}),"\n",(0,i.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(s.p,{children:'Associate the "color_choice" list as a simple pop-up/drop-down list named "DoorColor":'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"color_choice")\n\xa0\xa0// in this case, the 3rd parameter (constant) can be omitted\n'})}),"\n",(0,i.jsx)(s.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(s.p,{children:'You want to associate the "color_choice" list with the "WallColor" combo box. Since this combo box is enterable, you want for it not to be possible to use certain colors such as "black", "purple" etc. These colors are placed in the "excl_colors" list:'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0OBJECT SET LIST BY NAME(*;"WallColor";Choice list;"color_choice")\n\xa0OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"excl_colors")\n'})}),"\n",(0,i.jsx)(s.h4,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(s.p,{children:"You want to remove the list associations:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// removal of a choice list\n\xa0OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"")\n\xa0\xa0// removal of list of values that are not allowed\n\xa0OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"")\n'})}),"\n",(0,i.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/commands/object-get-list-name",children:"OBJECT Get list name"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/object-set-list-by-reference",children:"OBJECT SET LIST BY REFERENCE"})]}),"\n",(0,i.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Command number"}),(0,i.jsx)(s.td,{children:"237"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return r}});var t=n(667294);let i={},l=t.createContext(i);function r(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);