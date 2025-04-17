"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83040"],{64953:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/web-service-get-info","title":"WEB SERVICE Get info","description":"WEB SERVICE Get info ( typeInfo ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/web-service-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-info","permalink":"/docs/fr/commands/web-service-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-info.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-service-get-info","title":"WEB SERVICE Get info","slug":"/commands/web-service-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE CALL","permalink":"/docs/fr/commands/web-service-call"},"next":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/fr/commands/web-service-get-result"}}'),s=n("785893"),i=n("250065");let d={id:"web-service-get-info",title:"WEB SERVICE Get info",slug:"/commands/web-service-get-info",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"WEB SERVICE Get info"})," ( ",(0,s.jsx)(r.em,{children:"typeInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param\xe8tre"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"typeInfo"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Information \xe0 r\xe9cup\xe9rer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"R\xe9sultat"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Information sur la derni\xe8re erreur SOAP"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["La commande ",(0,s.jsx)(r.strong,{children:"WEB SERVICE Get info"})," retourne des informations relatives \xe0 l'erreur \xe9ventuellement g\xe9n\xe9r\xe9e lors de l\u2019ex\xe9cution de la derni\xe8re requ\xeate SOAP adress\xe9e \xe0 un Web Service. Cette commande doit g\xe9n\xe9ralement \xeatre appel\xe9e dans le cadre d'une m\xe9thode d'appel sur erreur install\xe9e par la commande ",(0,s.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"typeInfo"})," vous permet d\u2019indiquer le type d\u2019information que vous souhaitez obtenir. Vous devez passer une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,s.jsx)(r.em,{children:"Web Services (Client)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Constante"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Valeur"}),(0,s.jsx)(r.th,{children:"Comment"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Web Service detailed message"}),(0,s.jsx)(r.td,{children:"Entier long"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsxs)(r.td,{children:["Message d\xe9taill\xe9 d\xe9crivant l\u2019erreur. Le type de message diff\xe8re suivant le type d\u2019erreur principale. ",(0,s.jsx)(r.br,{}),"- Si erreur principale = 9910 (Erreur Web Service) : la cause de l\u2019erreur SOAP est retourn\xe9e (ex : \u201Cm\xe9thode appel\xe9e inexistante\u201D).",(0,s.jsx)(r.br,{}),"- Si erreur principale = 9911 (Erreur de l\u2019analyseur xml) : l\u2019emplacement de l\u2019erreur dans le document xml est retourn\xe9.",(0,s.jsx)(r.br,{}),"- Si erreur principale = 9912 (Erreur HTTP) :",(0,s.jsx)(r.br,{}),"- si l\u2019erreur HTTP est situ\xe9e dans l\u2019intervalle [300-400] (probl\xe8mes li\xe9 \xe0 l\u2019emplacement du document demand\xe9), le nouvel emplacement de l\u2019URL demand\xe9 est retourn\xe9. ",(0,s.jsx)(r.br,{}),"- pour tout autre code d\u2019erreur HTTP, le  est renvoy\xe9. ",(0,s.jsx)(r.br,{}),"- Si erreur principale = 9913 (Erreur r\xe9seau) : la cause de l\u2019erreur r\xe9seau est retourn\xe9e (ex : \u201CAdresseServeur : erreur DNS\u201D)",(0,s.jsx)(r.br,{}),"- Si erreur principale = 9914 (Erreur interne) : la cause de l\u2019erreur interne est retourn\xe9e"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Web Service error code"}),(0,s.jsx)(r.td,{children:"Entier long"}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsxs)(r.td,{children:["Code d\u2019erreur principal (d\xe9fini par 4D). Ce code est \xe9galement retourn\xe9 dans la variable syst\xe8me Error. ",(0,s.jsx)(r.br,{}),"Voici la liste des codes pouvant \xeatre retourn\xe9s :",(0,s.jsx)(r.br,{}),"9910 : Erreur Web Service (voir aussi Web Service origine erreur)",(0,s.jsx)(r.br,{}),"9911 : Erreur de l\u2019analyseur xml",(0,s.jsx)(r.br,{}),"9912 : Erreur HTTP (voir aussi Web Service code erreur HTTP)",(0,s.jsx)(r.br,{}),"9913 : Erreur r\xe9seau",(0,s.jsx)(r.br,{}),"9914 : Erreur interne"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Web Service fault actor"}),(0,s.jsx)(r.td,{children:"Entier long"}),(0,s.jsx)(r.td,{children:"3"}),(0,s.jsxs)(r.td,{children:["Cause de l\u2019erreur (retourn\xe9e par le protocole SOAP \u2014 \xe0 utiliser en cas d\u2019erreur principale 9910).",(0,s.jsx)(r.br,{}),"- Version Mismatch (les versions ne correspondent pas).",(0,s.jsx)(r.br,{}),"- Must Understand (un param\xe8tre d\xe9fini comme obligatoire n\u2019a pas pu \xeatre interpr\xe9t\xe9 par le serveur)",(0,s.jsx)(r.br,{}),"- Sender Fault",(0,s.jsx)(r.br,{}),"- Receiver Fault",(0,s.jsx)(r.br,{}),"- Encoding Unknown (encodage inconnu)"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Web Service HTTP status code"}),(0,s.jsx)(r.td,{children:"Entier long"}),(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"Code de statut HTTP (\xe0 utiliser en cas d\u2019erreur principale 9912)."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Une cha\xeene vide est retourn\xe9e lorsqu\u2019aucune information n\u2019est disponible, en particulier si la derni\xe8re requ\xeate SOAP n'a pas g\xe9n\xe9r\xe9 d'erreur."}),"\n",(0,s.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(r.td,{children:"780"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return d}});var t=n(667294);let s={},i=t.createContext(s);function d(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);