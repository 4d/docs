"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58585"],{123591:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"REST/timeout","title":"$timeout","description":"Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (por ejemplo, $timeout=1800)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$timeout.md","sourceDirName":"REST","slug":"/REST/timeout","permalink":"/docs/es/19/REST/timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"timeout","title":"$timeout"},"sidebar":"docs","previous":{"title":"$skip","permalink":"/docs/es/19/REST/skip"},"next":{"title":"$top/$limit","permalink":"/docs/es/19/REST/top_$limit"}}'),i=n("785893"),s=n("250065");let d={id:"timeout",title:"$timeout"},r=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (",(0,i.jsx)(t.em,{children:"por ejemplo"}),", ",(0,i.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(t.p,{children:["Para definir un tiempo de espera para un conjunto de entidades creado con ",(0,i.jsx)(t.a,{href:"/docs/es/19/REST/method#methodentityset",children:(0,i.jsx)(t.code,{children:"$method=entityset"})}),", pase el n\xfamero de segundos a ",(0,i.jsx)(t.code,{children:"$timeout"}),". Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas."]}),"\n",(0,i.jsxs)(t.p,{children:["Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de ",(0,i.jsx)(t.code,{children:"$method=entityset"}),"), el tiempo de espera se recalcula bas\xe1ndose en la hora actual y el tiempo de espera."]}),"\n",(0,i.jsxs)(t.p,{children:["Si se elimina un conjunto de entidades y se vuelve a crear con ",(0,i.jsx)(t.code,{children:"$method=entityset"})," junto con ",(0,i.jsx)(t.a,{href:"/docs/es/19/REST/savedfilter",children:(0,i.jsx)(t.code,{children:"$savedfilter"})}),", el nuevo tiempo de espera por defecto es de 10 minutos, independientemente del tiempo de espera que haya definido al llamar a ",(0,i.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(t.p,{children:"En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var o=n(667294);let i={},s=o.createContext(i);function d(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);