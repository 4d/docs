"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82837"],{932358:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>u,contentTitle:()=>c});var i=JSON.parse('{"id":"REST/distinct","title":"$distinct","description":"Retourne les diff\xe9rentes valeurs d\'un attribut sp\xe9cifique dans une collection (par exemple, Company/name?$filter=\\"name=a*\\"&$distinct=true)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/$distinct.md","sourceDirName":"REST","slug":"/REST/distinct","permalink":"/docs/fr/20-R7/REST/distinct","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"distinct","title":"$distinct"},"sidebar":"docs","previous":{"title":"$compute","permalink":"/docs/fr/20-R7/REST/compute"},"next":{"title":"$entityset","permalink":"/docs/fr/20-R7/REST/entityset"}}'),s=n("785893"),r=n("250065");let o={id:"distinct",title:"$distinct"},c=void 0,l={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Retourne les diff\xe9rentes valeurs d'un attribut sp\xe9cifique dans une collection (par exemple, ",(0,s.jsx)(t.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$distinct"})," vous permet de retourner une collection contenant les diff\xe9rentes valeurs d'une requ\xeate sur un attribut sp\xe9cifique. Un seul attribut dans la dataclass peut \xeatre sp\xe9cifi\xe9. G\xe9n\xe9ralement, le type Cha\xeene est id\xe9al; cependant, vous pouvez \xe9galement l'utiliser sur n'importe quel type d'attribut pouvant contenir plusieurs valeurs."]}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez \xe9galement utiliser ",(0,s.jsx)(t.code,{children:"$skip"})," et ",(0,s.jsx)(t.code,{children:"$top/$limit"})," si vous souhaitez parcourir la s\xe9lection avant qu'elle ne soit plac\xe9e dans un tableau."]}),"\n",(0,s.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Dans l'exemple ci-dessous, nous souhaitons r\xe9cup\xe9rer les diff\xe9rentes valeurs d'un nom de soci\xe9t\xe9 commen\xe7ant par la lettre \"a\" :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var i=n(667294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);