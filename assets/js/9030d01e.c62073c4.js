"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80002"],{202807:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-list-item-properties","title":"GET LIST ITEM PROPERTIES","description":"GET LIST ITEM PROPERTIES ( { ;} list ; itemRef ; enterable {; styles {; icon {; color}}} )GET LIST ITEM PROPERTIES (  ; list ;  ; enterable {; styles {; icon {; color*}}} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/get-list-item-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-properties","permalink":"/docs/commands/get-list-item-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-properties.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-list-item-properties","title":"GET LIST ITEM PROPERTIES","slug":"/commands/get-list-item-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PARAMETER ARRAYS","permalink":"/docs/commands/get-list-item-parameter-arrays"},"next":{"title":"GET LIST PROPERTIES","permalink":"/docs/commands/get-list-properties"}}'),i=n("785893"),r=n("250065");let l={id:"get-list-item-properties",title:"GET LIST ITEM PROPERTIES",slug:"/commands/get-list-item-properties",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",em:"em",filesystem:"filesystem",h2:"h2",li:"li",name:"name",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GET LIST ITEM PROPERTIES"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; ",(0,i.jsx)(t.em,{children:"itemRef"})," ; ",(0,i.jsx)(t.em,{children:"enterable"})," {; ",(0,i.jsx)(t.em,{children:"styles"})," {; ",(0,i.jsx)(t.em,{children:"icon"})," {; ",(0,i.jsx)(t.em,{children:"color"}),"}}} )",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.strong,{children:"GET LIST ITEM PROPERTIES"})," ( * ; ",(0,i.jsx)(t.em,{children:"list"})," ; * ; ",(0,i.jsx)(t.em,{children:"enterable"})," {; ",(0,i.jsx)(t.em,{children:"styles"})," {; ",(0,i.jsx)(t.em,{children:"icon"})," {; ",(0,i.jsx)(t.em,{children:"color"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted), or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef | *"}),(0,i.jsx)(t.td,{children:"Operator, Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Item reference number, or 0 for last list item added, or * for the current list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"enterable"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"TRUE = Enterable, FALSE = Non-enterable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"styles"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Font style for the item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"icon"}),(0,i.jsx)(t.td,{children:"Text, Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Picture name or number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"color"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"RGB color value"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM PROPERTIES"})," command returns the properties of the item designated by the ",(0,i.jsx)(t.em,{children:"itemRef"})," parameterwithin the list whose list reference number or object name is passed in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second ",(0,i.jsx)(t.em,{children:"*"})," is passed), the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the object name of the list and the form contains several lists matching this name, the ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM PROPERTIES"})," command will be applied to the first object whose name corresponds."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.em,{children:"itemRef"}),", you can pass either a reference number, or the value 0 in order to designate the last item added to the list, or * in order to designate the current item of the list. If several items are selected, the current item is the last one selected."]}),"\n",(0,i.jsx)(t.p,{children:"If you pass * and no item is selected or if there is no item with the item reference number that is passed, the command leaves the parameters unchanged."}),"\n",(0,i.jsxs)(t.p,{children:["If you work with item reference numbers, build a list in which items have unique reference numbers, otherwise you will not be able to distinguish the items. For more information, refer to the description of the command ",(0,i.jsx)(t.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"After the call:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"enterable"})," returns TRUE if the item is enterable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"styles"})," returns the font style of the item."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"icon"})," returns the picture assigned to the item, if any.\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the icon has been specified using a picture file, the command returns in ",(0,i.jsx)(t.em,{children:"icon"})," the pathname using the ",(0,i.jsxs)(t.strong,{children:["path:",(0,i.jsx)(t.filesystem,{path:""})]})," pattern."]}),"\n",(0,i.jsxs)(t.li,{children:["If the icon has been specified using a library picture (binary databases only), the command returns either the number or the name of the picture, depending on the type of variable passed in this parameter. The following pattern is used for a name: ",(0,i.jsxs)(t.strong,{children:["pictlib:",(0,i.jsx)(t.name,{})]}),". If you do not attribute a specific type to the ",(0,i.jsx)(t.em,{children:"icon"})," variable, by default, the name of the picture is returned (text). If no icon is associated with the item, the command returns a blank value."]}),"\n"]}),"\n",(0,i.jsx)(t.strong,{children:"Note:"})," You can retrieve, in a picture variable, the icon associated with an item using the ",(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item-icon",children:"GET LIST ITEM ICON"})," command*.*"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"color"})," returns the color of the text of the item specified."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For details about these properties, see the description of the command ",(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item",children:"GET LIST ITEM"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item-icon",children:"GET LIST ITEM ICON"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"631"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var s=n(667294);let i={},r=s.createContext(i);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);