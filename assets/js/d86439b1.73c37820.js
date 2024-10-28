"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77754],{867149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(474848),r=n(28453);const i={id:"imageformat",title:"$imageformat"},s=void 0,a={id:"REST/imageformat",title:"$imageformat",description:"Defines which image format to use for retrieving images (e.g., $imageformat=png)",source:"@site/versioned_docs/version-20-R6/REST/$imageformat.md",sourceDirName:"REST",slug:"/REST/imageformat",permalink:"/docs/20-R6/REST/imageformat",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24imageformat.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"imageformat",title:"$imageformat"},sidebar:"docs",previous:{title:"$format",permalink:"/docs/20-R6/REST/format"},next:{title:"$lock",permalink:"/docs/20-R6/REST/lock"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Defines which image format to use for retrieving images (",(0,o.jsx)(t.em,{children:"e.g."}),", ",(0,o.jsx)(t.code,{children:"$imageformat=png"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Define which format to use to display images. You can use one of the following formats (extensions, mime types and OsType Mac are supported):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:'"best"'}),(0,o.jsx)(t.td,{children:"Best format based on the image"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:'".gif" or "image/gif"'}),(0,o.jsx)(t.td,{children:"GIF format"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:'".png" or "image/png"'}),(0,o.jsx)(t.td,{children:"PNG format"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:'".jpeg" or "image/jpeg"'}),(0,o.jsx)(t.td,{children:"JPEG format"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:'".tiff" or "image/tiff"'}),(0,o.jsx)(t.td,{children:"TIFF format"})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Once you have defined the format, you must pass the image attribute to ",(0,o.jsx)(t.a,{href:"/docs/20-R6/REST/expand",children:(0,o.jsx)(t.code,{children:"$expand"})})," to load the photo completely."]}),"\n",(0,o.jsxs)(t.p,{children:["If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object ",(0,o.jsx)(t.code,{children:"{}"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(296540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);