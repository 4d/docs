"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75486"],{538467:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-list-item-parameter","title":"SET LIST ITEM PARAMETER","description":"SET LIST ITEM PARAMETER ( { ;} list ; itemRef |  ; selector ; value )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-list-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-parameter","permalink":"/docs/commands/set-list-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-parameter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-list-item-parameter","title":"SET LIST ITEM PARAMETER","slug":"/commands/set-list-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM ICON","permalink":"/docs/commands/set-list-item-icon"},"next":{"title":"SET LIST ITEM PROPERTIES","permalink":"/docs/commands/set-list-item-properties"}}'),i=n("785893"),r=n("250065");let a={id:"set-list-item-parameter",title:"SET LIST ITEM PARAMETER",slug:"/commands/set-list-item-parameter",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SET LIST ITEM PARAMETER"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; itemRef | * ; ",(0,i.jsx)(t.em,{children:"selector"})," ; ",(0,i.jsx)(t.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted) or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef | *"}),(0,i.jsx)(t.td,{children:"Operator, Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Item reference number or 0 for the last item appended to the list or * for the current list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"selector"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Parameter constant"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"Text, Boolean, Real"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Value of the parameter"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"SET LIST ITEM PARAMETER"})," command modifies the ",(0,i.jsx)(t.em,{children:"selector"})," parameter for the ",(0,i.jsx)(t.em,{children:"itemRef"})," item of the hierarchical list whose reference or object name is passed in the ",(0,i.jsx)(t.em,{children:"list"})," parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), you can use either syntax. Conversely, if you use several representations of the same list and the second ",(0,i.jsx)(t.em,{children:"*"})," is passed, the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:["You can pass a reference number in ",(0,i.jsx)(t.em,{children:"itemRef"}),". If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in ",(0,i.jsx)(t.em,{children:"itemRef"})," to indicate the last item added to the list (using ",(0,i.jsx)(t.em,{children:"Hierarchical Lists"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Lastly, you can pass ",(0,i.jsx)(t.em,{children:"*"})," in ",(0,i.jsx)(t.em,{children:"itemRef"}),": in this case, the command is applied to the current item of the list. If several items are selected manually, the current item is the last one that was selected. If no item is selected, the command does nothing."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.em,{children:"selector"}),", you can pass either:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["one of the following constants (found in the \u201C",(0,i.jsx)(t.em,{children:"Hierarchical Lists"}),"\u201D theme):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Additional text"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"4D_additional_text"}),(0,i.jsxs)(t.td,{children:["This constant is used to add text to the right of the ",(0,i.jsx)(t.em,{children:"itemRef"})," item. This additional title will always be displayed in the right part of the list, even when the user moves the horizontal scrolling cursor. When you use this constant, pass the text to be displayed in ",(0,i.jsx)(t.em,{children:"value"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Associated standard action"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"4D_standard_action_name"}),(0,i.jsxs)(t.td,{children:["Associate a standard action with the ",(0,i.jsx)(t.em,{children:"itemRef"}),". In this case, you must pass in the ",(0,i.jsx)(t.em,{children:"value"}),' parameter a standard action name with a parameter, for example "fontSize?value=10pt". For more information, please refer to the ',(0,i.jsx)(t.em,{children:"Standard actions"})," section in the ",(0,i.jsx)(t.em,{children:"Design Reference"})," manual."]})]})]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["or a ",(0,i.jsx)(t.strong,{children:"custom selector"}),": You can also pass custom text and associate it with a value of the Text, Number or Boolean type in ",(0,i.jsx)(t.em,{children:"selector"}),". This value will be stored with the list item and may be retrieved using the ",(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item-parameter",children:"GET LIST ITEM PARAMETER"})," command. This lets you set up any type of interface associated with hierarchical lists. For example, in a list of customer names, you can store the age of each person and only display it when the corresponding item is selected."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"You want to set as choice list of a hierarchical pop up menu a custom list of font size values using the standard actions feature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0$myList:=New list\n\xa0APPEND TO LIST($myList;ak standard action title;1)\n\xa0APPEND TO LIST($myList;ak standard action title;2)\n\xa0APPEND TO LIST($myList;ak standard action title;3)\n\xa0SET LIST ITEM PARAMETER($myList;1;Associated standard action;"fontSize?value=10pt")\n\xa0SET LIST ITEM PARAMETER($myList;2;Associated standard action;"fontSize?value=12pt")\n\xa0SET LIST ITEM PARAMETER($myList;3;Associated standard action;"fontSize?value=14pt")\n\xa0OBJECT SET LIST BY REFERENCE(*;"popup";Choice list;$myList)\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(815832).Z+"",width:"168",height:"79"})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/action-info",children:"Action info"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item-parameter",children:"GET LIST ITEM PARAMETER"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item-parameter-arrays",children:"GET LIST ITEM PARAMETER ARRAYS"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/insert-in-list",children:"INSERT IN LIST"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"986"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},815832:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAABPCAIAAADwaBnZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAARBSURBVHhe7Zw/SyNBGMb3E9nY6NcIBwem9MgXsD+sTCGcmM7iQOMVFyy0uTSxCSeYIlhJOBAEMRi4oLG7cu+Zmd3sn2ST2TV/ZneeHw9hMvum+s07s4FNnHdiJUK88+mEKXCU6Rie+G7/H1PIULyloXhLQ/GWhuItDcVbGoq3NGnEn+86zu5x5K1gY/8+qGFyEk3x93ubjlPeLQXir/wxBlt7N2pyRjTLmBUlTccHsmW7l6/U/OX+lkbTU7xZySg+Iju0CGSk4/PDjeAgwIxPpJJZfH78+h2bQSYnlyTecTYPLzG+gX7V6HI1sOOXnPafv6XPO9++/wxP4i0mcSk8ubSO9x0fl53SeXySWV5i7qdaRzKKn3nGhx2Lu0KKX3HG7pOsI1nFiz1cjSeNYsb/jjerjFlilPsk60hW8QiaXiIbOhzhuFTeil3Fni/gzd2qAuVJ1pFU4jXD5s5BKN7SULylWYZ4JgeheEtD8ZaG4i0NxVuaOeKZAkeZjiHEfyGFRpmO4Yl3SUGheEuheEtJI75ZcZxK03uj3gq2jx68GZIfNMU/HG1DeqUSiId2NcZAR71mGVkRkNvv9weDwXA4fHt7G41GU8UrxrIjQywKDaUUbxaQ2+12e73e8/Mz3OuKj8gOLQKJdNwUe4R/EGDGJ1JJ1gbkNhqNVqsF9y8vL2j6hYj3T35xRKiRXA3+J8jagdxarQb36Hvs+YsSP3mR4s0CcqvVar1e73Q62O1fX1+1xIeHE2d82LFoeYo3EMg9ODg4Ozu7vb1NI34sdIpRzPhTs8rIOskqHgi/U2/XhONKRd3bBVe98olqshZSideEzZ0DKN5SKN5S5ojfPHGZQobiLQ3FW5o04q/F2fDVf/v1UZ4Vrvt0F6phchJd8acj131022PxF+7ptXcJk6cX3nhGNMuY1SRNx0t5444fB2uC4nOXBYifnBSOr92n0EGAGY/HSCWzrnxUPE76yTNeaB65OxhfCP2q0cVqYMcbkw+JxyY/9c4u7Bgroy3vBijeqGQXP+NoDztGGcUbmKzi8dUu+bRGmbcTyK1efYTijUpG8Tt36lbNI7bho6ztf8tX7Y543/t5c2dG0onXDJvb/FC8paF4SzNHvDyWSQGheEuheEtJI148Jxt/SFY8P83nrHKIpnjhN/prWYV8ZlpLPB/EM4s0HS/kRcRjOVSOtH4rS/Gm8QHxQntTvMaFSsf8tazZZBbvC58unr+WNZ2M4gPdSR3vT/mfoXizyCYegygRp2HHouUp3kAydnxAwlbvzY29U7xhLEk8fy1rOqnEa8LmzgEUbykUbylzxJMCkyg+Rr/f73a7jUajVqtVq1V8jOSaxL87izEYDHq9XqvVQnW9XsdiIbkm8Q8OYwyHQ+wJqMMa6XQ62CJIrkn8S9MYWBSowOrAzoBqkncS/8Q4Bq4BFAHcC5C8o1QqrZ7j9/f/7YfxWxM+R7gAAAAASUVORK5CYII="},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let i={},r=s.createContext(i);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);