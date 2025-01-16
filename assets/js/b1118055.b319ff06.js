"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67942"],{419489:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/svg-show-element","title":"SVG SHOW ELEMENT","description":"SVG SHOW ELEMENT ( { ;} pictureObject ; id {; margin*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/svg-show-element.md","sourceDirName":"commands-legacy","slug":"/commands/svg-show-element","permalink":"/docs/20-R7/commands/svg-show-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-show-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"svg-show-element","title":"SVG SHOW ELEMENT","slug":"/commands/svg-show-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG SET ATTRIBUTE","permalink":"/docs/20-R7/commands/svg-set-attribute"},"next":{"title":"Secured Protocol","permalink":"/docs/20-R7/category/secured-protocol"}}'),i=n("785893"),r=n("250065");let d={id:"svg-show-element",title:"SVG SHOW ELEMENT",slug:"/commands/svg-show-element",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SVG SHOW ELEMENT"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"pictureObject"})," ; ",(0,i.jsx)(t.em,{children:"id"})," {; ",(0,i.jsx)(t.em,{children:"margin"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, pictureObject is an object name (string) ",(0,i.jsx)(t.br,{}),"If omitted, pictureObject is a variable"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pictureObject"}),(0,i.jsx)(t.td,{children:"Picture"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * specified) or ",(0,i.jsx)(t.br,{}),"Variable or field (if * omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"ID attribute of element to display"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"margin"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Margin of visibility (in pixels by default)"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The SVG SHOW ELEMENT command moves the ",(0,i.jsx)(t.em,{children:"pictureObject"}),' SVG document in order to show the element whose "id" attribute is specified by the ',(0,i.jsx)(t.em,{children:"id"})," parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"pictureObject"})," parameter is an object name (string). In this case, the command applies to the rendered picture attached to the object. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"pictureObject"})," parameter is a field or a variable and you pass a variable (object variable only) or field reference instead of a string. In this case, the command applies to the rendered pictures of all the objects that use the variable (but not the initial rendered picture)."]}),"\n",(0,i.jsxs)(t.p,{children:["The command moves the SVG document so that all of the object, whose limits are defined by its bounding rectangle, is visible. The ",(0,i.jsx)(t.em,{children:"margin"})," parameter is used to configure the amplitude of the movement by specifying the distance that must separate the object displayed from the borders of the document. In other words, the bounding rectangle will be increased by ",(0,i.jsx)(t.em,{children:"margin"})," pixels in width and in height. By default, the movement value is 4 pixels."]}),"\n",(0,i.jsx)(t.p,{children:'This command only takes effect in "top left" display mode (with scrollbars).'}),"\n",(0,i.jsxs)(t.p,{children:["If this command is not executed in the context of a form or if an invalid ",(0,i.jsx)(t.em,{children:"pictureObject"})," is passed, the ",(0,i.jsx)(t.em,{children:"OK"})," variable is set to 0. If the command is executed correctly, it is set to 1."]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1108"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Modifies variables"}),(0,i.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);