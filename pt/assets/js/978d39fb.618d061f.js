"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89219"],{651739:function(e,a,t){t.r(a),t.d(a,{metadata:()=>o,contentTitle:()=>d,default:()=>c,assets:()=>s,toc:()=>m,frontMatter:()=>i});var o=JSON.parse('{"id":"REST/expand","title":"$expand","description":"Expande uma imagem armazenada num atributo Image (, por exemplo,, Employee(1)/photo?$imageformat=best&$expand=photo) ou Expande um atributo BLOB para o guardar.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$expand.md","sourceDirName":"REST","slug":"/REST/expand","permalink":"/docs/pt/19/REST/expand","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"expand","title":"$expand"},"sidebar":"docs","previous":{"title":"$entityset","permalink":"/docs/pt/19/REST/entityset"},"next":{"title":"$filter","permalink":"/docs/pt/19/REST/filter"}}'),n=t("785893"),r=t("250065");let i={id:"expand",title:"$expand"},d=void 0,s={},m=[{value:"Vendo um atributo de imagem",id:"vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"salvar-um-atributo-blob-ao-disco",level:2}];function l(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Expande uma imagem armazenada num atributo Image (",(0,n.jsx)(a.em,{children:", por exemplo,"}),", ",(0,n.jsx)(a.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,n.jsx)(a.br,{})," ou",(0,n.jsx)(a.br,{})," Expande um atributo BLOB para o guardar."]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Compatibilidade"}),": Por raz\xf5es de compatibilidade, $expand pode ser utilizado para expandir um atributo relacional (",(0,n.jsx)(a.em,{children:"e.g."}),", ",(0,n.jsx)(a.code,{children:"Company(1)?$expand=staff"})," ou ",(0,n.jsx)(a.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). No entanto, recomenda-se a utiliza\xe7\xe3o do endere\xe7o ",(0,n.jsx)(a.a,{href:"/docs/pt/19/REST/attributes",children:(0,n.jsx)(a.code,{children:"$attributes"})})," para esta funcionalidade."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"vendo-um-atributo-de-imagem",children:"Vendo um atributo de imagem"}),"\n",(0,n.jsx)(a.p,{children:"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,n.jsxs)(a.p,{children:["Para saber mais sobre formatos de imagem, veja ",(0,n.jsx)(a.a,{href:"/docs/pt/19/REST/imageformat",children:(0,n.jsx)(a.code,{children:"$imageformat"})}),". Para saber mais sobre par\xe2metros de vers\xe3o, veja ",(0,n.jsx)(a.a,{href:"/docs/pt/19/REST/version",children:(0,n.jsx)(a.code,{children:"$version"})}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"salvar-um-atributo-blob-ao-disco",children:"Salvar um atributo BLOB ao disco"}),"\n",(0,n.jsx)(a.p,{children:'Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando tamb\xe9m "true" a $binary:'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function c(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return d},a:function(){return i}});var o=t(667294);let n={},r=o.createContext(n);function i(e){let a=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);