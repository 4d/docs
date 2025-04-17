"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76292"],{426775:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/http-get-certificates-folder","title":"HTTP Get certificates folder","description":"HTTP Get certificates folder  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/http-get-certificates-folder.md","sourceDirName":"commands-legacy","slug":"/commands/http-get-certificates-folder","permalink":"/docs/es/commands/http-get-certificates-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-get-certificates-folder.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"http-get-certificates-folder","title":"HTTP Get certificates folder","slug":"/commands/http-get-certificates-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Get","permalink":"/docs/es/commands/http-get"},"next":{"title":"HTTP GET OPTION","permalink":"/docs/es/commands/http-get-option"}}'),r=n("785893"),s=n("250065");let c={id:"http-get-certificates-folder",title:"HTTP Get certificates folder",slug:"/commands/http-get-certificates-folder",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"HTTP Get certificates folder"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe1metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Ruta completa de la carpeta de certificados activa"})]})})]}),"\n",(0,r.jsx)(t.admonition,{title:"Compatibilidad",type:"info",children:(0,r.jsxs)(t.p,{children:["Este comando se mantiene s\xf3lo por razones de compatibilidad. Ahora se recomienda utilizar ",(0,r.jsx)(t.a,{href:"/docs/es/API/HTTPRequestClass",children:(0,r.jsx)(t.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(t.p,{children:["El comando ",(0,r.jsx)(t.strong,{children:"HTTP Get certificates folder"})," devuelve la ruta completa de la carpeta de certificados activa del cliente."]}),"\n",(0,r.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(t.p,{children:"Usted quiere cambiar temporalmente la carpeta de certificados:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $certifFolder : Text\n\xa0$certifFolder :=HTTP Get certificates folder\xa0//guardar carpeta actual\n\xa0HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")\n\xa0...\xa0// ejecuci\xf3n de peticiones espec\xedficas\n\xa0HTTP SET CERTIFICATES FOLDER($certifFolder)\xa0//restablecer la carpeta anterior\n'})}),"\n",(0,r.jsx)(t.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/es/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"})}),"\n",(0,r.jsx)(t.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"N\xfamero de comando"}),(0,r.jsx)(t.td,{children:"1307"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hilo seguro"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return c}});var i=n(667294);let r={},s=i.createContext(r);function c(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);