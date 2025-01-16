"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64918"],{486423:function(e,s,t){t.r(s),t.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"REST/configuration","title":"Configuration du serveur","description":"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, i.e. to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/fr/20-R7/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"configuration","title":"Configuration du serveur"},"sidebar":"docs","previous":{"title":"Prise en main","permalink":"/docs/fr/20-R7/REST/gettingStarted"},"next":{"title":"Sessions et utilisateurs","permalink":"/docs/fr/20-R7/REST/authUsers"}}'),n=t("785893"),i=t("250065");let o={id:"configuration",title:"Configuration du serveur"},a=void 0,l={},c=[{value:"D\xe9marrage du serveur REST",id:"d\xe9marrage-du-serveur-rest",level:2},{value:"Controlling REST access",id:"controlling-rest-access",level:2},{value:"Exposer les tables et les champs",id:"exposer-les-tables-et-les-champs",level:2},{value:"Exposer des tables",id:"exposer-des-tables",level:3},{value:"Exposer des champs",id:"exposer-des-champs",level:3},{value:"Mode pr\xe9emptif",id:"mode-pr\xe9emptif",level:2}];function d(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, ",(0,n.jsx)(s.em,{children:"i.e."})," to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more."]}),"\n",(0,n.jsx)(s.p,{children:"Pour commencer \xe0 utiliser les fonctionnalit\xe9s REST, vous devez d\xe9marrer et configurer le serveur 4D REST."}),"\n",(0,n.jsx)(s.h2,{id:"d\xe9marrage-du-serveur-rest",children:"D\xe9marrage du serveur REST"}),"\n",(0,n.jsxs)(s.p,{children:["Pour des raisons de s\xe9curit\xe9, par d\xe9faut, 4D ne r\xe9pond pas aux requ\xeates REST. Si vous souhaitez d\xe9marrer le serveur REST, cochez l'option ",(0,n.jsx)(s.strong,{children:"Exposer en tant que serveur REST"})," dans la page ",(0,n.jsx)(s.strong,{children:"Web"})," > ",(0,n.jsx)(s.strong,{children:"Web Features"})," des param\xe8tres de la structure afin que les requ\xeates REST soient trait\xe9es."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt-text",src:t(35561).Z+"",width:"855",height:"381"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Les services REST utilisent le serveur HTTP 4D; vous devez donc vous assurer que le serveur web 4D est lanc\xe9."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Le message d'avertissement \"Attention, v\xe9rifiez les privil\xe8ges d'acc\xe8s\" s'affiche lorsque vous cochez cette option, pour attirer votre attention sur le fait que lorsque les services REST sont activ\xe9s, l'acc\xe8s par d\xe9faut aux objets de base de donn\xe9es est gratuit tant que les acc\xe8s REST n'ont pas \xe9t\xe9 configur\xe9s."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"You must restart the 4D application for your changes to take effect."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"controlling-rest-access",children:"Controlling REST access"}),"\n",(0,n.jsx)(s.p,{children:"Par d\xe9faut, les acc\xe8s REST sont ouverts \xe0 tous les utilisateurs, ce qui n'est \xe9videmment pas recommand\xe9 pour des raisons de s\xe9curit\xe9 et de contr\xf4le de l'utilisation des licences clientes."}),"\n",(0,n.jsxs)(s.p,{children:["As of 4D 20 R6, you configure REST accesses by enabling the ",(0,n.jsxs)(s.a,{href:"/docs/fr/20-R7/REST/authUsers#force-login-mode",children:[(0,n.jsx)(s.strong,{children:"force login"})," mode"]})," and create an ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R7/REST/authUsers#authentify",children:(0,n.jsx)(s.code,{children:"authentify()"})})," datastore class function to authenticate users and assign privileges to their web session."]}),"\n",(0,n.jsx)(s.admonition,{title:"Compatibilit\xe9",type:"note",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Access"})," area in the Settings dialog box is only available in converted projects for compatibility. See ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R7/settings/web#access",children:"Access"})," for more information."]})}),"\n",(0,n.jsx)(s.h2,{id:"exposer-les-tables-et-les-champs",children:"Exposer les tables et les champs"}),"\n",(0,n.jsxs)(s.p,{children:["Une fois les services REST sont activ\xe9s dans l'application 4D, une session REST peut par d\xe9faut acc\xe9der \xe0 toutes les tables et \xe0 tous les champs de la base de donn\xe9es 4D via l'",(0,n.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/dsmapping#datastore",children:"interface du datastore"}),". Ainsi, elle peut utiliser leurs donn\xe9es. Par exemple, si votre base de donn\xe9es contient une table [Employee], il est possible d'\xe9crire :"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,n.jsx)(s.p,{children:'Cette requ\xeate retournera tous les employ\xe9s dont le champ "salary" est sup\xe9rieur \xe0 10 000.'}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'Les tables et/ou champs 4D dont l\'attribut est "invisible" sont \xe9galement expos\xe9s par d\xe9faut dans REST.'}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Si vous souhaitez personnaliser les objets du datastore accessibles via REST, vous devez d\xe9sactiver l'exposition de chaque table et/ou champ que vous souhaitez masquer. Lorsqu'une requ\xeate REST tente d'acc\xe9der \xe0 une ressource non autoris\xe9e, 4D retourne une erreur."}),"\n",(0,n.jsx)(s.h3,{id:"exposer-des-tables",children:"Exposer des tables"}),"\n",(0,n.jsx)(s.p,{children:"Par d\xe9faut, toutes les tables sont expos\xe9es dans REST."}),"\n",(0,n.jsx)(s.p,{children:"Pour des raisons de s\xe9curit\xe9, vous pouvez choisir d'exposer uniquement certaines tables du datastore aux appels REST. Par exemple, si vous avez cr\xe9\xe9 une table [Users] stockant les noms d'utilisateur et les mots de passe, il serait pr\xe9f\xe9rable de ne pas l'exposer."}),"\n",(0,n.jsx)(s.p,{children:"Pour supprimer l'exposition REST d'une table :"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Affichez l'Inspecteur de table dans l'Editeur de structure et s\xe9lectionnez la table \xe0 modifier."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Uncheck the ",(0,n.jsx)(s.strong,{children:"Expose as REST resource"})," option:\n",(0,n.jsx)(s.img,{alt:"alt-text",src:t(560795).Z+"",width:"279",height:"330"}),"\nDo this for each table whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exposer-des-champs",children:"Exposer des champs"}),"\n",(0,n.jsx)(s.p,{children:"Par d\xe9faut, touts les champs d'une base 4D sont expos\xe9s dans REST."}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez choisir d'exposer certains champs de vos tables \xe0 REST. Par exemple, si vous ne souhaitez pas exposer le champ [Employees]Salary."}),"\n",(0,n.jsx)(s.p,{children:"Pour supprimer l'exposition REST d'un champ :"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Affichez l'Inspecteur de champ dans l'Editeur de structure et s\xe9lectionnez le champ \xe0 modifier."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["D\xe9cochez la case ",(0,n.jsx)(s.strong,{children:"Exposer en tant que ressource REST"})," pour le champ.\n",(0,n.jsx)(s.img,{alt:"alt-text",src:t(798768).Z+"",width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Pour qu'un champ soit accessible via REST, la table parente doit l'\xeatre \xe9galement. Si la table parente n'est pas expos\xe9e, aucun de ses champs ne le sera, quel que soit leur statut."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"mode-pr\xe9emptif",children:"Mode pr\xe9emptif"}),"\n",(0,n.jsxs)(s.p,{children:["On 4D Server, REST requests are automatically handled through preemptive processes, ",(0,n.jsx)(s.strong,{children:"even in interpreted mode"}),". You need to make sure that your code is ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compliant with a preemptive execution"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["To debug interpreted web code on the server machine, make sure the debugger is ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R7/Debugging/debugging-remote",children:"attached to the server"})," or ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R7/Debugging/debugging-remote#attaching-the-debugger-to-a-remote-4d-client",children:"to a remote machine"}),". Les process Web passent alors en mode coop\xe9ratif et le code du serveur Web peut \xeatre d\xe9bogu\xe9."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Avec 4D monoposte, le code interpr\xe9t\xe9 s'ex\xe9cute toujours en mode coop\xe9ratif."})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},35561:function(e,s,t){t.d(s,{Z:function(){return r}});let r=t.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},798768:function(e,s,t){t.d(s,{Z:function(){return r}});let r=t.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},560795:function(e,s,t){t.d(s,{Z:function(){return r}});let r=t.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return o}});var r=t(667294);let n={},i=r.createContext(n);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);