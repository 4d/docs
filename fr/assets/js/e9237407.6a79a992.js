"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91096"],{297603:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"REST/binary","title":"$binary","description":"Passez \\"true\\" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer $expand=)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/REST/$binary.md","sourceDirName":"REST","slug":"/REST/binary","permalink":"/docs/fr/REST/binary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24binary.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"binary","title":"$binary"},"sidebar":"docs","previous":{"title":"$attributes","permalink":"/docs/fr/REST/attributes"},"next":{"title":"$clean","permalink":"/docs/fr/REST/clean"}}'),i=t("785893"),s=t("250065");let o={id:"binary",title:"$binary"},a=void 0,c={},d=[{value:"Description",id:"description",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:['Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer ',(0,i.jsx)(n.code,{children:"$expand={blobAttributeName}"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$binary"})," vous permet d'enregistrer le BLOB en tant que document.  Vous devez \xe9galement utiliser la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/expand",children:(0,i.jsx)(n.code,{children:"$expand"})})," en conjonction avec celle-ci."]}),"\n",(0,i.jsx)(n.p,{children:"Lorsque vous faites la requ\xeate suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n"})}),"\n",(0,i.jsx)(n.p,{children:"Il vous sera demand\xe9 o\xf9 enregistrer le BLOB sur le disque :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(94680).Z+"",width:"459",height:"353"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},94680:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);