"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94701],{982768:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(474848),t=s(28453);const i={id:"errorPages",title:"Pages d'erreur HTTP personnalis\xe9es"},o=void 0,l={id:"WebServer/errorPages",title:"Pages d'erreur HTTP personnalis\xe9es",description:"4D Web Server vous permet de personnaliser les pages d'erreur HTTP envoy\xe9es aux clients, en fonction du code d'\xe9tat de la r\xe9ponse du serveur. Les pages d'erreur font r\xe9f\xe9rence \xe0 :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/fr/20/WebServer/errorPages",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"errorPages",title:"Pages d'erreur HTTP personnalis\xe9es"},sidebar:"docs",previous:{title:"M\xe9thodes projet",permalink:"/docs/fr/20/WebServer/allowProject"},next:{title:"Authentification",permalink:"/docs/fr/20/WebServer/authentication"}},a={},d=[{value:"Remplacement des pages par d\xe9faut",id:"remplacement-des-pages-par-d\xe9faut",level:2},{value:"Exemple",id:"exemple",level:2}];function p(e){const r={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"4D Web Server vous permet de personnaliser les pages d'erreur HTTP envoy\xe9es aux clients, en fonction du code d'\xe9tat de la r\xe9ponse du serveur. Les pages d'erreur font r\xe9f\xe9rence \xe0 :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"les codes d'\xe9tat commen\xe7ant par 4 (erreurs du client), par exemple 404"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"les codes d'\xe9tat commen\xe7ant par 5 (erreurs du serveur), par exemple 501."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Pour une description compl\xe8te des codes d'\xe9tat d'erreur HTTP, vous pouvez vous reporter \xe0 la ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"liste des codes d'\xe9tat HTTP"})," (Wikipedia)."]}),"\n",(0,n.jsx)(r.h2,{id:"remplacement-des-pages-par-d\xe9faut",children:"Remplacement des pages par d\xe9faut"}),"\n",(0,n.jsx)(r.p,{children:"Pour remplacer les pages d'erreur par d\xe9faut de 4D Web Server par vos propres pages, il vous suffit de :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"placer des pages HTML personnalis\xe9es au premier niveau du dossier web de l'application,"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:'name the custom pages "{statusCode}.html" (for example, "404.html").'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Vous pouvez d\xe9finir une page d'erreur par code d'\xe9tat et/ou une page d'erreur g\xe9n\xe9rique pour une s\xe9rie d'erreurs, nomm\xe9e \"{number}xx.html\". Par exemple, vous pouvez cr\xe9er \"4xx.html\" pour les erreurs g\xe9n\xe9riques du client. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page."}),"\n",(0,n.jsx)(r.p,{children:"Par exemple, lorsqu'une r\xe9ponse HTTP retourne un code d'\xe9tat 404 :"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"4D Web Server essaie d'envoyer une page \"404.html\" situ\xe9e dans le dossier web de l'application."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Si elle n'est pas trouv\xe9e, 4D Web Server essaie d'envoyer une page \"4xx.html\" situ\xe9e dans le dossier Web de l'application."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Si elle n'est pas trouv\xe9e, 4D Web Server utilise alors sa page d'erreur par d\xe9faut."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(r.p,{children:"Si vous d\xe9finissez les pages personnalis\xe9es suivantes dans votre dossier web :"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:s(598610).A+"",width:"166",height:"287"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:'les pages "403.html" ou "404.html" seront servies lorsque des r\xe9ponses HTTP 403 ou 404 sont retourn\xe9es respectivement,'}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:'la page "4xx.html" sera servie pour tout autre \xe9tat d\'erreur 4xx (400, 401, etc.),'}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:'la page "5xx.html" sera servie pour tout \xe9tat d\'erreur 5xx.'}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},598610:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>l});var n=s(296540);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);