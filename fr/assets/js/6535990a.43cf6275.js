"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39153"],{290264:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands/open-datastore","title":"Open datastore","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/open-datastore.md","sourceDirName":"commands","slug":"/commands/open-datastore","permalink":"/docs/fr/20-R7/commands/open-datastore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fopen-datastore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-datastore","title":"Open datastore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATABASE","permalink":"/docs/fr/20-R7/commands/open-database"},"next":{"title":"OPEN RUNTIME EXPLORER","permalink":"/docs/fr/20-R7/commands/open-runtime-explorer"}}'),r=t("785893"),i=t("250065");let d={id:"open-datastore",title:"Open datastore",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"Prise en charge de l'acc\xe8s aux instances Qodly"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R4"}),(0,r.jsxs)(n.td,{children:["Nouvelle propri\xe9t\xe9 ",(0,r.jsx)(n.em,{children:"passwordAlgorithm"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Open datastore"}),"( ",(0,r.jsx)(n.em,{children:"connectionInfo"})," : Object ; ",(0,r.jsx)(n.em,{children:"localID"})," : Text ) : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connectionInfo"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Propri\xe9t\xe9s de connexion utilis\xe9es pour joindre le datastore distant"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"localID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Identifiant \xe0 affecter au datastore ouvert sur l'application locale (obligatoire)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"cs.DataStore"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objet datastore"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"Open datastore"})," connecte l'application au datastore distant identifi\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"connectionInfo"})," et renvoie un objet ",(0,r.jsx)(n.code,{children:"cs.DataStore"})," correspondant associ\xe9 \xe0 l'alias local ",(0,r.jsx)(n.em,{children:"localID"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Les datastores distants suivants sont pris en charge par la commande :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"type de datastore"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Application 4D distante"}),(0,r.jsxs)(n.td,{children:["Une application 4D disponible en tant que datastore distant, c'est-\xe0-dire :",(0,r.jsx)(n.li,{children:"son serveur web est lanc\xe9 avec le support de http et/ou https,"}),(0,r.jsxs)(n.li,{children:["son datastore est expos\xe9 via l'option REST (",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/REST/configuration#d%C3%A9marrer-le-serveur-rest",children:(0,r.jsx)(n.strong,{children:"Exposer en tant que serveur REST"})})," coch\xe9e)."]}),"Une licence peut \xeatre requise (voir note)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/cloud/getStarted",children:"Application Qodly"})}),(0,r.jsxs)(n.td,{children:["Une application Qodly Server qui vous a fourni un ",(0,r.jsx)(n.strong,{children:"api endpoint"})," et une ",(0,r.jsx)(n.strong,{children:"api key"})," valide associ\xe9e \xe0 un r\xf4le d\xe9fini. Vous devez passer la cl\xe9 d'api dans la propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:"api-key"})," de l'objet ",(0,r.jsx)(n.em,{children:"connectionInfo"}),". Vous pouvez ensuite travailler avec l'objet datastore renvoy\xe9, avec tous les privil\xe8ges accord\xe9s au r\xf4le associ\xe9."]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Les requ\xeates ",(0,r.jsx)(n.code,{children:"Open datastore"})," reposent sur l'API REST 4D et peuvent n\xe9cessiter une licence 4D Client pour ouvrir la connexion sur un 4D Server distant. R\xe9f\xe9rez-vous \xe0 la section ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/REST/authUsers#user-login-modes",children:"User login mode"})," pour savoir comment configurer l'authentification en fonction du mode de connexion utilisateur actuel s\xe9lectionn\xe9."]})}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"connectionInfo"})," un objet d\xe9crivant le datastore distant auquel vous souhaitez vous connecter. Il peut contenir les propri\xe9t\xe9s suivantes (toutes les propri\xe9t\xe9s sont optionnelles, \xe0 l'exception de ",(0,r.jsx)(n.em,{children:"hostname"}),") :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Application 4D distante"}),(0,r.jsx)(n.th,{children:"Application Qodly"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hostname"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Nom ou adresse IP de la base de donn\xe9es distante + " :" + num\xe9ro de port (le num\xe9ro de port est obligatoire)'}),(0,r.jsx)(n.td,{children:"API Endpoint de l'instance Qodly cloud"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Nom d'utilisateur"}),(0,r.jsx)(n.td,{children:"- (ignor\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Mot de passe de l'utilisateur"}),(0,r.jsx)(n.td,{children:"- (ignor\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idleTimeout"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["D\xe9lai d'inactivit\xe9 de la session (exprim\xe9 en minutes), au terme duquel la session est automatiquement ferm\xe9e par 4D. Si cette propri\xe9t\xe9 est omise, la valeur par d\xe9faut est 60 (1h). La valeur ne peut pas \xeatre < 60 (si une valeur inf\xe9rieure est pass\xe9e, le timeout est fix\xe9 \xe0 60). Pour plus d'informations, voir ",(0,r.jsx)(n.strong,{children:"Fermeture des sessions"}),"."]}),(0,r.jsx)(n.td,{children:"- (ignor\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tls"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Vrai pour utiliser une connexion s\xe9curis\xe9e(1). Si cette propri\xe9t\xe9 est omise, \"false\" par d\xe9faut. L'utilisation d'une connexion s\xe9curis\xe9e est recommand\xe9e dans la mesure du possible."}),(0,r.jsx)(n.td,{children:"Vrai pour utiliser une connexion s\xe9curis\xe9e. Si omis, faux par d\xe9faut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'doit \xeatre "4D Server"'}),(0,r.jsx)(n.td,{children:"- (ignor\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"api-key"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"- (ignor\xe9)"}),(0,r.jsx)(n.td,{children:"API key de l'instance Qodly cloud"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Si ",(0,r.jsx)(n.code,{children:"tls"})," est vrai, le protocole HTTPS est utilis\xe9 si :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTPS est activ\xe9 sur le datastore distant"}),"\n",(0,r.jsx)(n.li,{children:"Le port donn\xe9 correspond au port HTTPS configur\xe9 dans les propri\xe9t\xe9s"}),"\n",(0,r.jsx)(n.li,{children:'un certificat valide et une cl\xe9 de chiffrement priv\xe9e sont install\xe9s dans l\'application 4D. Sinon, l\'erreur "1610 - Une requ\xeate vers l\u2019h\xf4te: "{xxx}" a \xe9chou\xe9" est g\xe9n\xe9r\xe9e'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"localID"})," est un alias local de la session ouverte sur le datastore distant. Si ",(0,r.jsx)(n.em,{children:"localID"})," existe d\xe9j\xe0 dans l'application, il est utilis\xe9. Sinon, une nouvelle session ",(0,r.jsx)(n.em,{children:"localID"})," est cr\xe9\xe9e lors de l\u2019utilisation de l\u2019objet datastore."]}),"\n",(0,r.jsx)(n.p,{children:"Une fois la session ouverte, les instructions suivantes deviennent \xe9quivalentes et renvoient une r\xe9f\xe9rence sur le m\xeame objet datastore :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $myds:=Open datastore(connectionInfo;"myLocalId")\n $myds2:=ds("myLocalId")\n  //$myds et $myds2 sont \xe9quivalents\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Les objets disponibles dans le ",(0,r.jsx)(n.code,{children:"cs.Datastore"})," sont mapp\xe9s conform\xe9ment aux [r\xe8gles g\xe9n\xe9rales ORDA] (ORDA/dsMapping.md#general-rules)."]}),"\n",(0,r.jsxs)(n.p,{children:["Si aucun datastore correspondant n'est trouv\xe9, ",(0,r.jsx)(n.code,{children:"Open datastore"})," retourne ",(0,r.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Connexion \xe0 un datastore distant sans utilisateur/mot de passe :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Connexion \xe0 un datastore distant avec utilisateur/mot de passe/timeout/tls :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";\\"192.168.18.11:4443";\\  \n  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"Travailler avec plusieurs datastores distants :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $frenchStudents; $foreignStudents : cs.DataStore\n $connectTo:=New object("hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")\n ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(n.p,{children:"Connexion \xe0 une application Qodly :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $connectTo : Object:={hostname : "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com" ; tls : True}\n\nvar $remoteDS : 4D.DataStoreImplementation\nvar $data : 4D.EntitySelection\n\n$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //uniquement \xe0 titre d\'exemple  \n  //il est recommand\xe9 de stocker la cl\xe9 API dans un endroit s\xe9curis\xe9 \n  //(par ex. un fichier) et de la charger dans le code\n\n$remoteDS:=Open datastore($connectTo; "remoteId")\n$data:=$remoteDS.item.all()\n\nALERT(String($data.length)+" items have been read")\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,r.jsxs)(n.p,{children:["En cas d'erreur, la commande retourne ",(0,r.jsx)(n.strong,{children:"Null"}),'. Si le datastore distant ne peut pas \xeatre joint (adresse incorrecte, web serveur non lanc\xe9, http et https non activ\xe9s, etc.), l\'erreur 1610 "Une requ\xeate vers l\u2019h\xf4te: {xxx} a \xe9chou\xe9" est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode install\xe9e par ',(0,r.jsx)(n.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ds",children:"ds"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1452"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);