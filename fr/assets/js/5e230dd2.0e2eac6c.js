"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10391"],{681351:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>u,frontMatter:()=>r});var i=JSON.parse('{"id":"REST/timeout","title":"$timeout","description":"D\xe9finit le nombre de secondes pour enregistrer un ensemble d\'entit\xe9s dans le cache de 4D Server (par exemple, $timeout=1800)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$timeout.md","sourceDirName":"REST","slug":"/REST/timeout","permalink":"/docs/fr/19/REST/timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"timeout","title":"$timeout"},"sidebar":"docs","previous":{"title":"$skip","permalink":"/docs/fr/19/REST/skip"},"next":{"title":"$top/$limit","permalink":"/docs/fr/19/REST/top_$limit"}}'),s=n("785893"),o=n("250065");let r={id:"timeout",title:"$timeout"},d=void 0,l={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["D\xe9finit le nombre de secondes pour enregistrer un ensemble d'entit\xe9s dans le cache de 4D Server (par exemple, ",(0,s.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/19/REST/method#methodentityset",children:(0,s.jsx)(t.code,{children:"$method=entityset"})}),", passez le nombre de secondes \xe0 ",(0,s.jsx)(t.code,{children:"$timeout"}),". Par exemple, si vous souhaitez d\xe9finir le timeout sur 20 minutes, passez 1200. Par d\xe9faut, le timeout est de deux (2) heures."]}),"\n",(0,s.jsxs)(t.p,{children:["Une fois le timeout d\xe9fini, chaque fois qu'un ensemble d'entit\xe9s est appel\xe9 (via ",(0,s.jsx)(t.code,{children:"$method=entityset"}),"), le timeout est recalcul\xe9 en fonction de l'heure courante et du timeout."]}),"\n",(0,s.jsxs)(t.p,{children:["Une fois le timeout d\xe9fini, chaque fois qu'un ensemble d'entit\xe9s est appel\xe9 (via ",(0,s.jsx)(t.code,{children:"$method=entityset"}),"), le timeout est recalcul\xe9 en fonction de l'heure courante et du timeout."]}),"\n",(0,s.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(t.p,{children:["Si un ensemble d'entit\xe9s est supprim\xe9 puis recr\xe9\xe9 \xe0 l'aide de ",(0,s.jsx)(t.code,{children:"$method=entityset"})," avec ",(0,s.jsx)(t.a,{href:"/docs/fr/19/REST/savedfilter",children:(0,s.jsx)(t.code,{children:"$savedfilter"})}),", le nouveau timeout par d\xe9faut est de 10 minutes, quel que soit le timeout que vous avez d\xe9fini lors de l'appel de ",(0,s.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var i=n(667294);let s={},o=i.createContext(s);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);