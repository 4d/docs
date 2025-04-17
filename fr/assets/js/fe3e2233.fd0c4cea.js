"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43069"],{69186:function(e,s,n){n.r(s),n.d(s,{default:()=>o,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>u});var r=JSON.parse('{"id":"MSC/restore","title":"Page restitution","description":"La page Restitution du Centre de s\xe9curit\xe9 et de maintenance vous permet de restituer manuellement une archive de l\'application courante. Cette page propose plusieurs options permettant de contr\xf4ler la restitution :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/MSC/restore.md","sourceDirName":"MSC","slug":"/MSC/restore","permalink":"/docs/fr/MSC/restore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"restore","title":"Page restitution","sidebar_label":"Page restitution"},"sidebar":"docs","previous":{"title":"Page Retour en arri\xe8re","permalink":"/docs/fr/MSC/rollback"},"next":{"title":"Page R\xe9paration","permalink":"/docs/fr/MSC/repair"}}'),t=n("785893"),i=n("250065");let d={id:"restore",title:"Page restitution",sidebar_label:"Page restitution"},u=void 0,c={},l=[{value:"Int\xe9gration successive de plusieurs fichiers d\u2019historiques",id:"int\xe9gration-successive-de-plusieurs-fichiers-dhistoriques",level:2},{value:"Restituer une base chiffr\xe9e",id:"restituer-une-base-chiffr\xe9e",level:2}];function a(e){let s={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["La page ",(0,t.jsx)(s.strong,{children:"Restitution"})," du Centre de s\xe9curit\xe9 et de maintenance vous permet de restituer manuellement une archive de l'application courante. Cette page propose plusieurs options permettant de contr\xf4ler la restitution :"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(146242).Z+"",width:"882",height:"666"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Les syst\xe8mes de restitution automatique de 4D restituent les applications et incluent le fichier d'historique si n\xe9cessaire."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["La liste situ\xe9e dans la partie gauche de la fen\xeatre affiche les sauvegardes existantes de l'application. Vous pouvez \xe9galement cliquer sur le bouton ",(0,t.jsx)(s.strong,{children:"Parcourir..."})," situ\xe9 sous la zone afin d\u2019ouvrir tout autre fichier d\u2019archive provenant d\u2019un autre emplacement. Il est alors ajout\xe9 \xe0 la liste des archives."]}),"\n",(0,t.jsx)(s.p,{children:"Lorsque vous s\xe9lectionnez une sauvegarde dans cette liste, la partie droite de la fen\xeatre affiche les informations relatives \xe0 cette sauvegarde :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Chemin d\u2019acc\xe8s"})," : chemin d\u2019acc\xe8s complet du fichier de sauvegarde s\xe9lectionn\xe9. Le bouton Montrer ouvre le dossier de sauvegarde dans une fen\xeatre syst\xe8me."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Date et heure"})," : date et heure de la sauvegarde."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Contenu"})," : contenu du fichier de sauvegarde. Chaque \xe9l\xe9ment de la liste est associ\xe9 \xe0 une case \xe0 cocher, permettant de sp\xe9cifier si vous souhaitez ou non le restituer. Vous pouvez utiliser les boutons ",(0,t.jsx)(s.strong,{children:"Tout s\xe9lectionner"})," ou ",(0,t.jsx)(s.strong,{children:"Tout d\xe9s\xe9lectionner"})," pour param\xe9trer la liste des \xe9l\xe9ments \xe0 restituer."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Emplacement des fichiers restitu\xe9s"})," : dossier dans lequel seront plac\xe9s les fichiers restitu\xe9s. ",(0,t.jsx)(s.strong,{"x-id":"1",children:"Emplacement des fichiers restitu\xe9s"})," : dossier dans lequel seront plac\xe9s les fichiers restitu\xe9s. Pour modifier cet emplacement, cliquez sur le bouton ",(0,t.jsx)(s.strong,{children:"[...]"})," et d\xe9signez le dossier dans lequel vous souhaitez effectuer la restitution."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Le bouton ",(0,t.jsx)(s.strong,{children:"Restituer"})," lance la restitution manuelle des \xe9l\xe9ments s\xe9lectionn\xe9s."]}),"\n",(0,t.jsx)(s.h2,{id:"int\xe9gration-successive-de-plusieurs-fichiers-dhistoriques",children:"Int\xe9gration successive de plusieurs fichiers d\u2019historiques"}),"\n",(0,t.jsxs)(s.p,{children:["L\u2019option ",(0,t.jsx)(s.strong,{children:"Int\xe9grer un ou plusieurs fichier(s) d\u2019historique apr\xe8s la restitution"})," permet d\u2019int\xe9grer successivement plusieurs sauvegardes d\u2019historiques dans une base de donn\xe9es. Si, par exemple, vous disposez de 4 sauvegardes d\u2019historique (.4BL) cons\xe9cutives, correspondant \xe0 4 sauvegardes, vous pouvez restituer la premi\xe8re sauvegarde puis int\xe9grer une \xe0 une les sauvegardes d\u2019historique. Ce principe permet par exemple de r\xe9cup\xe9rer un fichier de donn\xe9es alors que les derniers fichiers de sauvegarde de la base sont manquants."]}),"\n",(0,t.jsx)(s.p,{children:"Lorsque cette option est coch\xe9e, 4D affiche une bo\xeete de dialogue standard d\u2019ouverture de fichiers \xe0 l\u2019issue de la restitution, vous permettant de s\xe9lectionner la sauvegarde d\u2019historique \xe0 int\xe9grer. La bo\xeete de dialogue d\u2019ouverture est affich\xe9e de nouveau apr\xe8s chaque int\xe9gration, jusqu\u2019\xe0 ce qu\u2019elle soit annul\xe9e."}),"\n",(0,t.jsx)(s.h2,{id:"restituer-une-base-chiffr\xe9e",children:"Restituer une base chiffr\xe9e"}),"\n",(0,t.jsx)(s.p,{children:"A noter que la cl\xe9 de chiffrement des donn\xe9es (phrase secr\xe8te) a peut-\xeatre \xe9t\xe9 chang\xe9e au fil des versions des fichiers de sauvegarde (.4BK), des fichiers .journal (.4BL) et de l'application courante. Il est important que les cl\xe9s de chiffrement soient toujours mises en correspondance."}),"\n",(0,t.jsx)(s.p,{children:"Au moment de restituer une sauvegarde et d'int\xe9grer le fichier d'historique courant dans une base chiffr\xe9e :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Si vous restituez une sauvegarde \xe0 l'aide d'une ancienne phrase secr\xe8te, cette derni\xe8re sera demand\xe9e au prochain d\xe9marrage de la base."}),"\n",(0,t.jsx)(s.li,{children:"Apr\xe8s un chiffrement, \xe0 l'ouverture du fichier de donn\xe9es chiffr\xe9es, une sauvegarde est ex\xe9cut\xe9e et un nouveau fichier journal est cr\xe9\xe9. Ainsi, il n'est pas possible de restituer un fichier chiffr\xe9 .4BK avec une cl\xe9 et d'int\xe9grer les fichiers chiffr\xe9s .4BL avec une autre cl\xe9."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"La s\xe9quence suivante illustre les principes d'une op\xe9ration de cl\xe9 multiple de sauvegarde/restitution :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Op\xe9ration"}),(0,t.jsx)(s.th,{children:"Fichiers g\xe9n\xe9r\xe9s"}),(0,t.jsx)(s.th,{children:"Commentaire"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Nouveau fichier de donn\xe9es"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 1)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sauvegarder la base de donn\xe9es"}),(0,t.jsx)(s.td,{children:"0000.4BL et 0001.4BK"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 2)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sauvegarder la base de donn\xe9es"}),(0,t.jsx)(s.td,{children:"0001.4BL et 0002.4BK"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 3)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Chiffrer un fichier de donn\xe9es avec cl\xe91"}),(0,t.jsx)(s.td,{children:"Fichier 0003.4BK (chiffr\xe9 avec cl\xe91)"}),(0,t.jsx)(s.td,{children:'Le chiffrement sauvegarde les fichiers originaux (y compris le fichier journal) dans le dossier "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". \xc0 l\'ouverture du fichier de donn\xe9es chiffr\xe9es, un nouveau fichier journal est cr\xe9\xe9 et une sauvegarde est effectu\xe9e pour activer ce fichier journal.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 4)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sauvegarder la base de donn\xe9es"}),(0,t.jsx)(s.td,{children:"Fichiers 0003.4BL et 0004.4BK (chiffr\xe9s avec cl\xe91)"}),(0,t.jsx)(s.td,{children:"Il est possible de restituer 0003.4BK et d'int\xe9grer 0003.4BL"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 5)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sauvegarder la base de donn\xe9es"}),(0,t.jsx)(s.td,{children:"Fichiers 0004.4BL et 0005.4BK (chiffr\xe9s avec cl\xe91)"}),(0,t.jsx)(s.td,{children:"Il est possible de restituer 0003.4BK et d'int\xe9grer 0003.4BL + 0004.4BL. Il est possible de restituer 0004.4BK et d'int\xe9grer 0004.4BL"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 6)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Chiffrer un fichier de donn\xe9es avec cl\xe92"}),(0,t.jsx)(s.td,{children:"Fichier 0006.4BK (chiffr\xe9 avec cl\xe92)"}),(0,t.jsx)(s.td,{children:'Le chiffrement sauvegarde les fichiers originaux (y compris le fichier journal) dans le dossier "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". \xc0 l\'ouverture du fichier de donn\xe9es chiffr\xe9es, un nouveau fichier journal est cr\xe9\xe9 et une sauvegarde est effectu\xe9e pour activer ce fichier journal.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 7)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sauvegarder la base de donn\xe9es"}),(0,t.jsx)(s.td,{children:"Fichiers 0006.4BL et 0007.4BK (chiffr\xe9s avec cl\xe92)"}),(0,t.jsx)(s.td,{children:"Il est possible de restituer 0006.4BK et d'int\xe9grer 0006.4BL"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ajouter des donn\xe9es (enregistrement # 8)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sauvegarder la base de donn\xe9es"}),(0,t.jsx)(s.td,{children:"Fichiers 0007.4BL et 0008.4BK (chiffr\xe9s avec cl\xe92)"}),(0,t.jsx)(s.td,{children:"Il est possible de restituer 0006.4BK et d'int\xe9grer 0006.4BL + 0007.4BL. Il est possible de restituer 0007.4BK et d'int\xe9grer 0007.4BL"})]})]})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Au moment de restituer une sauvegarde et d'int\xe9grer un ou plusieurs fichiers .4BL, les fichiers restitu\xe9s .4BK et .4BL doivent avoir la m\xeame cl\xe9 de chiffrement. Durant le processus d'int\xe9gration, si aucune cl\xe9 de chiffrement valide n'est trouv\xe9e dans le trousseau de 4D lors de l'int\xe9gration du fichier .4BL, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(s.p,{children:"Si vous avez stock\xe9 plusieurs cl\xe9s de donn\xe9es sur le m\xeame appareil externe, la restitution d'une sauvegarde et l'int\xe9gration de fichiers d'historique permettront de trouver automatiquement la cl\xe9 correspondant \xe0 l'appareil connect\xe9."}),"\n"]})]})}function o(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},146242:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"},250065:function(e,s,n){n.d(s,{Z:function(){return u},a:function(){return d}});var r=n(667294);let t={},i=r.createContext(t);function d(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);