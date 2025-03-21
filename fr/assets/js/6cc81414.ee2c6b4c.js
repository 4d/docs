"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69292"],{898450:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/send-packet","title":"SEND PACKET","description":"SEND PACKET ( {docRef ;} paquet )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/send-packet.md","sourceDirName":"commands-legacy","slug":"/commands/send-packet","permalink":"/docs/fr/commands/send-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-packet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-packet","title":"SEND PACKET","slug":"/commands/send-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE VARIABLE","permalink":"/docs/fr/commands/receive-variable"},"next":{"title":"SEND RECORD","permalink":"/docs/fr/commands/send-record"}}'),t=s("785893"),c=s("250065");let o={id:"send-packet",title:"SEND PACKET",slug:"/commands/send-packet",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SEND PACKET"})," ( {",(0,t.jsx)(n.em,{children:"docRef"})," ;} ",(0,t.jsx)(n.em,{children:"paquet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docRef"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de document ou canal courant (port s\xe9rie ou document)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paquet"}),(0,t.jsx)(n.td,{children:"Text, Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene ou BLOB \xe0 envoyer"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SEND PACKET"})," envoie ",(0,t.jsx)(n.em,{children:"paquet"})," vers un port s\xe9rie ou un document. Si ",(0,t.jsx)(n.em,{children:"docRef"})," est sp\xe9cifi\xe9, le paquet est \xe9crit dans le document r\xe9f\xe9renc\xe9 par ",(0,t.jsx)(n.em,{children:"docRef"}),". Si ",(0,t.jsx)(n.em,{children:"docRef"})," n'est pas sp\xe9cifi\xe9, le paquet est envoy\xe9 vers le port s\xe9rie ou un document pr\xe9alablement ouvert par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"paquet"})," repr\xe9sente une simple s\xe9rie de donn\xe9es, g\xe9n\xe9ralement une cha\xeene de caract\xe8res.",(0,t.jsx)(n.br,{}),"\nVous pouvez \xe9galement passer un BLOB dans ",(0,t.jsx)(n.em,{children:"paquet"}),". Ce principe permet notamment de s\u2019affranchir des contraintes li\xe9es \xe0 l\u2019encodage des caract\xe8res envoy\xe9s en mode texte (cf. exemple 2)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Lorsque vous passez un BLOB dans ",(0,t.jsx)(n.em,{children:"paquet"}),", la commande ne tient pas compte du jeu de caract\xe8res \xe9ventuellement d\xe9fini par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"}),". Le BLOB est envoy\xe9 sans aucune modification."]}),"\n",(0,t.jsxs)(n.p,{children:["Avant d'utiliser ",(0,t.jsx)(n.strong,{children:"SEND PACKET"}),", vous devez ouvrir un port s\xe9rie ou un document avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),", ou un document avec une commande de gestion des documents."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous envoyez un paquet vers un document, le premier ",(0,t.jsx)(n.strong,{children:"SEND PACKET"})," commence \xe0 \xe9crire les donn\xe9es au d\xe9but du document \u2014 \xe0 moins que ce dernier n'ait \xe9t\xe9 ouvert par la fonction ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"}),". Puis, jusqu'\xe0 ce que le document soit referm\xe9, chaque paquet envoy\xe9 y est \xe9crit \xe0 la suite du pr\xe9c\xe9dent."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Ce fonctionnement est valide avec un document ouvert par ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),". Cependant, pour un document ouvert par ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),", vous pouvez utiliser les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-document-position",children:"Get document position"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-document-position",children:"SET DOCUMENT POSITION"})," pour conna\xeetre et modifier la position \xe0 laquelle, dans le document, la prochaine \xe9criture (",(0,t.jsx)(n.strong,{children:"SEND PACKET"}),") ou lecture (",(0,t.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),") aura lieu."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant \xe9crit, dans un document, des donn\xe9es en provenance de champs. Les valeurs sont \xe9crites sous forme de champs de taille fixe. Dans ce cas, si la longueur d'un champ est inf\xe9rieure \xe0 la taille fix\xe9e, le champ est combl\xe9 avec des espaces (c'est-\xe0-dire que des espaces sont ajout\xe9s de mani\xe8re \xe0 ce que le champ corresponde \xe0 la taille d\xe9finie). Bien que les champs de valeurs fixes soient un moyen peu efficace de stocker des donn\xe9es, certains syst\xe8mes informatiques et certaines applications l'utilisent encore :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$Doc :=Create document(\"\")\xa0// Cr\xe9ation d'un document\n\xa0If(OK=1)\xa0// Est-ce que le document a bien \xe9t\xe9 cr\xe9\xe9 ?\n\xa0\xa0\xa0\xa0For($i;1;Records in selection([Personnes]))\xa0// Boucle pour chaque enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($Doc;Change string(15*Char(Space);[Personnes]Pr\xe9nom;1))\n\xa0\xa0// Envoi du paquet cr\xe9\xe9 \xe0 partir d'une cha\xeene de 15 espaces contenant le champ Pr\xe9nom.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($Doc;Change string(15*Char(Space);[Personnes]Nom;1))\n\xa0\xa0// Envoi d'un second paquet cr\xe9\xe9 \xe0 partir d'une cha\xeene de 15 espaces contenant le champ Nom.\n\xa0\xa0// Cela aurait pu \xeatre mis dans le premier paquet, mais est s\xe9par\xe9 pour des raisons de clart\xe9.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Personnes])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0SEND PACKET($Doc;Char(SUB ASCII code))\n\xa0\xa0// Envoi du code ASCII SUB, utilis\xe9 comme marqueur de fin d'enregistrement par certains ordinateurs.\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($Doc)\xa0// Fermeture du document\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple illustre l\u2019envoi et la r\xe9cup\xe9ration de caract\xe8res \xe9tendus via un BLOB dans un document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $blob_envoi : Blob\n\xa0var $blob_reception : Blob\n\xa0TEXT TO BLOB("\xe2z\xe9rt\xff";$blob_envoi;UTF8 text without length)\n\xa0SET BLOB SIZE($blob_envoi;16;255)\n\xa0$blob_envoi{6}:=0\n\xa0$blob_envoi{7}:=1\n\xa0$blob_envoi{8}:=2\n\xa0$blob_envoi{9}:=3\n\xa0$blob_envoi{10}:=0\n\xa0$vlDocRef:=Create document("blob.test")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET($vlDocRef;$blob_envoi)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n\xa0$vlDocRef:=Open document(document)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE PACKET($vlDocRef;$blob_reception;65536)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-document-position",children:"Get document position"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-document-position",children:"SET DOCUMENT POSITION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"103"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},c=r.createContext(t);function o(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);