"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50862"],{244406:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/display-notification","title":"DISPLAY NOTIFICATION","description":"DISPLAY NOTIFICATION ( titre ; contenu {; dur\xe9e} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/display-notification.md","sourceDirName":"commands-legacy","slug":"/commands/display-notification","permalink":"/docs/fr/commands/display-notification","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-notification.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"display-notification","title":"DISPLAY NOTIFICATION","slug":"/commands/display-notification","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONFIRM","permalink":"/docs/fr/commands/confirm"},"next":{"title":"GOTO XY","permalink":"/docs/fr/commands/goto-xy"}}'),s=t("785893"),r=t("250065");let d={id:"display-notification",title:"DISPLAY NOTIFICATION",slug:"/commands/display-notification",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DISPLAY NOTIFICATION"})," ( ",(0,s.jsx)(n.em,{children:"titre"})," ; ",(0,s.jsx)(n.em,{children:"contenu"})," {; ",(0,s.jsx)(n.em,{children:"dur\xe9e"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"titre"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Titre de la notification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contenu"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Texte de la notification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dur\xe9e"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"D\xe9lai d\u2019affichage en secondes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"DISPLAY NOTIFICATION"})," provoque l\u2019affichage d\u2019un message de notification \xe0 destination de l'utilisateur."]}),"\n",(0,s.jsx)(n.p,{children:"Ce type de message est g\xe9n\xe9ralement utilis\xe9 par le syst\xe8me ou les applications pour informer l\u2019utilisateur d\u2019un \xe9v\xe9nement (d\xe9connexion r\xe9seau, disponibilit\xe9 de mises \xe0 jour, etc.)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Sous Windows, le message appara\xeet dans la zone de notification de la barre des t\xe2ches :",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{src:t(857411).Z+"",width:"459",height:"112"})]}),"\n",(0,s.jsxs)(n.li,{children:["Sous macOS (version 10.8 minimum), le message appara\xeet dans une petite fen\xeatre glissant dans l\u2019angle sup\xe9rieur droit de l\u2019\xe9cran.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{src:t(533568).Z+"",width:"311",height:"72"}),(0,s.jsx)(n.br,{}),'\nA noter que, conform\xe9ment aux sp\xe9cifications d\u2019Apple, la notification n\u2019est affich\xe9e que si l\u2019application n\u2019est pas au premier plan. Le message appara\xeet cependant toujours dans la liste du "notification center".']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,s.jsx)(n.em,{children:"titre"})," et ",(0,s.jsx)(n.em,{children:"contenu"}),' le titre et le texte du message \xe0 afficher (dans notre exemple, le titre est "Exportation 4D"). Vous pouvez saisir jusqu\u2019\xe0 255 caract\xe8res.']}),"\n",(0,s.jsxs)(n.p,{children:["Sous Windows, la fen\xeatre du message reste affich\xe9e tant qu'aucune activit\xe9 n'a \xe9t\xe9 d\xe9tect\xe9e sur la machine, ou jusqu\u2019\xe0 ce que l\u2019utilisateur clique sur sa case de fermeture. Le param\xe8tre facultatif ",(0,s.jsx)(n.em,{children:"dur\xe9e"})," permet de modifier la dur\xe9e d'affichage par d\xe9faut. A noter que l'affichage des notifications d\xe9pend des configurations syst\xe8me."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DISPLAY NOTIFICATION("Exportation 4D";"Les donn\xe9es sont pr\xeates pour l\u2019exportation")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/alert",children:"ALERT"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"910"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},533568:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict1206031.fr-6aa47b15c49a4d6ce81cd47d8f0b27d0.png"},857411:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict1206085.fr-e71432a77a940dad3af4cb608c641701.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(667294);let s={},r=i.createContext(s);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);