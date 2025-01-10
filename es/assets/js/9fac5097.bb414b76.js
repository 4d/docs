"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3310"],{997475:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>s});var a=JSON.parse('{"id":"REST/expand","title":"$expand","description":"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$expand.md","sourceDirName":"REST","slug":"/REST/expand","permalink":"/docs/es/19/REST/expand","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"expand","title":"$expand"},"sidebar":"docs","previous":{"title":"$entityset","permalink":"/docs/es/19/REST/entityset"},"next":{"title":"$filter","permalink":"/docs/es/19/REST/filter"}}'),i=t("785893"),r=t("250065");let o={id:"expand",title:"$expand"},s=void 0,d={},l=[{value:"Visualizaci\xf3n de un atributo de imagen",id:"visualizaci\xf3n-de-un-atributo-de-imagen",level:2},{value:"Guardar un atributo BLOB en el disco",id:"guardar-un-atributo-blob-en-el-disco",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Expands an image stored in an Image attribute (",(0,i.jsx)(n.em,{children:"e.g."}),", ",(0,i.jsx)(n.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,i.jsx)(n.br,{})," or",(0,i.jsx)(n.br,{})," Expands an BLOB attribute to save it."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compatibilidad"}),": por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (",(0,i.jsx)(n.em,{children:"por ejemplo"}),", ",(0,i.jsx)(n.code,{children:"Company(1)?$expand=staff"})," o ",(0,i.jsx)(n.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). Sin embargo, se recomienda utilizar ",(0,i.jsx)(n.a,{href:"/docs/es/19/REST/attributes",children:(0,i.jsx)(n.code,{children:"$attributes"})})," para esta funcionalidad."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"visualizaci\xf3n-de-un-atributo-de-imagen",children:"Visualizaci\xf3n de un atributo de imagen"}),"\n",(0,i.jsx)(n.p,{children:"Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los formatos de imagen, consulte ",(0,i.jsx)(n.a,{href:"/docs/es/19/REST/imageformat",children:(0,i.jsx)(n.code,{children:"$imageformat"})}),". Para m\xe1s informaci\xf3n sobre el par\xe1metro de versi\xf3n, consulte ",(0,i.jsx)(n.a,{href:"/docs/es/19/REST/version",children:(0,i.jsx)(n.code,{children:"$version"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"guardar-un-atributo-blob-en-el-disco",children:"Guardar un atributo BLOB en el disco"}),"\n",(0,i.jsx)(n.p,{children:'Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente pasando tambi\xe9n "true" a $binary:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var a=t(667294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);