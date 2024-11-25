"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48134"],{608867:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"Events/onVpRangeChanged","title":"On VP Range Changed","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R6/Events/onVpRangeChanged.md","sourceDirName":"Events","slug":"/Events/onVpRangeChanged","permalink":"/docs/20-R6/Events/onVpRangeChanged","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onVpRangeChanged","title":"On VP Range Changed"},"sidebar":"docs","previous":{"title":"On Validate","permalink":"/docs/20-R6/Events/onValidate"},"next":{"title":"On VP Ready","permalink":"/docs/20-R6/Events/onVpReady"}}'),i=t("785893"),d=t("250065");let s={id:"onVpRangeChanged",title:"On VP Range Changed"},l=void 0,a={},c=[{value:"Description",id:"description",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Can be called by"}),(0,i.jsx)(n.th,{children:"Definition"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"61"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/20-R6/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})}),(0,i.jsx)(n.td,{children:"The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This event is generated when a change occurs within a cell range in the 4D View Pro document."}),"\n",(0,i.jsx)(n.p,{children:"The object returned by the FORM Event command contains:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"code"}),(0,i.jsx)(n.td,{children:"longint"}),(0,i.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"description"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheetName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Cell range of the change"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"changedCells"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Range containing only the changed cells. It can be a combined range."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["The type of operation generating the event:",(0,i.jsx)(n.li,{children:'"clear" - A clear range value operation'}),(0,i.jsx)(n.li,{children:'"dragDrop" - A drag and drop operation'}),(0,i.jsx)(n.li,{children:'"dragFill" - A drag fill operation'}),(0,i.jsx)(n.li,{children:'"evaluateFormula" - Setting a formula in a specified cell range'}),(0,i.jsx)(n.li,{children:'"paste" - A paste operation'}),(0,i.jsx)(n.li,{children:'"setArrayFormula" - Setting a formula in a specified cell range'}),(0,i.jsx)(n.li,{children:'"sort" - Sorting a range of cells'})]})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"/docs/20-R6/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(667294);let i={},d=r.createContext(i);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);