"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24775"],{934830:function(e,t,r){r.r(t),r.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"Events/onDragOver","title":"On Drag Over","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20/Events/onDragOver.md","sourceDirName":"Events","slug":"/Events/onDragOver","permalink":"/docs/20/Events/onDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onDragOver","title":"On Drag Over"},"sidebar":"docs","previous":{"title":"On Double Clicked","permalink":"/docs/20/Events/onDoubleClicked"},"next":{"title":"On Drop","permalink":"/docs/20/Events/onDrop"}}'),o=r("785893"),s=r("250065");let i={id:"onDragOver",title:"On Drag Over"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:4}];function h(e){let t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Can be called by"}),(0,o.jsx)(t.th,{children:"Definition"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"21"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(t.td,{children:"Data could be dropped onto an object"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event is repeatedly sent to the destination object when the mouse pointer is moved over the object. In response to this event, you usually:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Get the data and signatures found in the pasteboard (via the ",(0,o.jsx)(t.code,{children:"GET PASTEBOARD DATA"})," command)."]}),"\n",(0,o.jsxs)(t.li,{children:["Depending on the nature and type of data in the pasteboard, you ",(0,o.jsx)(t.strong,{children:"accept"})," or ",(0,o.jsx)(t.strong,{children:"reject"})," the drag and drop."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To ",(0,o.jsx)(t.strong,{children:"accept"})," the drag, the destination object method must return 0 (zero), so you write ",(0,o.jsx)(t.code,{children:"$0:=0"}),".\nTo ",(0,o.jsx)(t.strong,{children:"reject"})," the drag, the object method must return -1 (minus one), so you write ",(0,o.jsx)(t.code,{children:"$0:=-1"}),".\nDuring an ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event, 4D treats the object method as a function. If no result is returned, 4D assumes that the drag is accepted."]}),"\n",(0,o.jsxs)(t.p,{children:["If you accept the drag, the destination object is highlighted. If you reject the drag, the destination is not highlighted. Accepting the drag does not mean that the dragged data is going to be inserted into the destination object. It only means that if the mouse button was released at this point, the destination object would accept the dragged data and the ",(0,o.jsx)(t.a,{href:"/docs/20/Events/onDrop",children:(0,o.jsx)(t.code,{children:"On Drop"})})," event would be fired."]}),"\n",(0,o.jsxs)(t.p,{children:["If you do not process the ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event for a droppable object, that object will be highlighted for all drag over operations, no matter what the nature and type of the dragged data."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event is the means by which you control the first phase of a drag-and-drop operation. Not only can you test whether the dragged data is of a type compatible with the destination object, and then accept or reject the drag; you can simultaneously notify the user of this fact, because 4D highlights (or not) the destination object, based on your decision."]}),"\n",(0,o.jsxs)(t.p,{children:["The code handling an ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event should be short and execute quickly, because that event is sent repeatedly to the current destination object, due to the movements of the mouse."]}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/20/Events/onBeginDragOver",children:(0,o.jsx)(t.code,{children:"On Begin Drag Over"})})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);