"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37732"],{852422:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"REST/upload","title":"$upload","description":"Devolve um ID do ficheiro carregado para o servidor","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$upload.md","sourceDirName":"REST","slug":"/REST/upload","permalink":"/docs/pt/18/REST/upload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"upload","title":"$upload"},"sidebar":"docs","previous":{"title":"$info","permalink":"/docs/pt/18/REST/info"},"next":{"title":"{dataClass}","permalink":"/docs/pt/18/REST/{dataClass}"}}'),r=n("785893"),i=n("250065");let s={id:"upload",title:"$upload"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo de carregamento de imagens",id:"exemplo-de-carregamento-de-imagens",level:2}];function l(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Devolve um ID do ficheiro carregado para o servidor"}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["Publique essa peti\xe7\xe3o quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe ",(0,r.jsx)(o.code,{children:"$rawPict=true"}),". Para todos os outros ficheiros, deve passar ",(0,r.jsx)(o.code,{children:"$binary=true"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Voc\xea pode modificar o tempo limite, que por padr\xe3o \xe9 de 120 segundos, passando um valor para o ",(0,r.jsx)(o.code,{children:"par\xe2metro$timeout"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-de-carregamento-de-imagens",children:"Exemplo de carregamento de imagens"}),"\n",(0,r.jsx)(o.p,{children:"To upload an image, you must first select the file object on the client using the HTML 5 built-in API for using file from a web application. 4D uses the MIME type attribute of the file object so it can handle it appropriately."}),"\n",(0,r.jsx)(o.p,{children:"Depois, carregamos a imagem selecionada para 4D Server:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Resultadoi"}),":"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,r.jsxs)(o.p,{children:["Afterwards, you use this ID to add it to an attribute using ",(0,r.jsx)(o.a,{href:"/docs/pt/18/REST/method#methodupdate",children:(0,r.jsx)(o.code,{children:"$method=update"})})," to add the image to an entity:"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Dados POST"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Resposta"}),":"]}),"\n",(0,r.jsx)(o.p,{children:"A entidade modificada \xe9 devolvida:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})})]})}function p(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return s}});var t=n(667294);let r={},i=t.createContext(r);function s(e){let o=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);