"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32842"],{469619:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/st-set-attributes","title":"ST SET ATTRIBUTES","description":"ST SET ATTRIBUTES ( { ;} object ; startSel ; endSel ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-attributes","permalink":"/docs/commands/st-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-attributes","title":"ST SET ATTRIBUTES","slug":"/commands/st-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT URL","permalink":"/docs/commands/st-insert-url"},"next":{"title":"ST SET OPTIONS","permalink":"/docs/commands/st-set-options"}}'),r=n("785893"),i=n("250065");let d={id:"st-set-attributes",title:"ST SET ATTRIBUTES",slug:"/commands/st-set-attributes",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ST SET ATTRIBUTES"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ; ",(0,r.jsx)(t.em,{children:"startSel"})," ; ",(0,r.jsx)(t.em,{children:"endSel"})," ; ",(0,r.jsx)(t.em,{children:"attribName"})," ; ",(0,r.jsx)(t.em,{children:"attribValue"})," {; ",(0,r.jsx)(t.em,{children:"attribName2"})," ; ",(0,r.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"attribNameN"})," ; ",(0,r.jsx)(t.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,r.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(t.br,{}),"Text field or variable (if * is omitted)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"startSel"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Start of new text selection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"endSel"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"End of new text selection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Attribute to set"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribValue"}),(0,r.jsx)(t.td,{children:"Text, Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"New value of attribute"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ST SET ATTRIBUTES command can be used to modify one or more style attributes in the form object(s) designated by ",(0,r.jsx)(t.em,{children:"object"}),"."]}),"\n",(0,r.jsx)(t.h5,{id:""}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). During execution, when the object has the focus, the command only applies to the object being edited and not to its data source (field or variable). The changes are only transferred to the source (and to any other objects using this same source) when the object being edited is validated either by losing the focus or with the ",(0,r.jsx)(t.strong,{children:"Enter"})," key. When the object does not have the focus, the command applies directly to the data source and the changes are immediately transferred to any other objects using the same source.",(0,r.jsx)(t.br,{}),"\nIf you omit the ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or variable and you pass a field or variable reference instead of a string. The command applies directly to the field or variable and changes are immediately transferred to all the objects using this source, including the object with the focus."]}),"\n",(0,r.jsx)(t.h5,{id:"-1"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," You can only use style attributes with Text type fields. Since Alpha type fields have a preset length, adding style tags would lead to a loss of data."]}),"\n",(0,r.jsxs)(t.p,{children:["The definition of an attribute is carried out via the insertion or modification of HTML style tags within the text (for more information about this point, refer to the ",(0,r.jsx)(t.em,{children:"Design Reference"})," manual). Note that ST SET ATTRIBUTES inserts style tags in all cases, even if the ",(0,r.jsx)(t.em,{children:"object"})," designates text objects of the form that do not have the Multistyle property."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"})," parameters can be used to designate the selection of text to which to apply the style modification(s) within the ",(0,r.jsx)(t.em,{children:"object"}),". In ",(0,r.jsx)(t.em,{children:"startSel"}),", you pass the position of the first character to be modified and in ",(0,r.jsx)(t.em,{children:"endSel"}),", you pass the position of the last character to be modified plus one (the last character passed is not included in the modification). You can pass 0 in ",(0,r.jsx)(t.em,{children:"endSel"})," to designate automatically the last character of the text (pass 1 in ",(0,r.jsx)(t.em,{children:"startSel"})," to designate the first character of the text).",(0,r.jsx)(t.br,{}),"\nIf the value of ",(0,r.jsx)(t.em,{children:"endSel"})," is greater than the number of characters in the object, all the characters between ",(0,r.jsx)(t.em,{children:"startSel"})," and the end of the text are modified. If ",(0,r.jsx)(t.em,{children:"startSel"})," is greater than ",(0,r.jsx)(t.em,{children:"endSel"})," (except when ",(0,r.jsx)(t.em,{children:"endSel"})," value is 0, see above), the command does nothing and the OK variable is set to 0.",(0,r.jsx)(t.br,{}),"\nThe ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"})," values do not take any style tags already present in the area into account. They are evaluated on the basis of raw text (text where style tags have been filtered)."]}),"\n",(0,r.jsxs)(t.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,r.jsx)(t.em,{children:"startSel"})," and ",(0,r.jsx)(t.em,{children:"endSel"}),' parameters. These constants are found in the "',(0,r.jsx)(t.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST End highlight"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"-1001"}),(0,r.jsx)(t.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST End text"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Designates last character of text contained in object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Start highlight"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"-1000"}),(0,r.jsx)(t.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ST Start text"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["(*) You must pass an object name in ",(0,r.jsx)(t.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"attribName"})," and ",(0,r.jsx)(t.em,{children:"attribValue"}),", pass the name and the value, respectively, of the attribute to be modified. You can pass as many attribute/value pairs as you want. To specify the ",(0,r.jsx)(t.em,{children:"attribName"})," parameter, use the predefined constants placed in the ",(0,r.jsx)(t.em,{children:"Multistyle Text Attributes"})," theme. The value passed in the ",(0,r.jsx)(t.em,{children:"attribValue"})," parameter depends on the ",(0,r.jsx)(t.em,{children:"attribName"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute background color"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=Hexadecimal values or HTML color names (Windows only)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute bold style"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=0: remove bold attribute from selection",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.em,{children:"attribValue"}),"=1: apply bold attribute to selection"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute font name"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=Font family name (string)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute italic style"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=0: remove italic attribute from selection",(0,r.jsx)(t.br,{})," ",(0,r.jsx)(t.em,{children:"attribValue"}),"=1: apply italic attribute to selection"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute strikethrough style"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=0: remove strikethrough attribute from selection",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.em,{children:"attribValue"}),"=1: apply strikethrough attribute to selection"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute text color"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"7"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=Hexadecimal values or HTML color names"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute text size"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"6"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=Number of points (number)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute underline style"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"4"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"attribValue"}),"=0: remove underline attribute from selection",(0,r.jsx)(t.br,{})," ",(0,r.jsx)(t.em,{children:"attribValue"}),"=1: apply underline attribute to selection"]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Colors"}),(0,r.jsx)(t.br,{}),"\nIf you pass the Attribute text color or Attribute background color constants in ",(0,r.jsx)(t.em,{children:"attribName"}),", you must pass a string containing either an HTML color name or a hexadecimal color value in ",(0,r.jsx)(t.em,{children:"attribValue"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"HTML color name"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Hexa value"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Aqua"}),(0,r.jsx)(t.td,{children:"#00FFFF"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Black"}),(0,r.jsx)(t.td,{children:"#000000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Blue"}),(0,r.jsx)(t.td,{children:"#0000FF"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Fuchsia"}),(0,r.jsx)(t.td,{children:"#FF00FF"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Gray"}),(0,r.jsx)(t.td,{children:"#808080"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Green"}),(0,r.jsx)(t.td,{children:"#008000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Lime"}),(0,r.jsx)(t.td,{children:"#00FF00"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maroon"}),(0,r.jsx)(t.td,{children:"#800000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Navy"}),(0,r.jsx)(t.td,{children:"#000080"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Olive"}),(0,r.jsx)(t.td,{children:"#808000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Purple"}),(0,r.jsx)(t.td,{children:"#800080"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Red"}),(0,r.jsx)(t.td,{children:"#FF0000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Silver"}),(0,r.jsx)(t.td,{children:"#C0C0C0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Teal"}),(0,r.jsx)(t.td,{children:"#008080"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"White"}),(0,r.jsx)(t.td,{children:"#FFFFFF"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Yellow"}),(0,r.jsx)(t.td,{children:"#FFFF00"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"In this example, we modify the size and color of the text as well as the bold and underline attributes of the characters 2 to 4 of the field:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags)."}),"\n",(0,r.jsx)(t.p,{children:"In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/font-list",children:"FONT LIST"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/st-get-attributes",children:"ST GET ATTRIBUTES"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1093"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);