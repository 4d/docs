"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67360"],{642010:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/st-get-plain-text","title":"ST Get plain text","description":"ST Get plain text ( { ;} object {; refMode*} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-get-plain-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-plain-text","permalink":"/docs/20-R7/commands/st-get-plain-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-plain-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-get-plain-text","title":"ST Get plain text","slug":"/commands/st-get-plain-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET OPTIONS","permalink":"/docs/20-R7/commands/st-get-options"},"next":{"title":"ST Get text","permalink":"/docs/20-R7/commands/st-get-text"}}'),r=n("785893"),i=n("250065");let d={id:"st-get-plain-text",title:"ST Get plain text",slug:"/commands/st-get-plain-text",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ST Get plain text"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," {; ",(0,r.jsx)(t.em,{children:"refMode"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,r.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(t.br,{}),"Variable or field (if * is omitted)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"refMode"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Mode for handling references found in the text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Text without tags"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ST Get plain text command removes any style tags from the text variable or field designated by the ",(0,r.jsx)(t.em,{children:"*"})," and ",(0,r.jsx)(t.em,{children:"object"})," parameters and returns the plain text."]}),"\n",(0,r.jsx)(t.h5,{id:""}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). During execution, if the object has the focus, the command returns information about the object being edited; however, when the object does not have the focus, the command returns information about the data source (field or variable) of the object.",(0,r.jsx)(t.br,{}),"\nIf you omit the ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or a variable. In this case, you pass a field or variable reference instead of a string and during execution, the command returns information about this field or variable."]}),"\n",(0,r.jsx)(t.h5,{id:"-1"}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"refMode"})," parameter indicates the way that references found in ",(0,r.jsx)(t.em,{children:"object"})," must be returned. In ",(0,r.jsx)(t.em,{children:"refMode"}),', pass one of the following constants, found in the "',(0,r.jsx)(t.em,{children:"Multistyle Text"}),'" theme (you can pass a single constant or a combination):']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST 4D Expressions as sources"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"The original string of 4D expression references is returned"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST 4D Expressions as values"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"4D expression references are returned in their evaluated form (default functioning in forms)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST References as spaces"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Each reference is returned as a non-breaking space character (default operation, used by other commands)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Tags as plain text"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"64"}),(0,r.jsxs)(t.td,{children:["The label of the tag is returned in plain text. For example for the tag '",(0,r.jsx)(t.img,{src:"test.jpg",alt:"picture"}),'my picture\', the plain text is "my picture" (default functioning in forms)']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Tags as XML code"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"128"}),(0,r.jsxs)(t.td,{children:["The XML code of the tag is returned in plain text. For example for the tag '",(0,r.jsx)(t.img,{src:"test.jpg",alt:"picture"}),"my picture', the plain text is '",(0,r.jsx)(t.img,{src:"test.jpg",alt:"picture"}),"my picture'"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Text displayed with 4D Expression sources"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"86"}),(0,r.jsxs)(t.td,{children:["Returns the text as it is shown in the forms with the original string of the 4D expressions.",(0,r.jsx)(t.br,{}),"Corresponds a predefined combination of constants 2+4+16+64."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Text displayed with 4D Expression values"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"85"}),(0,r.jsxs)(t.td,{children:["Returns the text as it is shown in the forms with the 4D expressions in their evaluated form.",(0,r.jsx)(t.br,{}),"Corresponds to a predefined combination of constants 1+4+16+64."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST URL as labels"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:'The visible label of URLs is returned, for example "Visit our Web site" (default functioning in forms)'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST URL as links"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsxs)(t.td,{children:['The link is returned, for example "',(0,r.jsx)(t.a,{href:"http://www.4d.com",children:"http://www.4d.com"}),'"']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST User links as labels"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"16"}),(0,r.jsx)(t.td,{children:"The visible label of the user link is returned (default functioning in forms)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST User links as links"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"32"}),(0,r.jsx)(t.td,{children:"The contents of the user link is returned"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Since plain text remains the same regardless of the values passed in the ",(0,r.jsx)(t.em,{children:"refMode"})," parameter, the optional ",(0,r.jsx)(t.em,{children:"refMode"})," parameter is only useful when the text contains references."]}),"\n",(0,r.jsx)(t.li,{children:"If a 4D Write Pro document contains tables, the content of each cell is treated as individual paragraphs and returned as text separated by tabs. Rows are separated by carriage returns."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(t.p,{children:['You are looking for the text "very nice" among the values of a multistyle text field. The value was stored in the following form: "The weather is very nice ',(0,r.jsx)(t.strong,{children:"today"}),'".']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Comments];ST Get plain text([Comments]Weather)="@very nice@")\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," In this context, the following statement will not give the desired result because the text is saved with style tags:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0QUERY([Comments];[Comments]Weather="@very nice@")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:'Given the following text placed in the multi-style area entitled "MyArea":'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-RAW",children:"It is now   Go to the 4D site or Open a window\n"})}),"\n",(0,r.jsx)(t.p,{children:"This text is displayed:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(310015).Z+"",width:"348",height:"43"})}),"\n",(0,r.jsx)(t.p,{children:"If you execute the following code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$txt :=ST Get plain text(*;"myArea";ST References as spaces)\n\xa0\xa0// $txt = "It is now\xa0\xa0\xa0 or " (spaces)\n\xa0$txt :=ST Get plain text(*;"myArea";ST 4D Expressions as values)\n\xa0\xa0// $txt = "It is now 15:48:19\xa0 or\xa0 "\n\xa0$txt :=ST Get plain text(*;"myArea";ST 4D Expressions as sources)\n\xa0\xa0// $txt = "It is now Current time\xa0 or\xa0 "\n\xa0$txt :=ST Get plain text(*;"myArea";ST URL as links)\n\xa0\xa0//$txt = "It is now\xa0\xa0 http://www.4d.com or\xa0 "\n\xa0$txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression values)\n\xa0\xa0//$txt = "It is now 15:48:19 Go to the 4D site or Open a window"\n\xa0$txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression sources)\n\xa0\xa0//$txt = "It is now Current time Go to 4D site or Open a window"\n\xa0$txt :=ST Get plain text(*;"myArea";ST User links as labels)\n\xa0\xa0//$txt = "It is now\xa0\xa0\xa0 or Open a window"\n\xa0$txt :=ST Get plain text(*;"myArea";ST User links as links)\n\xa0\xa0//$txt = "It is now\xa0\xa0\xa0 or openW"\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags)."}),"\n",(0,r.jsx)(t.p,{children:"In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/st-get-text",children:"ST Get text"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/st-set-text",children:"ST SET TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/text-to-array",children:"TEXT TO ARRAY"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1092"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},310015:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);