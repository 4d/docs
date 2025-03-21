"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13188"],{257933:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-get-format","title":"OBJECT Get format","description":"OBJECT Get format ( { ;} object* ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-format.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-format","permalink":"/docs/commands/object-get-format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-format.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-format","title":"OBJECT Get format","slug":"/commands/object-get-format","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get font style","permalink":"/docs/commands/object-get-font-style"},"next":{"title":"OBJECT Get help tip","permalink":"/docs/commands/object-get-help-tip"}}'),s=n("785893"),o=n("250065");let a={id:"object-get-format",title:"OBJECT Get format",slug:"/commands/object-get-format",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"OBJECT Get format"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"If specified, object is an object name (string) If omitted, object is a field or a variable"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Object name (if * is specified) or Field or variable (if * is omitted)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Object display format"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"OBJECT Get format"})," command returns the current display format applied to the object specified in the ",(0,s.jsx)(t.em,{children:"object"})," parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the optional ",(0,s.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is an object name (in this case, pass a string in ",(0,s.jsx)(t.em,{children:"object"}),"). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you do not pass a string, but a field or variable reference."]}),"\n",(0,s.jsxs)(t.p,{children:["This command returns the current display format of the object; in other words, the format as defined in the Design environment or using the ",(0,s.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})," command. ",(0,s.jsx)(t.strong,{children:"OBJECT Get format"})," works with all types of form objects (fields or variables) that accept a display format: Boolean, date, time, picture, string, number, as well as button grids, dials, thermometers, rulers, picture pop-up menus, picture buttons, 3D buttons, and list box headers. For more information on the display formats of these objects, refer to the documentation for the ",(0,s.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," If you apply the command to a set of objects, the form of the last object selected is returned."]}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.strong,{children:"OBJECT Get format"})," command is applied to objects whose format has been set using a longint constant (date, time or picture objects), the string returned corresponds to the character code of the constant. To obtain the value of the constant, simply apply the ",(0,s.jsx)(t.a,{href:"/docs/commands/character-code",children:"Character code"})," function to the result (see below)."]}),"\n",(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"This example allows you to obtain the value of the format constant applied to the picture variable named \u201Cmyphoto\u201D:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $format : Text\n\xa0OBJECT SET FORMAT(*;"myphoto";Char(On background))\n\xa0\xa0//Apply background format (value = 3)\n\xa0$format:=OBJECT Get format(*;"myphoto")\n\xa0ALERT("Format number:"+String(Character code($format)))\n\xa0\xa0//Display value "3"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"This example allows you to obtain the format applied to the Boolean field [Members]Marital_status:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $format : Text\n\xa0$format:=OBJECT Get format([Members]Marital_status)\n\xa0ALERT($format)\xa0//Display format, for example "Married;Single"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(t.p,{children:"Customized formats are returned untouched:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $format : Text\n\xa0OBJECT SET FORMAT(*;"timeinput";":m")\xa0//":" is required for single-char patterns\n\xa0$format:=OBJECT Get format(*;"timeinput")\xa0// ":m"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"894"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var r=n(667294);let s={},o=r.createContext(s);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);