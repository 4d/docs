"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87266"],{402901:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"REST/expand","title":"$expand","description":"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo)","source":"@site/versioned_docs/version-20/REST/$expand.md","sourceDirName":"REST","slug":"/REST/expand","permalink":"/docs/20/REST/expand","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"expand","title":"$expand"},"sidebar":"docs","previous":{"title":"$entityset","permalink":"/docs/20/REST/entityset"},"next":{"title":"$filter","permalink":"/docs/20/REST/filter"}}'),o=n("785893"),r=n("250065");let a={id:"expand",title:"$expand"},s=void 0,d={},l=[{value:"Viewing an image attribute",id:"viewing-an-image-attribute",level:2},{value:"Saving a BLOB attribute to disk",id:"saving-a-blob-attribute-to-disk",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Expands an image stored in an Image attribute (",(0,o.jsx)(t.em,{children:"e.g."}),", ",(0,o.jsx)(t.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,o.jsx)(t.br,{}),"\nor",(0,o.jsx)(t.br,{}),"\nExpands an BLOB attribute to save it."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Compatibility"}),": For compatibility reasons, $expand can be used to expand a relational attribute (",(0,o.jsx)(t.em,{children:"e.g."}),", ",(0,o.jsx)(t.code,{children:"Company(1)?$expand=staff"})," or ",(0,o.jsx)(t.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). It is however recommended to use ",(0,o.jsx)(t.a,{href:"/docs/20/REST/attributes",children:(0,o.jsx)(t.code,{children:"$attributes"})})," for this feature."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"viewing-an-image-attribute",children:"Viewing an image attribute"}),"\n",(0,o.jsx)(t.p,{children:"If you want to view an image attribute in its entirety, write the following:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,o.jsxs)(t.p,{children:["For more information about the image formats, refer to ",(0,o.jsx)(t.a,{href:"/docs/20/REST/imageformat",children:(0,o.jsx)(t.code,{children:"$imageformat"})}),". For more information about the version parameter, refer to ",(0,o.jsx)(t.a,{href:"/docs/20/REST/version",children:(0,o.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"saving-a-blob-attribute-to-disk",children:"Saving a BLOB attribute to disk"}),"\n",(0,o.jsx)(t.p,{children:'If you want to save a BLOB stored in your dataclass, you can write the following by also passing "true" to $binary:'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(667294);let o={},r=i.createContext(o);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);