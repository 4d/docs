"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62648"],{941886:function(e,r,t){t.r(r),t.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"REST/savedorderby","title":"$savedorderby","description":"Enregistre le tri d\xe9fini par $orderby lors de la cr\xe9ation d\'un ensemble d\'entit\xe9s (par exemple, $savedorderby=\\"\\")","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/REST/$savedorderby.md","sourceDirName":"REST","slug":"/REST/savedorderby","permalink":"/docs/fr/20-R6/REST/savedorderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedorderby.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"savedorderby","title":"$savedorderby"},"sidebar":"docs","previous":{"title":"$savedfilter","permalink":"/docs/fr/20-R6/REST/savedfilter"},"next":{"title":"$skip","permalink":"/docs/fr/20-R6/REST/skip"}}'),n=t("785893"),d=t("250065");let i={id:"savedorderby",title:"$savedorderby"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Enregistre le tri d\xe9fini par ",(0,n.jsx)(r.code,{children:"$orderby"})," lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, ",(0,n.jsx)(r.code,{children:'$savedorderby="{orderby}"'}),")"]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Lorsque vous cr\xe9ez un ensemble d'entit\xe9s, vous pouvez, par s\xe9curit\xe9, enregistrer l'ordre de tri et le filtre utilis\xe9s pour sa cr\xe9ation. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/REST/method#methodrelease",children:(0,n.jsx)(r.code,{children:"$method=release"})}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["Utilisez ",(0,n.jsx)(r.code,{children:"$savedorderby"})," pour enregistrer l'ordre que vous avez d\xe9fini lors de la cr\xe9ation de votre ensemble d'entit\xe9s, puis passez ",(0,n.jsx)(r.code,{children:"$savedorderby"})," avec votre appel, pour r\xe9cup\xe9rer \xe0 chaque fois l'ensemble d'entit\xe9s."]}),"\n",(0,n.jsxs)(r.p,{children:["Si l'ensemble d'entit\xe9s n'est plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. If you have used both ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/REST/savedfilter",children:(0,n.jsx)(r.code,{children:"$savedfilter"})})," and ",(0,n.jsx)(r.code,{children:"$savedorderby"})," in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that."]}),"\n",(0,n.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsxs)(r.p,{children:["Appelez d'abord ",(0,n.jsx)(r.code,{children:"$savedorderby"}),", dans l'appel initial, pour cr\xe9er un ensemble d'entit\xe9s :"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset'})}),"\n",(0,n.jsx)(r.p,{children:"Ensuite, lorsque vous acc\xe9dez \xe0 votre ensemble d'entit\xe9s, \xe9crivez ce qui suit (en utilisant \xe0 la fois $savedfilter et $savedorderby) pour vous assurer que le filtre et son ordre de tri existent toujours :"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"'})})]})}function u(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return i}});var s=t(667294);let n={},d=s.createContext(n);function i(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);