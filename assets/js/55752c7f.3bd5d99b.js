"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87164"],{347240:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/find-in-list","title":"Find in list","description":"Find in list ( { ;} list ; value ; scope {; itemsArray {; }} ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/find-in-list.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-list","permalink":"/docs/20-R7/commands/find-in-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"find-in-list","title":"Find in list","slug":"/commands/find-in-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM LIST","permalink":"/docs/20-R7/commands/delete-from-list"},"next":{"title":"GET LIST ITEM","permalink":"/docs/20-R7/commands/get-list-item"}}'),i=n("785893"),r=n("250065");let d={id:"find-in-list",title:"Find in list",slug:"/commands/find-in-list",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Find in list"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; ",(0,i.jsx)(t.em,{children:"value"})," ; ",(0,i.jsx)(t.em,{children:"scope"})," {; ",(0,i.jsx)(t.em,{children:"itemsArray"})," {; *}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted) Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Value to be searched for"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scope"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"0=Main list, 1=Sublist"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemsArray"}),(0,i.jsx)(t.td,{children:"Array integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"- If 2nd * omitted: array of positions of items found - If 2nd * passed: array of reference numbers of items found"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"- If omitted: use position of items - If passed: use reference number of items"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"- If 2nd * omitted: position of item found - If 2nd * passed: reference number of item found"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Find in list"})," command returns the position or reference of the first item of the ",(0,i.jsx)(t.em,{children:"list"})," that is equivalent to the string passed in ",(0,i.jsx)(t.em,{children:"value"}),". If several items are found, the function can also fill an ",(0,i.jsx)(t.em,{children:"itemsArray"})," array with the position or reference of each item."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional * parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with item reference numbers (the second * is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with item positions (the second * is passed), the syntax based on the object name is required since the position of items can vary from one representation to another."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the object name of the list and the form contains several lists that match this name, the ",(0,i.jsx)(t.strong,{children:"Find in list"})," command will be applied to the first object whose name corresponds."]}),"\n",(0,i.jsx)(t.p,{children:"The second * parameter can be used to indicate whether you want to work with the current positions of the items (in which case, this parameter is omitted) or with the absolute references of the items (in which case, it must be passed)."}),"\n",(0,i.jsxs)(t.p,{children:["Pass the character strings to be searched for in ",(0,i.jsx)(t.em,{children:"value"}),". The search will be of the \u201Cis exactly\u201D type; in other words, searching for \u201Cwood\u201D will not find \u201Cwooden.\u201D However, you can use the wildcard character (@ ) to set up searches of the \u201Cbegins with,\u201D \u201Cends with\u201D or \u201Ccontains\u201D types."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"scope"})," parameter is used to set whether the search must only be carried out at the first level of the ",(0,i.jsx)(t.em,{children:"list"})," or whether it should include all the sublists. Pass 0 to limit the search to the first level of the list and 1 to extend it to all the sublists."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to find out the position or number of all the items corresponding to ",(0,i.jsx)(t.em,{children:"value"}),", pass a longint array in the optional ",(0,i.jsx)(t.em,{children:"itemsArray"})," parameter. If necessary, the array will be created and resized by the command. The command will fill in the array with the positions (if the second * is omitted) or the reference numbers (if the second * is passed) of the items found."]}),"\n",(0,i.jsx)(t.p,{children:"Positions are expressed in relation to the top item of the main list, while taking into account the current expanded/collapsed state of the list and sublists."}),"\n",(0,i.jsxs)(t.p,{children:["If no item corresponds to the ",(0,i.jsx)(t.em,{children:"value"})," searched for, the function returns 0 and the ",(0,i.jsx)(t.em,{children:"itemsArray"})," array is returned empty."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Given the following hierarchical list:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(859517).Z+"",width:"167",height:"353"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0$vlItemPos:=Find in list(hList;"P@";1;$arrPos)\n\xa0\xa0//$vlItemPos equals 6\n\xa0\xa0//$arrPos{1} equals 6 and $arrPos{2} equals 11\n\xa0$vlItemRef:=Find in list(hList;"P@";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef equals 7\n\xa0\xa0//$arrRefs{1} equals 7 and $arrRefs{2} equals 18\n\xa0$vlItemPos:=Find in list(hList;"Date";1;$arrPos)\n\xa0\xa0//$vlItemPos equals 9\n\xa0\xa0//$arrPos{1} equals 9 and $arrPos{2} equals 16\n\xa0$vlItemRefFind in list(hList;"Date";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef equals 11\n\xa0\xa0//$arrRefs{1} equals 11 and $arrRefs{2} equals 23\n\xa0$vlItemPos:=(hList;"Date";0;*)\n\xa0\xa0//$vlItemPos equals 0\n'})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"952"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},859517:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/pict22420.en-b38917cd44a4e89e7d00a3c88da4ccd4.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);