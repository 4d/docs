"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7142"],{331938:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"REST/top_$limit","title":"$top/$limit","description":"Limite le nombre d\'entit\xe9s \xe0 retourner (par exemple, $top=50)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/REST/$top_$limit.md","sourceDirName":"REST","slug":"/REST/top_$limit","permalink":"/docs/fr/REST/top_$limit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"top_$limit","title":"$top/$limit"},"sidebar":"docs","previous":{"title":"$timeout","permalink":"/docs/fr/REST/timeout"},"next":{"title":"$version","permalink":"/docs/fr/REST/version"}}'),o=i("785893"),r=i("250065");let s={id:"top_$limit",title:"$top/$limit"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Limite le nombre d'entit\xe9s \xe0 retourner (par exemple, ",(0,o.jsx)(t.code,{children:"$top=50"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"$top/$limit"})," d\xe9finit la limite des entit\xe9s \xe0 retourner. Par d\xe9faut, leur nombre est limit\xe9 \xe0 100. Vous pouvez utiliser l'un des mots cl\xe9s suivant : ",(0,o.jsx)(t.code,{children:"$top"})," ou ",(0,o.jsx)(t.code,{children:"$limit"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["When used in conjunction with ",(0,o.jsx)(t.a,{href:"/docs/fr/REST/skip",children:(0,o.jsx)(t.code,{children:"$skip"})}),", you can navigate through the entity selection returned by the REST request."]}),"\n",(0,o.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(t.p,{children:"Dans l'exemple suivant, nous recherchons les dix entit\xe9s qui suivent la 20e entit\xe9 :"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10"})})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return s}});var n=i(667294);let o={},r=n.createContext(o);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);