"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6889"],{607515:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/web-get-server-info","title":"WEB Get server info","description":"WEB Get server info {( avecCache )} : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-server-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-server-info","permalink":"/docs/fr/20-R7/commands/web-get-server-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-server-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-server-info","title":"WEB Get server info","slug":"/commands/web-get-server-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET OPTION","permalink":"/docs/fr/20-R7/commands/web-get-option"},"next":{"title":"WEB GET STATISTICS","permalink":"/docs/fr/20-R7/commands/web-get-statistics"}}'),t=s("785893"),i=s("250065");let d={id:"web-get-server-info",title:"WEB Get server info",slug:"/commands/web-get-server-info",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Propri\xe9t\xe9 Cache",id:"propri\xe9t\xe9-cache",level:5},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB Get server info"})," {( ",(0,t.jsx)(n.em,{children:"avecCache"})," )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"avecCache"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai pour obtenir la description du cache Web. Sinon (par d\xe9faut) la description du cache n'est pas retourn\xe9e."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Informations sur le serveur Web et le serveur SOAP en cours d'ex\xe9cution."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WEB Get server info"})," retourne un objet contenant des informations d\xe9taill\xe9es sur la session courante du serveur Web 4D. Les informations retourn\xe9es incluent le serveur SOAP."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les informations retourn\xe9es par cette commande d\xe9crivent les param\xe8tres d'ex\xe9cution du serveur Web. Ces param\xe8tres peuvent diff\xe9rer de ceux retourn\xe9s par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/web-get-option",children:"WEB GET OPTION"}),", car ils d\xe9pendent de la configuration syst\xe8me, des ressources disponibles, etc."]}),"\n",(0,t.jsxs)(n.p,{children:['Par d\xe9faut, la commande ne retourne pas la propri\xe9t\xe9 "cache", car elle peut \xeatre de taille importante. Toutefois, si vous souhaitez conna\xeetre les informations sur le cache, passez Vrai dans le param\xe8tre optionnel ',(0,t.jsx)(n.em,{children:"avecCache"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"L'objet retourn\xe9 contient les propri\xe9t\xe9s suivantes (les noms des propri\xe9t\xe9s sont sensibles \xe0 la casse) :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["p",(0,t.jsx)(n.strong,{children:"ropri\xe9t\xe9"})]}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type de la valeur"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"started"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si le serveur http est lanc\xe9, false sinon"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uptime"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Temps \xe9coul\xe9 depuis le dernier lancement du serveur http"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"httpRequestCount"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Nombre de hits http re\xe7us par le serveur depuis son lancement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"startMode"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:'"automatic" si \u201CLancer le serveur Web au d\xe9marrage" est coch\xe9, sinon "manual".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAPServerStarted"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si le serveur SOAP est lanc\xe9, false sinon"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cache"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"Cette propri\xe9t\xe9 est disponible seulement si le param\xe8tre avecCache est \xe0 Vrai. D\xe9crit le contenu du cache du serveur Web"}),". (voir ",(0,t.jsx)(n.em,{children:"cache property"})," ci-dessous)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"security"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsx)(n.td,{children:"Etat actuel des diverses options de s\xe9curit\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cipherSuite"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Liste de chiffrement utilis\xe9e par 4D pour le protocole s\xe9curis\xe9 (correspond au param\xe8tre base SSL cipher list)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HTTPEnabled"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si HTTP est activ\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HTTPSEnabled"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si HTTPS est activ\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HSTSEnabled"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si HSTS est activ\xe9 sur le serveur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"HSTSMaxAge"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Age maximum (en secondes) pour HSTS. Par d\xe9faut, la dur\xe9e est de 2 ans (63 072 000 secondes)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"minTLSVersion"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Version TLS minimale accept\xe9e pour les connexions (correspond au param\xe8tre base Min TLS version)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"openSSLVersion"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Version de la librairie OpenSSL utilis\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"perfectForwardSecrecy"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si PFS est disponible sur le serveur, false sinon"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsx)(n.td,{children:"Etat actuel des diff\xe9rentes options standard du serveur Web"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CORSEnabled"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"Vrai si le service CORS est activ\xe9 sur le serveur, sinon Faux (par d\xe9faut)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CORSSettings"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection d'objets CORS d\xe9finissant la liste de m\xe9thode(s) et d'h\xf4te(s) autoris\xe9s (voir l'option web Web CORS settings)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webCharacterSet"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Nom du jeu de caract\xe8res (correspond \xe0 l'option web Web character set)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webHTTPCompressionLevel"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Niveau de compression pour les \xe9changes HTTP compress\xe9s (correspond \xe0 l'option web Web HTTP compression level)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webHTTPCompressionThreshold"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Seuil de compression (correspond \xe0 l'option web Web HTTP compression threshold)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webHTTPSPortID"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de port TCP utilis\xe9 par le serveur Web pour les connexions s\xe9curis\xe9es (correspond \xe0 l'option web Web HTTPS port ID)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"webInactiveProcessTimeout"})}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.strong,{children:["Non significatif en mode sessions Web \xe9volutives, voir ",(0,t.jsx)(n.em,{children:"Gestion des sessions Web"}),"."]})," Dur\xe9e de vie des process inactifs (correspond \xe0 l'option web Web inactive process timeout)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"webInactiveSessionTimeout"})}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.strong,{children:["Non significatif en mode sessions Web \xe9volutives, voir ",(0,t.jsx)(n.em,{children:"Gestion des sessions Web"}),"."]})," Dur\xe9e de vie des sessions inactives (correspond \xe0 l'option web Web inactive session timeout)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webIPAddressToListen"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:'Adresse IP, dans le "format" d\xe9fini, sur laquelle le serveur web re\xe7oit des requ\xeates http (correspond \xe0 l\'option web Web IP address to listen)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"webMaxConcurrentProcesses"})}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.strong,{children:["Non significatif en mode sessions Web \xe9volutives, voir ",(0,t.jsx)(n.em,{children:"Gestion des sessions Web"}),"."]})," Nombre maximum de process web simultan\xe9s (correspond \xe0 l'option web Web max concurrent processes)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webPortID"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Port TCP utilis\xe9 par le serveur Web (correspond \xe0 l'option web Web port ID)"})]})]})]}),"\n",(0,t.jsx)(n.h5,{id:"propri\xe9t\xe9-cache",children:"Propri\xe9t\xe9 Cache"}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez ",(0,t.jsx)(n.strong,{children:"Vrai"})," dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"avecCache"}),', la commande retourne les propri\xe9t\xe9s de l\'objet "cache" avec le contenu suivant :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom de la propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type de la valeur"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheUsage"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Taux d'utilisation du cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numOfLoads"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Nombre d'objets charg\xe9s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"currentSize"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Taille actuelle du cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maxSize"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Taille maximale du cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectMaxSize"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Taille maximale des objets pouvant \xeatre charg\xe9s dans le cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enabled"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:'"true" si le serveur web est activ\xe9'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbCachedObjects"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Nombre d'objets dans le cache"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cachedObjects"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection d'objets dans le cache. Chaque objet mis en cache est d\xe9fini par diff\xe9rentes propri\xe9t\xe9s (url, mimeType, expirationType, lastModified, etc.)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s ex\xe9cution du code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$webServerInfo:=WEB Get server info(True)\n"})}),"\n",(0,t.jsx)(n.p,{children:"... $webServerInfo contiendra par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "started": true,\n   "uptime": 40,\n   "SOAPServerStarted": true,\n   "startMode": "manual",\n   "httpRequestCount": 0,\n   "options": {\n      "CORSEnabled": false,\n      "CORSSettings": null,\n      "webCharacterSet": "UTF-8",\n      "webHTTPCompressionLevel": 1,\n      "webHTTPCompressionThreshold": 1024,\n      "webHTTPSPortID": 443,\n      "webIPAddressToListen": ["192.168.xxx.xxx"],\n      "webInactiveProcessTimeout": 28800,\n      "webInactiveSessionTimeout": 28800,\n      "webMaxConcurrentProcesses": 100,\n      "webPortID": 80\n   },\n   "security": {\n      "HTTPEnabled": true,\n      "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",\n      "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",\n      "perfectForwardSecrecy": true,\n      "minTLSVersion": "1.2"\n   },\n    "cache": {\n        "cacheUsage": 1,\n        "numOfLoads": 24,\n        "currentSize": 154219,\n        "maxSize": 10485760,\n        "objectMaxSize": 524288,\n        "enabled": true,\n        "nbCachedObjects": 23,\n        "cachedObjects": [\n            {...},{...}\n         ]\n   }\n}```\n\n#### Voir aussi \n\n[License info](../commands/license-info.md)  \n[Process activity](../commands/process-activity.md)  \n[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  \n\n#### Propri\xe9t\xe9s\n\n|  |  |\n| --- | --- |\n| Num\xe9ro de commande | 1531 |\n| Thread safe | &check; |\n\n\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);