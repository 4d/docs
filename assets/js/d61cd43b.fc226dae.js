"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31303"],{506237:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/st-get-attributes","title":"ST GET ATTRIBUTES","description":"ST GET ATTRIBUTES ( { ;} object ; startSel ; endSel ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN*} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/st-get-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-attributes","permalink":"/docs/commands/st-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-attributes.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-get-attributes","title":"ST GET ATTRIBUTES","slug":"/commands/st-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST FREEZE EXPRESSIONS","permalink":"/docs/commands/st-freeze-expressions"},"next":{"title":"ST Get content type","permalink":"/docs/commands/st-get-content-type"}}'),s=n("785893"),i=n("250065");let d={id:"st-get-attributes",title:"ST GET ATTRIBUTES",slug:"/commands/st-get-attributes",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ST GET ATTRIBUTES"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"object"})," ; ",(0,s.jsx)(t.em,{children:"startSel"})," ; ",(0,s.jsx)(t.em,{children:"endSel"})," ; ",(0,s.jsx)(t.em,{children:"attribName"})," ; ",(0,s.jsx)(t.em,{children:"attribValue"})," {; ",(0,s.jsx)(t.em,{children:"attribName2"})," ; ",(0,s.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"attribNameN"})," ; ",(0,s.jsx)(t.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,s.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(t.br,{}),"Variable or field (if * is omitted)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startSel"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Start of text selection"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"endSel"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"End of text selection"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attribName"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Attribute to get"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attribValue"}),(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Current value of attribute"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ST GET ATTRIBUTES command is used to recover the current value of a style attribute in a selection of text of the form object(s) designated by ",(0,s.jsx)(t.em,{children:"object"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:""}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the optional ",(0,s.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is an object name (string). During execution, if the object has the focus, the command returns information about the object being edited; however, when the object does not have the focus, the command returns information about the data source (field or variable) of the object.",(0,s.jsx)(t.br,{}),"\nIf you omit the ",(0,s.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is a field or a variable. In this case, you pass a field or variable reference instead of a string and during execution, the command returns information about this field or variable."]}),"\n",(0,s.jsx)(t.h3,{id:"-1"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"startSel"})," and ",(0,s.jsx)(t.em,{children:"endSel"})," parameters are used to designate the text selection of the object from which the style attribute is to be read. Pass the position of the first character of the selection in ",(0,s.jsx)(t.em,{children:"startSel"})," and the position plus one of the last character of the selection in ",(0,s.jsx)(t.em,{children:"endSel"}),". You can pass 0 in ",(0,s.jsx)(t.em,{children:"endSel"})," to designate automatically the last character of the text (pass 1 in ",(0,s.jsx)(t.em,{children:"startSel"})," to designate the first character of the text).",(0,s.jsx)(t.br,{}),"\nIf the values of ",(0,s.jsx)(t.em,{children:"startSel"})," and ",(0,s.jsx)(t.em,{children:"endSel"})," are equal or if ",(0,s.jsx)(t.em,{children:"startSel"})," is greater than ",(0,s.jsx)(t.em,{children:"endSel"})," (except if ",(0,s.jsx)(t.em,{children:"endSel"})," value is 0, see above), an error is returned.",(0,s.jsx)(t.br,{}),"\nThe ",(0,s.jsx)(t.em,{children:"startSel"})," and ",(0,s.jsx)(t.em,{children:"endSel"})," values do not take any style tags already present in the area into account. They are evaluated on the basis of raw text (text from which style tags have been filtered)."]}),"\n",(0,s.jsxs)(t.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,s.jsx)(t.em,{children:"startSel"})," and ",(0,s.jsx)(t.em,{children:"endSel"}),' parameters. These constants are found in the "',(0,s.jsx)(t.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ST End highlight"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"-1001"}),(0,s.jsx)(t.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ST End text"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"Designates last character of text contained in object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ST Start highlight"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"-1000"}),(0,s.jsx)(t.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ST Start text"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["(*) You must pass an object name in ",(0,s.jsx)(t.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the name of the attribute to get in the ",(0,s.jsx)(t.em,{children:"attribName"})," parameter and pass a variable which must recover the current value of the attribute in the ",(0,s.jsx)(t.em,{children:"attribValue"})," parameter. To specify the ",(0,s.jsx)(t.em,{children:"attribName"})," parameter, you must use one of the constants of the ",(0,s.jsx)(t.em,{children:"Multistyle Text Attributes"})," theme."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute background color"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=Hexadecimal values or HTML color names (Windows only)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute bold style"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=0: remove bold attribute from selection",(0,s.jsx)(t.br,{}),(0,s.jsx)(t.em,{children:"attribValue"}),"=1: apply bold attribute to selection"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute font name"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=Font family name (string)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute italic style"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=0: remove italic attribute from selection",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.em,{children:"attribValue"}),"=1: apply italic attribute to selection"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute strikethrough style"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=0: remove strikethrough attribute from selection",(0,s.jsx)(t.br,{}),(0,s.jsx)(t.em,{children:"attribValue"}),"=1: apply strikethrough attribute to selection"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute text color"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=Hexadecimal values or HTML color names"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute text size"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=Number of points (number)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute underline style"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"attribValue"}),"=0: remove underline attribute from selection",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.em,{children:"attribValue"}),"=1: apply underline attribute to selection"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"You can pass as many attribute/value pairs as you want."}),"\n",(0,s.jsxs)(t.p,{children:["If the value of the ",(0,s.jsx)(t.em,{children:"attribName"})," attribute is the same for all of the selection, it is returned in ",(0,s.jsx)(t.em,{children:"attribValue"}),". If this value is different or if ",(0,s.jsx)(t.em,{children:"object"})," does not contain SPAN tags, the following values are returned:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"attribName"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"attribValue if attribute heterogenous in selection or no SPAN tags"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute background color"}),(0,s.jsx)(t.td,{children:"FFFFFFFF"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute bold style"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute font name"}),(0,s.jsx)(t.td,{children:'"" (empty string)'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute italic style"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute strikethrough style"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute text color"}),(0,s.jsx)(t.td,{children:"FFFFFFFF"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute text size"}),(0,s.jsx)(t.td,{children:"-1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute underline style"}),(0,s.jsx)(t.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:'Given a [Table_1]StyledText field displayed in a form. The object has the Multistyle property and is named "StyledText_t". You want to get the highlighted text as well as the status of the Bold style attribute. You can proceed in two different ways depending on whether you use the object name or the field reference.'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Using the object name:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)\n\xa0ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Using the field name:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)\n\xa0$text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)\n\xa0ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(t.p,{children:"After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags)."}),"\n",(0,s.jsx)(t.p,{children:"In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities."}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1094"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var r=n(667294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);