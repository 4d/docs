"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53743"],{341146:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/load-list","title":"Load list","description":"Load list ( listName ) : ListRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/load-list.md","sourceDirName":"commands-legacy","slug":"/commands/load-list","permalink":"/docs/20-R7/commands/load-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-list","title":"Load list","slug":"/commands/load-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST OF CHOICE LISTS","permalink":"/docs/20-R7/commands/list-of-choice-lists"},"next":{"title":"New list","permalink":"/docs/20-R7/commands/new-list"}}'),i=t("785893"),r=t("250065");let o={id:"load-list",title:"Load list",slug:"/commands/load-list",displayed_sidebar:"docs"},a=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Load list"})," ( ",(0,i.jsx)(n.em,{children:"listName"})," ) : ListRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"listName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Name of a list created in the Design environment List Editor"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"ListRef"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"List reference number of newly created list"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Load list"})," creates a new hierarchical list whose contents are copied from the list and whose name you pass in ",(0,i.jsx)(n.em,{children:"listName"}),". It then returns the list reference number to the newly created list."]}),"\n",(0,i.jsxs)(n.p,{children:["To find out the lists specified in the database, use the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/list-of-choice-lists",children:"LIST OF CHOICE LISTS"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["To make sure that the list specified by ",(0,i.jsx)(n.em,{children:"listName"})," exists, use the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/is-a-list",children:"Is a list"})," function."]}),"\n",(0,i.jsx)(n.p,{children:"Note that the new list is a copy of the list defined in the Design environment. Consequently, any modifications made to the new list will not affect the list defined in the Design environment. Conversely, any subsequent modifications made to the list defined in the Design environment will not affect the list that you just created."}),"\n",(0,i.jsxs)(n.p,{children:["If you modify the newly created list and want to permanently save the changes, call ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/save-list",children:"SAVE LIST"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Remember to call ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/clear-list",children:"CLEAR LIST"})," in order to delete the newly created list when you have finished with it. Otherwise, it will stay in memory until the end of the working session or until the process in which it was created ends or is aborted."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," If you associate a list with a form object (hierarchical list, tab control, or hierarchical pop-up menu) using the Choice List property in the Property List window, you do not need to call ",(0,i.jsx)(n.strong,{children:"Load list"})," or ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/clear-list",children:"CLEAR LIST"})," from the method of the object. 4D loads and clears the list automatically for you."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["You create a database for the international market and you need to switch to different languages while using the database. In a form, you present a hierarchical list, named ",(0,i.jsx)(n.em,{children:"hlList"}),", that proposes a list of standard options. In the Design environment, you have prepared various lists, such as \u201CStd Options US\u201D for the English version, \u201CStd Options FR\u201D for the French version, \u201CStd Options SP\u201D for the Spanish version, and so on. In addition, you maintain an interprocess variable, named ",(0,i.jsx)(n.em,{children:"\u25CAgsCurrentLanguage"}),", where you store a 2-character language code, such as \u201CUS\u201D for the English version, \u201CFR\u201D for the French version, \u201CSP\u201D for the Spanish version, and so on. To make sure that your list will always be loaded using the current selected language, you can write:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// hlList Hierarchical List Object Method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var hlList : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlList:=Load list("Std Options"+\u25CAgsCurrentLanguage)\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0End case\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/clear-list",children:"CLEAR LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/is-a-list",children:"Is a list"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"383"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);