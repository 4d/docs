"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36618"],{460565:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/object-set-text-orientation","title":"OBJECT SET TEXT ORIENTATION","description":"OBJECT SET TEXT ORIENTATION ( { ;} object ; orientation* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-text-orientation.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-text-orientation","permalink":"/docs/commands/object-set-text-orientation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-text-orientation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-text-orientation","title":"OBJECT SET TEXT ORIENTATION","slug":"/commands/object-set-text-orientation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SUBFORM CONTAINER VALUE","permalink":"/docs/commands/object-set-subform-container-value"},"next":{"title":"OBJECT SET THREE STATES CHECKBOX","permalink":"/docs/commands/object-set-three-states-checkbox"}}'),s=n("785893"),i=n("250065");let o={id:"object-set-text-orientation",title:"OBJECT SET TEXT ORIENTATION",slug:"/commands/object-set-text-orientation",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"OBJECT SET TEXT ORIENTATION"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"object"})," ; ",(0,s.jsx)(t.em,{children:"orientation"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["Object name (if * is specified) or",(0,s.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"orientation"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Value of object orientation"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"OBJECT SET TEXT ORIENTATION"})," command modifies the orientation of the object(s) designated by the ",(0,s.jsx)(t.em,{children:"object"})," and ",(0,s.jsx)(t.em,{children:"*"})," parameters for the current process."]}),"\n",(0,s.jsxs)(t.p,{children:['The "Orientation" property, available in the Form editor, performs permanent rotations of text areas in your forms. Unlike this property, the ',(0,s.jsx)(t.strong,{children:"OBJECT SET TEXT ORIENTATION"})," command applies the rotation to the contents of the object, but not to the object itself. For more information, refer to the ",(0,s.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsxs)(t.p,{children:["Passing the optional ",(0,s.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).",(0,s.jsx)(t.br,{}),"\nOnly static text as well as non-enterable variables and fields can be rotated. If you apply this command to an object that does not support text orientation, the command does nothing."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.em,{children:"orientation"}),' parameter, you pass the absolute orientation that you want to assign to the object. You must use one of the following constants, found in the "',(0,s.jsx)(t.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Orientation 0\xb0"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"No rotation (default value)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Orientation 180\xb0"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"180"}),(0,s.jsx)(t.td,{children:"Orientation of text to 180\xb0 clockwise"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Orientation 90\xb0 left"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"270"}),(0,s.jsx)(t.td,{children:"Orientation of text to 90\xb0 counter-clockwise"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Orientation 90\xb0 right"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"90"}),(0,s.jsx)(t.td,{children:"Orientation of text to 90\xb0 clockwise"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Only angles corresponding to these values are supported. If you pass any other value, it will be ignored."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to apply an orientation of 270\xb0 to a variable in your form:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT SET ENTERABLE(*;"myVar";False)\n\xa0\xa0// mandatory if variable is enterable\n\xa0OBJECT SET TEXT ORIENTATION(*;"myVar";Orientation 90\xb0 left)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/commands/object-get-text-orientation",children:"OBJECT Get text orientation"})}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1284"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var r=n(667294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);