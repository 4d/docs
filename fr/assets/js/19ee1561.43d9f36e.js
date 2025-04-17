"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60113"],{24256:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/discover-data-key","title":"Discover data key","description":"Discover data key  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/discover-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/discover-data-key","permalink":"/docs/fr/commands/discover-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdiscover-data-key.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"discover-data-key","title":"Discover data key","slug":"/commands/discover-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Decrypt data BLOB","permalink":"/docs/fr/commands/decrypt-data-blob"},"next":{"title":"Encrypt data BLOB","permalink":"/docs/fr/commands/encrypt-data-blob"}}'),t=s("785893"),i=s("250065");let d={id:"discover-data-key",title:"Discover data key",slug:"/commands/discover-data-key",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Discover data key"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai si une cl\xe9 de chiffrement valide a \xe9t\xe9 trouv\xe9e pour le fichier de donn\xe9es courant, sinon Faux"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Discover data key"})," recherche, \xe0 la racine de tous les appareils connect\xe9s, une cl\xe9 de chiffrement valide correspondant au fichier de donn\xe9es courant et retourne ",(0,t.jsx)(n.strong,{children:"Vrai"})," si l'op\xe9ration est r\xe9ussie."]}),"\n",(0,t.jsx)(n.p,{children:"Les appareils connect\xe9s \xe0 rechercher incluent les cl\xe9s USB ou les disques externes. Une cl\xe9 de chiffrement valide est n\xe9cessaire pour l'acc\xe8s en lecture/\xe9criture \xe0 la base chiffr\xe9e. Cette commande peut \xeatre appel\xe9e, par exemple, au d\xe9marrage de la base, une fois que l'utilisateur a \xe9t\xe9 invit\xe9 \xe0 se connecter \xe0 la cl\xe9 USB."}),"\n",(0,t.jsxs)(n.p,{children:["Les fichiers de cl\xe9s (fichiers d'extension \".4DKeyChain\") doivent \xeatre stock\xe9s \xe0 la racine des appareils connect\xe9s (la recherche ne s'effectuera pas via l'arborescence du dossier). Les cl\xe9s de chiffrement doivent \xeatre sauvegard\xe9es au format JSON (voir ",(0,t.jsx)(n.em,{children:"Sauvegarder les cl\xe9s de chiffrement des donn\xe9es dans des fichiers"})," dans le manuel ",(0,t.jsx)(n.em,{children:"4D Mode D\xe9veloppement"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vrai"})," si une cl\xe9 de chiffrement valide a \xe9t\xe9 trouv\xe9e pour le fichier de donn\xe9es courant, auquel cas :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"la cl\xe9 de chiffrement est appliqu\xe9e si n\xe9cessaire, afin que les donn\xe9es chiffr\xe9es soient utilisables (op\xe9rations d'acc\xe8s en lecture/\xe9criture)."}),"\n",(0,t.jsx)(n.li,{children:"la cl\xe9 de chiffrement est ajout\xe9e au trousseau 4D."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Faux"})," si une cl\xe9 de chiffrement valide n'a pas \xe9t\xe9 trouv\xe9e pour le fichier de donn\xe9es courant, auquel cas l'acc\xe8s aux donn\xe9es est impossible."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $status : Object\n\xa0var $keyFound : Boolean\n\xa0\n\xa0$status:=ds.encryptionStatus()\n\xa0\n\xa0If(($status.isEncrypted)&(Not($status.keyProvided)))\xa0//aucune cl\xe9 n'est disponible\n\xa0\xa0// l'acc\xe8s aux donn\xe9es chiffr\xe9es n'est donc pas autoris\xe9\n\xa0\xa0\xa0\xa0$keyFound:=Discover data key\n\xa0\xa0\xa0\xa0If($keyFound=True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(\"Une cl\xe9 de chiffrement valide a \xe9t\xe9 trouv\xe9e.\")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/new-data-key",children:"New data key"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1639"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);