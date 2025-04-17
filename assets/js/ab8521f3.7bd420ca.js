"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49020"],{654584:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>s});var t=JSON.parse('{"id":"commands-legacy/collection-to-array","title":"COLLECTION TO ARRAY","description":"COLLECTION TO ARRAY ( collection ; array {; propertyName}{; array2 ; propertyName2 ; ... ; arrayN ; propertyNameN} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/collection-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/collection-to-array","permalink":"/docs/20-R8/commands/collection-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcollection-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"collection-to-array","title":"COLLECTION TO ARRAY","slug":"/commands/collection-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO COLLECTION","permalink":"/docs/20-R8/commands/array-to-collection"},"next":{"title":"New collection","permalink":"/docs/20-R8/commands/new-collection"}}'),o=r("785893"),l=r("250065");let c={id:"collection-to-array",title:"COLLECTION TO ARRAY",slug:"/commands/collection-to-array",displayed_sidebar:"docs"},s=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"COLLECTION TO ARRAY"})," ( ",(0,o.jsx)(n.em,{children:"collection"})," ; ",(0,o.jsx)(n.em,{children:"array"})," {; ",(0,o.jsx)(n.em,{children:"propertyName"}),"}{; ",(0,o.jsx)(n.em,{children:"array2"})," ; ",(0,o.jsx)(n.em,{children:"propertyName2"})," ; ... ; ",(0,o.jsx)(n.em,{children:"arrayN"})," ; ",(0,o.jsx)(n.em,{children:"propertyNameN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"collection"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Collection to copy in array(s)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"array"}),(0,o.jsx)(n.td,{children:"Array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Array to receive the elements of the collection; if propertyName passed, array to receive the values of propertyName in the collection"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"propertyName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:'Object property name whose values to copy in array ("" for all elements)'})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"COLLECTION TO ARRAY"})," command fills one or more ",(0,o.jsx)(n.em,{children:"array"}),"(s) with elements or ",(0,o.jsx)(n.em,{children:"propertyName"})," values from the ",(0,o.jsx)(n.em,{children:"collection"})," into the ",(0,o.jsx)(n.em,{children:"array"}),"(s)."]}),"\n",(0,o.jsxs)(n.p,{children:["This command can work with a ",(0,o.jsx)(n.em,{children:"collection"})," that contains values or a ",(0,o.jsx)(n.em,{children:"collection"})," that contains objects, in which case the ",(0,o.jsx)(n.em,{children:"propertyName"})," parameter(s) are mandatory."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you omit the ",(0,o.jsx)(n.em,{children:"propertyName"})," parameter, the command copies all ",(0,o.jsx)(n.em,{children:"collection"})," elements to ",(0,o.jsx)(n.em,{children:"array"}),". After the command is executed, the size of ",(0,o.jsx)(n.em,{children:"array"})," is identical to the ",(0,o.jsx)(n.em,{children:"collection"})," length."]}),"\n",(0,o.jsxs)(n.li,{children:["If you pass one or more ",(0,o.jsx)(n.em,{children:"propertyName"}),"(s) parameter, ",(0,o.jsx)(n.em,{children:"collection"})," must be a collection of objects (other elements are ignored). In this case, each ",(0,o.jsx)(n.em,{children:"propertyName"})," parameter indicates the name of a property within each object of the collection whose value(s) you want to copy in the corresponding ",(0,o.jsx)(n.em,{children:"array"}),". You can pass any ",(0,o.jsx)(n.em,{children:"propertyName"})," / ",(0,o.jsx)(n.em,{children:"array"})," pairs you want, mixing array types. After the command is executed, each size of ",(0,o.jsx)(n.em,{children:"array"})," is identical to the ",(0,o.jsx)(n.em,{children:"collection"})," length."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In all cases, 4D converts the collection elements or values according to the type of ",(0,o.jsx)(n.em,{children:"array"})," (if necessary). Conversion rules are detailed in the ",(0,o.jsx)(n.em,{children:"Type conversions between collections and 4D arrays"})," page."]}),"\n",(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.p,{children:"You want to copy a collection of strings in a text array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $fruits : Collection\n\xa0$fruits:=New collection("Orange";"Banana";"Apple";"Grape")\n\xa0ARRAY TEXT($artFruits;0)\n\xa0COLLECTION TO ARRAY($fruits;$artFruits)\n\xa0\xa0//$artFruits{1}="Orange"\n\xa0\xa0//$artFruits{2}="Banana"\n\xa0\xa0//...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"You want to copy different property values from a collection of objects in different arrays:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0ARRAY TEXT($city;0)\n\xa0ARRAY LONGINT($zipCode;0)\n\xa0$col.push(New object("name";"Cleveland";"zc";35049))\n\xa0$col.push(New object("name";"Blountsville";"zc";35031))\n\xa0$col.push(New object("name";"Adger";"zc";35006))\n\xa0$col.push(New object("name";"Clanton";"zc";35046))\n\xa0$col.push(New object("name";"Shelby";"zc";35143))\n\xa0\n\xa0COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")\n\xa0\xa0//$city{1}="Cleveland", $zipCode{1}=35049\n\xa0\xa0//$city{2}="Blountsville", $zipCode{2}=35031\n\xa0\xa0//...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/20-R8/commands/array-to-collection",children:"ARRAY TO COLLECTION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Type conversions between collections and 4D arrays"})]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1562"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return c}});var t=r(667294);let o={},l=t.createContext(o);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);