"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58897],{252580:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=i(474848),t=i(28453);const s={id:"tls",title:"Protocole TLS (HTTPS)"},l=void 0,c={id:"Admin/tls",title:"Protocole TLS (HTTPS)",description:"Tous les serveurs 4D peuvent communiquer en mode s\xe9curis\xe9 via le protocole TLS (Transport Layer Security) :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Admin/tls.md",sourceDirName:"Admin",slug:"/Admin/tls",permalink:"/docs/fr/20-R6/Admin/tls",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Ftls.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"tls",title:"Protocole TLS (HTTPS)"},sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/docs/fr/20-R6/Admin/cli"},next:{title:"Managing 4D Licenses",permalink:"/docs/fr/20-R6/Admin/licenses"}},a={},o=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Version minimale",id:"version-minimale",level:2},{value:"Activation de TLS avec le serveur HTTP",id:"activation-de-tls-avec-le-serveur-http",level:2},{value:"Certificats",id:"certificats",level:3},{value:"Format",id:"format",level:4},{value:"Cryptage",id:"cryptage",level:4},{value:"Installation des fichiers de certificats",id:"installation-des-fichiers-de-certificats",level:3},{value:"Activation du TLS",id:"activation-du-tls",level:3},{value:"Perfect Forward Secrecy (PFS)",id:"perfect-forward-secrecy-pfs",level:3},{value:"Activation de TLS avec les autres serveurs",id:"activation-de-tls-avec-les-autres-serveurs",level:2},{value:"Comment obtenir un certificat RSA ? (tutoriel)",id:"comment-obtenir-un-certificat-rsa--tutoriel",level:2}];function d(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Tous les serveurs 4D peuvent communiquer en mode s\xe9curis\xe9 via le protocole TLS (Transport Layer Security) :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"le serveur HTTP"}),"\n",(0,n.jsx)(r.li,{children:"le serveur d'application (application de bureau client-serveur)"}),"\n",(0,n.jsx)(r.li,{children:"le serveur SQL"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["De plus, le client HTTP 4D (commande ",(0,n.jsx)(r.code,{children:"HTTP get"})," par exemple) prend \xe9galement en charge le protocole TLS."]}),"\n",(0,n.jsx)(r.h2,{id:"vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,n.jsx)(r.p,{children:"Le protocole TLS (successeur du SSL) a pour but de s\xe9curiser les informations de donn\xe9es entre deux applications\u2014principalement entre un serveur web et un navigateur. Ce protocole est largement r\xe9pandu et compatible avec la plupart des navigateurs web."}),"\n",(0,n.jsx)(r.p,{children:"Au niveau de l'architecture r\xe9seau, le protocole de s\xe9curit\xe9 s'ins\xe8re entre la couche TCP/IP (bas niveau) et le protocole de haut niveau HTTP, pour lequel il est principalement destin\xe9."}),"\n",(0,n.jsx)(r.p,{children:"Configuration du r\xe9seau avec TLS :"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:i(70784).A+"",width:"318",height:"174"})}),"\n",(0,n.jsx)(r.p,{children:"Le protocole TLS a pour but d'authentifier l'\xe9metteur et le r\xe9cepteur et de garantir la confidentialit\xe9 et l'int\xe9grit\xe9 des informations \xe9chang\xe9es :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Authentification"})," : l'identit\xe9 de l'\xe9metteur et du r\xe9cepteur sont confirm\xe9es."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Confidentialit\xe9"}),": les donn\xe9es envoy\xe9es sont crypt\xe9es afin de les rendre inintelligibles pour les tiers non autoris\xe9s."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Int\xe9grit\xe9"}),": les donn\xe9es re\xe7ues n'ont pas \xe9t\xe9 alt\xe9r\xe9es, frauduleusement ou accidentellement."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Les principes de s\xe9curisation utilis\xe9s par TLS sont bas\xe9s sur l\u2019emploi d\u2019un algorithme de cryptage utilisant une paire de cl\xe9s : une cl\xe9 priv\xe9e et une cl\xe9 publique. La cl\xe9 priv\xe9e est utilis\xe9e pour crypter les donn\xe9es. Elle est conserv\xe9e par l\u2019\xe9metteur (le site Web)."}),"\n",(0,n.jsxs)(r.p,{children:["La cl\xe9 publique est utilis\xe9e pour d\xe9crypter les informations et est envoy\xe9e aux r\xe9cepteurs (navigateurs web) via un ",(0,n.jsx)(r.strong,{children:"certificat"}),". Le certificat est d\xe9livr\xe9 par une autorit\xe9 de certification. Le site web paie le prestataire de certificat pour obtenir un certificat garantissant l'authentification du serveur et contenant la cl\xe9 publique permettant l'\xe9change de donn\xe9es en mode s\xe9curis\xe9."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Les navigateurs Web autorisent uniquement les certificats \xe9mis par une autorit\xe9 de certification r\xe9f\xe9renc\xe9e dans leurs propri\xe9t\xe9s."})}),"\n",(0,n.jsx)(r.h2,{id:"version-minimale",children:"Version minimale"}),"\n",(0,n.jsxs)(r.p,{children:["Par d\xe9faut, la version minimale du protocole s\xe9curis\xe9 accept\xe9e par les serveurs 4D est TLS 1.3. Vous pouvez modifier cette valeur via le s\xe9lecteur ",(0,n.jsx)(r.code,{children:"Min TLS version"})," de la commande ",(0,n.jsx)(r.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["Vous pouvez contr\xf4ler de mani\xe8re s\xe9par\xe9e la version TLS minimale  pour les ",(0,n.jsx)(r.strong,{children:"objets webServer"}),"."]})}),"\n",(0,n.jsx)(r.h2,{id:"activation-de-tls-avec-le-serveur-http",children:"Activation de TLS avec le serveur HTTP"}),"\n",(0,n.jsx)(r.p,{children:"Pour pouvoir utiliser le protocole TLS avec le serveur HTTP 4D, vous devez :"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Obtenez vos fichiers de certificats."}),"\n",(0,n.jsx)(r.li,{children:"Installez vos fichiers de certificats \xe0 l'emplacement appropri\xe9."}),"\n",(0,n.jsx)(r.li,{children:"Activer TLS."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificats",children:"Certificats"}),"\n",(0,n.jsx)(r.h4,{id:"format",children:"Format"}),"\n",(0,n.jsxs)(r.p,{children:["Les certificats TLS g\xe9r\xe9s par 4D doivent \xeatre au format ",(0,n.jsx)(r.strong,{children:"PEM"}),". Si votre prestataire de services de certificat vous envoie un certificat dans un format binaire tel que .crt, .pfx ou .p12, vous devez le convertir au format PEM pour pouvoir l'utiliser. Il existe des sites Web o\xf9 vous pouvez effectuer cette conversion en ligne."]}),"\n",(0,n.jsx)(r.h4,{id:"cryptage",children:"Cryptage"}),"\n",(0,n.jsx)(r.p,{children:"4D prend en charge les certificats dans les formats de cryptage standard suivants :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)",children:(0,n.jsx)(r.strong,{children:"RSA"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:(0,n.jsx)(r.strong,{children:"ECDSA"})})}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,n.jsxs)(r.p,{children:["Le format de cryptage ECDSA n'est pas pris en charge par la ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/settings/client-server#network-layer",children:"couche r\xe9seau legacy"})," de 4D."]})}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["4D propose deux commandes pour vous aider \xe0 demander un certificat RSA, ",(0,n.jsx)(r.a,{href:"#how-to-get-a-rsa-certificate-tutorial",children:"voir le tutoriel ci-dessous"}),"."]})}),"\n",(0,n.jsx)(r.h3,{id:"installation-des-fichiers-de-certificats",children:"Installation des fichiers de certificats"}),"\n",(0,n.jsx)(r.p,{children:"Les fichiers de certificat incluent:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"key.pem"}),": un document contenant la cl\xe9 de cryptage priv\xe9e,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"cert.pem"}),": un document contenant le certificat."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Les deux fichiers ",(0,n.jsx)(r.strong,{children:"key.pem"})," et ",(0,n.jsx)(r.strong,{children:"cert.pem"})," doivent \xeatre localis\xe9s :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"avec 4D Server ou 4D en mode local, \xe0 c\xf4t\xe9 du dossier du projet"}),"\n",(0,n.jsxs)(r.li,{children:["avec 4D en mode distant, dans le dossier de la base de donn\xe9es client sur la machine distante (pour plus d'informations sur l'emplacement de ce dossier, voir la commande ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/en/page485.html",children:(0,n.jsx)(r.code,{children:"Get 4D folder"})}),"). Vous devez copier ces fichiers manuellement sur la machine distante."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"activation-du-tls",children:"Activation du TLS"}),"\n",(0,n.jsxs)(r.p,{children:["Pour que les connexions TLS soient accept\xe9es par le serveur HTTP, vous devez activer HTTPS. Reportez-vous au paragraphe ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/WebServer/webServerConfig#enable-https",children:(0,n.jsx)(r.strong,{children:"Activer HTTPS"})})," pour conna\xeetre les diff\xe9rentes fa\xe7ons d'activer TLS pour le serveur HTTP."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["Le serveur web 4D prend \xe9galement en charge l'",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/WebServer/webServerConfig#enable-hsts",children:"option HSTS"})," pour d\xe9clarer que les navigateurs doivent interagir avec lui uniquement via des connexions HTTPS. s\xe9curis\xe9es."]})}),"\n",(0,n.jsx)(r.h3,{id:"perfect-forward-secrecy-pfs",children:"Perfect Forward Secrecy (PFS)"}),"\n",(0,n.jsxs)(r.p,{children:["Le ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Forward_secrecy",children:"PFS"})," ajoute une couche de s\xe9curit\xe9 suppl\xe9mentaire \xe0 vos communications. Plut\xf4t que d'utiliser des cl\xe9s d'\xe9changes pr\xe9\xe9tablies, la PFS cr\xe9e des cl\xe9s de session de mani\xe8re coop\xe9rative entre les parties en communication en utilisant des algorithmes Diffie-Hellman (DH). Le mode conjoint de production des cl\xe9s cr\xe9e un \"secret partag\xe9\" qui emp\xeache des \xe9l\xe9ments externes de les compromettre."]}),"\n",(0,n.jsxs)(r.p,{children:["Lorsque TLS est activ\xe9 sur le serveur Web de 4D Web, PFS est automatiquement activ\xe9. Si le fichier ",(0,n.jsx)(r.em,{children:"dhparams.pem"})," (document contenant la cl\xe9 DH priv\xe9e du serveur) n'existe pas d\xe9j\xe0, 4D le g\xe9n\xe8re automatiquement avec une taille de cl\xe9 de 2048. La g\xe9n\xe9ration initiale de ce fichier peut prendre plusieurs minutes. Le fichier est plac\xe9 avec les fichiers ",(0,n.jsxs)(r.a,{href:"#installing-certificate-files",children:[(0,n.jsx)(r.em,{children:"key.pem"})," et ",(0,n.jsx)(r.em,{children:"cert.pem"})]}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Si vous utilisez une ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/WebServer/webServerConfig##cipher-list",children:"liste de chiffrement personnalis\xe9e"})," et souhaitez activer PFS, v\xe9rifiez que votre liste contient des entr\xe9es avec des algorithmes DH ou ECDH (courbes elliptiques de Diffie\u2013Hellman)."]}),"\n",(0,n.jsx)(r.h2,{id:"activation-de-tls-avec-les-autres-serveurs",children:"Activation de TLS avec les autres serveurs"}),"\n",(0,n.jsx)(r.p,{children:"Pour utiliser TLS avec le serveur d'application 4D (applications desktop client-serveur) ou le serveur SQL, il suffit d'activer les communications TLS et le serveur configure automatiquement les connexions au d\xe9marrage."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Avec le serveur d'application, s\xe9lectionnez l'option ",(0,n.jsx)(r.strong,{children:"Crypter les communications Client-Serveur"})," dans la page ",(0,n.jsx)(r.a,{href:"../settings/client-server#encrypt-client-server-communications",children:'"Client-server/Network options" de la bo\xeete de dialogue Param\xe8tres'}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Avec le serveur SQL, s\xe9lectionnez l'option ",(0,n.jsx)(r.strong,{children:"Activer TLS"})," dans la page ",(0,n.jsx)(r.a,{href:"../settings/sql#sql-server-publishing",children:'"SQL" de la bo\xeete de dialogue Param\xe8tres'}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"comment-obtenir-un-certificat-rsa--tutoriel",children:"Comment obtenir un certificat RSA ? (tutoriel)"}),"\n",(0,n.jsx)(r.p,{children:"La mise en place d\u2019un serveur fonctionnant en TLS n\xe9cessite un certificat num\xe9rique d\xe9livr\xe9 par un op\xe9rateur de certification. Ce certificat renferme diverses informations dont la carte d\u2019identit\xe9 du site ainsi que la cl\xe9 publique utilis\xe9e pour communiquer avec lui. Il est transmis aux clients (navigateurs Web) se connectant au site. Une fois qu\u2019il est accept\xe9, la communication en mode s\xe9curis\xe9 s\u2019\xe9tablit."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Les navigateurs Web autorisent uniquement les certificats \xe9mis par une autorit\xe9 de certification r\xe9f\xe9renc\xe9e dans leurs propri\xe9t\xe9s."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:i(849115).A+"",width:"394",height:"227"})}),"\n",(0,n.jsx)(r.p,{children:"Le choix de l\u2019autorit\xe9 de certification d\xe9pend de plusieurs facteurs. Plus l\u2019autorit\xe9 est \u201cconnue\u201d, plus le nombre de navigateurs acceptant les certificats qu\u2019elle d\xe9livre sera important, mais plus le prix \xe0 payer sera \xe9lev\xe9."}),"\n",(0,n.jsx)(r.p,{children:"Pour obtenir un certificat num\xe9rique :"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["G\xe9n\xe9rez une \u201ccl\xe9 priv\xe9e\u201d \xe0 l\u2019aide de la commande ",(0,n.jsx)(r.code,{children:"GENERER CLES CRYPTAGE"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Attention"})," : Pour des raisons de s\xe9curit\xe9, la cl\xe9 priv\xe9e ne doit jamais \xeatre diffus\xe9e sur un r\xe9seau. En fait, elle ne doit pas quitter le poste serveur. Pour le serveur Web, le fichier Key.pem doit \xeatre plac\xe9 dans le dossier de la structure du projet."]}),"\n"]}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Etablissez une demande de certificat \xe0 l\u2019aide de la commande ",(0,n.jsx)(r.code,{children:"GENERER DEMANDE CERTIFICAT."})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Envoyez la demande de certificat \xe0 l\u2019autorit\xe9 de certification que vous avez choisie.\nPour remplir la demande de certificat, il vous sera peut-\xeatre n\xe9cessaire de contacter l\u2019autorit\xe9 de certification. Les autorit\xe9s de certification v\xe9rifient la r\xe9alit\xe9 des informations qui leur ont \xe9t\xe9 transmises. La demande de certificat est g\xe9n\xe9r\xe9e dans un BLOB au format PKCS encod\xe9 en base64 (format PEM). Ce principe autorise le copier-coller des cl\xe9s sous forme de texte et leur envoi par E-mail en toute s\xe9curit\xe9, sans risque d\u2019alt\xe9ration de leur contenu. Vous pouvez donc par exemple sauvegarder le BLOB contenant la demande de certificat dans un document texte (\xe0 l\u2019aide de ",(0,n.jsx)(r.code,{children:"BLOB VERS DOCUMENT"}),"), puis l\u2019ouvrir et copier-coller son contenu dans un E-mail ou un formulaire Web destin\xe9 \xe0 l\u2019autorit\xe9 de certifica"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Une fois que vous avez re\xe7u votre certificat, cr\xe9ez un fichier texte que vous nommerez \u201ccert.pem\u201d et copiez dans ce fichier le contenu du certificat.\nVous pouvez recevoir votre certificat sous plusieurs formes (g\xe9n\xe9ralement via un E-mail ou un formulaire HTML). 4D accepte la plupart des formats de texte (macOS, PC, Linux...) pour les certificats. En revanche, le certificat doit \xeatre au format ",(0,n.jsx)(r.a,{href:"#format",children:"PEM"}),", ",(0,n.jsx)(r.em,{children:"c'est-\xe0-dire"}),", PKCS encod\xe9 en base64."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Les caract\xe8res de fins de ligne CR ne sont pas pris en charge. Vous devez utiliser CRLF ou LF."}),"\n"]}),"\n",(0,n.jsxs)(r.ol,{start:"5",children:["\n",(0,n.jsxs)(r.li,{children:["Placez le fichier \u201ccert.pem\u201d \xe0 ",(0,n.jsx)(r.a,{href:"#installing-certificate-files",children:"l'emplacement ad\xe9quat"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Le serveur Web peut d\xe8s lors fonctionner en mode s\xe9curis\xe9. La dur\xe9e de validit\xe9 d\u2019un certificat est g\xe9n\xe9ralement comprise entre 3 mois et un an."})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},70784:(e,r,i)=>{i.d(r,{A:()=>n});const n="data:image/png;base64,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"},849115:(e,r,i)=>{i.d(r,{A:()=>n});const n=i.p+"assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png"},28453:(e,r,i)=>{i.d(r,{R:()=>l,x:()=>c});var n=i(296540);const t={},s=n.createContext(t);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);