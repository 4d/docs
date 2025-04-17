"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58108"],{708134:function(e,t,o){o.r(t),o.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>s});var a=JSON.parse('{"id":"REST/expand","title":"$expand","description":"Expande uma imagem armazenada em um atributo Image (\\\\*por exemplo, Employee(1)/photo?$imageformat=best&$expand=photo)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/REST/$expand.md","sourceDirName":"REST","slug":"/REST/expand","permalink":"/docs/pt/20-R8/REST/expand","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"expand","title":"$expand"},"sidebar":"docs","previous":{"title":"$entityset","permalink":"/docs/pt/20-R8/REST/entityset"},"next":{"title":"$filter","permalink":"/docs/pt/20-R8/REST/filter"}}'),n=o("785893"),r=o("250065");let i={id:"expand",title:"$expand"},s=void 0,d={},l=[{value:"Vendo um atributo de imagem",id:"vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"salvar-um-atributo-blob-ao-disco",level:2}];function m(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Expande uma imagem armazenada em um atributo Image (*por exemplo, ",(0,n.jsx)(t.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,n.jsx)(t.br,{}),"\nou",(0,n.jsx)(t.br,{}),"\nExpande um atributo BLOB para salv\xe1-lo."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Compatibilidad"}),": por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (",(0,n.jsx)(t.em,{children:"por ejemplo"}),", ",(0,n.jsx)(t.code,{children:"Company(1)?$expand=staff"})," o ",(0,n.jsx)(t.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). No entanto, \xe9 recomend\xe1vel usar ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R8/REST/attributes",children:(0,n.jsx)(t.code,{children:"$attributes"})})," para essa funcionalidade."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"vendo-um-atributo-de-imagem",children:"Vendo um atributo de imagem"}),"\n",(0,n.jsx)(t.p,{children:"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,n.jsxs)(t.p,{children:["Para obter mais informa\xe7\xf5es sobre os formatos de imagem, consulte ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R8/REST/imageformat",children:(0,n.jsx)(t.code,{children:"$imageformat"})}),". Para obter mais informa\xe7\xf5es sobre o par\xe2metro version, consulte ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R8/REST/version",children:(0,n.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"salvar-um-atributo-blob-ao-disco",children:"Salvar um atributo BLOB ao disco"}),"\n",(0,n.jsx)(t.p,{children:'Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando tamb\xe9m "true" a $binary:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return s},a:function(){return i}});var a=o(667294);let n={},r=a.createContext(n);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);