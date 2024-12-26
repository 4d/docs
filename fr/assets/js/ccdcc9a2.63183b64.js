"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94211"],{287723:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/generate-certificate-request","title":"GENERATE CERTIFICATE REQUEST","description":"GENERATE CERTIFICATE REQUEST ( cl\xe9Priv\xe9e ; demCertif ; tabCodes ; tabLibell\xe9s )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-certificate-request.md","sourceDirName":"commands-legacy","slug":"/commands/generate-certificate-request","permalink":"/docs/fr/commands/generate-certificate-request","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-certificate-request.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-certificate-request","title":"GENERATE CERTIFICATE REQUEST","slug":"/commands/generate-certificate-request","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Secured Protocol","permalink":"/docs/fr/category/secured-protocol"},"next":{"title":"GENERATE ENCRYPTION KEYPAIR","permalink":"/docs/fr/commands/generate-encryption-keypair"}}'),s=t("785893"),d=t("250065");let i={id:"generate-certificate-request",title:"GENERATE CERTIFICATE REQUEST",slug:"/commands/generate-certificate-request",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GENERATE CERTIFICATE REQUEST"})," ( ",(0,s.jsx)(n.em,{children:"cl\xe9Priv\xe9e"})," ; ",(0,s.jsx)(n.em,{children:"demCertif"})," ; ",(0,s.jsx)(n.em,{children:"tabCodes"})," ; ",(0,s.jsx)(n.em,{children:"tabLibell\xe9s"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cl\xe9Priv\xe9e"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB contenant la cl\xe9 priv\xe9e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"demCertif"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"BLOB devant recevoir la demande de certificat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabCodes"}),(0,s.jsx)(n.td,{children:"Integer array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Liste des codes d\u2019informations"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabLibell\xe9s"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Liste des libell\xe9s d\u2019informations"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GENERATE CERTIFICATE REQUEST"})," permet de g\xe9n\xe9rer une demande de certificat au format PKCS, directement exploitable par des autorit\xe9s de certification telles que Verisign\xae ou Thawthe\xae. Le certificat est une pi\xe8ce essentielle du fonctionnement du protocole SSL dans le cadre d\u2019un serveur Web. Il est envoy\xe9 \xe0 chaque browser se connectant en mode SSL. Il contient la \u201Ccarte d\u2019identit\xe9\u201D du site Web (reprenant les informations que vous saisissez dans la commande), ainsi que sa cl\xe9 publique \u2014 permettant aux browsers de d\xe9crypter les informations re\xe7ues. En outre, le certificat contient diverses informations ajout\xe9es par l\u2019autorit\xe9 de certification."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Pour plus d\u2019informations sur le fonctionnement du protocole SSL avec le serveur Web 4D, reportez-vous \xe0 la section ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["La demande de certificat n\xe9cessite une paire de cl\xe9s g\xe9n\xe9r\xe9e \xe0 l\u2019aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," et contient diverses informations. C\u2019est en combinant cette demande avec d\u2019autres param\xe8tres qui lui sont propres, que l\u2019autorit\xe9 de certification sera en mesure de g\xe9n\xe9rer un certificat."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"cl\xe9Priv\xe9e"})," un BLOB contenant la cl\xe9 priv\xe9e g\xe9n\xe9r\xe9e avec la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"demCertif"})," un BLOB vide. Apr\xe8s l\u2019ex\xe9cution de la commande, il contiendra la demande de certificat au format PKCS encod\xe9 en base64. Vous pouvez stocker directement ce contenu dans un fichier texte suffix\xe9 .pem, par exemple \xe0 l\u2019aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),", pour la faire parvenir \xe0 l\u2019autorit\xe9 de certification."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important :"})," La cl\xe9 priv\xe9e est utilis\xe9e pour g\xe9n\xe9rer la demande de certificat mais ne doit pas \xeatre envoy\xe9e \xe0 l\u2019autorit\xe9 de certification."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous devez remplir les tableaux ",(0,s.jsx)(n.em,{children:"tabCodes"})," (de type entier long) et ",(0,s.jsx)(n.em,{children:"tabLibell\xe9s"})," (de type alpha) avec, respectivement, les num\xe9ros de code et les libell\xe9s des informations destin\xe9es \xe0 l\u2019autorit\xe9 de certification.",(0,s.jsx)(n.br,{}),"\nLes codes et les libell\xe9s attendus peuvent varier en fonction de l\u2019autorit\xe9 de certification et du mode d\u2019utilisation du certificat. Toutefois, dans le cadre d\u2019une utilisation standard du certificat (connexions d\u2019un serveur Web via SSL), les tableaux doivent contenir les \xe9l\xe9ments suivants :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Informations \xe0 fournir"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"tabCodes"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"tabLibell\xe9s (Exemples)"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CommonName : Nom du domaine"}),(0,s.jsx)(n.td,{children:"13"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://www.4D.fr",children:"www.4D.fr"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CountryName : Code du pays (deux lettres)"}),(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"FR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LocalityName : Ville"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsx)(n.td,{children:"Clichy"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"StateOrProvinceName : D\xe9partement, Etat..."}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"Hauts de Seine"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OrganizationName : Raison sociale"}),(0,s.jsx)(n.td,{children:"17"}),(0,s.jsx)(n.td,{children:"4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OrganizationUnit : Service/Personne en charge du serveur"}),(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Web Administrator"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["L\u2019ordre dans lequel les codes et les informations sont ins\xe9r\xe9s dans les tableaux n\u2019a pas d\u2019importance, en revanche les deux tableaux doivent \xeatre \u201Csynchronis\xe9s\u201D : si l\u2019\xe9l\xe9ment {3} du tableau ",(0,s.jsx)(n.em,{children:"tabCodes"})," contient la valeur 15 (nom de la ville), l\u2019\xe9l\xe9ment {3} du tableau ",(0,s.jsx)(n.em,{children:"tabLibell\xe9s"})," doit contenir cette information, dans notre exemple Clichy."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["Un formulaire \u201CDemande de certificat\u201D comporte les six champs n\xe9cessaires \xe0 l\u2019\xe9tablissement d\u2019une demande de certificat standard. Le bouton ",(0,s.jsx)(n.strong,{children:"G\xe9n\xe9rer"})," cr\xe9e un document sur disque contenant la demande de certificat. Le document \u201CCl\xe9priv\xe9e.txt\u201D contient la cl\xe9 priv\xe9e (g\xe9n\xe9r\xe9e \xe0 l\u2019aide la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),") doit d\xe9j\xe0 \xeatre pr\xe9sent sur le disque."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(651997).Z+"",width:"420",height:"305"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet du bouton bG\xe9n\xe9rer\n\xa0var $vbcl\xe9Priv\xe9e;$vbDemandeCert : Blob\n\xa0var $NumTable : Integer\n\xa0ARRAY LONGINT($tLCodes;6)\n\xa0ARRAY STRING(80;$tAInfos;6)\n\xa0\n\xa0$NumTable:=Table(Current form table)\n\xa0For($i;1;6)\n\xa0\xa0\xa0\xa0$tAInfos{$i}:=Field($NumTable;$i)->\n\xa0\xa0\xa0\xa0$tLCodes{$i}:=$i+12\n\xa0End for\n\xa0If(Find in array($tAInfos;"")#-1)\n\xa0\xa0\xa0\xa0ALERT("Vous devez remplir tous les champs.")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("S\xe9lectionnez votre cl\xe9 priv\xe9e.")\n\xa0\xa0\xa0\xa0$vhRefDoc:=Open document("")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhRefDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbcl\xe9Priv\xe9e)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GENERATE CERTIFICATE REQUEST($vbcl\xe9Priv\xe9e;$vbDemandeCert;$tLCodes;$tAInfos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("Demande.txt";$vbDemandeCert)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Cl\xe9 priv\xe9e invalide.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"691"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},651997:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);