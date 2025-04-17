"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96192"],{37042:function(e,t,s){s.r(t),s.d(t,{default:()=>A,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/selected-list-items","title":"Selected list items","description":"Selected list items ( { ;} list {; itemsArray {; }} )  : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/selected-list-items.md","sourceDirName":"commands-legacy","slug":"/commands/selected-list-items","permalink":"/docs/commands/selected-list-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-list-items.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"selected-list-items","title":"Selected list items","slug":"/commands/selected-list-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECT LIST ITEMS BY REFERENCE","permalink":"/docs/commands/select-list-items-by-reference"},"next":{"title":"SET LIST ITEM","permalink":"/docs/commands/set-list-item"}}'),i=s("785893"),r=s("250065");let l={id:"selected-list-items",title:"Selected list items",slug:"/commands/selected-list-items",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Selected list items"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," {; ",(0,i.jsx)(t.em,{children:"itemsArray"})," {; *}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted), or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemsArray"}),(0,i.jsx)(t.td,{children:"Array integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"If 2nd * omitted: Array contains the positions of selected items in the list(s) If 2nd * passed: Array contains the selected item references"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If omitted: Item position(s) If passed: Item reference(s)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"If 2nd * omitted: Position of current selected list item in expanded/collapsed list(s) If 2nd * passed: Reference of the selected item"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Selected list items"})," command returns the position or reference of the selected item in the list whose reference number or object name you pass in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with item references (the second ",(0,i.jsx)(t.em,{children:"*"})," is passed), you can use either syntax. Conversely, if you use several representations of the same list and work with the item positions (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), the syntax based on the object name is required since each representation can have its own expanded/collapsed item configuration."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the name of the list object and the form contains several lists that match with this name, the ",(0,i.jsx)(t.a,{href:"/docs/commands/selected-list-items",children:"Selected list items"})," command will only apply to the first object whose name corresponds."]}),"\n",(0,i.jsxs)(t.p,{children:["In the case of multiple selection, the command can also return in the ",(0,i.jsx)(t.em,{children:"itemsArray"})," array, the position or reference of each item selected. You apply this command to a list displayed in a form to detect which item(s) the user has selected."]}),"\n",(0,i.jsx)(t.p,{children:"The second * parameter lets you indicate whether you want to work with current item positions (in this case, the * parameter should be omitted) or with fixed item references (in this case, the * parameter must be used)."}),"\n",(0,i.jsxs)(t.p,{children:["You can pass a longint array in the ",(0,i.jsx)(t.em,{children:"itemsArray"})," parameter. If necessary, the array will be created and resized by the command. Once the command has been executed, ",(0,i.jsx)(t.em,{children:"itemsArray"})," will contain:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"the position of each item selected relative to the expanded/collapsed state of the list(s) if the * parameter is omitted."}),"\n",(0,i.jsxs)(t.li,{children:["the fixed reference of each item selected if the * parameter is passed.",(0,i.jsx)(t.br,{}),"\nIf no items have been selected, the array is returned empty."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," In the event of multiple selections, the command returns the position or reference of the first item that was selected in ",(0,i.jsx)(t.em,{children:"list"}),", either by the user (manual selections) or by the ",(0,i.jsx)(t.a,{href:"/docs/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"})," or ",(0,i.jsx)(t.a,{href:"/docs/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})," commands (programmed selection)."]}),"\n",(0,i.jsx)(t.p,{children:"If the list has sublists, you apply the command to the main list (the one actually defined in the form), not one of its sublists. The positions are expressed relative to the top item of the main list, using the current expanded/collapsed state of the list and its sublist."}),"\n",(0,i.jsx)(t.p,{children:"In any case, if no items are selected, the function returns 0."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Here a list named ",(0,i.jsx)(t.em,{children:"hList,"})," shown in the Application environment:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(356814).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// at this point $vlItemPos gets 2\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(411706).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// at this point $vlItemPos gets 5\n\xa0$vlItemRef:=Selected list items(hList;*)\xa0// $vlItemRef gets 200 (for instance)\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(266438).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// at this point $vlItemPos gets 8\n\xa0$vlItemRef:=Selected list items(hList;*)\xa0// $vlItemRef gets 203 (for instance)\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(688692).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList;$arrPos)\xa0// at this point, $vlItemPos gets 3\n\xa0\xa0// $arrPos{1} gets 3, $arrPos{2} gets 4 and $arrPos{3} gets 5\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(522112).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemRef:=Selected list items(hList;$arrRefs;*)\xa0// $vlItemRef gets 101 (for instance)\n\xa0\xa0// $arrRefs{1} gets 101, $arrRefs{2} gets 203 (for instance)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"379"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},356814:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACYCAIAAAAHs865AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHFQ8BA6dMuzwAAAW3SURBVHic7ZrNTttYGIZPEppWKCGkCCohoTaEANthOdfQK5lRr4FbGGk0S25hpFlyATNSF8MKqUY0dIHaxWiA0jRNQhx7vvjDBzcEkjh/Y73vI3OwT05siyfv+XFI7R8cGgLAgvy8ef1y3rdBRiC9kF8qrGYyT4Zsf3Hx6dc/jhf0YGVtZ2o3RibM1eUn0dxs1m9uGp2O63me78vme15HXpUdLT3PLRRWc7liq/XNaKZJEhHN2ewzr0vHDwiq/ZBufa12JaalpaHp5BKm2Q812x2jEbctW60HTKdSqYfOHn0/mS+RNN951RrbRlW22y0p033P4vdj+jdPRkCkaqZtzcmJo+EOt1tc1zUPmbY8ku+eZkqseyaxue20TaBZymq1aiKTMm0kHwgz0PQwiGCbe8qeGbajlr+5alaq1TPz/Tgr3bt5xLTN6MCwsmOfCza4jvNOa7a2tnTn7OyDCYdg2/5B05GJ3OBBmr337FEvNs3b2zvy9y+Xy3qossPRultOuPce/2xkaLqzbhFsAs3aRUtlqfRKfkkZ1twywPRI8pjpWWKfkFQqFZVqh+1SoLkne/2fnIzkzE7EOCObMYHgdOTwO7X6ObCHfUzH6ITtW9iBzwx9RiYjp42ZCe3eewoiDXw+DU0qy8trtdplpBNN2aclKliWYUtLK7KTzT41pknTieT83NnY2M3nnw9seXp6tL4uq6/jsUzrrJvljMvLi4/F4gvHeVuvf5E+3HXbPdNslZNOZxYXc5XKXqPxtXu8f3D45vXLGN9PyyV/+OnPcT4oJAZHv/34+fNFoVAY/i3X19e//P53/PU0J19zIfbqpo/p1MP0vaR8yuJdm8QgdsDif2vJTM+FSWZ6yPP2vCTJZrhnwIQzPeolxfHez3/JRtnTZvKZHvitZbRSHMe7PBmVyWfajs19B+lxLknGYVrj9DQuScZhWuP0I+ftGafjXZ6MyoQzPXAxbe6N0zr35oA9bSaZ6b6L6fujtT1Uuzr3jncTZHg4TqMQO9Pxv8v6P3yrg1leXf0bw9dY/zFol2EsZ1zGYAL/G0oSAU2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI0CTaNA0yjQNAo0jQJNo0DTKNA0CjSNAk2jQNMo0DQKNI3CwrxvgIyM77U8z89kngzZvtNpGZpOKKK52azf3DQ6HdcT7b5svud15CXZ0dLz3EJhNZcrtlrfDE0nF9GczT7zunT8gKDaD+nW12pXYlpaGppOLmGa/VCz3TEacduy1aLpJBNJ851XrbFtUqmUlO02x+kkI1JFdU+lhrun0nVdw1VWwul6dZx3euC6bdVcrZ6ZcGpmgvQbmk4u2lGr5pMTR4Zt6aulRjVrqUj3bmg6uWhkd3Z29fD9+/dSnp190MPNzVJkQt6FppOKnXVvb+9ojco2gWbbypY0nVx87ZYFK1solV7ZJXW0NU0nFatTt0qlIpXl8qaurHTpFe29ucpKMEFq77JaLpejOe6JNU0nFX1GJtPtMMS3j7ttmiOZlgY+TSeV5eW1Wu1SNQek7DMTFSzLsKWlFdnJZp8a06TpRHJ+7mxs7Obzzwe2PD09Wl/fMub41vTFPydTvjcyMdIL+WLxheO8rde/SB/uuu2eaXZAKp3OLC7mKpW9RuNr93j/4HD290pmz38q9669iCgb4gAAAABJRU5ErkJggg=="},411706:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,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"},266438:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,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"},688692:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,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"},522112:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return l}});var n=s(667294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);