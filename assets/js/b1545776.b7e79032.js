"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7932"],{956823:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"ViewPro/commands/vp-convert-from-4d-view","title":"VP Convert from 4D View","description":"VP Convert from 4D View ( 4DViewDocument Object","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-convert-from-4d-view.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-convert-from-4d-view","permalink":"/docs/20-R6/ViewPro/commands/vp-convert-from-4d-view","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-from-4d-view.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-convert-from-4d-view","title":"VP Convert from 4D View"},"sidebar":"docs","previous":{"title":"VP Combine ranges","permalink":"/docs/20-R6/ViewPro/commands/vp-combine-ranges"},"next":{"title":"VP Convert to picture","permalink":"/docs/20-R6/ViewPro/commands/vp-convert-to-picture"}}'),r=t("785893"),i=t("250065");let c={id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},s=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function a(e){let n={blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Convert from 4D View"})," ( ",(0,r.jsx)(n.em,{children:"4DViewDocument"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4DViewDocument"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"4D View Pro object"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Convert from 4D View"})," command allows you to convert a legacy 4D View document into a 4D View Pro object."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This command does not require that the legacy 4D View plug-in be installed in your environment."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"4DViewDocument"})," parameter, pass a BLOB variable or field containing the 4D View document to convert. The command returns a 4D View Pro object into which all the information originally stored within the 4D View document is converted to 4D View Pro attributes."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to get a 4D View Pro object from a 4D View area stored in a BLOB:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_OBJECT($vpObj)\n$vpObj:=VP Convert from 4D View($pvblob)\n"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var o=t(667294);let r={},i=o.createContext(r);function c(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);