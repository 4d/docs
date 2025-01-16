"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72203"],{580706:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"Events/onColumnResize","title":"On Column Resize","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R7/Events/onColumnResize.md","sourceDirName":"Events","slug":"/Events/onColumnResize","permalink":"/docs/20-R7/Events/onColumnResize","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonColumnResize.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onColumnResize","title":"On Column Resize"},"sidebar":"docs","previous":{"title":"On Column Moved","permalink":"/docs/20-R7/Events/onColumnMoved"},"next":{"title":"On Data Change","permalink":"/docs/20-R7/Events/onDataChange"}}'),s=t("785893"),r=t("250065");let o={id:"onColumnResize",title:"On Column Resize"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Can be called by"}),(0,s.jsx)(n.th,{children:"Definition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"33"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,s.jsx)(n.a,{href:"/docs/20-R7/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/20-R7/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,s.jsx)(n.td,{children:"The width of a column is modified directly by the user or consequently to a form window resize"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,s.jsxs)(n.p,{children:['This event is generated when the width of a column in the list box is modified by a user. The event is triggered "live", ',(0,s.jsx)(n.em,{children:"i.e."}),", sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the ",(0,s.jsx)(n.code,{children:"RESIZE FORM WINDOW"})," command)."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Column Resize"})," event is not triggered when a ",(0,s.jsx)(n.a,{href:"/docs/20-R7/FormObjects/propertiesResizingOptions#about-the-fake-blank-column",children:"fake column"})," is resized."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,s.jsxs)(n.p,{children:["This event is generated when the width of a column is modified by a user. On this context, the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/Events/overview#event-object",children:"event object"})," returned by the ",(0,s.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"longint"}),(0,s.jsx)(n.td,{children:"On Column Resize"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'"On Column Resize"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Cell range of the columns whose widths have changed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"True if the row header column (first column) is resized, else false"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n'})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);