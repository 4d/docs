"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41744"],{979792:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"REST/directory","title":"$directory","description":"Le r\xe9pertoire g\xe8re l\'acc\xe8s des utilisateurs via les requ\xeates REST.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/$directory.md","sourceDirName":"REST","slug":"/REST/directory","permalink":"/docs/fr/20-R7/REST/directory","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"directory","title":"$directory"}}'),s=t("785893"),i=t("250065");let o={id:"directory",title:"$directory"},l=void 0,d={},c=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Le r\xe9pertoire g\xe8re l'acc\xe8s des utilisateurs via les requ\xeates REST."}),"\n",(0,s.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,s.jsx)(n.p,{children:"Ouvre une session REST sur votre application 4D et connecte l'utilisateur."}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Utilisez ",(0,s.jsx)(n.code,{children:"$directory/login"})," pour ouvrir une session dans votre application 4D via REST et connectez un utilisateur. Vous pouvez \xe9galement modifier le timeout par d\xe9faut de la session 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Tous les param\xe8tres doivent \xeatre pass\xe9s dans les ",(0,s.jsx)(n.strong,{children:"en-t\xeates"})," d'une m\xe9thode POST :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Cl\xe9 de l'en-t\xeate"}),(0,s.jsx)(n.th,{children:"Valeur de l'en-t\xeate"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"username-4D"}),(0,s.jsx)(n.td,{children:"Utilisateur - Non obligatoire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password-4D"}),(0,s.jsx)(n.td,{children:"Mot de passe en texte clair - Non obligatoire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"session-4D-length"}),(0,s.jsx)(n.td,{children:"Timeout d'inactivit\xe9 de la session (en minutes). Ne peut pas \xeatre inf\xe9rieur \xe0 60 - Non obligatoire"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Le mot de passe \xe9tant transmis en texte clair, il est fortement recommand\xe9 d'utiliser une connexion s\xe9curis\xe9e https pour la requ\xeate de connexion."})}),"\n",(0,s.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:="123"\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(n.p,{children:"Si la connexion a r\xe9ussi, le r\xe9sultat sera le suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sinon, la r\xe9ponse sera la suivante :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);