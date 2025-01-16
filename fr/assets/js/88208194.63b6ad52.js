"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73555"],{503839:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/generate-password-hash","title":"Generate password hash","description":"Generate password hash ( motDePasse {; options} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/generate-password-hash.md","sourceDirName":"commands-legacy","slug":"/commands/generate-password-hash","permalink":"/docs/fr/commands/generate-password-hash","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-password-hash.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"generate-password-hash","title":"Generate password hash","slug":"/commands/generate-password-hash","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Generate digest","permalink":"/docs/fr/commands/generate-digest"},"next":{"title":"Generate UUID","permalink":"/docs/fr/commands/generate-uuid"}}'),t=n("785893"),d=n("250065");let a={id:"generate-password-hash",title:"Generate password hash",slug:"/commands/generate-password-hash",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:5},{value:"A propos de bcrypt",id:"a-propos-de-bcrypt",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Generate password hash"})," ( ",(0,t.jsx)(s.em,{children:"motDePasse"})," {; ",(0,t.jsx)(s.em,{children:"options"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"motDePasse"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Mot de passe utilisateur (seuls les 72 premiers caract\xe8res sont utilis\xe9s)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"options"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Objet contenant des options"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Hash du mot de passe"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"Generate password hash"})," retourne un ",(0,t.jsx)(s.em,{children:"hash"})," de ",(0,t.jsx)(s.em,{children:"motDePasse"}),", g\xe9n\xe9r\xe9 par un algorithme de hachage cryptographique."]}),"\n",(0,t.jsxs)(s.p,{children:["Passez une cha\xeene dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"motDePasse"}),". La commande ",(0,t.jsx)(s.strong,{children:"Generate password hash"})," retourne un hash, aussi appel\xe9 empreinte cryptographique, de ce mot de passe. Une empreinte cryptographique diff\xe9rente est g\xe9n\xe9r\xe9e \xe0 chaque appel de la commande avec le m\xeame mot de passe. Vous devrez utiliser la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/verify-password-hash",children:"Verify password hash"})," pour contr\xf4ler cette empreinte."]}),"\n",(0,t.jsxs)(s.p,{children:["Dans l'objet ",(0,t.jsx)(s.em,{children:"options"}),", passez les propri\xe9t\xe9s \xe0 utiliser lors de la g\xe9n\xe9ration de l'empreinte du mot de passe. Les valeurs possibles sont list\xe9es dans ce tableau :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Type de valeur"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Valeur par d\xe9faut"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"algorithm"}),(0,t.jsx)(s.td,{children:"cha\xeene"}),(0,t.jsx)(s.td,{children:'Algorithme \xe0 utiliser. Actuellement, seul "bcrypt" (en minuscules) est pris en charge.'}),(0,t.jsx)(s.td,{children:"bcrypt"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cost"}),(0,t.jsx)(s.td,{children:"num\xe9rique"}),(0,t.jsx)(s.td,{children:"Vitesse de hachage. L'algorithme bcrypt prend en charge les valeurs situ\xe9es entre 4 et 31."}),(0,t.jsx)(s.td,{children:"10"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," : Si l'une des valeurs de l'objet ",(0,t.jsx)(s.em,{children:"options"})," est invalide, une erreur est g\xe9n\xe9r\xe9e et la commande retourne une cha\xeene vide."]}),"\n",(0,t.jsx)(s.h5,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Les erreurs suivantes peuvent \xeatre retourn\xe9es. Vous pouvez r\xe9cup\xe9rer et analyser les erreurs \xe0 l'aide des commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/last-errors",children:"Last errors"}),"  et ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Num\xe9ro"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Message"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"850"}),(0,t.jsx)(s.td,{children:"Password-hash: Algorithme inconnu."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"852"}),(0,t.jsx)(s.td,{children:"Password-hash: bcrypt admet un co\xfbt qui va de 4 \xe0 31 inclus, le param\xe8tre est hors limite."})]})]})]}),"\n",(0,t.jsx)(s.h5,{id:"a-propos-de-bcrypt",children:"A propos de bcrypt"}),"\n",(0,t.jsx)(s.p,{children:"bcrypt est une fonction de hachage de mot de passe bas\xe9e sur l'algorithme de chiffrement Blowfish. Elle incorpore un salage prot\xe9geant contre les attaques par \"rainbow table\" et est adaptative : il est possible d'augmenter le nombre d'it\xe9rations afin de la rendre plus lente et donc plus r\xe9sistante aux attaques par force brute."}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple g\xe9n\xe8re un hash de mot de passe \xe0 l'aide de bcrypt avec un co\xfbt de facteur 4."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0var $hash : Text\n\xa0var $options : Object\n\xa0\n\xa0$options:=New object("algorithm";"bcrypt";"cost";4)\n\xa0$password:=Request("Veuillez entrer votre mot de passe")\n\xa0\n\xa0$hash:=Generate password hash($password;$options)\n\xa0[Users]hash:=$hash\n\xa0SAVE RECORD([Users])\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Rappel"})," : Un hash diff\xe9rent est g\xe9n\xe9r\xe9 \xe0 chaque appel de la commande avec le m\xeame mot de passe. Ce fonctionnement est standard pour les algorithmes tels que bcrypt, puisque les bonnes pratiques consistent \xe0 cr\xe9er un nouveau salage al\xe9atoire pour chaque hash. Reportez-vous \xe0 la description de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/verify-password-hash",children:"Verify password hash"})," pour un exemple de v\xe9rification des mots de passe."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/generate-digest",children:"Generate digest"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/verify-password-hash",children:"Verify password hash"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"1533"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return a}});var r=n(667294);let t={},d=r.createContext(t);function a(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);