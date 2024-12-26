"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81690"],{747922:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>c});var i=JSON.parse('{"id":"commands-legacy/web-service-authenticate","title":"WEB SERVICE AUTHENTICATE","description":"WEB SERVICE AUTHENTICATE ( nom ; motDePasse {; m\xe9thodeAuth} {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-authenticate.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-authenticate","permalink":"/docs/fr/commands/web-service-authenticate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-authenticate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-authenticate","title":"WEB SERVICE AUTHENTICATE","slug":"/commands/web-service-authenticate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Services (Client)","permalink":"/docs/fr/category/web-services-client"},"next":{"title":"WEB SERVICE CALL","permalink":"/docs/fr/commands/web-service-call"}}'),t=s("785893"),r=s("250065");let c={id:"web-service-authenticate",title:"WEB SERVICE AUTHENTICATE",slug:"/commands/web-service-authenticate",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," ( ",(0,t.jsx)(n.em,{children:"nom"})," ; ",(0,t.jsx)(n.em,{children:"motDePasse"})," {; ",(0,t.jsx)(n.em,{children:"m\xe9thodeAuth"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nom"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l\u2019utilisateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"motDePasse"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mot de passe de l\u2019utilisateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"m\xe9thodeAuth"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"M\xe9thode d\u2019authentification : 0 ou omis=non d\xe9finie, 1=BASIC, 2=DIGEST"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 : authentification par proxy"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," vous permet d\u2019utiliser des Web Services n\xe9cessitant l\u2019authentification de l\u2019application cliente. Les m\xe9thodes BASIC et DIGEST sont prises en charge ainsi que la pr\xe9sence d'un proxy."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour plus d\u2019informations sur les m\xe9thodes d\u2019authentification BASIC et DIGEST, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"S\xe9curit\xe9 des connexions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"nom"})," et ",(0,t.jsx)(n.em,{children:"motDePasse"})," les informations d\u2019identification requises (nom d\u2019utilisateur et mot de passe). Ces informations seront encod\xe9es et ajout\xe9es \xe0 la requ\xeate HTTP envoy\xe9e au Web Service via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),". Il est donc n\xe9cessaire d\u2019appeler la commande ",(0,t.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," avant la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"m\xe9thodeAuth"})," permet d\u2019indiquer la m\xe9thode d\u2019authentification \xe0 utiliser pour le prochain appel de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),". Vous pouvez passer l\u2019une des valeurs suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"2 = utiliser la m\xe9thode d\u2019authentification DIGEST"}),"\n",(0,t.jsx)(n.li,{children:"1 = utiliser la m\xe9thode d\u2019authentification BASIC"}),"\n",(0,t.jsx)(n.li,{children:"0 (ou param\xe8tre omis) = utiliser la m\xe9thode appropri\xe9e. Dans ce cas, 4D envoie une requ\xeate suppl\xe9mentaire afin de n\xe9gocier la m\xe9thode d'authentification."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que les informations d\u2019authentification s\u2019adressent \xe0 un proxy HTTP. Ce param\xe9trage doit \xeatre mis en oeuvre lorsqu\u2019il existe un proxy n\xe9cessitant une authentification entre le client du Web Service et le Web Service lui-m\xeame. Si le Web Service est lui-m\xeame authentifi\xe9, une double authentification est requise (cf. exemple)."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, les informations d\u2019authentification sont r\xe9initialis\xe9es apr\xe8s chaque requ\xeate. Vous devez donc utiliser la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-authenticate",children:"WEB SERVICE AUTHENTICATE"})," avant chaque ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),". Il est toutefois possible de conserver temporairement ces informations \xe0 l'aide d'une option de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),". Dans ce cas, il n'est pas n\xe9cessaire d'ex\xe9cuter la commande ",(0,t.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," avant chaque ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En cas d\u2019\xe9chec de l\u2019authentification, le serveur SOAP retourne une erreur que vous pouvez identifier \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-get-info",children:"WEB SERVICE Get info"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Authentification aupr\xe8s d\u2019un Web Service situ\xe9 derri\xe8re un proxy :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Authentification au Web Service en mode DIGEST\n\xa0WEB SERVICE AUTHENTICATE("SoapUser";"123";2)\n\xa0\xa0//Authentification au proxy en mode par d\xe9faut\n\xa0WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)\n\xa0WEB SERVICE CALL(...)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-get-info",children:"WEB SERVICE Get info"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"786"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var i=s(667294);let t={},r=i.createContext(t);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);