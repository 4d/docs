"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31696"],{387009:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"REST/imageformat","title":"$imageformat","description":"Defines which image format to use for retrieving images (e.g., $imageformat=png)","source":"@site/versioned_docs/version-20/REST/$imageformat.md","sourceDirName":"REST","slug":"/REST/imageformat","permalink":"/docs/20/REST/imageformat","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24imageformat.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"imageformat","title":"$imageformat"},"sidebar":"docs","previous":{"title":"$filter","permalink":"/docs/20/REST/filter"},"next":{"title":"$lock","permalink":"/docs/20/REST/lock"}}'),i=n("785893"),o=n("250065");let s={id:"imageformat",title:"$imageformat"},a=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Defines which image format to use for retrieving images (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:"$imageformat=png"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Define which format to use to display images. You can use one of the following formats (extensions, mime types and OsType Mac are supported):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"best"'}),(0,i.jsx)(t.td,{children:"Best format based on the image"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".gif" or "image/gif"'}),(0,i.jsx)(t.td,{children:"GIF format"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".png" or "image/png"'}),(0,i.jsx)(t.td,{children:"PNG format"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".jpeg" or "image/jpeg"'}),(0,i.jsx)(t.td,{children:"JPEG format"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".tiff" or "image/tiff"'}),(0,i.jsx)(t.td,{children:"TIFF format"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have defined the format, you must pass the image attribute to ",(0,i.jsx)(t.a,{href:"/docs/20/REST/expand",children:(0,i.jsx)(t.code,{children:"$expand"})})," to load the photo completely."]}),"\n",(0,i.jsxs)(t.p,{children:["If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object ",(0,i.jsx)(t.code,{children:"{}"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo"})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(667294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);