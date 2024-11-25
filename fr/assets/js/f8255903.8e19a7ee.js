"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60385"],{80735:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"ServerWindow/users","title":"Page Utilisateurs","description":"La page Utilisateurs liste les utilisateurs 4D connect\xe9s au serveur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ServerWindow/users.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/users","permalink":"/docs/fr/20-R6/ServerWindow/users","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fusers.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"users","title":"Page Utilisateurs"},"sidebar":"docs","previous":{"title":"Page Moniteur","permalink":"/docs/fr/20-R6/ServerWindow/monitor"},"next":{"title":"Page Process","permalink":"/docs/fr/20-R6/ServerWindow/processes"}}'),i=n("785893"),r=n("250065");let o={id:"users",title:"Page Utilisateurs"},a=void 0,l={},c=[{value:"Liste des utilisateurs",id:"liste-des-utilisateurs",level:2},{value:"Gestion des utilisateurs endormis",id:"gestion-des-utilisateurs-endormis",level:3},{value:"Zone de recherche/filtrage",id:"zone-de-recherchefiltrage",level:2},{value:"Boutons d\u2019administration",id:"boutons-dadministration",level:2},{value:"Envoyer message",id:"envoyer-message",level:3},{value:"Visualiser process",id:"visualiser-process",level:3},{value:"D\xe9connecter",id:"d\xe9connecter",level:3}];function u(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["La page ",(0,i.jsx)(s.strong,{children:"Utilisateurs"})," liste les utilisateurs 4D connect\xe9s au serveur."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(154231).Z+"",width:"1034",height:"163"})}),"\n",(0,i.jsx)(s.p,{children:'Le bouton "Utilisateurs" indique entre parenth\xe8ses le nombre total d\u2019utilisateurs connect\xe9s au serveur (ce nombre ne tient pas compte des \xe9ventuels filtres d\u2019affichage appliqu\xe9s \xe0 la fen\xeatre). La page contient \xe9galement une zone de recherche dynamique et des boutons de commande. Vous pouvez modifier l\u2019ordre des colonnes par simple glisser-d\xe9poser de la zone d\u2019en-t\xeate des colonnes.'}),"\n",(0,i.jsx)(s.p,{children:"Vous pouvez \xe9galement trier la liste sur les valeurs d\u2019une colonne en cliquant sur son en-t\xeate. Cliquez plusieurs fois pour d\xe9finir alternativement un ordre croissant/d\xe9croissant."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(470908).Z+"",width:"116",height:"20"})}),"\n",(0,i.jsx)(s.h2,{id:"liste-des-utilisateurs",children:"Liste des utilisateurs"}),"\n",(0,i.jsx)(s.p,{children:"Pour chaque utilisateur connect\xe9 \xe0 la base, la liste fournit les informations suivantes :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Syst\xe8me de la machine cliente (macOS ou Windows) sous forme d\u2019ic\xf4ne."}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"4D User"}),": Name of the 4D user, or alias if set with the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1666.html",children:(0,i.jsx)(s.code,{children:"SET USER ALIAS"})}),' command on the user machine. Si les mots de passe ne sont pas activ\xe9s et si aucun alias n\'a \xe9t\xe9 d\xe9fini, tous les utilisateurs 4D sont nomm\xe9s "Super_Utilisateur".']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Nom de machine"})," : Nom de la machine distante."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Nom de session"})," : Nom de la session ouverte sur la machine distante."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Adresse IP"})," : Adresse IP de la machine distante."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Connexion"})," : Date et heure de la connexion de la machine distante."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Temps CPU"})," : Temps processeur consomm\xe9 par cet utilisateur depuis la connexion."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Activit\xe9"}),' : Ratio du temps que 4D Server consacre \xe0 cet utilisateur (affichage dynamique). "Endormi" si la machine du poste client est pass\xe9e en veille (cf. ci-dessous).']}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"gestion-des-utilisateurs-endormis",children:"Gestion des utilisateurs endormis"}),"\n",(0,i.jsxs)(s.p,{children:["4D Server g\xe8re sp\xe9cifiquement le cas o\xf9 la machine d'une application distante 4D passe en mode veille alors que la connexion au serveur est toujours active. Dans ce cas, l'application distante 4D connect\xe9e notifie automatiquement 4D Server de sa d\xe9connexion imminente. Sur le serveur, l'utilisateur connect\xe9 prend le statut d'activit\xe9 ",(0,i.jsx)(s.strong,{children:"Endormi"})," :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(121920).Z+"",width:"1139",height:"202"})}),"\n",(0,i.jsx)(s.p,{children:"Ce statut lib\xe8re les ressources sur le serveur. En outre, l'application 4D distante se reconnecte automatiquement \xe0 4D Server apr\xe8s la sortie du mode veille."}),"\n",(0,i.jsx)(s.p,{children:"Le sc\xe9nario suivant est pris en charge : un utilisateur distant cesse de travailler durant un certain laps de temps, par exemple durant la pause d\xe9jeuner, mais garde ouverte la connexion au serveur. La machine passe en mode veille. Au retour de l'utilisateur, la machine sort du mode veille et l'application 4D distante r\xe9cup\xe8re automatiquement sa connexion au serveur ainsi que son contexte de session."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Une session distante en veille est automatiquement abandonn\xe9e par le serveur apr\xe8s 48 heures d'inactivit\xe9. You can modify this default timeout using the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:(0,i.jsx)(s.code,{children:"SET DATABASE PARAMETER"})})," command with the ",(0,i.jsx)(s.code,{children:"Remote connection sleep timeout"})," selector."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"zone-de-recherchefiltrage",children:"Zone de recherche/filtrage"}),"\n",(0,i.jsx)(s.p,{children:"Cette fonction permet de r\xe9duire le nombre de lignes affich\xe9es dans la liste \xe0 celles qui correspondent au texte saisi dans la zone de recherche. La zone indique les colonnes dans lesquelles la recherche/le filtrage sera effectu\xe9(e). Dans la page Utilisateurs, il s\u2019agit des colonnes Utilisateur 4D, Nom de machine et Nom de session."}),"\n",(0,i.jsxs)(s.p,{children:["La mise \xe0 jour de la liste est effectu\xe9e en temps r\xe9el \xe0 mesure que vous saisissez du texte dans la zone. Il est possible de saisir plus d\u2019une valeur \xe0 chercher. Utilisez un point-virgule pour s\xe9parer les valeurs. L\u2019op\xe9rateur utilis\xe9 dans ce cas est du type ",(0,i.jsx)(s.code,{children:"OU"}),'. Par exemple, si vous saisissez "Jean;Marie;Pierre", seules les lignes comportant Jean OU Marie OU Pierre dans l\u2019une des colonnes cibles seront conserv\xe9es.']}),"\n",(0,i.jsx)(s.h2,{id:"boutons-dadministration",children:"Boutons d\u2019administration"}),"\n",(0,i.jsxs)(s.p,{children:["La page comporte trois boutons de commande. Ces boutons sont actifs si au moins une ligne est s\xe9lectionn\xe9e. Vous pouvez s\xe9lectionner plusieurs lignes en appuyant sur la touche ",(0,i.jsx)(s.strong,{children:"Maj"})," pour une s\xe9lection continue ou ",(0,i.jsx)(s.strong,{children:"Ctrl"})," (Windows) / ",(0,i.jsx)(s.strong,{children:"Commande"})," (macOS) pour une s\xe9lection discontinue."]}),"\n",(0,i.jsx)(s.h3,{id:"envoyer-message",children:"Envoyer message"}),"\n",(0,i.jsx)(s.p,{children:"Ce bouton permet d\u2019envoyer un message aux utilisateurs 4D s\xe9lectionn\xe9s dans la fen\xeatre. Si aucun utilisateur 4D n\u2019est s\xe9lectionn\xe9, le bouton est d\xe9sactiv\xe9. Lorsque vous cliquez sur le bouton, une bo\xeete de dialogue appara\xeet, vous permettant saisir le message. La bo\xeete de dialogue indique le nombre d\u2019utilisateurs qui recevront le message :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(606574).Z+"",width:"460",height:"229"})}),"\n",(0,i.jsx)(s.p,{children:"Le message sera affich\xe9 sous forme d\u2019alerte sur les postes distants."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Vous pouvez effectuer la m\xeame action pour les utilisateurs distants avec la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1632.html",children:(0,i.jsx)(s.code,{children:"SEND MESSAGE TO REMOTE USER"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"visualiser-process",children:"Visualiser process"}),"\n",(0,i.jsxs)(s.p,{children:["Ce bouton permet de visualiser directement les process du ou des utilisateur(s) s\xe9lectionn\xe9(s) dans la ",(0,i.jsxs)(s.a,{href:"/docs/fr/20-R6/ServerWindow/processes",children:["page ",(0,i.jsx)(s.strong,{children:"Processus"})," "]})," de la fen\xeatre d\u2019administration. Lorsque vous cliquez sur ce bouton, 4D Server bascule sur la page Process et pr\xe9-remplit la zone de recherche/filtrage de cette page avec les noms des utilisateurs s\xe9lectionn\xe9s."]}),"\n",(0,i.jsx)(s.h3,{id:"d\xe9connecter",children:"D\xe9connecter"}),"\n",(0,i.jsxs)(s.p,{children:["Ce bouton permet de forcer la d\xe9connexion du ou des utilisateur(s) s\xe9lectionn\xe9(s). When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down ",(0,i.jsx)(s.strong,{children:"Alt"})," key while clicking on the ",(0,i.jsx)(s.strong,{children:"Drop user"})," button to disconnect the selected user(s) directly without displaying the confirmation dialog box)."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Vous pouvez effectuer la m\xeame action pour les utilisateurs distants avec la commande ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1633.html",children:(0,i.jsx)(s.code,{children:"DROP REMOTE USER"})}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},606574:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/png;base64,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"},121920:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/server-sleeping-215c7c2ed0334b24d86018ba014b2788.png"},470908:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAUCAIAAADTDI4qAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kJAg41DhHrjwYAAAImSURBVHic7VjNSgMxEJ6sdavSWg/+YBFEEG8efASPehA9CXrwMQTPXvUt9CZKH0EfQLCgoJ4U/KkHW/u3m+4mRqIxzWZb6W5dLfuxDDOTyST5mAxL0EvhBr6QyUxCjDBQKj0yaUS9jV5GosmiNKJt9BAQEupn5d7eXI2OzUa0nZ5F3Ba6iL9IrjmQbuv5F0i0D/kxBAXYKst0MNMvWDvUMwiTXM6p4EsosvNfI3dy6De0srrhdUbTFjjdSoEznX9+Hq7IZtt4JSAgtAy28P+VnivoVupd9oB0CeRRQbocr50eHF4e/ZiFrpIrCifE4ylEeytX2UBY68qQ2WzBLKg9V/oB7hxfSbBd0Y6byRQ03+7PSHl1rrf0KPm5yZMzXTEDnEeDlbXN3PEBk63DomkL/PCCgoDgDIrMykLB82vRllkI+VeMl2Qy1cGR2BSZI63Hb1QuUj8zEoT5tvDdECn90H2yKUPCbGrNOo9mojZYZ/4evG8LMboBFL/ndgP8PTdRr7wJ1/DdHhqcNobGaTFPSxeGdU+q90AsQoDVOrtdsVQk6wHYBcI+AAsDdsBxwFzYJRNLjE90eXEqyJ0aLg9e76C5bZJIgVUw8LNbPO9zytjImKQUS690ccV2aOP1smEV6xYQCgNDI9mt16v82UflVqs1QW56frnI5hSOTPuO1h+o/YScGkHIQEmXYMMwY6nIhtPANtRrVYzBTWb7Z9azi/uMSc7qOw86iLS/1FGTAAAAAElFTkSuQmCC"},154231:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/server-users-a5fbe263f9a5f955ad40cf79716ba37b.png"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var t=n(667294);let i={},r=t.createContext(i);function o(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);