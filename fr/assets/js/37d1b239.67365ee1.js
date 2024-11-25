"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87187"],{700157:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>s});var i=JSON.parse('{"id":"commands-legacy/encrypt-blob","title":"ENCRYPT BLOB","description":"ENCRYPT BLOB ( aCrypter ; cl\xe9PrivEmetteur {; cl\xe9PubR\xe9cepteur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/encrypt-blob.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-blob","permalink":"/docs/fr/commands/encrypt-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"encrypt-blob","title":"ENCRYPT BLOB","slug":"/commands/encrypt-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOCUMENT TO BLOB","permalink":"/docs/fr/commands/document-to-blob"},"next":{"title":"EXPAND BLOB","permalink":"/docs/fr/commands/expand-blob"}}'),r=t("785893"),l=t("250065");let s={id:"encrypt-blob",title:"ENCRYPT BLOB",slug:"/commands/encrypt-blob",displayed_sidebar:"docs"},c=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Optimisation des commandes de cryptage",id:"optimisation-des-commandes-de-cryptage",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ENCRYPT BLOB"})," ( ",(0,r.jsx)(n.em,{children:"aCrypter"})," ; ",(0,r.jsx)(n.em,{children:"cl\xe9PrivEmetteur"})," {; ",(0,r.jsx)(n.em,{children:"cl\xe9PubR\xe9cepteur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aCrypter"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Donn\xe9es \xe0 crypter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Donn\xe9es crypt\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cl\xe9PrivEmetteur"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cl\xe9 priv\xe9e de l\u2019\xe9metteur"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cl\xe9PubR\xe9cepteur"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cl\xe9 publique du r\xe9cepteur"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ENCRYPT BLOB"})," permet de crypter le contenu du BLOB ",(0,r.jsx)(n.em,{children:"aCrypter"})," \xe0 l\u2019aide de la cl\xe9 priv\xe9e de l\u2019\xe9metteur ",(0,r.jsx)(n.em,{children:"cl\xe9PrivEmetteur"})," ainsi que, optionnellement, de la cl\xe9 publique du r\xe9cepteur ",(0,r.jsx)(n.em,{children:"cl\xe9PubR\xe9cepteur"}),". Pour obtenir une paire de cl\xe9s de cryptage (cl\xe9 publique et cl\xe9 priv\xe9e), utilisez la routine ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),", plac\xe9e dans le th\xe8me \u201CProtocole s\xe9curis\xe9\u201D."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La commande ",(0,r.jsx)(n.strong,{children:"ENCRYPT BLOB"})," exploite l\u2019algorithme et les fonctions de cryptage du protocole TLS. Par cons\xe9quent, pour pouvoir utiliser cette commande, vous devez veiller \xe0 ce que les composants n\xe9cessaires au fonctionnement du protocole TLS soient install\xe9s sur la machine \u2014 m\xeame si vous ne souhaitez pas utiliser TLS dans le cadre de connexions \xe0 un serveur 4D. Pour plus d'informations, reportez-vous \xe0 ",(0,r.jsx)(n.em,{children:"developer.4d.com"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L\u2019utilisation d\u2019une seule cl\xe9 pour le cryptage (cl\xe9 priv\xe9e de l\u2019\xe9metteur) garantit l\u2019impossibilit\xe9 pour toute personne ne disposant pas de la cl\xe9 publique de lire les donn\xe9es. Elle garantit \xe9galement que c\u2019est bien l\u2019\xe9metteur qui a crypt\xe9 les donn\xe9es."}),"\n",(0,r.jsx)(n.li,{children:"L\u2019utilisation d\u2019une paire de cl\xe9s pour le cryptage (cl\xe9 priv\xe9e de l\u2019\xe9metteur + cl\xe9 publique du r\xe9cepteur) garantit en outre qu\u2019un seul r\xe9cepteur pourra lire les donn\xe9es."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Le format interne des BLOBs contenant des cl\xe9s est le PKCS. Ce format standard, multi-plate-forme, permet l\u2019\xe9change ou la manipulation des cl\xe9s par simple copier-coller dans un Email ou un fichier texte."}),"\n",(0,r.jsxs)(n.p,{children:["Apr\xe8s l\u2019ex\xe9cution de la commande, le BLOB ",(0,r.jsx)(n.em,{children:"aCrypter"})," contient les donn\xe9es crypt\xe9es. Ces donn\xe9es ne pourront \xeatre d\xe9crypt\xe9es qu\u2019avec la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/decrypt-blob",children:"DECRYPT BLOB"}),", \xe0 laquelle la cl\xe9 publique de l\u2019\xe9metteur sera pass\xe9e en param\xe8tre. En outre, si la cl\xe9 publique (optionnelle) du r\xe9cepteur avait \xe9t\xe9 utilis\xe9e pour le cryptage, la cl\xe9 priv\xe9e du r\xe9cepteur sera \xe9galement n\xe9cessaire pour le d\xe9cryptage."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Principe du cryptage \xe0 cl\xe9s publiques/priv\xe9es pour l\u2019\xe9change de messages entre deux individus, \u201CAlice\u201D et \u201CBob\u201D"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(212669).Z+"",width:"326",height:"189"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," L\u2019algorithme de cryptage comporte une fonction de v\xe9rification d\u2019int\xe9grit\xe9 (checksum), afin d\u2019emp\xeacher toute modification malveillante ou accidentelle du contenu du BLOB. Par cons\xe9quent, un BLOB crypt\xe9 ne doit pas \xeatre modifi\xe9, sous peine de ne pas pouvoir \xeatre d\xe9crypt\xe9."]}),"\n",(0,r.jsx)(n.h5,{id:"optimisation-des-commandes-de-cryptage",children:"Optimisation des commandes de cryptage"}),"\n",(0,r.jsx)(n.p,{children:"Le cryptage des donn\xe9es ralentit l\u2019ex\xe9cution de l\u2019application, en particulier si une paire de cl\xe9s est utilis\xe9e. Deux types d\u2019optimisations sont toutefois possibles :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Suivant la quantit\xe9 de m\xe9moire disponible, la commande s\u2019ex\xe9cute en mode \u201Csynchrone\u201D ou \u201Casynchrone\u201D.",(0,r.jsx)(n.br,{}),"\nLe mode asynchrone est plus rapide, car il ne bloque pas les autres process. Ce mode est automatiquement utilis\xe9 si la m\xe9moire disponible est au moins \xe9gale \xe0 2 fois la taille de la source \xe0 crypter.",(0,r.jsx)(n.br,{}),"\nDans le cas contraire, pour des raisons de s\xe9curit\xe9, le mode synchrone est utilis\xe9. Ce mode est plus lent car les autres process sont bloqu\xe9s."]}),"\n",(0,r.jsx)(n.li,{children:"Dans le cas de BLOBs volumineux, l\u2019astuce consiste \xe0 crypter uniquement une partie d\xe9termin\xe9e et sensible du BLOB, afin de r\xe9duire la taille des donn\xe9es \xe0 traiter et donc le temps d\u2019ex\xe9cution."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2022 Utilisation d\u2019une seule cl\xe9"})}),"\n",(0,r.jsx)(n.p,{children:"Une soci\xe9t\xe9 veut garantir la confidentialit\xe9 d\u2019informations stock\xe9es dans une base 4D. Elle doit r\xe9guli\xe8rement envoyer ces donn\xe9es \xe0 ses filiales, par exemple sous la forme de fichiers via Internet."}),"\n",(0,r.jsxs)(n.p,{children:["1. La soci\xe9t\xe9 commence par g\xe9n\xe9rer une paire de cl\xe9s \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode GENERE_CLES_TXT\n\xa0var $Bcl\xe9Publique;$Bcl\xe9Priv\xe9e : Blob\n\xa0GENERATE ENCRYPTION KEYPAIR($Bcl\xe9Priv\xe9e;$Bcl\xe9Publique)\n\xa0BLOB TO DOCUMENT("cl\xe9Publique.txt";$Bcl\xe9Publique)\n\xa0BLOB TO DOCUMENT("cl\xe9Priv\xe9e.txt";$Bcl\xe9Priv\xe9e)\n'})}),"\n",(0,r.jsx)(n.p,{children:"2. La soci\xe9t\xe9 conserve la cl\xe9 priv\xe9e, et remet \xe0 chaque filiale une copie du document contenant la cl\xe9 publique. Il faut, bien entendu, que cette transmission s\u2019effectue d\u2019une fa\xe7on s\xfbre, par exemple par la copie sur un support num\xe9rique remis physiquement aux filiales."}),"\n",(0,r.jsx)(n.p,{children:"3. Par la suite, la soci\xe9t\xe9 copie les informations confidentielles (stock\xe9es par exemple dans un champ texte) dans des BLOBs et les crypte avec sa cl\xe9 priv\xe9e :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode CRYPTER_INFOS\n\xa0var $vbCrypt\xe9;$vbcl\xe9Priv\xe9e : Blob\n\xa0var $vtCrypter : Text\n\xa0\n\xa0$vtCrypter:=[Confidentiel]Info\n\xa0VARIABLE TO BLOB($vtCrypter;$vbCrypt\xe9)\n\xa0DOCUMENT TO BLOB("cl\xe9Priv\xe9e.txt";$vbcl\xe9Priv\xe9e)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ENCRYPT BLOB($vbCrypt\xe9;$vbcl\xe9Priv\xe9e)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("MiseAJour.txt";$vbCrypt\xe9)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"4. Le fichier de mise \xe0 jour peut alors \xeatre envoy\xe9 aux filiales (m\xeame en passant par un canal non s\xe9curis\xe9 comme Internet). Si un tiers intercepte le fichier crypt\xe9, il sera dans l\u2019incapacit\xe9 de le d\xe9crypter sans la cl\xe9 publique."}),"\n",(0,r.jsx)(n.p,{children:"5. Chaque filiale peut, quant \xe0 elle, d\xe9crypter le document \xe0 l\u2019aide de la cl\xe9 publique :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode DECRYPTER_INFOS\n\xa0var $vbCrypt\xe9;$vbcl\xe9Publique : Blob\n\xa0var $vtD\xe9crypt\xe9 : Text\n\xa0var $vhRefDoc : Time\n\xa0\n\xa0ALERT("Veuillez s\xe9lectionner le document crypt\xe9.")\n\xa0$vhRefDoc:=Open document("")\xa0//S\xe9lection du fichier MiseAJour.txt\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhRefDoc)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbCrypt\xe9)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB("cl\xe9Publique.txt";$vbcl\xe9Publique)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DECRYPT BLOB($vbCrypt\xe9;$vbcl\xe9Publique)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vbCrypt\xe9;$vtD\xe9crypt\xe9)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Confidentiel])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Confidentiel]Info:=$vtD\xe9crypt\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Confidentiel])\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2022 Utilisation de deux cl\xe9s"})}),"\n",(0,r.jsxs)(n.p,{children:["Une soci\xe9t\xe9 souhaite utiliser un syst\xe8me d\u2019\xe9change de donn\xe9es via Internet dans lequel chaque filiale re\xe7oit des informations confidentielles mais envoie \xe9galement ses propres informations \xe0 la maison-m\xe8re. Ce syst\xe8me a donc les imp\xe9ratifs suivants :",(0,r.jsx)(n.br,{}),"\n- Seul le destinataire doit pouvoir lire un message,",(0,r.jsx)(n.br,{}),"\n- On doit avoir la garantie que le message provient bien de l\u2019exp\xe9diteur."]}),"\n",(0,r.jsx)(n.p,{children:"1. La maison-m\xe8re ainsi que chaque filiale g\xe9n\xe8rent leurs propres paires de cl\xe9s (\xe0 l\u2019aide de la m\xe9thode GENERE_CLES_TXT)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode GENERE_CLES_TXT\n\xa0var $Bcl\xe9Publique;$Bcl\xe9Priv\xe9e : Blob\n\xa0GENERATE ENCRYPTION KEYPAIR($Bcl\xe9Priv\xe9e;$Bcl\xe9Publique)\n\xa0BLOB TO DOCUMENT("cl\xe9Publique.txt";$Bcl\xe9Publique)\n\xa0BLOB TO DOCUMENT("cl\xe9Priv\xe9e.txt";$Bcl\xe9Priv\xe9e)\n'})}),"\n",(0,r.jsx)(n.p,{children:"2. Chacune garde sa cl\xe9 priv\xe9e. Chaque filiale envoie sa cl\xe9 publique \xe0 la maison-m\xe8re, qui elle-m\xeame envoie sa cl\xe9 publique \xe0 chaque filiale. Cette transmission ne doit pas n\xe9cessairement \xeatre effectu\xe9e par un canal prot\xe9g\xe9, car la seule d\xe9tention de la cl\xe9 publique dans ce cas sera insuffisante pour d\xe9crypter une information."}),"\n",(0,r.jsx)(n.p,{children:"3. Pour crypter une information \xe0 envoyer, une filiale ou la maison-m\xe8re ex\xe9cute la m\xe9thode CRYPTER_INFOS_2 qui utilise la cl\xe9 priv\xe9e de l\u2019\xe9metteur et la cl\xe9 publique du destinataire pour crypter les donn\xe9es :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode CRYPTER_INFOS_2\n\xa0var $vbCrypt\xe9;$vbcl\xe9Priv\xe9e;$vbcl\xe9Publique : Blob\n\xa0var $vtCrypter : Text\n\xa0var $vhRefDoc : Time\n\xa0\n\xa0$vtCrypter:=[Confidentiel]Info\n\xa0VARIABLE TO BLOB($vtCrypter;$vbCrypt\xe9)\n\xa0\xa0// On charge sa propre cl\xe9 priv\xe9e...\n\xa0DOCUMENT TO BLOB("cl\xe9Priv\xe9e.txt";$vbcl\xe9Priv\xe9e)\n\xa0If(OK=1)\n\xa0\xa0// ...et la cl\xe9 publique du r\xe9cepteur\n\xa0\xa0\xa0\xa0ALERT("Veuillez s\xe9lectionner la cl\xe9 publique du destinataire.")\n\xa0\xa0\xa0\xa0$vhRefDoc:=Open document("")\xa0//S\xe9lection de la cl\xe9 publique \xe0 charger\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhRefDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbcl\xe9Publique)\n\xa0\xa0//Cryptage du BLOB avec les deux cl\xe9s en param\xe8tres\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ENCRYPT BLOB($vbCrypt\xe9;$vbcl\xe9Priv\xe9e;$vbcl\xe9Publique)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("MiseAJour.txt";$vbCrypt\xe9)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"4. Le fichier crypt\xe9 peut alors \xeatre envoy\xe9 au destinataire via Internet. Si un tiers l\u2019intercepte, il sera dans l\u2019incapacit\xe9 de le d\xe9crypter, m\xeame en connaissant les cl\xe9s publiques, car il lui manquera la cl\xe9 priv\xe9e du destinataire."}),"\n",(0,r.jsx)(n.p,{children:"5. Chaque destinataire peut, quant \xe0 lui, d\xe9crypter le document re\xe7u, en utilisant sa cl\xe9 priv\xe9e et la cl\xe9 publique de l\u2019\xe9metteur :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode DECRYPTER_INFOS_2\n\xa0var $vbCrypt\xe9;$vbcl\xe9Publique;$vbcl\xe9Priv\xe9e : Blob\n\xa0var $vtD\xe9crypt\xe9 : Text\n\xa0var $vhRefDoc : Time\n\xa0\n\xa0ALERT("Veuillez s\xe9lectionner le document crypt\xe9.")\n\xa0$vhRefDoc:=Open document("")\xa0//S\xe9lection du fichier MiseAJour.txt\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhRefDoc)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbCrypt\xe9)\n\xa0\xa0//On charge sa propre cl\xe9 priv\xe9e\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB("cl\xe9Priv\xe9e.txt";$vbcl\xe9Priv\xe9e)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0// ...et la cl\xe9 publique de l\u2019\xe9metteur\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Veuillez s\xe9lectionner la cl\xe9 publique de l\u2019envoyeur.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhRefDoc:=Open document("")\xa0//S\xe9lection de la cl\xe9 publique\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhRefDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbcl\xe9Publique)\n\xa0\xa0//D\xe9cryptage du BLOB avec les deux cl\xe9s en param\xe8tres\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DECRYPT BLOB($vbCrypt\xe9;$vbcl\xe9Publique;$vbcl\xe9Priv\xe9e)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vbCrypt\xe9;$vtD\xe9crypt\xe9)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Confidentiel])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Confidentiel]Info:=$vtD\xe9crypt\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Confidentiel])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},212669:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var i=t(667294);let r={},l=i.createContext(r);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);