"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11229"],{214312:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/object-get-format","title":"OBJECT Get format","description":"OBJECT Get format ( { ;} object* ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-format.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-format","permalink":"/docs/commands/object-get-format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-format.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-format","title":"OBJECT Get format","slug":"/commands/object-get-format","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get font style","permalink":"/docs/commands/object-get-font-style"},"next":{"title":"OBJECT Get help tip","permalink":"/docs/commands/object-get-help-tip"}}'),o=n("785893"),s=n("250065");let a={id:"object-get-format",title:"OBJECT Get format",slug:"/commands/object-get-format",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"OBJECT Get format"})," ( {* ;} ",(0,o.jsx)(t.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operator"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"If specified, object is an object name (string) If omitted, object is a field or a variable"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"object"}),(0,o.jsx)(t.td,{children:"any"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Object name (if * is specified) or Field or variable (if * is omitted)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Function result"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Object display format"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"OBJECT Get format"})," command returns the current display format applied to the object specified in the ",(0,o.jsx)(t.em,{children:"object"})," parameter."]}),"\n",(0,o.jsxs)(t.p,{children:["If you pass the optional ",(0,o.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,o.jsx)(t.em,{children:"object"})," parameter is an object name (in this case, pass a string in ",(0,o.jsx)(t.em,{children:"object"}),"). If you do not pass this parameter, you indicate that the ",(0,o.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you do not pass a string, but a field or variable reference."]}),"\n",(0,o.jsxs)(t.p,{children:["This command returns the current display format of the object; in other words, the format as defined in the Design environment or using the ",(0,o.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})," command. ",(0,o.jsx)(t.strong,{children:"OBJECT Get format"})," works with all types of form objects (fields or variables) that accept a display format: Boolean, date, time, picture, string, number, as well as button grids, dials, thermometers, rulers, picture pop-up menus, picture buttons, 3D buttons, and list box headers. For more information on the display formats of these objects, refer to the documentation for the ",(0,o.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})," command."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," If you apply the command to a set of objects, the form of the last object selected is returned."]}),"\n",(0,o.jsxs)(t.p,{children:["When the ",(0,o.jsx)(t.strong,{children:"OBJECT Get format"})," command is applied to objects whose format has been set using a longint constant (date, time or picture objects), the string returned corresponds to the character code of the constant. To obtain the value of the constant, simply apply the ",(0,o.jsx)(t.a,{href:"/docs/commands/character-code",children:"Character code"})," function to the result (see below)."]}),"\n",(0,o.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(t.p,{children:"This example allows you to obtain the value of the format constant applied to the picture variable named \u201Cmyphoto\u201D:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0var $format : Text\n\xa0OBJECT SET FORMAT(*;"myphoto";Char(On background))\n\xa0\xa0//Apply background format (value = 3)\n\xa0$format:=OBJECT Get format(*;"myphoto")\n\xa0ALERT("Format number:"+String(Character code($format)))\n\xa0\xa0//Display value "3"\n'})}),"\n",(0,o.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(t.p,{children:"This example allows you to obtain the format applied to the Boolean field [Members]Marital_status:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0var $format : Text\n\xa0$format:=OBJECT Get format([Members]Marital_status)\n\xa0ALERT($format)\xa0//Display format, for example "Married;Single"\n'})}),"\n",(0,o.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsx)(t.p,{children:"Customized formats are returned untouched:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0var $format : Text\n\xa0OBJECT SET FORMAT(*;"timeinput";":m")\xa0//":" is required for single-char patterns\n\xa0$format:=OBJECT Get format(*;"timeinput")\xa0// ":m"\n'})}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var r=n(667294);let o={},s=r.createContext(o);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);