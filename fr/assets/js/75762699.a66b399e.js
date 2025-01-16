"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29614"],{556200:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/web-service-set-option","title":"WEB SERVICE SET OPTION","description":"WEB SERVICE SET OPTION ( option ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-service-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-set-option","permalink":"/docs/fr/commands/web-service-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-set-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-service-set-option","title":"WEB SERVICE SET OPTION","slug":"/commands/web-service-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/fr/commands/web-service-get-result"},"next":{"title":"WEB SERVICE SET PARAMETER","permalink":"/docs/fr/commands/web-service-set-parameter"}}'),i=s("785893"),t=s("250065");let d={id:"web-service-set-option",title:"WEB SERVICE SET OPTION",slug:"/commands/web-service-set-option",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Note pr\xe9liminaire",id:"note-pr\xe9liminaire",level:4},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB SERVICE SET OPTION"})," ( ",(0,i.jsx)(n.em,{children:"option"})," ; ",(0,i.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Code de l\u2019option \xe0 fixer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valeur de l\u2019option"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"note-pr\xe9liminaire",children:"Note pr\xe9liminaire"}),"\n",(0,i.jsx)(n.p,{children:"Cette commande est destin\xe9e aux utilisateurs avanc\xe9s des Web Services. Son emploi est facultatif."}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"WEB SERVICE SET OPTION"})," permet de d\xe9finir diff\xe9rentes options qui seront utilis\xe9es lors de la prochaine requ\xeate SOAP d\xe9clench\xe9e par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),".",(0,i.jsx)(n.br,{}),"\nVous pouvez appeler cette commande autant de fois qu\u2019il y a d\u2019options \xe0 fixer."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"option"})," le num\xe9ro de l\u2019option \xe0 d\xe9finir et dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"valeur"})," la nouvelle valeur de l\u2019option. Vous pouvez utiliser pour ces deux param\xe8tres une des constantes pr\xe9d\xe9finies suivantes, situ\xe9es dans le th\xe8me ",(0,i.jsx)(n.em,{children:"Web Services (Client)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service display auth dialog"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur"})," = 0 (ne pas afficher le dialogue) ou 1 (afficher le dialogue)",(0,i.jsx)(n.br,{}),"Cette option g\xe8re l\u2019affichage de bo\xeete de dialogue d\u2019authentification lors de l\u2019ex\xe9cution de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),". Par d\xe9faut, cette commande ne provoque jamais l'affichage de la bo\xeete de dialogue, vous devez en principe utiliser la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-authenticate",children:"WEB SERVICE AUTHENTICATE"}),". Toutefois, si vous souhaitez qu\u2019une bo\xeete de dialogue d\u2019authentification apparaisse pour que l\u2019utilisateur saisisse ses identifiants, vous devez utiliser cette option : passez 1 dans ",(0,i.jsx)(n.em,{children:"valeur"})," pour afficher la bo\xeete de dialogue, et 0 sinon. La bo\xeete de dialogue n\u2019appara\xeet que si le service Web requiert une authentification."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service HTTP compression"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur"})," = Web Service compression ",(0,i.jsx)(n.br,{}),"Cette option permet d\u2019activer un m\xe9canisme interne de compression des requ\xeates SOAP afin d\u2019acc\xe9l\xe9rer les \xe9changes inter-applications 4D. Lorsque vous ex\xe9cutez l'instruction ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),'(Web Service compression HTTP; Web Service compression) sur le client 4D du Web Service, les donn\xe9es de la prochaine requ\xeate SOAP envoy\xe9e par le client seront compress\xe9es en utilisant un m\xe9canisme standard HTTP ("gzip" ou "deflate" en fonction du contenu de la requ\xeate) avant leur envoi au serveur SOAP 4D. Le serveur d\xe9compressera et analysera la requ\xeate puis r\xe9pondra en utilisant automatiquement le m\xeame m\xe9canisme. Seule la requ\xeate suivant l\u2019appel de la commande ',(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"})," est affect\xe9e. Vous devez donc appeler cette commande chaque fois que vous voulez utiliser la compression. Par d\xe9faut, 4D ne compresse pas les requ\xeates HTTP des Web Services.",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Note :"})," Ce m\xe9canisme ne peut pas \xeatre utilis\xe9 pour des requ\xeates adress\xe9es \xe0 un serveur SOAP 4D d\u2019une version ant\xe9rieure \xe0 la 11.3. Afin de vous permettre d\u2019optimiser encore ce fonctionnement, des options suppl\xe9mentaires configurent le seuil et le taux de compression des requ\xeates. Ces options sont accessibles via la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service HTTP timeout"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur"}),"= \u201Ctimeout\u201D de la partie cliente exprim\xe9 en secondes.",(0,i.jsx)(n.br,{}),"Le timeout de la partie cliente est le d\xe9lai d\u2019attente du client Web Service en cas de non-r\xe9ponse du serveur. A l\u2019issue de ce d\xe9lai, le client referme la session, la requ\xeate est perdue. ",(0,i.jsx)(n.br,{}),"Par d\xe9faut, ce d\xe9lai est de 180 secondes. Il peut \xeatre modifi\xe9 en raison de caract\xe9ristiques particuli\xe8res (\xe9tat du r\xe9seau, sp\xe9cificit\xe9s du Web Service, etc.)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service reset auth settings"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur"})," = 0 (ne pas effacer les informations) ou 1 (les effacer)",(0,i.jsx)(n.br,{}),"Cette option permet d\u2019indiquer \xe0 4D de m\xe9moriser les informations d'authentification de l\u2019utilisateur (nom d'utilisateur, mot de passe, m\xe9thode, etc.), dans le but de les r\xe9utiliser par la suite. Par d\xe9faut, ces informations sont effac\xe9es apr\xe8s chaque ex\xe9cution de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),". Passez 0 dans ",(0,i.jsx)(n.em,{children:"valeur"})," pour les m\xe9moriser et 1 pour les effacer. A noter que lorsque vous passez 0, les informations sont conserv\xe9es pendant la session mais ne sont pas stock\xe9es."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service SOAP header"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur"})," = r\xe9f\xe9rence d\u2019\xe9l\xe9ment xml racine \xe0 ins\xe9rer en tant que header (en-t\xeate) de la requ\xeate SOAP.",(0,i.jsx)(n.br,{}),"Cette option permet d\u2019ins\xe9rer un header dans la requ\xeate SOAP g\xe9n\xe9r\xe9e par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"}),". Par d\xe9faut, les requ\xeates SOAP ne comportent pas d\u2019en-t\xeate sp\xe9cifique. Cependant, certains Web Services requi\xe8rent la pr\xe9sence de cet en-t\xeate, par exemple pour la gestion de param\xe8tres d\u2019identification."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service SOAP version"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur"})," = Web Service SOAP_1_1 ou Web Service SOAP_1_2 ",(0,i.jsx)(n.br,{}),"Cette option permet de pr\xe9ciser la version du protocole SOAP utilis\xe9e dans la requ\xeate. Passez dans valeur la constante Web Service SOAP_1_1 pour indiquer la version 1.1 et la constante Web Service SOAP_1_2 pour indiquer la version 1.2."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["L\u2019ordre d\u2019appel des options n\u2019a pas d\u2019importance. Si une m\xeame ",(0,i.jsx)(n.em,{children:"option"})," est d\xe9finie plusieurs fois, seule la valeur du dernier appel est prise en compte."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"Insertion d\u2019un en-t\xeate personnalis\xe9 dans la requ\xeate SOAP :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Cr\xe9ation d\u2019une r\xe9f\xe9rence XML\n\xa0var vRefRacine;vRefElement : Text\n\xa0vRefRacine:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vRefElement:=DOM Create XML element(vRefRacine;vxPath)\n\xa0\xa0//Modification de l\u2019en-t\xeate SOAP avec la r\xe9f\xe9rence\n\xa0WEB SERVICE SET OPTION(Web Service SOAP header;vRefElement)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"Utilisation de la version 1.2 du protocole SOAP :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"901"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);